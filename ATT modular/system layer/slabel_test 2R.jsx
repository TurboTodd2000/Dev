//----------------------------------------
//ATT Module SYSTEM layer maker v2
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
var pageNum = myDocument.pages;

//get # of layers
var layerNum = myDocument.layers.length; //not in use



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

//BROKEN!!!!!!!!!!!!!!!!!!!!
//remove all SYSTEM layer objects

// //get # of master pages
// var master = myDocument.masterSpreads;

// //loop on # of master pages
// for(var r = 0; r < master.length; r++) {


// //error trapping here
//   var frameCount = master.textFrames.length;
//   alert(frameCount);
// //error trapping here


// //loop by number of text frames
//   for (var w = 0; w < frameCount; w++) {

//     try {


//       if(master.textFrames.parentPage != null){

//         //get name of current text frame
//         var testTextFrame = master.textFrames.name

//         //if its the same as boxName then remove
//         if (testTextFrame == boxName) {

//           //error trapping here
//           alert("remove true");
//           //error trapping here

//           master.textFrames.remove();

//         };

//       };


//     } catch(e) {

//       alert("boom")

//     };



//   };


// };








//loop through pages
for (var k = 0; k< pageNum.length; k++) {


  //get applied page master
  var currentPageMaster = myDocument.pages[k].appliedMaster.name;


  //delete existing system text frames
  //yeah I know, will goof if there are pages with the same master applied.

  //select current page master obj  
  var master = app.activeDocument.masterSpreads.itemByName(currentPageMaster);

  try {

    while(master.textFrames.itemByName(boxName)) {

      master.textFrames.itemByName(boxName).remove();

    };

  }
  catch(e){
    //nada
  };



//unlock system layer


  //get current page
  var currentPage = myDocument.pages[k];

  //get all obj on current page
  var currentPageObjects = currentPage.allPageItems


  //loop through page items
  for (var j = 0; j < currentPageObjects.length; j++) {

    //get current pageItem
    var currentPageItem = currentPageObjects[j];

    //alert("page " + k + " and item " + j);

    //if the label isn't blank
    if (currentPageItem.label !== "") {

      //and if the current items name isn't already boxName
      if (currentPageItem.name !== boxName) {

        //get geo bounds
        var gb = currentPageItem.geometricBounds;

        //split label into 2 parts
        var labelComponents = currentPageItem.label.split(", ");

        // alert(labelComponents[0]);
        // alert(labelComponents[1]);

        boxMaker(labelComponents[0],labelComponents[1],currentPageMaster); 

      };

    };

  };


};

alert("done");


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
function boxMaker(stuffFromLabel1,stuffFromLabel2,usePageMaster) {

  //var docRef = app.documents.item(0);

  var mSpread = "";

  var mSpread = app.activeDocument.masterSpreads.itemByName(usePageMaster);

alert(usePageMaster);

  //create text frame
  var textFrame = mSpread.textFrames.add();


  //text frame properties
  textFrame.properties = {

    name: boxName,
    itemLayer: "SYSTEM", 
    geometricBounds: gb, 
    strokeWeight: 0, 
    strokeColor: "None",
    fillColor: "None", 
    contents: stuffFromLabel2

  };

  //confirm object style exists
  if(!myDocument.objectStyles.itemByName(stuffFromLabel1).isValid) {  

    myDocument.objectStyles.add({name:stuffFromLabel1});  

  }; 

  //set object style
  textFrame.appliedObjectStyle = myDocument.objectStyles.itemByName(stuffFromLabel1);

};


