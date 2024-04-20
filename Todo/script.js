
let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
event.preventDefault();
formValidation();
})


let TextInput = document.getElementById("TextInput");
let message = document.getElementById("message");
let formValidation =() => {
    if(TextInput.value === ''){
        console.log('failuer');
        message = alert("Can you fill the task")
    }else{
        message = ""
        inputdata();
        console.log("successs");
        createTasks();
    }
};


let data ={};
let textInput = document.getElementById("TextInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let inputdata = () => {
    data["text"] =  textInput.value;
    data["date"] = dateInput.value;
    data["description"] = textarea.value;
    console.log(data); 
}


let tasks = document.getElementById("tasks")
let createTasks = () =>{
    tasks.innerHTML += 
    ` <div>

    <span id="tas">${data.text}</span> <br> date
    <span>${data.date}</span>
     <p>${data.description}</p>

    <span class="options">
        <i   onClick = "editTask(this)"  data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
        <i onClick = "trashTask(this)" class="fas fa-trash-alt"></i>
    </span>

</div>`;
inputdata.value = "";
};

let trashTask = (event) => {
    event.parentElement.parentElement.remove();
};

let editTask = (event) =>{
    inputdata.value = event.parentElement.previousElementSibling.innerHTML;
    event.parentElement.parentElement.remove();
 }

 let storage = [];

 let storageData = () =>{
    storage.push({ text: textInput.value, date: dateInput.value, description: textarea.value});
    localStorage.setItem("dat", JSON.stringify(data));
    console.log(storage);
 };
// const person = { name: "Alex" };
// localStorage.setItem("text", person);
// console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
// localStorage.setItem("user", JSON.stringify(person));
// console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }

