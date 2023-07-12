// Call function within a try/catch block to handle error if thrown
try {

	var result = metadataDialog();

// Access the returned variables from the result object
	var componentChoice = result.componentChoice;
	var modLanguageChoice = result.modLanguageChoice;
	var lobChoice = result.lobChoice;
	var mailingChoice = result.mailingChoice;

} catch (e) {

	alert(e);

};


// Display the returned variables
alert("Component: " + componentChoice + "\nLanguage: " + modLanguageChoice + "\nLOB: " + lobChoice + "\nMailing: " + mailingChoice);





//----------------------------------------
//FUNCTIONS
//----------------------------------------

function metadataDialog() {



/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":4,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"Metadata","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Add Metadata","preferredSize":[196,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["right","top"]}},"item-2":{"id":2,"type":"Button","parentId":4,"style":{"enabled":true,"varName":null,"text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Button","parentId":4,"style":{"enabled":true,"varName":null,"text":"Ok","justify":"center","preferredSize":[74,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-5":{"id":5,"type":"DropDownList","parentId":6,"style":{"enabled":true,"varName":"Mailing","text":"DropDownList","listItems":"Select,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10,M11,M12,M13,M14,M15,M16","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-6":{"id":6,"type":"Group","parentId":24,"style":{"enabled":true,"varName":"Mailing","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":2,"alignChildren":["center","top"],"alignment":null}},"item-7":{"id":7,"type":"ListBox","parentId":9,"style":{"enabled":true,"varName":null,"creationProps":{"multiselect":false,"numberOfColumns":1,"columnWidths":"[]","columnTitles":"[]","showHeaders":false},"listItems":"Item 1","preferredSize":[200,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"StaticText","parentId":6,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Mailing","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"Group","parentId":25,"style":{"enabled":true,"varName":"Keywords","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":1,"alignChildren":["left","center"],"alignment":null}},"item-10":{"id":10,"type":"StaticText","parentId":9,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Keywords","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Group","parentId":24,"style":{"enabled":true,"varName":"LOB","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":2,"alignChildren":["center","top"],"alignment":null}},"item-12":{"id":12,"type":"StaticText","parentId":11,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"LOB","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"DropDownList","parentId":11,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"Select,ACQ, XS,AiA,NewBuild","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-14":{"id":14,"type":"Group","parentId":24,"style":{"enabled":true,"varName":"ModLanguage","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":2,"alignChildren":["center","top"],"alignment":null}},"item-15":{"id":15,"type":"StaticText","parentId":14,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Language","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"DropDownList","parentId":14,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"Select,English, Bilingual","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-17":{"id":17,"type":"Group","parentId":24,"style":{"enabled":true,"varName":"Component","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":2,"alignChildren":["center","top"],"alignment":null}},"item-18":{"id":18,"type":"StaticText","parentId":17,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Component","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-19":{"id":19,"type":"DropDownList","parentId":17,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"Select,Cover,RTB,Crescendos,Price Points,Offers,Address Panel,Bonus,Extras","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-20":{"id":20,"type":"Group","parentId":25,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-21":{"id":21,"type":"RadioButton","parentId":20,"style":{"enabled":true,"varName":null,"text":"RadioButton","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-22":{"id":22,"type":"RadioButton","parentId":20,"style":{"enabled":true,"varName":null,"text":"RadioButton","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-23":{"id":23,"type":"RadioButton","parentId":20,"style":{"enabled":true,"varName":null,"text":"RadioButton","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-24":{"id":24,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-25":{"id":25,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}}},"order":[0,24,17,18,19,14,15,16,11,12,13,6,8,5,25,20,21,22,23,9,10,7,4,2,3],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 



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

	var dropdown1_array = ["Select","Cover","RTB","Crescendos","Price Points","Offers","Address Panel","Bonus","Extras"]; 
	var dropdown1 = Component.add("dropdownlist", undefined, undefined, {name: "dropdown1", items: dropdown1_array}); 
	dropdown1.selection = 0; 


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
	var LOB = panel1.add("group", undefined, {name: "LOB"}); 
	LOB.orientation = "column"; 
	LOB.alignChildren = ["center","top"]; 
	LOB.spacing = 2; 
	LOB.margins = 0; 

	var statictext3 = LOB.add("statictext", undefined, undefined, {name: "statictext3"}); 
	statictext3.text = "LOB"; 
	statictext3.justify = "center"; 

	var dropdown3_array = ["Select","ACQ","XS","AiA","NewBuild"]; 
	var dropdown3 = LOB.add("dropdownlist", undefined, undefined, {name: "dropdown3", items: dropdown3_array}); 
	dropdown3.selection = 0; 


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


// GROUP2
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




	if (Metadata.show () == 1) { 

		//component selection
		var componentChoice = dropdown1.selection.text;
		var modLanguageChoice = dropdown2.selection.text;
		var lobChoice = dropdown3.selection.text;
		var mailingChoice = Mailing1.selection.text;


		// Create an object to hold the returned variables
		var result = {
			componentChoice: componentChoice,
			modLanguageChoice: modLanguageChoice,
			lobChoice: lobChoice,
			mailingChoice: mailingChoice
		};

		return result;

	} else {

		throw ("User Cancelled");

	};


	exit ();


};