//----------------------------------------
//ATT Metadata Write Script
//----------------------------------------

//Updated by Todd on 6/27/23
//fixed writing custom metadata to use a loop so it's more flexable about what I feed it, reoranized var in function into one spot



//----------------------------------------
//VARIABLES
//----------------------------------------

//document
var myDocument = app.activeDocument;
var docName = myDocument.name;

//this cleans up the file name for use elsewhere
//var docName = Left(docName, String(docName).length-5);


//USER PREFRENCES

//metadata field names
var fieldNames = ["Mailing","Component","LOB","Language","Component_Name","Orientation","Source_File"];

var placeHolder = "null"




//----------------------------------------
//PROTOTYPES
//----------------------------------------

//need to declare prototypes before they're called
//this allows a search inside of an array, used for turning the layers on and off
Array.prototype.exists = function(search){
 for (var i=0; i<this.length; i++)
    if (this[i] == search) return true;
 return false;
}


//----------------------------------------
//SANITY TESTS
//----------------------------------------




//----------------------------------------
//START LOOP
//----------------------------------------

//dialog to enter metadata
// Call function within a try/catch block to handle error if thrown
try {

	var result = metadataDialog();

	// Access the returned variables from the result object
	var componentChoice = result.componentChoice;
	var modLanguageChoice = result.modLanguageChoice;
	var lobChoice = result.lobChoice;
	var mailingChoice = result.mailingChoice;
	var orientationChoice = result.orientationChoice

} catch (e) {

	alert(e);

};


//pass dialog results to array for loop
var dialogResults = [mailingChoice,componentChoice,lobChoice,modLanguageChoice,placeHolder,orientationChoice,docName];

//these are for the standard metadata fields
var keywordResults = [mailingChoice,componentChoice,"LOB",modLanguageChoice];


//need to pass info from dialog to this
customMetadataWrite(fieldNames,dialogResults);

//backup standard metadata solution
metadatWrite(keywordResults);




//----------------------------------------
//FUNCTIONS
//----------------------------------------

//Left and right functions, like vb :))
function Left(str, n){
	if (n <= 0)
		return "";
	else if (n > String(str).length)
		return str;
	else
		return String(str).substring(0,n);
}

function Right(str, n){
	if (n <= 0)
		return "";
	else if (n > String(str).length)
		return str;
	else {
		var iLen = String(str).length;
		return String(str).substring(iLen, iLen - n);
	}
}



//standard metadata, doing this as a back up in case I can't get custom metadata working in Bridge also good for general accessability
function metadatWrite(metadataValues) {

	var userName = $.getenv("USER");


	with (myDocument.metadataPreferences){

		author = userName;

		documentTitle = docName;

		keywords = metadataValues;

	}

};



// write custom metadata to own namespace
function customMetadataWrite(metadataFields,metadataValues) {

	var myDocXMP = app.activeDocument.metadataPreferences;
	var destNamespace = "https://kernagency.com/";
	var namespacePrefix = "Kern_Agency"
	var myXMLfile = File('~/Desktop/myTestXMP.xml');


	//due to how XMP works we need to write a file w/the info for our custom namespace and then append it to the document
	var myXML = new XML("<x:xmpmeta xmlns:x=\"adobe:ns:meta/\"><rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"><rdf:Description xmlns:" + namespacePrefix + "=\"" + destNamespace + "\"></rdf:Description></rdf:RDF></x:xmpmeta>");


	if ( myXMLfile.open('e') ){
		myXMLfile.write(myXML);
		myXMLfile.close();
		app.activeDocument.metadataPreferences.append(myXMLfile);
		myXMLfile.remove();
	}

	//with that done we can use a simpler method to insert nodes into the now existing name space
	
	// insert nodes
	for (i = 0; i < metadataFields.length; i++) {

		//pulling the values in a loop so I can feed whatever length arrays I want
		var setMetadata = {
			namespace: destNamespace,
			fields: metadataFields[i],
			values: metadataValues[i]
		};

		myDocXMP.setProperty(setMetadata.namespace,setMetadata.fields,setMetadata.values);


	};


};



