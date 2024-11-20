const mostrar = document.getElementById("password"),
      icon = document.querySelector(".mostrar");


icon.addEventListener("click", e => {
    if(mostrar.type === "password"){
        mostrar.type = "text";
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye');
    }else{
        mostrar.type = "password";
        icon.classList.add('fa-eye-slash');
        icon.classList.remove('fa-eye');
    }
});      