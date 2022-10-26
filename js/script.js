const container = document.querySelector(".container");
const hide = document.querySelectorAll(".hidePass");
const passwords = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const loginLink = document.querySelector(".login-link");


window.onload= function(){
    let check = document.getElementById("checkButton");
     check.onclick  = function(){
        let sbmt = document.getElementById("form1");
         if(check.checked){
         sbmt.submit.disabled= false;
         }else{
            sbmt.submit.disabled = true;
         }
     }
 }

hide.forEach(icon=>{
    icon.addEventListener("click",()=>{
        passwords.forEach(password=>{
if (password.type === "password"){
    password.type = "text";
    hide.forEach(icon=>{
        icon.classList.replace("uil-eye-slash","uil-eye")
    })
}else{
    password.type = "password";
    hide.forEach(icon=>{
        icon.classList.replace("uil-eye","uil-eye-slash")
    })
}
        })
    })
})

signUp.addEventListener("click",()=>{
    container.classList.add("active");
});

loginLink.addEventListener("click",()=>{
        container.classList.remove("active");
    })

   