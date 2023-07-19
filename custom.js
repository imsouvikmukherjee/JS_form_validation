const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const checkme = document.querySelector('#checkme');
const submit = document.querySelector('#submit');

const resultname = document.querySelector('#resultname');
const resultemail = document.querySelector('#resultemail');
const resultchecked = document.querySelector('#resultchecked');
const error = document.querySelector('#error');
const errorsection = document.querySelector('#errorsection');

const div = document.createElement('div');
div.setAttribute('class', 'spinner-border');
div.setAttribute('role', 'status');

const span = document.createElement('span');
span.setAttribute('class','visually-hidden');

div.appendChild(span);



submit.addEventListener('click', function(e){
    e.preventDefault();

    if(fullname.value.trim() === "" || typeof fullname.value === 'number'){
        validateMsg('Please provide a valid name')
    }else if(email.value.trim() === "" || !isValidEmail(email.value)){
        validateMsg('Please provide a valid email')

    } else if(password.value === "" || password.value.length < 6 || password.value.length > 20){
        validateMsg('Please provide a valid password');
       
    }else if(cpassword.value === "" || password.value != cpassword.value){
        validateMsg('Password and confirm password does not match');
        
    } else if(!checkme.checked){
        validateMsg('Checkbox must be checked');

    }else{
        submit.innerHTML= '';
        submit.setAttribute('disabled',true);
        submit.appendChild(div);

       setTimeout(function(){

        submit.innerHTML = 'Submit';
        submit.removeAttribute('disabled');


        resultname.innerHTML = fullname.value;
        resultemail.innerHTML = email.value;
        resultchecked.innerHTML = true;
        
        validateMsg('Registration successfully');
        
        document.querySelector('#form').reset()
       }, 2000)
          
    }
})
    
    function validateMsg(msg){
        if(msg === 'Registration successfully'){
            error.innerHTML =` ${msg}`;
            error.setAttribute('class','text-center alert alert-success');
            

        }else{
            error.innerHTML =` ${msg}`;

            error.setAttribute('class','text-center alert alert-danger')

        }
    }

    function isValidEmail(email) {
        
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }



