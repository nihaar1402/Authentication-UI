
const email=document.getElementById('email')
const pass=document.getElementById('pass')
const submit=document.getElementById('submit')
const text=document.getElementById('text')


function auth(){
if(email.value===""||pass.value===""){
  alert("Enter Email and Password")
}
else {
     setTimeout(()=>{
      alert("You are Welcome....")
     },2000)
    document.write("REGISTERED")
    
}

}

function social(){
  social=document.querySelector('social');
  
}