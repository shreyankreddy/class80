studentslist=[];

function submit()
{
    var displaystudentname=[];

    for(var j=1; j<=3; j++)
    {
        var studentname=document.getElementById("name"+j).value;
        console.log (studentname);
        studentslist.push(studentname);
    }
    console.log(studentslist);
    var LENGHTSTUDENT=studentslist.length;

    console.log(LENGHTSTUDENT);

    for(var s=0; s<LENGHTSTUDENT; s++){
        displaystudentname.push("<h4>NAME "+ studentslist[s]+"</h4>");
        console.log(displaystudentname);
    }
    console.log(displaystudentname);

    document.getElementById("namewithcomma").innerHTML=displaystudentname;
    var removecomma=displaystudentname.join(" ");
    console.log(removecomma);
    document.getElementById("namewithoutcomma").innerHTML=removecomma;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}
function sorting(){
    studentslist.sort();
    console.log(studentslist);
    var displaysortstudent=[];

    var LENGHTSTUDENT=studentslist.length;

    console.log(LENGHTSTUDENT);
    for(var s=0; s<LENGHTSTUDENT; s++){
        displaysortstudent.push("<h4>NAME "+ studentslist[s]+"</h4>");
        console.log(displaysortstudent);
    }

    var removecomma=displaysortstudent.join(" ");
    console.log(removecomma);
    document.getElementById("namewithoutcomma").innerHTML=removecomma;
}