let form = document.getElementById("form");
let formValidation= document.getElementById("formValidation");
let showingInputMessage = document.getElementById("showingInputMessage");
let posts =  document.getElementById("posts");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("button clicked");
    validation();
    inputdata();
    // createPosts();
});

let validation = () =>{
    if(formValidation.value === ""){
        showingInputMessage = alert("Pleace Enter the anything")
        console.log("failure");
    }
    else{
        showingInputMessage = ""
        inputdata();
        console.log("success");
        createPosts();
    }
};

let data ={};
let inputdata = () => {
    data["text"] = formValidation.value;
    console.log(data);
    
}

let createPosts = () => {
    posts.innerHTML += 
    `<div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick = edit(this) class="fas fa-edit"></i>
            <i  onClick = trash(this) class="fas fa-trash-alt"></i>
        </span>
    </div>`;
    inputdata.value ='';
};

let trash = (event) =>{
event.parentElement.parentElement.remove();
};

let edit = (event) =>{
   inputdata.value = event.parentElement.previousElementSibling.innerHTML;
   event.parentElement.parentElement.remove();
}

// localStorage.setItem("name", "shri");
// sessionStorage.setItem("name", "santho");

// function add(a,b){
//     return a+b;
// }

// console.log(add(20,30));
// console.log(add(40,60));


//Ternary operator
// function evenodd(number){
//     return number %2 === 0? "even" : "odd";
// }

// console.log(evenodd(3));

// let a = 10;
// let b = "10";
// console.log(a === b);

// function posorneg(number){
// return number > 0 ? "postive" : "negative";
// }
// let a = [1, 2, 4, -3, 5, -2, -5];
// a.forEach((number) => console.log(posorneg(number)));

function add(...number){
    console.log(number);

    let sum = 0;
    number.forEach((num) => (sum = sum - num));
    return sum;
}

console.log(add(2, 3, 9, 3, 2, 4));