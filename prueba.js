/* const fs = require('fs') */

 const inputTexto = document.querySelector(".input-texto");
 const mensaje = document.querySelector(".mensaje");
 const noHayTexto = document.querySelector('.sinTexto');
 const botonCopiar = document.querySelector('.copiar')

// ENCRIPTAR
function botonEncriptar(){
   var textoEncrip  = encriptar(inputTexto.value);
    mensaje.style.backgroundImage = 'none';
    inputTexto.value = '';
    noHayTexto.hidden = true;
    return mensaje.value = textoEncrip;
}


function encriptar(text) {
text = text.toLowerCase();
var nueva = text.split('')
    for (let i = 0; i < nueva.length; i++) {
        if(nueva[i] == 'e'){
            nueva[i] = 'enter'
        }
         else if(nueva[i] == 'i'){
            nueva[i] = 'imes'
        }
        else if(nueva[i] == 'a'){
            nueva[i] = 'ai'
        }
        else if(nueva[i] == 'o'){
            nueva[i]= 'ober'
        }
        else if(nueva[i] == 'u'){
            nueva[i] = 'ufat'
        } 
    }     
    return nueva.join('');
}


//DESENCRIPTAR

function botonDesEncriptar(){
   var textoEncrip  = desencriptar(inputTexto.value);
    mensaje.style.backgroundImage = 'none';
    inputTexto.value = '';
    noHayTexto.hidden = true;
    return mensaje.value = textoEncrip;
}

function desencriptar(text) {
    text = text.toLowerCase()
    var matriz = [['a' , 'ai'],['e' , 'enter'],['i', 'imes'],['o' , 'ober'],['u' , 'ufat']]
        for (let i = 0; i < matriz.length; i++) {
            console.log(text[i])
            if(text.includes(matriz[i][1])){
                text = text.replaceAll(matriz[i][1] , matriz[i][0])
            }
        }     
        return text
    }



    // COPIAR

    function botoncopiar(){
        mensaje.select();
        document.execCommand('copy');
    }