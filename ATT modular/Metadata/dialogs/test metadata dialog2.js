



//call function within a try/catch block to handle error if thrown
try {
  var userResponse = dialogWRadio ("PDF Preferences", true, "PDF Prefs");
  //alert ("user entered" + userResponse);
} catch (e) {
  alert (e);
}





function dialogWRadio (dlgName, cancelIt, dlgLabel) {

	var userCancelled = true; //is set to false if user clicks OK button 

	//this takes the existing preferences and saves them so they can be restored
	var oldPrefs = app.scriptPreferences.userInteractionLevel;

	//this is the new preference value we want while using this dialog
	app.scriptPreferences.userInteractionLevel=UserInteractionLevels.INTERACT_WITH_ALL;


var labelList = ["Select","M1","M2","M3","M4","M5","M6","M7","M8","M9","M10","M11","M12","M13","M14","M15","M16"];


	//create dialog
	var dlgRef = app.dialogs.add({name:dlgName, canCancel:cancelIt, label:dlgLabel});

		

		//add a column
		var dlgColumn = dlgRef.dialogColumns.add();


			//add a row
			var dlgRow = dlgColumn.dialogRows.add();

				//add radio elements to row
				var rGroup = dlgRow.radiobuttonGroups.add();

					rGroup.radiobuttonControls.add({staticLabel:"Yes", checkedState:true});
					rGroup.radiobuttonControls.add({staticLabel:"No"});
					rGroup.radiobuttonControls.add({staticLabel:"Maybe"});


				//add a group
				var rGroup2 = dlgColumn.dialogRows.add();

				//add static text to label drop down


					//add dropdowns
					var drop = rGroup2.dropdowns.add({ minWidth: 100, stringList: labelList });

					//pulls from variable arrary
					drop.stringList = labelList;

					//this sets which array element shows by default
					drop.selectedIndex = 0; 




	if (dlgRef.show() == true) {

		userCancelled = false;

		//this sets the output value that gets returned
		var radioValue = rGroup.selectedButton;
		var drop
	}

	dlgRef.destroy();


//this resets the preferences
	app.scriptPreferences.userInteractionLevel=oldPrefs;

	//this returns an alert if the user clicks on "Cancel"
	if (userCancelled) {
		throw ("User Cancelled");
	}

	return radioValue;

}; 



