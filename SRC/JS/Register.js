const $UserInpt = document.getElementById('UserNameInpt');
const $EmailInpt = document.getElementById('EmailInpt');
const $PasswordInpt = document.getElementById('PasswordInpt'); 
const $Button = document.getElementById('btn');
const $Alert = document.getElementById('Alert');
const Error1 = 'The user already have an account on this device.';

$Button.addEventListener('click', ()=>{
    
    const _setInfo = ()=>{
        $Alert.style.display = 'block';
    };

    const _setUserName = ()=>{
        localStorage.setItem('UserName', $UserInpt.value);
        console.warn('UserName has been choiced: ' + localStorage.getItem('UserName'));
    };
    
    const _setEmail = ()=>{
        localStorage.setItem('UserEmail', $EmailInpt.value);
        console.warn('User Email has been choiced: ' + localStorage.getItem('UserEmail'));
    };

    const _setPassword = ()=>{
        localStorage.setItem('Password', $PasswordInpt.value);
        console.warn('¡The User Password has been selected!');
    };

    if ($UserInpt.value === '' || $EmailInpt.value === '' || $PasswordInpt.value === '') {
        _setInfo();
        $Alert.textContent = "Empty Fields...";
    } else if( !localStorage.getItem('UserName')|| !localStorage.getItem('UserEmail') || !localStorage.getItem('Password') ){
            _setUserName();
            _setEmail();
            _setPassword();
            _setInfo();
            $Alert.style.color = 'green'
            $Alert.textContent = '¡Account Created!'
    } else {
        _setInfo();
        $Alert.style.color = 'red'
        $Alert.textContent = '¡ERROR: You Already have an account!';
        console.error('ERROR: ' + Error1);
    }

});