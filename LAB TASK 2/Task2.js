const form = document.getElementById("clubForm");
 
const message = document.getElementById("message");
 
const submitBtn = document.getElementById("submitBtn");
 
let attempts = 0;
 
form.addEventListener("submit", function(e){
 
e.preventDefault();
 
message.style.color="red";
 
let fname=document.getElementById("fname").value.trim();
 
let lname=document.getElementById("lname").value.trim();
 
let email=document.getElementById("email").value.trim();
 
let password=document.getElementById("password").value;
 
let category=document.getElementById("category").value;
 
let reason=document.getElementById("reason").value.trim();
 
let gender=document.querySelector('input[name="gender"]:checked');
 
let clubs=document.querySelectorAll('input[name="club"]:checked');
 
let nameRegex=/^[A-Za-z]+$/;
 
let emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
let passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
 
if(fname==""){
 
message.innerHTML="First Name is required.";
 
return;
 
}
 
if(!nameRegex.test(fname)){
 
message.innerHTML="First Name must contain only alphabets.";
 
return;
 
}
 
if(lname==""){
 
message.innerHTML="Last Name is required.";
 
return;
 
}
 
if(!nameRegex.test(lname)){
 
message.innerHTML="Last Name must contain only alphabets.";
 
return;
 
}
 
if(!emailRegex.test(email)){
 
message.innerHTML="Enter a valid email.";
 
return;
 
}
 
if(!passwordRegex.test(password)){
 
attempts++;
 
message.innerHTML="Invalid Password. Attempt : "+attempts;
 
if(attempts>=3){
 
submitBtn.disabled=true;
 
message.innerHTML="Too many attempts! Registration Locked.";
 
}
 
return;
 
}
 
if(gender==null){
 
message.innerHTML="Select your gender.";
 
return;
 
}
 
if(clubs.length==0){
 
message.innerHTML="Select at least one club.";
 
return;
 
}
 
if(category==""){
 
message.innerHTML="Choose a club category.";
 
return;
 
}
 
if(reason.length<20){
 
message.innerHTML="Reason must contain at least 20 characters.";
 
return;
 
}
 
message.style.color="green";
 
message.innerHTML="Registration Successful!";
 
form.reset();
 
attempts=0;
 
});
