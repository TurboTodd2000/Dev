//call function within a try/catch block to handle error if thrown
try {
  var userResponse = dialogWRadio ("Metadata", true, "PDF Prefs");
  //alert ("user entered" + userResponse);
} catch (e) {
  alert (e);
}
function dialogWRadio (dlgName, cancelIt, dlgLabel) {

  var userCancelled = true; //is set to false if user clicks OK button 

  // var oldPrefs = app.scriptPreferences.userInteractionLevel;
  // app.scriptPreferences.userInteractionLevel=UserInteractionLevels.INTERACT_WITH_ALL;

  //create dialog
  var dlgRef = app.dialogs.add({name:dlgName, canCancel:cancelIt, label:dlgLabel});

  //add a column
  var dlgColumn = dlgRef.dialogColumns.add();
  
     //add a row
     var dlgRow = dlgColumn.dialogRows.add();
     //add radio elements to row
     var rGroup = dlgRow.radiobuttonGroups.add();
     rGroup.radiobuttonControls.add({staticLabel:"Hi-res_PDF", checkedState:true});
     rGroup.radiobuttonControls.add({staticLabel:"Low-res_PDF"});
     rGroup.radiobuttonControls.add({staticLabel:"PRINTER"});

    if (dlgRef.show() == true) {
        userCancelled = false;
           var radioValue = rGroup.selectedButton;

    }

dlgRef.destroy();

app.scriptPreferences.userInteractionLevel=oldPrefs;
if (userCancelled) {
    throw ("User Cancelled");
 }
return radioValue;
}  