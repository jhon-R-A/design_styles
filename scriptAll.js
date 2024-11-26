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
    let res = selecionarCard(opc)
    //agrego el fargmento al contenedor
    container.appendChild(res);
});

//funcion para invocar la creacion de la card, en fusion a la opcion
const selecionarCard = (opc)=>{
    /* agregar al array respetido de cada diseño los datos para crear las cards*/
    let respuesta;

    if(opc == "login"){

        const listasImagenes = [
            "login_1.png",
            "login_2.png",
            "login-an.png"
        ]//lista de las imganes
        
        const listasTexto = [
            "login uno",
            "login dos",
            "login tres"
        ]//listas del texto descriptivo
        
        const listaPaginas = [
            "first",
            "two",
            "login_An"
        ]//lista de las paginas (nombres de carpetas)
        
        const rutaImg = "./imgAll/";//ruta de las imagenes principales
        const rutaPaginas = "./Logis/"//ruta de las paginas 

        respuesta = crearCard(listasImagenes,listasTexto,listaPaginas,rutaImg,rutaPaginas);

    }else if(opc == "nabvar"){

        const listasImagenes = [
            "nabvar_1.png"
        ]//lista de las imganes
        const listasTexto = [
            "nabvar uno"
        ]//listas del texto descriptivo
        const listaPaginas = [
            "first"
        ]//lista de las paginas (nombres de carpetas)
        
        const rutaImg = "./imgAll/";//ruta de las imagenes principales
        const rutaPaginas = "./Nabvar/"//ruta de las paginas 
        respuesta = crearCard(listasImagenes,listasTexto,listaPaginas,rutaImg,rutaPaginas);

    }else if(opc == "sidebar"){
        respuesta = crearCard();
    }else if(opc == "footer"){
        respuesta = crearCard();
    }

    return respuesta;
}

//funcion para administar los disenos de login
const crearCard = (listasImagenes,listasTexto,listaPaginas,rutaImg,rutaPaginas)=>{

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