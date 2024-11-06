const inputPassword = document.getElementById('password');
const mostrar = document.getElementById('mostrar');

mostrar.addEventListener('click', (e)=>{
    if(mostrar.checked){
        inputPassword.type = 'text';
    }else{
        inputPassword.type = 'password'
    }
});