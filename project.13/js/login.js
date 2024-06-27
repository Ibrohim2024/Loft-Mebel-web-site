// let email = document.getElementById("email_field");
// let password = document.getElementById("password_field");
// let login = document.getElementById("login");

// login.addEventListener("click", () => {
//   if (email.value === "admin@gmail.com" && password.value === "1234") {
//     window.location.href = "./project13.html";
//     alert("Добро пожаловать");
//   } else {
//     alert("Неверный логин или пароль");
//   }
// });


let email = document.getElementById("email_field");
let password = document.getElementById("password_field");
let login = document.getElementById("login");
let contentDiv = document.getElementById("loginForm");

login.addEventListener("click", () => {
  if (email.value === "admin@gmail.com" && password.value === "10012010") {
    
    contentDiv.innerHTML = `
       <div class="spinner">
  <span>L</span>
  <span>O</span>
  <span>A</span>
  <span>D</span>
  <span>I</span>
  <span>N</span>
  <span>G</span>
</div>`;

    setTimeout(function () {
     let serverData = ( window.location.href = "./project13.html");
      contentDiv.innerHTML = serverData;
    }, 3000);
  } else {
    alert("Неверный логин или пароль");
  }
});
