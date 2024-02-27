const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Show input error msg
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check email is valid or not
function checkemail(input){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;    ;
    // return re.test(String(email).toLowerCase());
    if (re.test(input.value.toLowerCase())){
        showSuccess(input);
        console.log(input.value);
    }else {
        showError(input,`${getFieldName(input)} is not valid`)
    }
}

// check required field
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if (input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`)
        }else if (input == username){
            checkLength(input, 3,15);
        }else if (input == password || input == password2){
            checkLength(input, 6,12);
        }
        else if (input == email){
            checkemail(input);
        }
    });
}

//Get Fieldname
function getFieldName(input){
    i = input.id
    c = i[0].toUpperCase() + i.slice(1)
    return c;
}

// check length
function checkLength(input, min, max){
    if (input.value.length > 1 && input.value.length < min){
        showError(input,`${getFieldName(input)} must be ${min} charecters `);
    }
    else if (input.value.length > 1 && input.value.length > 15){
        showError(input,`${getFieldName(input)} must be under ${max} charecters`);
    }
    else{
        showSuccess(input);
        console.log(input.value);
    }
}

// check password match
function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,`${getFieldName(input2)} is not mached`)
    }
}

// function onblurrr(){
//     checkRequired([username,email,password,password2]);
// }


// Event Lisner
form.addEventListener('submit', function(e){
    e.preventDefault();

    // checkLength(username, 3,15)
    // checkLength(password, 6,12)
    // checkLength(password2, 6,12)
    checkRequired([username,email,password,password2]);
    // checkemail(email)
    checkPasswordMatch(password,password2)

});


// ------------- lenthy code ---------------
// Event Lisner
// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     if (username.value === ''){
//         showError(username,'Username is Required...')
//     }
//     else{
//         showSuccess(username)
//     }
    
//     if (email.value === ''){
//         showError(email,'Email is Required...')
//     }
//     else if (!checkemail(email.value)){
//         showError(email,'Email is not Valid.')
//     }
//     else{
//         showSuccess(email)
//     }
    
//     if (password.value === ''){
//         showError(password,'Password is Required...')
//     }
//     else{
//         showSuccess(password)
//     }
    
//     if (password2.value === ''){
//         showError(password2,'Password2 is Required...')
//     }
//     else{
//         showSuccess(password2)
//     }

// })
// ------------- lenthy code ---------------
