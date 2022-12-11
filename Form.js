console.log("project");
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// console.log(name , email , phone);
name.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;
    let str = name.value;
    if (regex.test(str)) {
        // console.log("match")  ;
        name.classList.remove('is-invalid');
    }
    else {
        // console.log("invalid")  ;
        name.classList.add('is-invalid');
    }
});
email.addEventListener('blur', () => {
    let regex = /^([A-Za-z0-9]+)@gmail\.com$/;
    let str = email.value;
    if (regex.test(str)) {
        // console.log("match")  ;
        email.classList.remove('is-invalid');
    }
    else {
        // console.log("invalid")  ;
        email.classList.add('is-invalid');
    }
});
phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        // console.log("match")  ;
        phone.classList.remove('is-invalid');
    }
    else {
        // console.log("invalid")  ;
        phone.classList.add('is-invalid');
    }
});
let  submit = document.getElementById('submit');
submit.addEventListener('click',()=>{

});