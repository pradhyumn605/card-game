
var numimg;
var numimg1;

function myFunction() {
    //alert("Page is loaded");

    var randomArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var i = Math.floor(Math.random() * 9);
    //document.getElementById("numb").innerHTML = randomArray[i];
    if (randomArray[i] == "one") {
        console.log(randomArray[i]);
        document.getElementById("logicfnid").innerHTML = "<class='myaudio' audio controls=autoplay ><source src='imgs/cardsound.mp3' type='audio/mpeg'></audio>";

        document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='first1' src='imgs/writnum/one.jpg' alt='Submit' width='216' height='233'>";

        
        
        // innerHTML = "hellloooo"
    } else if (randomArray[i] == "two") {
        console.log(randomArray[i]);
        document.getElementById("logicfnid").innerHTML = "<class='myaudio' audio controls:autoplay display='none'><source src='imgs/cardsound.mp3' type='audio/mpeg'></audio>";

        document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='second1' src='imgs/writnum/two.jpg' alt='Submit' width='216' height='233'>";
        
       
        //<audio controls autoplay><source src='imgs/cardsound.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>";
    } else if (randomArray[i] == "three") {
        console.log(randomArray[i]);
        document.getElementById("logicfnid").innerHTML = "<class='myaudio' audio controls autoplay display='none'><source src='imgs/cardsound.mp3' type='audio/mpeg'></audio>";

        document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='third1' src='imgs/writnum/three.jpg' alt='Submit' width='216' height='233'>";
    } else if (randomArray[i] == "four") {
        console.log(randomArray[i]);
        document.getElementById("logicfnid").innerHTML = "<input class='myImg' type='image' id='fourth1' src='imgs/writnum/four.jpg' alt='Submit' width='216' height='233'>";
        document.getElementById("logicfnid").innerHTML += "<class='myaudio' audio width='10' height='10' controls autoplay display='none'><source src='imgs/cardsound.mp3' type='audio/mpeg' muted='muted'></audio>";
    } else if (randomArray[i] == "five") {
        document.getElementById("logicfnid").innerHTML = "<input class='myImg' type='image' id='fifth1' src='imgs/writnum/five.jpg' alt='Submit' width='216' height='233'>";
        document.getElementById("logicfnid").innerHTML += "<class='myaudio' audio width='10 height='10' controls autoplay><source src='imgs/cardsound.mp3' type='audio/mpeg' muted='muted'></audio>";
        console.log(randomArray[i]);
    } else if (randomArray[i] == "six") {
        console.log(randomArray[i]);
        document.getElementById("logicfnid").innerHTML = "<input class='myImg' type='image' id='sixth1' src='imgs/writnum/six.jpg' alt='Submit' width='216' height='233'>";
        document.getElementById("logicfnid").innerHTML += "<class='myaudio' audio controls autoplay><source src='imgs/cardsound.mp3' type='audio/mpeg'></audio>";
    } else if (randomArray[i] == "seven") {
        console.log(randomArray[i]);
        document.getElementById("logicfnid").innerHTML = "<input class='myImg' type='image' id='seventh1' src='imgs/writnum/seven.jpg' alt='Submit' width='216' height='233'>";
        document.getElementById("logicfnid").innerHTML += "<class='myaudio' audio controls autoplay><source src='imgs/cardsound.mp3' type='audio/mpeg'></audio>";
    } else if (randomArray[i] == "eight") {
        console.log(randomArray[i]);
        document.getElementById("logicfnid").innerHTML = "<input class='myImg' type='image' id='eighth1' src='imgs/writnum/eight.jpg' alt='Submit' width='216' height='233'>";
        document.getElementById("logicfnid").innerHTML += "<class='myaudio' audio controls autoplay><source src='imgs/cardsound.mp3' type='audio/mpeg'></audio>";
    } else if (randomArray[i] == "nine") {
        console.log(randomArray[i]);
        document.getElementById("logicfnid").innerHTML = "<input class='myImg' type='image' id='nineth1' src='imgs/writnum/nine.jpg' alt='Submit' width='216' height='233'>";
        document.getElementById("logicfnid").innerHTML += "<class='myaudio' audio controls autoplay><source src='imgs/cardsound.mp3' type='audio/mpeg'></audio>";
    }
    numimg = randomArray[i];
    console.log(numimg);
    logicfn();
    //myFunctionselect();   
}

