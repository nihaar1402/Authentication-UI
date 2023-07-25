
var pass1=document.getElementById('pass1');
var pass2=document.getElementById('pass2');
var email=document.getElementById('email');
var name=document.getElementById('name');

function register(){
    if(pass1.value==pass2.value){
        confirm("Are You Sure ?")
        document.write("<h1>Registered</h1>")
         
    }
    else{
        alert("Passwords Not Matched")
        
    }
   
}