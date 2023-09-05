// const email = document.querySelector("#email")
// const ul = document.querySelector("#ul-input")
// // const p = document.querySelector("p")
// let arr = [];
// function submit(){
//     arr.push(email.value)
//     console.log(arr)
//     email.value = "";
// }

// const todo = document.querySelector("#todo")
// const li = document.querySelector("li")

// function submit(){ 
//     li.innerHTML= ""
//     for (let i = 0; i < li.length; i++) {
//         const element = array[i];
//         li.innerHTML= (todo.value);
        
//     }
//     console.log(todo.value)
//     todo.value = "";
// }



// const input = document.querySelector('.todoweb');
// const ul = document.querySelector('ol');


// let todo = [];
// function addTodo(e) {
//     e.preventDefault();
//     ul.innerHTML = ''
//     todo.push(input.value);
//     console.log(todo);
//     for (let i = 0; i < todo.length; i++) {
//         ul.innerHTML = ul.innerHTML + `<li>${todo[i]}</li>
//          <button onclick='deleteTodo(${i})'>Delete</button>
//           <button onclick='editTodo(${i})'>Edit</button>`
//     }
//     input.value = '';
// }


// function deleteTodo(index) {
//     ol.innerHTML = '';
//     // console.log(index);
//     todo.splice(index, 1);
//     for (let i = 0; i < todo.length; i++) {
//         // console.log(todo[i]);
//         ul.innerHTML = ul.innerHTML + `<li>${todo[i]}</li>
//          <button onclick='deleteTodo(${i})'>Delete</button>
//           <button onclick='editTodo(${i})'>Edit</button>`
//     }
// }
// function editTodo(index) {
//     ol.innerHTML = '';
//     let userValue = prompt('Enter edited value');
//     todo.splice(index, 1 , userValue);
//     for (let i = 0; i < todo.length; i++) {
//         // console.log(todo[i]);
//         ol.innerHTML = ol.innerHTML + `<li>${todo[i]}</li>
//          <button onclick='deleteTodo(${i})'>Delete</button>
//           <button onclick='editTodo(${i})'>Edit</button>`
//     }
//     console.log(todo)
// }























// color change
// const div = document.querySelector("div")
// const body = document.querySelector("body")
// const color = ["red" , "blue" , "green" , "yellow" , "orange"]

// for (let i = 0; i < color.length; i++) {
            // div.innerHTML += `<button onclick = changecolor(${i})> ${color[i]} </button>`    
// }

// function changecolor (i){
    // console.log(color[i]);
    // body.style.backgroundColor = color[i];
// }



const div = document.querySelector("div");
const color = ["red" , "blue" , "green" , "yellow" , "orange" , "purple" , "pink" , "brown" , "lime" , "grey" , "golden" , "silver" ];
const result = document.querySelector("p");
const body = document.querySelector("body");


for (let i = 0; i < color.length; i++) {
    // console.log(color , i);
            div.innerHTML += `<button onclick = changecolor(${i})> ${color[i]} </button>`    
};


function changecolor (i){
    // result.push(color[i]);
    result.innerHTML += (color[i] + "," + " " )
    body.style.backgroundColor = color[i];
}