function logicfn() {
    arraya = numimg;
    if (arraya == "one") {
        console.log(arraya);
        document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='first' src='imgs/one.jpg' alt='Submit' width='216' height='233'>";
        // innerHTML = "hellloooo"
    } else if (arraya == "two") {
        console.log(arraya);
        document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='second' src='imgs/two.jpg' alt='Submit' width='216' height='233'>";
    } else if (arraya == "three") {
        console.log(arraya);
        document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='third' src='imgs/three.jpg' alt='Submit' width='216' height='233'>";
    } else if (arraya == "four") {
        console.log(arraya);
        document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='fourth' src='imgs/four.jpg' alt='Submit' width='216' height='233'>";
    } else if (arraya == "five") {
        document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='fifth' src='imgs/five.jpg' alt='Submit' width='216' height='233'>";
        console.log(arraya);
    } else if (arraya == "six") {
        console.log(arraya);
        document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='sixth' src='imgs/six.jpg' alt='Submit' width='216' height='233'>";
    } else if (arraya == "seven") {
        console.log(arraya);
        document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='seventh' src='imgs/seven.jpg' alt='Submit' width='216' height='233'>";
    } else if (arraya == "eight") {
        console.log(arraya);
        document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='eighth' src='imgs/eight.jpg' alt='Submit' width='216' height='233'>";
    } else if (arraya == "nine") {
        console.log(arraya);
        document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='nineth' src='imgs/nine.jpg' alt='Submit' width='216' height='233'>";
    }
    myFunctionselect();
    console.log(arraya);
    cmpimg();

}


function myFunctionselect() {

    //alert("hellaaa");
    var arraya1 = numimg;
    var k = 0;
    var numcontain;

    var randomArray1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (var j = 0; k < 2; j++) {
        //alert("helliiii3");
        
        var i = Math.floor(Math.random() * 9);
        numimg1 = randomArray1[i];



        if (numimg1 != arraya1 && numcontain != numimg1 && z!=i) {
            k += 1;
            console.log(numimg1);
            numcontain = numimg1;

            if (numimg1 == "one") {
                console.log(numimg1);
                first = document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='first' src='imgs/one.jpg' alt='Submit' width='216' height='233'>";
                
                // innerHTML = "hellloooo"
            } else if (numimg1 == "two") {

                console.log(numimg1);
                second = document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='second' src='imgs/two.jpg' alt='Submit' width='216' height='233'>";
                
            } else if (numimg1 == "three") {

                console.log(numimg1);
                third = document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='third' onclick='myFunc('third')' src='imgs/three.jpg' alt='Submit' width='216' height='233'>";
                
            } else if (numimg1 == "four") {

                console.log(numimg1);
                document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='fourth' src='imgs/four.jpg' alt='Submit' width='216' height='233'>";
                
            } else if (numimg1 == "five") {

                document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='fifth' src='imgs/five.jpg' alt='Submit' width='216' height='233'>";
                console.log(numimg1);
                
            } else if (numimg1 == "six") {

                console.log(numimg1);
                document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='sixth' src='imgs/six.jpg' alt='Submit' width='216' height='233'>";
                
            } else if (numimg1 == "seven") {

                console.log(numimg1);
                document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='seventh' src='imgs/seven.jpg' alt='Submit' width='216' height='233'>";
                
            } else if (numimg1 == "eight") {

                console.log(numimg1);
                document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='eighth' src='imgs/eight.jpg' alt='Submit' width='216' height='233'>";
                
            } else if (numimg1 == "nine") {

                console.log(numimg1);
                document.getElementById("logicfnid").innerHTML += "<input class='myImg' type='image' id='nineth' src='imgs/nine.jpg' alt='Submit' width='216' height='233'>";
                
            }
            var z=i;
        }

        numimg1 = randomArray1[i];
        console.log(numimg);
    }
}




$(document).ready(function(){
    $('.myImg').on('click', function() {
        var id;
        console.log($(this)[0].id);
		preid=$(this)[0].id;
		console.log(preid);
        cmpimg();

    });
});

function cmpimg(){
    var cmp=arraya;
    var cmpn=preid;
    console.log(cmp);
    console.log(cmpn);
            if (cmpn == "first") {
                cmpn="one";
            } else if (cmpn == "second") {
                cmpn="two";
            }else if (cmpn == "third") {
                cmpn="three";
            }else if (cmpn == "fourth") {
                cmpn="four";
            }else if (cmpn == "fifth") {
                cmpn="five";
            }else if (cmpn == "sixth") {
                cmpn="six";
            }else if (cmpn == "seventh") {
                cmpn="seven";
            }else if (cmpn == "eighth") {
                cmpn="eight";
            }else if (cmpn == "nineth") {
                cmpn="nine";
            }
    
    if (cmp == cmpn) {
                alert("Damn!! correct");
                document.getElementById("showcard").innerHTML += " <img class='crazy' src='imgs/writnum/superimpose.jpg'></img>";
                setTimeout(function()
                {location.reload(true);}, 2500);
                //sleep(1);
               //location.reload(true);
            } else {

                alert("OOPS!! Retry ");
                n-=1;
                this.style.backgroundColor = "red" ;
            }
}


///////////////////////sound///////////////////////

    
    
    
