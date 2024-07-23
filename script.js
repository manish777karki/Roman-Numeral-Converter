//Initialise
const text=document.querySelector("#output");
const btn=document.querySelector('#convert-btn');
btn.onclick=convert;

//Array Data
const look = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];

//Convert Function

function convert(){
    const inp=document.getElementById("number").value;
   
   if (inp.length===0){
      text.innerText="Please enter a valid number";
      return;
   }
   
   if (inp<0){
      text.innerText="Please enter a number greater than or equal to 1";
      return;
   }
   if (inp<=-1){
      text.innerText="Please enter a number greater than or equal to 1";
      return;
   }
   if (inp>=4000){
      text.innerText="Please enter a number less than or equal to 3999";
      return;
   }
    text.innerText=toRomanNumeral(inp);

  };

const toRomanNumeral = num =>
  look.reduce((acc, [k, v]) => {
    acc += k.repeat(Math.floor(num / v));
    num = num % v;
    return acc;
  }, '');


  