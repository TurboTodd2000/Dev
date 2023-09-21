//setup boilerplate

//----------------------------------------
//ATT Module SYSTEM layer maker
//----------------------------------------

//Updated by Todd on 8/25/23
//rought start, proof of concept, got basics working,

//TO DO
//fix page assignment for creation and removal
//still seeing frames not getting deleated, might need to change stratgies



//----------------------------------------
//VARIABLES
//----------------------------------------

//document
var myDocument = app.activeDocument;
var docName = myDocument.name;

//this cleans up the file name for use elsewhere
var docName = Left(docName, String(docName).length - 5);


//get # of pages
pageNum = myDocument.pages.length;

var docLayers = app.activeDocument.layers;

//get # of layers
var layerNum = myDocument.layers.length;

//get total # of page objects
var totalPageObj = myDocument.allPageItems.length;

//get master pages
var master = myDocument.masterSpreads;


//BOX PROPERTIES
//text box name
boxName = "System Box";


//TEXT PROPERTIES
//set font to use
var myFont = app.fonts.item("Arial");



//----------------------------------------
//PROTOTYPES
//----------------------------------------



//----------------------------------------
//SANITY CHECK
//----------------------------------------



//----------------------------------------
//DA LOOP a.k.a. BDL (big dumb loop)
//----------------------------------------


//remove all SYSTEM layer objects

var text_frames = myDocument.textFrames;

for (var k = 0; k < text_frames.length; k++) {

  //get name of current text frame
  var testTextFrame = myDocument.textFrames[k].name

  //if its the same as boxName then remove
  if (testTextFrame == boxName) {

    alert("remove true");

    myDocument.textFrames[k].remove();

  };

};


//loop through page items
for (var j = 0; j < totalPageObj; j++) {

//get current pageItem
  var currentPageItem = myDocument.allPageItems[j];

  if (currentPageItem.label !== "") {

    if (currentPageItem.name !== boxName) {


      //get geo bounds
      var gb = currentPageItem.geometricBounds;

      //split label into 2 parts
      var labelComponents = currentPageItem.label.split(", ");

      // alert(labelComponents[0]);
      // alert(labelComponents[1]);

      //get object page #?
      pageNum = currentPageItem.parentPage.name;



      boxMaker(labelComponents[0],labelComponents[1],pageNum); 

    };

  };

};


//----------------------------------------
//FUNCTIONS
//----------------------------------------


//Left and right functions, like vb :))
function Left(str, n) {
  if (n <= 0)
    return "";
  else if (n > String(str).length)
    return str;
  else
    return String(str).substring(0, n);
}

function Right(str, n) {
  if (n <= 0)
    return "";
  else if (n > String(str).length)
    return str;
  else {
    var iLen = String(str).length;
    return String(str).substring(iLen, iLen - n);
  }
}


//make a box!!
function boxMaker(stuffFromLabel1,stuffFromLabel2,pageNum) {

  var pageNum = pageNum - 1;

//create text frame
  var textFrame = myDocument.pages[pageNum].textFrames.add();

 //text frame properties
  textFrame.properties = {

    name: boxName,
    itemLayer: "SYSTEM", 
    geometricBounds: gb, 
    strokeWeight: 0, //probabaly not needed
    strokeColor: "None", //probabaly not needed
    fillColor: "None", //probabaly not needed
    contents: stuffFromLabel2

  };

//confirm object style exists
  if(!myDocument.objectStyles.itemByName(stuffFromLabel1).isValid) {  

    myDocument.objectStyles.add({name:stuffFromLabel1});  

  }; 


   //set object style
  textFrame.appliedObjectStyle = myDocument.objectStyles.itemByName(stuffFromLabel1);



  //var objectStyle = myDocument.objectStyles.itemByName(stuffFromLabel1)

  // if(!myDocument.objectStyles.itemByName(stuffFromLabel1).isValid) {

  // } else {

  //   alert(objectStyle);
  //   alert("style false");

  // };


};


