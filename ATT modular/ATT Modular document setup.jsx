//----------------------------------------
//ATT Module document setup
//----------------------------------------

//Updated by Todd on 9/8/23
//got basics working, testing against existing docs

//TO DO
	//rewrite the make new layer section, more flexible
	//move guide layers next to target layers?
	//have new master check for existing, put user back on page 1 when done
	//make an actual function for change layer color

	//add sanity checks

	//for all, set up as functions



//----------------------------------------
//VARIABLES
//----------------------------------------

var doc = app.activeDocument;

//var myLayer = doc.layers.item("Answers");

//rewrite this, need [layername, UIcolor, targetlayerforpos, locationoptions] per layer to create, target layer is optional based on postion option you want
//var myLayersAdd = ["CONTENT FORMATTING GUIDES", "CONTENT GRAPHICS GUIDES", "Page Folds"];

var myLayersAdd = [["CONTENT FORMATTING GUIDES", UIColors.GRASS_GREEN, "CONTENT FORMATTING", LocationOptions.BEFORE]]



//this will switch to format similar to above
var layerGuideColorSwitch = "Crop Cubed";

//this will go away
var guideLayerColor = UIColors.GRASS_GREEN;


//new master names
var myMastersAdd = ["Outside", "Inside"];


//colors for system layer objects
var myColorsAdd = [["SYS-Text Layer", 0, 40, 40, 0], ["SYS-Variable Text", 40, 0, 40, 0], ["SYS-Variable Graphics", 0, 43, 0, 0]];
var colorGroupName = "SYSTEM colors";

//colors for ATT?
//load from style doc?

//path to file holding styles
var preFile = File("~/Library/CloudStorage/Box-Box/AT&T 2.0/~~AT&T Assets/ATT Assets/Modular Print Assets - TEST DO NOT USE/_Styles/ATT styles master.indd");

//style formats we're importing
var styleImportFormat = [ImportFormat.CHARACTER_STYLES_FORMAT, ImportFormat.PARAGRAPH_STYLES_FORMAT, ImportFormat.OBJECT_STYLES_FORMAT];



//----------------------------------------
//PROTOTYPES
//----------------------------------------



//----------------------------------------
//SANITY CHECK
//----------------------------------------

//put in file name nag for Ken :-)

//check name for slashes



//----------------------------------------
//WORK GOES HERE
//----------------------------------------



//SET LABLE/NAME OF SELECTED FRAMES

//set selection
// var sel = app.selection;

// //if there's nothing selected say so
// if (sel.length == 0) {

// 	alert('Nothing selected');

// } else {


// 	for (var i = 0; i < app.selection.length; i++) {

// 		if (app.selection[i].graphics.length !== 0) {

// 			//set frame name
// 			app.selection[i].name = "module";

// 			//set lable for image frame
// 			app.selection[i].label = "SYSTEM-module, placeholderName";

// 		} else {

// 			//set frame name
// 			app.selection[i].name = "variable text";

// 			//text frame label
// 			app.selection[i].label = "SYSTEM-text, placeholderName";

// 		};


// 	};


// };






//ADD MASTERS
for (var q = 0; q < myMastersAdd.length; q++) {

	try {

		//test and see if any of the base names exists already


		//do we want option to base layers off of a parent?

		//add the master
		var newMaster = app.activeDocument.masterSpreads.add();

		//and set the base name
		newMaster.baseName = myMastersAdd[q];

		var masterPrefix = [q];

		//set prefix also
		newMaster.namePrefix = masterPrefix;

	}
	catch(e){

		//alert("master with that name already exists");

	};

};

//put the user back on page 1
app.activeDocument.layoutWindows[0].activePage = app.activeDocument.pages[0];




//MAKE NEW LAYERS
//rewrite this to be more flexable, specify in array?

