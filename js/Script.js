//  import important array
// top text input
let textInput = document.querySelector('#textInput');
//   text show in top 
let storyHeader = document.querySelector('#storyHeader');
//  middle left div img select
let leftImage = document.querySelector('#leftImage');
//   middile right div img select
let rightImage = document.querySelector('#rightImage');
let storybody = document.querySelector('#storybody');
let storyText = document.querySelector('#storyText');
let loadtxtBtN = document.querySelector('#loadtxtBtN');
let loadNxtBTN = document.querySelector('#loadNxtBTN');
//  Deafult load ( first load)
let firstLoad = ()=>{
    textInput.textContent = sipur1[0].text; 
    leftImage.src = sipur1[0].image;
}
//  end first load function 
//  every section text load function  
// let exchangeDta =(datas)=>{
//   console.log(datas.exchangeRates[0].key);
// };
let datas;
let a = 0;
let loadText =(n)=>{
      a = a + n * 1; 
      console.log(datas.exchangeRates[a].key);  
      storyHeader.textContent = datas.exchangeRates[a].key;
      storybody.textContent = `aj : ${datas.exchangeRates[a].currentExchangeRate}`;
      storyText.textContent = datas.exchangeRates[a].currentChange;

}
//  First load funciton call for load deafult data 
firstLoad();

// read local JSON file in javascript
fetch("./story/ExchangeRate.json")
  .then((response)=>response.json())
  .then((data)=> datas = data)
   
// text load button 
   loadtxtBtN.addEventListener('click',()=>{
    loadText(1);
   });