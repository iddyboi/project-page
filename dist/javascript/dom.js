//DOM MANIPULATION

// single element

document.getElementById("my-form");
document.querySelector("container");
//mutilple element
document.querySelectorAll(".item"); //this is to select all the queries

console.log(document.getElementsByClassName("item"));
item = [document.getElementsByClassName("item")];

const add_user = document.querySelector(".addUser"); // this is to select a class within a html

add_user.textContent = "Add user"; // this is to change the content

const btn = document.querySelector(".btn");

// btn.style.background = "red"; // css styling to an element

btn.addEventListener("click", e => {
  e.preventDefault();
  console.log(e.target.id);
});
