//----------------------------------------
//ATT Module frame renamer
//----------------------------------------

//Updated by Todd on 9/7/23
//rewritten from examples on the web


//set selection
var sel = app.selection;


//if there's nothing selected say so
if (sel.length == 0) {

    alert('Nothing selected');

} else {


    for (var i = 0; i < app.selection.length; i++) {

        if (app.selection[i].graphics.length !== 0) {

            //set frame name
            app.selection[i].name = "module";

            //set lable for image frame
            app.selection[i].label = "SYSTEM-module, placeholderName";

        } else {

            //set frame name
            app.selection[i].name = "variable text";

            //text frame label
            app.selection[i].label = "SYSTEM-text, placeholderName";

        };


    };


};