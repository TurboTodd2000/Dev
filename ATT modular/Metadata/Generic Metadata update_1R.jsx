//ATT modular metadata script

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

//dialog to set keywords
//need  
    //copyrightNotice = "";
    //copyrightStatus = CopyrightStatus.no;
    //keywords = ["animal", "mineral", "vegetable"];



//variable
var myDocument = app.activeDocument;
var docName = myDocument.name;

//trim file name to use in metadata
var docName = Left(docName, String(docName).length-5);



//set dialog variables to existing content



//call dialog




//set metadata
with (myDocument.metadataPreferences){

    author = "KERN";

    copyrightNotice = "";

    copyrightStatus = CopyrightStatus.yes;

    documentTitle = docName;

    //jobName = "";

    //authorTitle = "";

    //description = "";

    keywords = myKeywords;

    }



