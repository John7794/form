// function getElementById(id) {
//     return document.getElementById(id);
// }
// function submitForm(e) {
//     e.preventDefault();
//     var errs = [];
//     for (var i = 0; i < len; i++) {
//         if (i === 5 || i === 6 || i === 8) {
//             validateEmptyList(inputs[i].parentElement, [ inputs[i], true ]);
//         }
//         else {
//             validateForm.apply(inputs[i]);
//         }
//         if (this.getElementsByClassName('err-msg')[i].textContent) {
//             errs.push(this.getElementsByClassName('err-msg')[i].textContent);
//         }
//     }
//     if (errs.length) {
//         return false;
//     }
//     else {
//         alert('Ваша заявка прийнята!');
//         return true;
//     }

// }

// function validate(i, arg) {
//     if (arg) {
//         console.log(i, arg);
//         return { validate: validate };
//     }
//     else {
//         throw new Error('error');
//     }
// }
// // // try {
// // //     validate(1, 'msg1').validate(2, '').validate(3, 'msg1').validate(4, 'msg4');
// // // }
// // // catch (e) {
// // //     console.log(e.message);
// // // }

// function validateForm(e) {
//     if(this.getElementsByTagName('input')[0] && !this.getElementsByTagName('input')[0].getAttribute('readonly')) {
//         this.value = this.value.trim();
//     }

//     if (this.value === '') {
//         this.classList.add('error');
//         this.parentElement.getElementsByClassName('err-msg')[0].textContent = errEmptyFieldMsg[inputsArray.indexOf(this)];    
//     }
//     else if (
//         (
//             this.id === 'name-report' ||
//             this.id === 'theme-report' ||
//             this.id === 'job') &&
//         (
//             this.value.match(/^[^абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ]+$/) ||
//             (
//                 this.value.match(/^[^абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ]+$/) &&
//                 this.value.match(/^[a-zA-Z0-9\-—\(\)":;,. ]+$/)
//             ) ||
//             this.value.match(/[~!@#№$%^&\*_\+=\\|/\[\]><\?']+/)
//         )
//         ) {
//         this.classList.add('error');
//         this.parentElement.getElementsByClassName('err-msg')[0].textContent = 'Дозволено вводити тільки символи українського та латинського алфавіту, а також римські та арабські цифри';
//     }
//     else if (
//         (this.id === 'surname' ||
//         this.id === 'name' ||
//         this.id === 'patronymic') &&
//         !this.value.match(/^[абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ\-]+$/)
//     ) {
//         this.classList.add('error');
//         this.parentElement.getElementsByClassName('err-msg')[0].textContent = 'Дозволено вводити тільки символи українського алфавіту';
//     }
//     else if (this.id === 'address' &&
//             !this.value.match(/.{2,}, .{2,}, .{2}/)
//         ) {
//         this.classList.add('error');
//         this.parentElement.getElementsByClassName('err-msg')[0].textContent = 'Вкажіть Ваше місто, регіон та країну за таким взірцем: Дрогобич, Львівська, Україна)';
//     }
//     else if (
//         this.id === 'phone' &&
//         !this.value.match(/\d*/)[0]) {
//         this.classList.add('error');
//         this.parentElement.getElementsByClassName('err-msg')[0].textContent = 'Дозволено вводити тільки цифри';
//     }
//     else if (
//         this.id === 'email' &&
//         !this.value.match(/[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]+/)
//     ) {
//         this.classList.add('error');
//         this.parentElement.getElementsByClassName('err-msg')[0].textContent = 'Введіть коректний формат Вашої електронної скриньки';
//     }
//     else {
//         this.classList.remove('error');
//         this.parentElement.getElementsByClassName('err-msg')[0].textContent = '';
//     }
//     var child = this.parentElement.children;
//     var len = child.length;
//     for (var i = 0; i < len; i++) {
//         child[i].onclick = function(e) {
//             e['_' + this.id] = this.id;
//             child[1].classList.remove('error');
//             child[2].textContent = '';
//         };
//     }
// }
// function inputField() {
//     this.classList.remove('error');
//     this.parentElement.getElementsByClassName('err-msg')[0].textContent = '';
// }
// function getList(e) {
//     this.parentElement.getElementsByClassName('list')[0].classList.toggle('d-none');
//     this.getElementsByClassName('arrow')[0].classList.toggle('rotated');

//     var input = this.getElementsByTagName('input')[0];
//     var items = this.parentElement.getElementsByClassName('list')[0].getElementsByTagName('li');
//     var lenItems = items.length;

//     if (this.getElementsByTagName('input')[0].id === 'degree') {
//         e._degree = true;
//     }
//     if (this.getElementsByTagName('input')[0].id === 'rank') {
//         e._rank = true;
//     }
//     if (this.getElementsByTagName('input')[0].id === 'job-post') {
//         e._post = true;
//     }
    
