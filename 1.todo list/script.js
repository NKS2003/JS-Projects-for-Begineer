// const boxs = document.getElementById("input-box")
// console.log(boxs);
// const bt = document.getElementById("button")
// console.log(bt);
// const line = document.getElementById("list")
// console.log(line);

// bt.addEventListener("click",function(){
//   if(boxs.value === ''){
//     alert("please enter the code")
//   }else{
//     let li = document.createElement("li")
//     li.innerHTML = boxs.value;
//     line.appendChild(li);
//     let span = document.createElement("span")
//     span.innerHTML = "\u00d7"
//     li.appendChild(span);
// }
// boxs.value = "";
// savedata();

  
// })
// boxs.addEventListener("keydown", function(e) {
//   if (e.key === "Enter") {
//     bt.click();  
//   }

// })  

// line.addEventListener("click" ,function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         savedata()
//     }
//     else if(e.target.tagName === "SPAN"){
//     e.target.parentElement.remove();
//     savedata()
    
//     }
// },false)

// function savedata(){
//   localStorage.setItem("data",line.innerHTML)
// }
// function showtask(){
//     line.innerHTML = localStorage.getItem("data");
// }

// showtask()





let boxs  = document.getElementById("input-box")
let bt  = document.getElementById("button")
let line  = document.getElementById("list")

bt.addEventListener("click",function(){
  if(boxs.value === ''){
    alert("enter the value")
  }
  else{
   let li = document.createElement("li")
   li.innerHTML = boxs.value;
   line.appendChild(li)
   let span = document.createElement("span")
    span.innerHTML = "\u00d7"
   li.appendChild(span);
  }
  boxs.value = "";
savedata()
})
 boxs.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    bt.click();  
  }

}) 

line.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    savedata()
    
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    savedata()
  }
},false)

function savedata(){
localStorage.setItem("data",line.innerHTML)
}
function showtask(){
 line.innerHTML = localStorage.getItem("data")
}
showtask()