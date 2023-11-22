//dynamic dialog


//USER PREFRENCES

//Dialog values
//type
var componentList = ["Select","BODY COPY", "BULLETS", "CRESCENDO", "EXTRA", "HERO Style 1", "HERO Style 2", "HERO Style 3", "FILLER IMAGE", "LEGAL", "CUSTOM LETTER", "LONG LETTER", "SHORT LETTER", "MESSAGE", "NOs", "OFFER with card", "OFFER typography only", "PRICE POINT", "1 RTB", "2 RTBs", "3 RTBs Style 2 with circle image", "3 RTBs Style 1 with square image", "4 RTBs", "6 RTBs"];

//format
var formatList = ["Select", "HModH", "HVModM", "HVModHERO", "HVLLModA", "HVLLModB", "HVLLModC", "VLLModLTR", "HModLGL", "VModLGL", "LLModLGL", "HVLLModCRSCLGL"];

//language
var languageList = ["Select", "N/A", "English", "Bilingual"];

//mailing
var mailingList = ["Select","1.1", "1.2", "2.1", "2.2", "3.1", "3.2", "4.1", "4.2", "5.1", "5.2", "6.1", "6.2", "7.1", "7.2", "8.1", "8.2", "9.1", "9.2", "10.1", "10.2", "11.1", "11.2", "12.1", "12.2"];

//product
var productList = ["FAM", "FAN", "FBG", "FBO", "FCN", "FCP", "FCR", "FCS", "FDP", "FEA", "FED", "FFM", "FGG", "FGR", "FHB", "FIA", "FME", "FMF", "FMG", "FMO", "FMP", "FMR", "FMT", "FON", "FPN", "FPP", "FSE", "FSP", "FSU", "FTM", "FWI"];
var productSelection = 22;



//array 


//for values we're not writing at this step
var placeHolder = "null"


//year
var currentYear = get_date_string();
var nextYear = parseInt(currentYear) + 1;
var yearList = [currentYear,nextYear];



//call dialog


metadataDialog();


//end



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




//automate this stuff


// YEAR
// =========
	var Year = panel1.add("group", undefined, {name: "Year"}); 
	Year.orientation = "column"; 
	Year.alignChildren = ["center","top"]; 
	Year.spacing = 2; 
	Year.margins = 0; 

	var statictext1 = Year.add("statictext", undefined, undefined, {name: "statictext1"}); 
	statictext1.text = "Year"; 

	var dropdown5_array = yearList; 
	var dropdown5 = Year.add("dropdownlist", undefined, undefined, {name: "dropdown1", items: dropdown5_array}); 
	dropdown5.selection = 0; 


// PRODUCT
// =========
	var Product = panel1.add("group", undefined, {name: "Product"}); 
	Product.orientation = "column"; 
	Product.alignChildren = ["center","top"]; 
	Product.spacing = 2; 
	Product.margins = 0; 

	var statictext1 = Product.add("statictext", undefined, undefined, {name: "statictext1"}); 
	statictext1.text = "Product"; 

	var dropdown3_array = productList; 
	var dropdown3 = Product.add("dropdownlist", undefined, undefined, {name: "dropdown1", items: dropdown3_array}); 
	dropdown3.selection = productSelection; 


// COMPONENT
// =========
	var Component = panel1.add("group", undefined, {name: "Component"}); 
	Component.orientation = "column"; 
	Component.alignChildren = ["center","top"]; 
	Component.spacing = 2; 
	Component.margins = 0; 

	var statictext1 = Component.add("statictext", undefined, undefined, {name: "statictext1"}); 
	statictext1.text = "Component"; 

	var dropdown1_array = componentList; 
	var dropdown1 = Component.add("dropdownlist", undefined, undefined, {name: "dropdown1", items: dropdown1_array}); 
	dropdown1.selection = 0; 


// TEMPLATE FORMAT
// =========
	var Format = panel1.add("group", undefined, {name: "Format"}); 
	Format.orientation = "column"; 
	Format.alignChildren = ["center","top"]; 
	Format.spacing = 2; 
	Format.margins = 0; 

	var statictext1 = Format.add("statictext", undefined, undefined, {name: "statictext1"}); 
	statictext1.text = "Template Format"; 

	var dropdown4_array = formatList; 
	var dropdown4 = Format.add("dropdownlist", undefined, undefined, {name: "dropdown4", items: dropdown4_array}); 
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

	var dropdown2_array = languageList; 
	var dropdown2 = ModLanguage.add("dropdownlist", undefined, undefined, {name: "dropdown2", items: dropdown2_array}); 
	dropdown2.selection = 0; 


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

	var dropdown5_array = mailingList; 
	var dropdown5 = Mailing.add("dropdownlist", undefined, undefined, {name: "Mailing1", items: dropdown5_array}); 
	dropdown5.selection = 0; 


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
		var yearChoice = dropdown5.selection.text;
		var productChoice = dropdown3.selection.text;
		var mailingChoice = dropdown5.selection.text;		
		var moduleTypeChoice = dropdown1.selection.text;
		var templateFormatChoice = dropdown4.selection.text;
		var modLanguageChoice = dropdown2.selection.text;


		// Create an object to hold the returned variables
		var result = {

			yearChoice: yearChoice,
			productChoice: productChoice,
			mailingChoice: mailingChoice,
			moduleTypeChoice: moduleTypeChoice,
			templateFormatChoice: templateFormatChoice,
			modLanguageChoice: modLanguageChoice,


		};

		return result;

	} else {

		//this is the message you get if you click on the Cancel button
		throw ("User Cancelled");
		exit();

	};


	exit();


};


//taken from the web, see https://www.indesignjs.de/extendscriptAPI/indesign11/index.html#Date.html for info on date obj, see https://www.w3schools.com/react/react_es6_ternary.asp for the operator format
function get_date_string(para_date) {
	var date = para_date || new Date();
	var day = (date.getDate() > 10 ) ? date.getDate() : ("0" + date.getDate() ),
	month = ((date.getMonth()+1) > 10 ) ? (date.getMonth()+1) : ("0" + (date.getMonth()+1) ),
	year = (date.getFullYear() > 10 ) ? date.getFullYear() : ("0" + date.getFullYear() ),
	hours = (date.getHours() > 10 ) ? date.getHours() : ("0" + date.getHours() ),
	minutes = (date.getMinutes() > 10 ) ? date.getMinutes() : ("0" + date.getMinutes() );
	
	//return year + month + day + "_" + hours + minutes;

	return year;

};