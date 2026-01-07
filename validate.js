// validation logic
function validate(){
  // request data gathering logic
   let uname=document.getElementById('username').value; 
  let pswd=document.getElementById('password').value;
  let regexp=/[a-z]/;
  let confirmpswd=document.getElementById('confirmpassword').value;
  let mobno=document.getElemnentById('mobilenumber').value;
  let mail=document.getElementById('email').value;
  // validaton logic
  if(uname==''){
    alert("please enter username");
    return false;
  }
  if(pswd==''){
    alert("please enter password");
    return false;
  }  
  if(pswd.length<8 || pswd.length>12){
    alert("password should be min 8 char and max 12 char");
    return false;
  }
  if(!regexp.test(pswd)){
    alert("password should combination of small and capital letters") ;
  
  }
  if(confirmpswd==""){
    alert("please enter confirm password");
    return false;
  }
  if(pswd!=confirmpswd){
    alert("password and confirm password should be same");
    return false;
  } 
  if(mobno==""){
    alert("please enter mobile number");
    return false;
  }
  if(!regexp.test(mobno)){
    alert("please enter valid mobile number");
    return false;
  }
  if(mail==''){
    alert('enter email id');
    return false;
  }
  return true;
}