//langues select
const button = document.getElementById("button");
const select = document.getElementById("dropdown");
const options = document.querySelectorAll(".option");
const selectLabel = document.getElementById("select-label");
button.addEventListener("click", function (e) {
  e.preventDefault();
  toggleHidden();
});

function toggleHidden() {
  select.classList.toggle("hidden");
}
options.forEach(function (option) {
  option.addEventListener("click", function (e) {
    setSelectTitle(e);
  });
});
function setSelectTitle(e) {
  const labelElement = document.querySelector(
    `label[for="${e.target.id}"]`
  ).innerText;
  selectLabel.innerText = labelElement;
  toggleHidden();
}

//side menu
function openFunction() {
  document.getElementById("menu").style.width = "200px";
}
function closeFunction() {
  document.getElementById("menu").style.width = "0px";
}

//toggle menu
function toggleMenu() {
  document.getElementById("megaMenu").style.opacity = "1";
}

//password eye
function passwordEye(passId, eyeIconId) {
if (document.getElementById(`${eyeIconId}`) == null){
  console.log(`Can Not Found ${eyeIconId}`)
}else {
  document
  .getElementById(`${eyeIconId}`)
  .addEventListener("click", function (e) {
        let password = document.getElementById(`${passId}`);
        if (password.type == "password") {
          password.type = "text";
          e.target.closest(`#${eyeIconId}`).classList = "fa-solid fa-eye";
          e.target.closest(`#${eyeIconId}`).style.color = "#1B74DD";
        } else {
          password.type = "password";
          e.target.closest(`#${eyeIconId}`).classList = "fa-solid fa-eye-slash";
          e.target.closest(`#${eyeIconId}`).style.color = "black";
        }
      });
    }
  }
        passwordEye("password", "eyeIcon");
        passwordEye("password2", "eyeIcon2");
      




// document.getElementById("eyeIcon").addEventListener("click", function (e) {
//     let password = document.getElementById("password");
//   if (password.type == "password") {
//     password.type = "text";
//     e.target.closest("#eyeIcon").src = "../imgs/eye-solid.svg";
//   } else {
//     password.type = "password";
//     e.target.closest("#eyeIcon").src = "../imgs/eye-slash-solid.svg";
//   }
// });
