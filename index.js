// Write your code here!
//const body=document.querySelector('body');
const main=document.getElementById('main');
main.remove();
const newHeader=document.createElement('h1');
newHeader.id='victory';
let yourName='MAHUI'
newHeader.innerHTML=`${yourName} is the champion`
