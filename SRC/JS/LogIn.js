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

    if ($UserInpt.value === localStorage.getItem('UserName') && $PasswordInpt.value === localStorage.getItem('Password')) {
        _setInfo();
        $Alert.textContent = 'Verifyng data...';
        $Alert.style.color = 'yellow';

        setTimeout(() => {
            _setInfo();
            $Alert.style.color = 'green';
            $Alert.textContent = 'Correct data, please wait...'
            setTimeout(() => {
                document.location.href = '/SRC/HTML/index.html';
            }, 2000);
        }, 5000);

        
    } else {
        _setInfo();
        $Alert.textContent = 'Verifyng data...';
        $Alert.style.color = 'yellow';
        setTimeout(() => {
            _setInfo();
            $Alert.style.color = 'red';
            $Alert.textContent = 'Incorrect Information, Please try again...';
        }, 5000);
    }

});