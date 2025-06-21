
document.getElementById("btn-login").addEventListener("click",function(){
    console.log("js loaded...");
    const username = document.getElementById("emailId").value;
const password = document.getElementById("passwordId").value;

//valid username and passwords

const validUsername = 'admin';
const validPassword = '1234';

if(username===validUsername &&password===validPassword){
            const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
        });
        Toast.fire({
        icon: "success",
        title: "Signed in successfully"
        });
    window.location.href = 'place_order.html';//redirect to the home page 
}else{
            Swal.fire({
        icon: "error",
        title: "oh!",
        text: "Incorect login!",
        footer: '<a href="#">Why do I have this issue?</a>'
        });
}

});