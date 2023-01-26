const button = document.querySelector(".SubmitBtn");


button.onclick = function(){
let y=Name();
let x=Surname();
let z=Checkpass();
let f=Email();
if(y==true && x==true && z==true && f==true){
  window.location.href="https://www.google.com"
}
}

function Name(){
  let name=document.getElementById("name").value;
  let y=name.length;
  let text;
  if(y>3){
    return true;
  }
  else{
    text="Name must be longer than 3 letters";
    document.getElementById("demo").innerHTML = text;
    return false;
  }
}

function Surname(){
  let name=document.getElementById("surname").value;
  let y=name.length;
  let text;
  if(y>3){
    return true;
  }
  else{
    text="Surname must be longer than 3 letters";
    document.getElementById("demor").innerHTML = text;
    return false;
  }
}

function Checkpass(){
  let name=document.getElementById("pass").value;
  let y=name.length;
  let text;
  if(y>7){
    return true;
  }
  else{
    text="Password must be more than 8 elements";
    document.getElementById("demorr").innerHTML = text;
    return false;
  }
}

function Email(){
  let name=document.getElementById("email").value;
  let y=name.includes("@gmail.com");
  let text;
  if(y==true){
    return true;
  }
  else{
    text="The email must also contain the @gmail.com combination";
    document.getElementById("demorrr").innerHTML = text;
    return false;
  }
}