//user dialog to set metadata
function metadataDialog() {


// METADATA
// ========
	var Metadata = new Window("dialog"); 
	Metadata.text = "Add Metadata"; 
	Metadata.preferredSize.width = 196; 
	Metadata.orientation = "column"; 
	Metadata.alignChildren = ["right","top"]; 
	Metadata.spacing = 10; 
	Metadata.margins = 16; 


// PANEL1
// ======
	var panel1 = Metadata.add("panel", undefined, undefined, {name: "panel1"}); 
	panel1.orientation = "row"; 
	panel1.alignChildren = ["left","top"]; 
	panel1.spacing = 10; 
	panel1.margins = 10; 


// COMPONENT
// =========
	var Component = panel1.add("group", undefined, {name: "Component"}); 
	Component.orientation = "column"; 
	Component.alignChildren = ["center","top"]; 
	Component.spacing = 2; 
	Component.margins = 0; 

	var statictext1 = Component.add("statictext", undefined, undefined, {name: "statictext1"}); 
	statictext1.text = "Component"; 

	var dropdown1_array = ["Select","Hero","RTB","Crescendos","Price Points","Address Panel","Offers","Bonus","Extras"]; 
	var dropdown1 = Component.add("dropdownlist", undefined, undefined, {name: "dropdown1", items: dropdown1_array}); 
	dropdown1.selection = 0; 


// ORIENTATION
// =========
	var Orientation = panel1.add("group", undefined, {name: "Orientation"}); 
	Orientation.orientation = "column"; 
	Orientation.alignChildren = ["center","top"]; 
	Orientation.spacing = 2; 
	Orientation.margins = 0; 

	var statictext1 = Orientation.add("statictext", undefined, undefined, {name: "statictext1"}); 
	statictext1.text = "Orientation"; 

	var dropdown4_array = ["Select","N/A","Landscape","Portrait"]; 
	var dropdown4 = Orientation.add("dropdownlist", undefined, undefined, {name: "dropdown4", items: dropdown4_array}); 
	dropdown4.selection = 0; 


// MODLANGUAGE
// ===========
	var ModLanguage = panel1.add("group", undefined, {name: "ModLanguage"}); 
	ModLanguage.orientation = "column"; 
	ModLanguage.alignChildren = ["center","top"]; 
	ModLanguage.spacing = 2; 
	ModLanguage.margins = 0; 

	var statictext2 = ModLanguage.add("statictext", undefined, undefined, {name: "statictext2"}); 
	statictext2.text = "Language"; 
	statictext2.justify = "center"; 

	var dropdown2_array = ["Select","English","Bilingual"]; 
	var dropdown2 = ModLanguage.add("dropdownlist", undefined, undefined, {name: "dropdown2", items: dropdown2_array}); 
	dropdown2.selection = 0; 


// LOB
// ===
	// var LOB = panel1.add("group", undefined, {name: "LOB"}); 
	// LOB.orientation = "column"; 
	// LOB.alignChildren = ["center","top"]; 
	// LOB.spacing = 2; 
	// LOB.margins = 0; 

	// var statictext3 = LOB.add("statictext", undefined, undefined, {name: "statictext3"}); 
	// statictext3.text = "LOB"; 
	// statictext3.justify = "center"; 

	// var dropdown3_array = ["Select","ACQ","XS","AiA","NewBuild"]; 
	// var dropdown3 = LOB.add("dropdownlist", undefined, undefined, {name: "dropdown3", items: dropdown3_array}); 
	// dropdown3.selection = 0; 


// MAILING
// =======
	var Mailing = panel1.add("group", undefined, {name: "Mailing"}); 
	Mailing.orientation = "column"; 
	Mailing.alignChildren = ["center","top"]; 
	Mailing.spacing = 2; 
	Mailing.margins = 0; 

	var statictext4 = Mailing.add("statictext", undefined, undefined, {name: "statictext4"}); 
	statictext4.text = "Mailing"; 
	statictext4.justify = "center"; 

	var Mailing1_array = ["Select","M1","M2","M3","M4","M5","M6","M7","M8","M9","M10","M11","M12","M13","M14","M15","M16"]; 
	var Mailing1 = Mailing.add("dropdownlist", undefined, undefined, {name: "Mailing1", items: Mailing1_array}); 
	Mailing1.selection = 0; 


// CANCEL/OK BUTTONS
// ======
	var group2 = Metadata.add("group", undefined, {name: "group2"}); 
	group2.orientation = "row"; 
	group2.alignChildren = ["left","center"]; 
	group2.spacing = 10; 
	group2.margins = 0; 

	var button1 = group2.add("button", undefined, undefined, {name: "button1"}); 
	button1.text = "Cancel"; 

	var button2 = group2.add("button", undefined, undefined, {name: "button2"}); 
	button2.text = "Ok"; 
	button2.preferredSize.width = 74; 



	//this controls the behavior of the "Cancel" and "OK" buttons, they're identified by order left to right
	if (Metadata.show () == 1) { 

		//component selection, convert from field selctions to variables, can probably get rid of this and just do it in the object
		var componentChoice = dropdown1.selection.text;
		var modLanguageChoice = dropdown2.selection.text;
		var lobChoice = "LOB";
		var mailingChoice = Mailing1.selection.text;
		var orientationChoice = dropdown4.selection.text;


		// Create an object to hold the returned variables
		var result = {
			componentChoice: componentChoice,
			modLanguageChoice: modLanguageChoice,
			lobChoice: lobChoice,
			mailingChoice: mailingChoice,
			orientationChoice: orientationChoice
		};

		return result;

	} else {

		//this is the message you get if you click on the Cancel button
		throw ("User Cancelled");

	};


	exit ();


};


