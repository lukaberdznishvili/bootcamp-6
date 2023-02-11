
//paralel typing/პარალელური ბეჭვდა
function myFunctionForInputOne(){
    var x = document.getElementById("field0").value;
    document.getElementById("p1").innerHTML = x;
}

function myFunctionForInputTwo(){
    var y = document.getElementById("field1").value;
    document.getElementById("p2").innerHTML = y;
    // console.log('hello world!')
}
myFunctionForInputTwo()
 function myFunctionForInputFour (){
    var t = document.getElementById("field3").value;
    document.getElementById("p3").innerHTML = t
}
 function myFunctionForInputFive (){
    var z = document.getElementById("field4").value;
    document.getElementById("p4").innerHTML = z
}
function myFunctionForInputSix (){
    var c = document.getElementById("field5").value;
    document.getElementById("p5").innerHTML = c
}



//ატვირთული ფოტოს გამოჩენა/uploaded photo
const image_input = document.querySelector("#image_input");
var upload_image = "";
image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        upload_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${upload_image})`
    })
    reader.readAsDataURL(this.files[0]);
})

//ვალიდაცია//validation
//name validation//სახელის ვალიდაცია
function demoDisplay() {
    document.getElementById("done").style.display = "block";
  }
function demoUndisplay(){
    document.getElementById("undone").style.display = "block";
}
function luka(){
    document.getElementById("done").style.display = "none";
}
function cotne(){
    document.getElementById("undone").style.display = "none";
}
function validDisplay(){
    document.getElementById("valid").style.display = "block";
}
function noValidDisplay(){
    document.getElementById("notvalid").style.display = "block";
}
function validDisplay1(){
    document.getElementById("valid").style.display = "none";
}
function noValidDisplay1(){
    document.getElementById("notvalid").style.display = "none";
}
function plusDisplay(){
    document.getElementById("plus").style.display = "block";
}
function noPlusDisplay(){
    document.getElementById("notPlus").style.display = "block";
}
function plusDisplay1(){
    document.getElementById("plus").style.display = "none";
}
function noPlusDisplay1(){
    document.getElementById("notPlus").style.display = "none";
}


function minusDisplay() {
    document.getElementById("minus").style.display = "block";
  }
function nominusDisplay(){
    document.getElementById("notMinus").style.display = "block";
}
function minusDisplay1(){
    document.getElementById("minus").style.display = "none";
}
function nominusDisplay1(){
    document.getElementById("notMinus").style.display = "none";
}




function validationName(){
    var form1 = document.getElementById("form1");
    var name = document.getElementById("field0").value;
    var pattern = /^[ა-ჰ]+$/;
    var text = document.getElementById("img");
    if(name.match(pattern) && name.length > 1){
        form1.classList.add("valid");
        form1.classList.remove("invalid");
        text.innerHTML = validDisplay();
        text.innerHTML =noValidDisplay1();
        
        
    } else{
        form1.classList.remove("valid");
        form1.classList.add("invalid");
       text.innerHTML = noValidDisplay();
       text.innerHTML = validDisplay1();

    }



}
//გვარის ვალიდაცია/surname validation


function validation(){
    var form = document.getElementById("form2");
    var surname = document.getElementById("field1").value;
    // var span = document.getElementById("span1");
    
    var pattern = /^[ა-ჰ]+$/;
    var text = document.getElementById("imgg");
    if(surname.match(pattern) && surname.length > 1){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = demoDisplay();
        text.innerHTML =cotne();
        
        
    } else{
        form.classList.remove("valid");
        form.classList.add("invalid");
       text.innerHTML = demoUndisplay();
       text.innerHTML = luka();

    }
}
///email validation///მეილის ვალიდაცია
function plusValidation(){
    var form3 = document.getElementById("form2");
    var name = document.getElementById("field4").value;
    var pattern = /^[a-zA-Z0-9.]+@redberry.ge$/;
    var text = document.getElementById("imggg");
    if(name.match(pattern) && name.length > 1){
        form3.classList.add("valid");
        form3.classList.remove("invalid");
        text.innerHTML = plusDisplay();
        text.innerHTML =noPlusDisplay1();
        
        
    } else{
       form3.classList.remove("valid");
       form3.classList.add("invalid");
       text.innerHTML = noPlusDisplay();
       text.innerHTML = plusDisplay1();

    }
}
///phone number validation///ტელეფონის ნომრის ვალიდაცია

function minusValidation(){
    var form1 = document.getElementById("form3");
    var name = document.getElementById("field5").value;
    var pattern = /^[ა-ჰ]+$/;
    var text = document.getElementById("imgggg");
    if(name.match(pattern) && name.length > 1){
        // form1.classList.add("valid");
        // form1.classList.remove("invalid");
        text.innerHTML = minusDisplay();
        text.innerHTML = nominusDisplay1();   
    } else{
        // form1.classList.remove("valid");
        // form1.classList.add("invalid");
       text.innerHTML = nominusDisplay();
       text.innerHTML = minusDisplay1();

    }
}

///ონკლიკი ბათონზე

