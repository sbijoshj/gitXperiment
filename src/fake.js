// test source code for git practice

var mycars = new Array();

mycars[0] = "Honda";

mycars[1] = "Volvo";

mycars[2] = "BMW";  // misc comment


function person(firstname,lastname,age,eyecolor)
{
this.firstname=firstname;
this.lastname=lastname;
this.age=age;
this.eyecolor=eyecolor;
}

firstChange=3

myFather=new person("John","Doe",50,"blue");

document.write(myFather.firstname + " is " + myFather.age + " years old.");

