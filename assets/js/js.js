let state=0
document.addEventListener('DOMContentLoaded', function () {

    const btn= document.querySelector(".btn");
    const newsletter =document.querySelector(".newsletter");
    const modal =document.querySelector(".btn_modal");
    const email=document.querySelector('#email')
    const msgError=document.querySelector('#msgError')
    const confirm=document.querySelector('.confirm')
    const dismiss=document.querySelector('.btn__dismiss')



    modal.addEventListener('click',function(){
        newsletter.style.display='flex';
        
        
    });
    function pruebaemail (valor){
        let re=new RegExp('^(.+)@(\\S+)$');
        if(!re.exec(valor)){
            return false;
         } else{return true;
        }
    }

    function validarCorreo(correo) {
        // Expresión regular para validar el formato de correo electrónico
        const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Comprobar si el correo coincide con el patrón
        return patronCorreo.test(correo);
    }
    

    btn.addEventListener('click',function(){

        if (validarCorreo(email.value)){
            
            newsletter.style.display='none';
            confirm.style.display='flex';

           
        }else{
            msgError.innerHTML="Correo no válido";
            window.alert('error');
            
        }


        
    })

   

    dismiss.addEventListener('click',function(){
        confirm.style.display='none';
    })

   

    

})