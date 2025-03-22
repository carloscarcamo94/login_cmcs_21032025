const inputUser = document.getElementById('input-usuario');
const inputPassword = document.getElementById('input-contra');
const form = document.getElementById('login');

function userVerify(user,password){
    if(user=== 'Admin' && password=== 'Admin'){
        alert("Las credenciales son correctas!");
    } else if(user=== '' && password=== '') {
        alert("No puedes dejar los campos vacíos!!");
    } else if(user=== '') {
        alert("No puedes dejar el campo del usuario vacío!!")
    } else if(password=== '') {
        alert("No puedes dejar el campo de la contraseña vacío!!")
    } else {
        alert("Las credenciales son incorrectas!!")
    }
}

form.addEventListener('submit',(event) => {
    event.preventDefault();

    const user = inputUser.value;
    const password = inputPassword.value;

    userVerify(user,password);
});