for (var i = 0; i < myLayersAdd.length; i++) {

	var layerSettings = myLayersAdd[i]


	for (var l = 0; l < layerSettings.length; l++) {

		var newLayerName = layerSettings[0];

		var newLayerColor = layerSettings[1];

		var newLayerRelName = layerSettings[2];

		var newLayerPosition = layerSettings[3];


		try {


			if (newLayerRelName !== "") {

				//make new layer
				doc.layers.add ({name: newLayerName, layerColor: newLayerColor}).move({to: newLayerPosition, reference: newLayerRelName});

			}
			else {

				//make new layer
				doc.layers.add ({name: newLayerName, layerColor: newLayerColor}).move(newLayerPosition);

			}
			

		}
		catch(e) {

			alert("error, does this layer already exist? not sure what's trigging this");

		};


	}

};

	

	//keeping this in case I want conditional positon, not really needed w/page folds move on line 73
// 	if (i < 2) {
// 		var myLocation=LocationOptions.AT_END;
// 	} else {
// 		var myLocation=LocationOptions.AT_BEGINNING;
// 	};

// 	try {

// 		//make new layer
// 		doc.layers.add ({name: newLayerName, layerColor: guideLayerColor}).move(myLocation);

// 	}
// 	catch(e) {

// 		alert("error, does this layer already exist?");

// 	};


// 	if (i > 1) {

// 		//if it's the last item aka Page Folds move to after crop cubed, this is a sloppy way to handle this
// 		doc.layers.item(newLayerName).move(LocationOptions.AFTER, doc.layers.item(layerGuideColorSwitch));

// 	};

// };



//CHANGE COLOR OF EXISTING LAYERS, AT THE MOMENT ONLY CROP CUBED

//need to expand this to being able to specify multiple layers w/color

//need to find RGB of Grass_Green
doc.layers.item(layerGuideColorSwitch).layerColor = [0,255,0];
//as RGB due to how existing layers are done



//REMOVE UNUSED COLORS

trashUnusedSwatch(doc) 



//ADD NEW COLORS

//add new color group
var myColorGroup = doc.colorGroups.add(colorGroupName);

//pick the color
for (var l = 0; l < myColorsAdd.length; l++) {

	var currentColor = myColorsAdd[l];

	//pick out the components and pass to function
	for (var m = 0; m < currentColor.length; m++ ) {

		//get name
		var currentColorName = currentColor[0];

		//get formula, have to brute force combine to make array for function
		var currentColorFormulaC = currentColor[1];
		var currentColorFormulaM = currentColor[2];
		var currentColorFormulaY = currentColor[3];
		var currentColorFormulaK = currentColor[4];

		var currentColorFormulaArray = [currentColor[1], currentColor[2], currentColor[3], currentColor[4]]

		//lets add those colors
		makeColor(colorGroupName, currentColorName, currentColorFormulaArray);

	};

};



//LOAD STYLES
for (var s = 0; s < styleImportFormat.length; s++) {

	//step through the different formats in the array and load them
	var currentFormat = styleImportFormat[s];

	doc.importStyles(currentFormat, preFile, GlobalClashResolutionStrategy.LOAD_ALL_WITH_OVERWRITE);

};









alert("done");



//----------------------------------------
//FUNCTIONS
//----------------------------------------

//Create a color.
function makeColor(group, name, formula) {

 	try {
        myColorA = doc.colors.item(name); //Change the name of the color as you want
        //If the color does not exist, trying to get its name will generate an error.
        myName = myColorA.name;
    }
    catch (myError) {
        //The color style did not exist, so create it.
        myColorA = doc.colors.add({ name: name, model: ColorModel.process, colorValue: formula }); //Change the name of the color as you want and change the combination
    };

    myColorGroup.colorGroupSwatches.add(myColorA);

};



//remove unused colors
function trashUnusedSwatch(myDocument){

    var id, sw;

    app.menuActions.item("$ID/Add All Unnamed Colors").invoke();
    
    while (myDocument.unusedSwatches[0].name != "") {

        id = myDocument.unusedSwatches[0].id;

        sw = myDocument.swatches.itemByID(id);

        sw.remove();

    }

}