//     for (var i = 0; i < lenItems; i++) {
//         items[i].onclick = function() {
//             input.value = this.textContent;
//             input.classList.remove('error');
//             this.parentElement.previousElementSibling.textContent = '';
//         };
//     }

//     validateEmptyList(this);
// }
// function validateEmptyList(parent, bool) {
//     var child = parent.children;
//     var len = child.length;
//     for (var i = 0; i < len; i++) {
//         if (bool) {
//             if (!child[1].value) {
//                 child[1].classList.add('error');
//                 parent.nextElementSibling.getElementsByClassName('err-msg')[0].textContent = errEmptyFieldMsg[inputsArray.indexOf(child[1])];
//             }
//             else {
//                 child[1].classList.remove('error');
//                 parent.nextElementSibling.getElementsByClassName('err-msg')[0].textContent = '';
//             }
//         }

//         child[i].onclick = function(e) {
//             if (!child[1].value) {
//                 child[1].classList.add('error');
//                 parent.nextElementSibling.getElementsByClassName('err-msg')[0].textContent = errEmptyFieldMsg[inputsArray.indexOf(child[1])];
//             }
//             console.log(child[i]);
//         };
//         // child[i].onclick = function() {
//         //     child[1].classList.remove('error');
//         //     parent.nextElementSibling.getElementsByClassName('err-msg')[0].textContent = '';
//         // };
//     }
// }
// function loop(elm) {
//     var list = document.getElementsByClassName('list');
//     var lenList = list.length;
//     if (typeof elm === 'number') {
//         for (var i = 0; i < lenList; i++) {
//             if (i === elm) {
//                 continue;
//             }
//             else {
//                 list[i].classList.add('d-none');
//                 list[i].parentElement.parentElement.getElementsByClassName('arrow')[0].classList.remove('rotated');
//             } 
//         }
//     }
//     else {
//         for (var i = 0; i < lenList; i++) {
//             list[i].classList.add('d-none');
//             list[i].parentElement.parentElement.getElementsByClassName('arrow')[0].classList.remove('rotated');
//         }
//     }
// }
// function hiddenList(e) {
//     if (e._degree) {
//         loop(0);
//     }
//     if (e._rank) {
//         loop(1);
//     }
//     if (e._post) {
//         loop(2);
//     }
//     if (!e._degree && !e._rank && !e._post) {
//         loop();
//     }
// }

// var errEmptyFieldMsg;
// if (!location.pathname.match(/^\/en/)) {
//         errEmptyFieldMsg = [
//         'Вкажіть назву Вашої доповіді',
//         'Вкажіть тему Вашої доповіді',
//         'Вкажіть Ваше прізвище',
//         'Вкажіть Ваше ім\'я',
//         'Вкажіть Ваше ім\'я по батькові',
//         'Вкажіть Ваш науковий ступінь',
//         'Вкажіть Ваше вчене звання',
//         'Вкажіть Ваше місце роботи',
//         'Вкажіть Вашу посаду',
//         'Вкажіть Вашу адресу проживання',
//         'Вкажіть Ваш телефон',
//         'Вкажіть Ваш Email',
//         'Завантажте Вашу тезу доповіді',
//     ];
// }
// else {
//     errEmptyFieldMsg = [
//         'Please, enter the name of your report',
//         'Please, enter the topic of your report',
//         'Please, enter your surname',
//         'Please, enter your name',
//         'Please, enter your patronymic',
//         'Please, select your scientific degree',
//         'Please, select your Academic rank',
//         'Please, enter your place of work or study',
//         'Please, select your position',
//         'Please, enter your residential address',
//         'Please, enter your phone',
//         'Please, enter your Email',
//         'Please, load your report',
//     ];
// }
// var inputs = document.getElementsByTagName('input');
// var textInputs = [
//     getElementById('name-report'),
//     getElementById('theme-report'),
//     getElementById('surname'),
//     getElementById('name'),
//     getElementById('patronymic')
// ];
// var numericInput = getElementById('phone');
// var arrows = document.getElementsByClassName('arrow');
// var inputsArray = [];
// var len = inputs.length;
// var textLen = textInputs.length;
// var arrowLen = arrows.length;

// for (var i = 0; i < len; i++) {
//     inputsArray.push(inputs[i]);
// }
// for (var i = 0; i < len; i++) {
//     if (i === 5 || i === 6 || i === 8) {
//         inputsArray[i].parentElement.onclick = getList;
//     }
//     else {
//         inputsArray[i].onclick = validateForm;
//         inputsArray[i].oninput = inputField;
//     }
// }

// onclick = hiddenList;

// document.getElementsByTagName('form')[0].onsubmit = submitForm;