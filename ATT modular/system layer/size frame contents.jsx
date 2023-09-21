//set image scale value
var scale = 100;

//get all the rectangle frames
var obj = app.activeDocument.rectangles;

//loop over all the frames
for (var i=0; i<obj.length; i++){

   //get image frame name
   var currentName = obj[i].name;

   //get current image to test
   var image = obj[i].graphics[0];


   //if the frame name is module
   if (currentName == "module") {

      alert(obj[i].name);

      try {

         //set scaling
         image.horizontalScale = image.verticalScale = scale;

         //center content
         obj[i].fit(FitOptions.CENTER_CONTENT);

         //fit frame to the now resized content
         obj[i].fit(FitOptions.FRAME_TO_CONTENT);

      }

      catch(e) {

         alert("There's probably a nested image in frame #" + i + ". the frame is blank or the objects are grouped");

      };

   };

   
}

