const inputUser = document.getElementById('input-usuario');
const inputPassword = document.getElementById('input-contra');
const form = document.getElementById('login');

function userVerify(user,password){
    if(user=== 'Admin' & password=== 'Admin'){
        print("Las credenciales son correctas!");
    } if(user=== '' & password=== '') {
        print("No puedes dejar los campos vacíos!!");
    } if(user=== '') {
        print("No puedes dejar el campos del usuario vacío!!")
    } if(password=== '') {
        print("No puedes dejar el campos de la contraseña vacío!!")
    } 
}

form.addEventListener('input',() => {
    const user = inputUser.value;
    const password = inputPassword.value;
    
});

form.onsubmit()