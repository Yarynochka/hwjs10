// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//  let text=document.getElementById('text');
// console.log(text);
//
// text.onclick=function (e){
//     console.log('click on div');
//     text.style.visibility='hidden';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let arr = [];
// let f1 = document.forms.f1;
// f1.onsubmit = function (e2) {
//     e2.preventDefault();
//     let userAgeInput = f1.userAge;
//     let userAge = userAgeInput.value;
//     let user = {
//         userAge: userAge,
//     }
// if (userAge>=18){
//     arr.push(user);
//     console.log(user);
// }
//     else {
//         console.log('you are too young');
// }};



// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//  Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let arr=[];
// let f1=document.forms.f1;
// let f2=document.forms.f2;
// let sbmt = document.getElementById('submit');
// sbmt.onclick = function (e){
//     e.preventDefault();
//     let userNameInput=f1.username;
//     let userEmailInput = f1.email;
//     let userAgeInput = f2.age;
//     let userCarInput = f2.car;
//
//     let userName=userNameInput.value;
//     let userEmail = userEmailInput.value;
//     let userAge = userAgeInput.value;
//     let userCar = userCarInput.value;
//
//     let user={
//         userName: userName,
//         userAge: userAge,
//         userEmail: userEmail,
//         userCar: userCar,
//     }
//     arr.push(user);
//     console.log(user);
// };


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)



// let f1 = document.forms.f1;
// f1.onsubmit = function (e){
//     e.preventDefault();
//     let row=f1.rowCount.value;
//     let column=f1.columnCount.value;
//     let text = f1.text1.value;




