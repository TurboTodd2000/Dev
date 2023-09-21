var doc = app.activeDocument;

var master = doc.masterSpreads;

var contents = "";

for(var i =0;i<master.length;i++)

{

        for(var j =0;j<master.textFrames.length;j++)

        {

                if(master.textFrames.parentPage != null){

                    contents += master.textFrames.contents + "\t" + master.name + "\r";

                }

            }

    }

var file = new File("c:/1.txt");

file.open("w");

file.write(contents);

file.close();