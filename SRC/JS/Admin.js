const $UserInpt = document.getElementById('UserNameInpt');
const $EmailInpt = document.getElementById('EmailInpt');
const $PasswordInpt = document.getElementById('PasswordInpt'); 
const $Button = document.getElementById('btn');
const $Alert = document.getElementById('Alert');

$Button.addEventListener('click', ()=>{

    if ($UserInpt.value === localStorage.getItem('UserName') && $PasswordInpt.value === localStorage.getItem('Password')) {
        localStorage.clear();
        alert('CUENTA ELIMINADA');   
    }
})