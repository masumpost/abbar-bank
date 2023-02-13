document.getElementById('login-btn').addEventListener('click', function(){
    let mailBox = document.getElementById('mail-input');
    let mail = mailBox.value;
    let passBox = document.getElementById('pass-input');
    let pass = passBox.value;
    if(mail === 'baper@bank.com' && pass === 'subbas'){
        window.location.href = "main.html";
    }
    else{
        alert('shame!! forget your bank ac');
    }
})