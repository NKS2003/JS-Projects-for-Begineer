let inp = document.getElementById('inp');





// function clearone() {
//   inp.value = inp.value.slice(0, -1);
// }

// function sub() {
//   try {
//     inp.value = eval(inp.value);
//   } catch {
//     inp.value = "Error";
//   }
// }

// Keyboard support
// document.addEventListener("keydown", function(e) {
//   const key = e.key;

//   // Numbers 0-9, 00, and operators
// //   RegExp Regex ka kaam hai string me pattern match karna
// // test ye check karta hain ki vale match ho rhi hai ke nhi
//   if (/^[0-9+\-*/.%]$/.test(key)) {
//     inp.value += key;
//   } 
//   // Enter = calculate
//   else if (key === "Enter") {
//     sub();
//   } 
//   // Backspace = delete last
//   else if (key === "Backspace") {
//     clearone();
//   } 
//   // Escape = AC
//   else if (key === "Escape") {
//     inp.value = '';
//   }

//   // Prevent default browser actions for Enter/Backspace
// //   if (["Enter","Backspace"].includes(key)) e.preventDefault();
// });



function cal() {
  try {
    inp.value = Function("return " + inp.value)();
  } catch {
    inp.value = "Error";
  }
}

document.addEventListener("keydown",function(e){
  const val = e.key
  e.preventDefault();
  if (/^[0-9+\-*/.%]$/.test(val)) {
    inp.value += val;
  } 
  // Enter = calculate
  else if (val === "Enter") {
    cal();
  } 
  // Backspace = delete last
  else if (val === "Backspace") {
   inp.value = inp.value.slice(0, -1);
  } 
  // Escape = AC
  else if (val === "Escape") {
    inp.value = '';
  }
})  