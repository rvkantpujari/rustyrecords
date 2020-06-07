let submitBtn = document.getElementById('submitBtn');
const form = document.forms[0];

const inpName = document.getElementById('inpName');
const inpEmail = document.getElementById('inpEmail');
const inpPswrd = document.getElementById('inpPswrd');
const inpCnfPswrd = document.getElementById('inpCnfPswrd');

form.addEventListener('submit', (e) => 
{
    let err_msgs = []; // To store the list of error messages.
    // To validate Email in Login and SignUp form
    if(inpEmail.value === '' ||  inpEmail.value === null){
        err_msgs.push('Email is required.');
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inpEmail.value)==false)
    {
        err_msgs.push('Invalid email entered.');
    }
    // To validate Password in Login and SignUp form
    if(inpPswrd.value === '' ||  inpPswrd.value === null){
        err_msgs.push('Password is required.');
    }
    else if(inpPswrd.value.length<8){
        err_msgs.push('Password must be minimum 8 characters long.');
    }
    if(submitBtn.value==='SignUp')
    {
        inpName.value = inpName.value.trim();
        // To validate Name in SignUp form
        if(inpName.value === '' ||  inpName.value === null){
            err_msgs.unshift('Name is required.');
        }
        else if((/^[a-zA-Z ]*$/).test(inpName.value)==false){
            err_msgs.unshift('Only alphabets are allowed in Name field.');
        }
        else if(inpName.value.length < 3){
            err_msgs.unshift('Name must be minimum 3 characters long.');
        }
        // To validate Confirm Password
        if(inpCnfPswrd.value === '' ||  inpCnfPswrd.value === null){
            err_msgs.push('Confirm Password is required.');
        }
        else if(inpPswrd.value !== inpCnfPswrd.value){
            err_msgs.push('Password doesn\'t match with Confirm Password field.');
        }
    }
    if(err_msgs.length > 0){
        e.preventDefault();
        alert(err_msgs.join("\n"));
    }
});