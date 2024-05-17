function home(){
    document.getElementById("homes").style.color="rgb(17, 39, 238)";
    document.getElementById("plans").style.color="Black";
    document.getElementById("contacts").style.color="Black";
    document.getElementById("blogs").style.color="Black";
    document.getElementById("programs").style.color="Black";

}

function program(){
    document.getElementById("homes").style.color="Black";
    document.getElementById("plans").style.color="Black";
    document.getElementById("contacts").style.color="Black";
    document.getElementById("blogs").style.color="Black";
    document.getElementById("programs").style.color="rgb(17, 39, 238)";

}
function plan(){
    document.getElementById("homes").style.color="Black";
    document.getElementById("plans").style.color="rgb(17, 39, 238)";
    document.getElementById("contacts").style.color="Black";
    document.getElementById("blogs").style.color="Black";
    document.getElementById("programs").style.color="Black";

}
function blog(){
    document.getElementById("homes").style.color="Black";
    document.getElementById("plans").style.color="Black";
    document.getElementById("contacts").style.color="Black";
    document.getElementById("blogs").style.color="rgb(17, 39, 238)";
    document.getElementById("programs").style.color="Black";

}
function contact(){
    document.getElementById("homes").style.color="Black";
    document.getElementById("plans").style.color="Black";
    document.getElementById("contacts").style.color="rgb(17, 39, 238)";
    document.getElementById("blogs").style.color="Black";
    document.getElementById("programs").style.color="Black";

}

// submit

function submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    if(name.value == ""){
        alert("Please Enter Name")
    }else if(number.value == ""){
        alert("Please Enter Number")
    }else{
        alert("Thanks For Join : " + name.value)
    }
}