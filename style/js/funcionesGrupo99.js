
const pasword=document.getElementById('Pasword');
const email=document.getElementById('Email');
const labelemail=document.getElementById('emailfor')
const labelpasword=document.getElementById('paswordfor')
const btn=document.getElementById('btn-registrarse');
const btn2=document.getElementById('btn-login')
const arroba="@"
const com=".com"


//campos del formulario de registro
document.addEventListener('DOMContentLoaded',()=>{

btn.disabled=true;
btn.style.opacity="0.5"

btn2.disabled=true;
btn2.style.opacity="0.5"

})

btn2.addEventListener('click',(e)=>{
    e.preventDefault;
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Te logueaste correctamente',
        showConfirmButton: false,
        timer: 2500
      })
      setTimeout(() => {
          
      window.location.href="www.google.com";
      }, 2700);    

})
const nombre=document.getElementById('nombre');
const labelnombre=document.getElementById('nombrefor');
const apellido=document.getElementById('apellido');
const labelapellido=document.getElementById('apellidofor');
const paswordregistro=document.getElementById('paswordres');
const paswordlabel=document.getElementById('paswordresla');
const emailregistro=document.getElementById('emailres');
const emaillabel=document.getElementById('emailresla');

btn.addEventListener('click',(e)=>{
e.preventDefault;
Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Te registrate correctamente',
    showConfirmButton: false,
    timer: 2500
  })
  setTimeout(() => {
      
  window.location.href="www.google.com";
  }, 2700);
})
email.addEventListener('input',(e)=>{
const resultado=e.target.value;
validarlogin()
if(resultado.length<=2){
    validarlogin()
email.style.borderColor='red';
email.style.borderStyle="solid";
labelemail.textContent="Error en el email debe tener mas de dos caracteres";
}
else if(resultado.length>=3 ){
    if (resultado.includes(com) ==false && resultado.includes(arroba)==false) {
        
        email.style.borderColor='red';
        email.style.borderStyle="solid";
        labelemail.textContent="Email invalido";
        validado()
    }
    
    if(resultado.includes(com) ==true && resultado.includes(arroba)==true){
    
        email.style.borderStyle="none";
        labelemail.textContent="";
        validado()
    
    }
    
    }
    



else{
    email.style.borderStyle="none";
    labelemail.textContent="";
    validarlogin()
}
})


pasword.addEventListener('input',(e)=>{
    const resultado=e.target.value;
    if(resultado.length<=2){
        validarlogin()
    pasword.style.borderColor='red';
    pasword.style.borderStyle="solid";
    
labelpasword.textContent="Error en el pasword, debe tener mas de dos caracteres";

    }
    else{
        validarlogin()
        pasword.style.borderStyle="none";
        
labelpasword.textContent="";

    }
    })


    nombre.addEventListener('input',(e)=>{
        const resultado=e.target.value;
        console.log(resultado)
        if(resultado.length<=2){
        
        nombre.style.borderColor='red';
        nombre.style.borderStyle="solid";
        labelnombre.textContent="Error en el nombre debe tener mas de dos caracteres";
        validado()
        }
        else{
            nombre.style.borderStyle="none";
            labelnombre.textContent="";
            validado()
        }
        })

        
    apellido.addEventListener('input',(e)=>{
        const resultado=e.target.value;
        if(resultado.length<=2){
        
        apellido.style.borderColor='red';
        apellido.style.borderStyle="solid";
        labelapellido.textContent="Error en el apellido debe tener mas de dos caracteres";
        validado()
        }
        else{
            apellido.style.borderStyle="none";
            labelapellido.textContent="";
            validado()
        }
        })


        paswordregistro.addEventListener('input',(e)=>{
            const resultado=e.target.value;
            if(resultado.length<=2){
            
            paswordregistro.style.borderColor='red';
            paswordregistro.style.borderStyle="solid";
            paswordlabel.textContent="Error en el pasword debe tener mas de dos caracteres";
            validado()
            }
            else{
                paswordregistro.style.borderStyle="none";
                paswordlabel.textContent="";
                validado()
            }
            })

            
        emailregistro.addEventListener('input',(e)=>{
            const resultado=e.target.value;
           
            if(resultado.length<=2){
            
            emailregistro.style.borderColor='red';
            emailregistro.style.borderStyle="solid";
            emaillabel.textContent="Error en el email debe tener mas de dos caracteres";
            
            validado();

            
            }

            else if(resultado.length>=3 ){
if (resultado.includes(com) ==false && resultado.includes(arroba)==false) {
    
    emailregistro.style.borderColor='red';
    emailregistro.style.borderStyle="solid";
    emaillabel.textContent="Email invalido";
    validado()
}

if(resultado.includes(com) ==true && resultado.includes(arroba)==true){

    emailregistro.style.borderStyle="none";
    emaillabel.textContent="";
    validado()

}

}
            else{
                emailregistro.style.borderStyle="none";
                emaillabel.textContent="";
                validado()
            }
            })
            const validado=()=>{
if(emailregistro.value!="" && paswordregistro.value!="" && nombre.value!="" && apellido.value !=""){
   
   if(emailregistro.value.length>2 && paswordregistro.value.length>2 && nombre.value.length>2 && apellido.value.length>2){
    if(emailregistro.value.includes(com) && emailregistro.value.includes(arroba)){
    btn.disabled=false;
    btn.style.opacity="1"
   }}
   else{
    btn.disabled=true;
   }
    
    
}
            }
const validarlogin=()=>{
    if(email.value !="" && pasword.value !="" ){
        

        if(email.value.length>2 && pasword.value.length>2){
            
            if(email.value.includes(com) && email.value.includes(arroba)){
    btn2.disabled=false;
    btn2.style.opacity="1"
        }}
        
   else{
    btn.disabled=true;
   }
    }
}

console.log(email.textContent);