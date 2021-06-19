function Calculate(){
const math = document.getElementById("Grade1").value;
const science = document.getElementById("Grade2").value;
const social = document.getElementById("Grade3").value;
const hindi = document.getElementById("Grade4").value;
const english = document.getElementById("Grade5").value;
const biology = document.getElementById("Grade6").value;
 
var percText = document.getElementById("percentage");
var Grade = document.querySelector(".result")

let totalscorce= parseInt(math)+parseInt(science)+parseInt(social)+parseInt(hindi)
+parseInt(english)+parseInt(biology);

let per = (totalscorce/600)*100;
percText.innerHTML =`Your percentage ${per} %`;

if(per >= 90){
    Grade.innerHTML="Your Grade is : A+";
    Grade.style.color="white";
    percText.style.color="white";
}
else if(per <= 70)
{
    Grade.innerHTML="Your Grade is : B+"; 
    Grade.style.color="orange";
    percText.style.color="orange";
}

 if(per <= 50)
{
    Grade.innerHTML="Your Grade is : C+";
    Grade.style.color="yellow";
    percText.style.color="yellow";
}
if(per <= 40){
    Grade.innerHTML="Your Grade is : D";
    Grade.style.color="red";
    percText.style.color="red";
}
}   