console.log("veikia!");

const fullName = document.getElementById("fullName");
const addToEnd = document.getElementById("addToEnd");
const addToStart = document.getElementById("addToStart");
const removeFirst = document.getElementById("removeFirst");
const removeLast = document.getElementById("removeLast");
const reverseList = document.getElementById("reverseList");
const sortAZ = document.getElementById("sortA-Z");
const sortZA = document.getElementById("sortZ-A");
let listArr = [];

addToEnd.addEventListener('click', event=>{
  listArr.push(fullName.value);
  printArr();
  refreshInput();
});


addToStart.addEventListener('click', event=>{
  listArr.unshift(fullName.value);
  printArr();
  refreshInput();
});


removeFirst.addEventListener('click', event=>{
  listArr.shift(fullName.value);
  printArr();
  refreshInput();
});

removeLast.addEventListener('click', event => {
  listArr.pop(fullName.value);
  printArr();
  refreshInput();
});

reverseList.addEventListener('click', event=>{
  listArr.reverse(fullName.value);
  printArr();
  refreshInput();
});

sortAZ.addEventListener("click", event => {
  listArr.sort();
  printArr();
  refreshInput();
});

 sortZA.addEventListener("click", event => {
   listArr.sort().reverse();
   printArr();
   refreshInput();
   console.log("paspaustas za")
 });


function printArr() {
  const outputs = document.getElementById("outputs");
  outputs.innerHTML="";

  listArr.forEach(function(val) {
    let pParagraph, textValue;
    pParagraph = document.createElement('p');
    textValue = document.createTextNode(val);
    pParagraph.appendChild(textValue);
    outputs.appendChild(pParagraph);
  });
};


function refreshInput(){
  document.getElementById('inputs').reset();
};



console.log("----------------------------");
