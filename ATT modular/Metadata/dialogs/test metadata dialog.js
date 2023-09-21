//call function within a try/catch block to handle error if thrown
try {
	var userResponse = dialog ("Metadata Settings", true, "Metadata");
//alert ("user entered" + userResponse);
} catch (e) {
	alert (e);
}





function dialog (dlgName, cancelIt, dlgLabel) {

	var userCancelled = true; //is set to false if user clicks OK button 


	//create dialog
	var dlgRef = app.dialogs.add({name:dlgName, canCancel:cancelIt, label:dlgLabel});


	var myDropdown = dlgName.add ("dropdownlist", undefined, ["one", "two", "three"]); 
	myDropdown.selection = 1;


	if (dlgRef.show() == true) {
		userCancelled = false;
		myChoice = myDropdown.selection.text;

	}


	dlgRef.destroy();


	if (userCancelled) {
		throw ("User Cancelled");
	}

	return myChoice;

};






