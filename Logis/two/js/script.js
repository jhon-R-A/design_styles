let btn = document.getElementById('btn-check');
let input = document.getElementById('password');

btn.addEventListener('click',(e)=>{
    if(btn.checked){
        input.type = 'text'
    }else{
        input.type = 'password'
    }
})