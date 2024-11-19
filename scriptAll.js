const opciones = document.getElementById('lista_opciones');

//crear fargmento
let fragmen = document.createDocumentFragment();

opciones.addEventListener('click',(e)=>{
    let opc = e.target.id;

    //seleciono el contenedor para agregar el fragmento
    let container = document.getElementById('card_container');
    //limpiamos le contenido 
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    //creo el fragmeento
    let res = crearCard(opc)
    //agrego el fargmento al contenedor
    container.appendChild(res);
});

const crearCard = (opc)=>{
    let respuesta;

    if(opc == "login"){
        respuesta = crearCardLogin();
    }else if(opc == "nabvar"){
        crearCardNabvar()
    }

    return respuesta;
}

//funcion para administar los disenos de login
const crearCardLogin = ()=>{
    const listasImagenes = ["login_1.png","login_2.png"]//lista de las imganes
    const listasTexto = ["login uno","login dos"]//listas del texto descriptivo
    const listaPaginas = ["first","two"]//lista de las paginas (nombres de carpetas)

    const rutaImg = "./imgAll/";//ruta de las imagenes principales
    const rutaPaginas = "./Logis/"//ruta de las paginas 

    for(let i=0; i < listaPaginas.length;i++){
        
        const card = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');
        const a = document.createElement('a')
        const textoBtn = document.createTextNode("IR");

        card.classList.toggle("section_1__card");
        img.classList.toggle("section_1__card_img");

        img.src = rutaImg+listasImagenes[i];
        const texto = document.createTextNode(listasTexto[i])
        p.appendChild(texto);
        a.href = rutaPaginas+listaPaginas[i]+"/index.html";
        a.target = "_blank";
        a.appendChild(textoBtn);
        card.appendChild(img);
        card.appendChild(p);
        card.appendChild(a);
        fragmen.appendChild(card);  
    }

    return fragmen;
}

const crearCardNabvar = ()=>{
}