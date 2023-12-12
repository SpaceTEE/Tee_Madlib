
console.log("It's Working!");



//Write in and submit Text Box Elements

function write(){
    console.log("Inside the write function");
    

var noun = document.getElementById('noun').value; console.log(noun); 

var verb = document.getElementById('verb').value; console.log(verb); 

var curse = document.getElementById('curse').value; console.log(curse); 

var noun1 = document.getElementById('noun1').value; console.log(noun1); 

var verb1 = document.getElementById('verb1').value; console.log(verb1); 

var object = document.getElementById('object').value; console.log(object); 

var ritual = document.getElementById('ritual').value; console.log(ritual); 

var verb2 = document.getElementById('verb2').value; console.log(verb2); 

var another = document.getElementById('another').value; console.log(another); 

var noun2 = document.getElementById('noun2').value; console.log(noun2); 

var noun3 = document.getElementById('noun3').value; console.log(noun3); 

var verb3 = document.getElementById('verb3').value; console.log(verb3); 

var noun4 = document.getElementById('noun4').value; console.log(noun4); 

var sound = document.getElementById('sound').value; console.log(sound); 

var it = document.getElementById('it').value; console.log(it); 

var face = document.getElementById('face').value; console.log(face); 

var noun5 = document.getElementById('noun5').value; console.log(noun5); 

var action = document.getElementById('action').value; console.log(action); 

var it2 = document.getElementById('it2').value; console.log(it2); 

var phrase = document.getElementById('phrase').value; console.log(phrase); 

var it3 = document.getElementById('it3').value; console.log(it3); 



//Output Madlib Story

document.getElementById('output').innerHTML = "<img class='img-fluid' src='images/Myterious group.jpg' alt='group'>";


document.getElementById ('output').innerHTML += " It was a dark and misty night as a group of individuals met up on the third floor of the Multimedia production program. With no instructors or security guards, the group of mysterious figures turn out to be the" + noun +". They were here to perform a "+ verb +" to get rid of an old "+curse+" so it wouldn't cause anyone grief again. All dressed up in "+ noun1 +" the group went on to prepare themselves for the "+ verb1 +". Setting up the "+ object +" the group got into position to perform a "+ ritual +". When the group started to "+ verb2 +" and "+ another +". The floor started to become darker as a strange breeze of "+ noun2 +" started to circulate through the floor. Everything became chaotic as the group of "+ noun3 +", "+ verb3 +" uncontrollable to prevent these such events to continue. Then everything suddenly stopped as the floor calmed and went "+ noun4 +". The lights started to flicker as the air dissipated from the floor. A "+ sound +" was heard as the group’s motions stilled in an instant. As they slowly turned their heads towards the source, a "+ it +" stood there "+ face +" and unsure of what was happening. An awkward silence filled the floor as everyone just stood there not making a move. Unsure what to do, one "+ noun5 +" of the group cleared its throat before slowly "+ action +" towards the "+ it2 +" and simply said "+ phrase +" before gesturing the "+ it3 +" to be on its way.";

}