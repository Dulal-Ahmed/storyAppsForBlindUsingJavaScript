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

let nextindex = 0; //next index 
let loadNext = (m)=>{
  nextindex = nextindex + m *1;
  if( sipur1.length  == nextindex){
    nextindex = 1;
  }
  loadText(1);
}



 
let datas; // Exchange rate array from API
let apiQuotes; //All Qultes Array from Online 
let a = 0; // load text index 

//  Load avery section text 
let loadText =(n)=>{  
      a = a + n * 1; 
      // first load deafult value
 if( nextindex == 1||nextindex == 0){
   if(nextindex == 0){
  textInput.textContent = sipur1[0].text; 
  leftImage.src = sipur1[0].image;}

   if(nextindex == 1){
  textInput.textContent = sipur1[nextindex - 1].text; 
  leftImage.src = sipur1[nextindex - 1].image;}


   // data array lenght check for indexing 
     if( datas.exchangeRates.length  == a){  a = n * 1; }
      // deafult load data 
      storyHeader.textContent = datas.exchangeRates[a].key;
      storybody.textContent = ` currentExchangeRate : ${datas.exchangeRates[a].currentExchangeRate}`;
      storyText.textContent =  ` currentChange : ${datas.exchangeRates[a].currentChange}`;
}

if(nextindex == 2){
  // data array lenght check for indexing 
  if( foods.length  <= a){  a = n * 1; }
  
  //HEader text
  textInput.textContent = sipur1[nextindex - 1].text; 
  leftImage.src = sipur1[nextindex - 1].image;

        //  load data  for show story 
        storyHeader.textContent = `${foods[a].name}`;
        storybody.textContent = `  ${foods[a].name}`;
        storyText.textContent =  `  ${foods[a].text}`;
  
   console.log(`index = : ${nextindex}`)
  }
if(nextindex == 3){ 
    // data array lenght check for indexing 
    if( juice.length  <= a){  a = n * 1; }
  
    //HEader text
    textInput.textContent = sipur1[nextindex - 1].text; 
    leftImage.src = sipur1[nextindex - 1].image;
  
          //  load data  for show story 
          storyHeader.textContent = `${juice[a].name}`;
          storybody.textContent = `  ${juice[a].name}`;
          storyText.textContent =  `  ${juice[a].text}`;
  console.log(`index = : ${nextindex}`)
}
if(nextindex == 4){ console.log(`index = : ${nextindex}`)}
if(nextindex == 5){ console.log(`index = : ${nextindex}`)}
if(nextindex == 6){ console.log(`index = : ${nextindex}`)}
if(nextindex == 7){ console.log(`index = : ${nextindex}`)}




}
//  First load funciton call for load deafult data 
firstLoad();

// read local JSON file in javascript
fetch("./story/ExchangeRate.json")
  .then((response)=>response.json())
  .then((data)=> datas = data)
   
// text load Click buttton 
   loadtxtBtN.addEventListener('click',()=>{
    loadText(1);
   });

// Next load Click buttton 
loadNxtBTN.addEventListener('click', ()=>{
    loadNext(1);
});
   // Get Quotes from API
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      
  }  catch(error) {
      console.log(error);
     
  }
}
getQuotes();
console.log(getQuotes);
