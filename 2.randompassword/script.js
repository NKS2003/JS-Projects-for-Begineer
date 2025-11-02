const passwordBox = document.getElementById("password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"

const number = "0123456789"
const speacial = "@%^&*$#@+-/~?()_"
  
const allchar = uppercase + lowercase + number +speacial;

function createpassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += speacial[Math.floor(Math.random()*speacial.length)];

  while(length > password.length){
    password+= allchar[Math.floor(Math.random() * allchar.length)];
  }
  passwordBox.value = password;
}
function copypass(){
    passwordBox.select();
    document.execCommand("copy");
}