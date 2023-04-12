
//total_1=localStorage.getItem('aidan');
let total_1=localStorage.getItem('akash');


function meal1(total){
    let a=total/12;
    let b=a*4;

    return b;
}
function meal2(total){
    let a=total/12;
    let b=a*5;

    return b;
}

function meal3(total){
    let a=total/12;
    let b=a*3;

    return b;
}

let q = meal1(total_1);
let minMeal1= q-50;

let w = meal2(total_1);
let minMeal2 = w - 50;

let y = meal3(total_1);
let minMeal3= y-50;

function drawTable(records){
  let result = document.querySelector('#result');
  
  let html= '';
  for(let record of records){
      
      html += `<tr>
        
        <td>${record.title}</td>
        <td>${record.calories}</td>  
        <td>
       <img src="${record.image}">
     </td>   
        <td><a href="#${record.id}" onclick="getData21('https://api.spoonacular.com/recipes/${record.id}/information?includeNutrition=false&apiKey=901bb73c94e444f1a6548125427a841d', drawDetails)" >View more information and Recipie URL</a></td>  
      </tr>`;
  }
  result.innerHTML = html;
}
function drawDetails(record){
  const section = document.querySelector('#details');
  // details.innerHTML = `${JSON.stringify(record, null, 2)}`;
  details.innerHTML = `<ul>
        <li>Source Name: ${record.sourceName}</li>
        <li>Recipie Url: ${record.sourceUrl};</li>
        <li>Servings: ${record.summary}</li>
  </ul>`;
}
async function getData21(url, renderFun){
  try{
    let response = await fetch(url);//1. Send http request and get response
    let result = await response.json();//2. Get data from response
    renderFun(result);// 3. Do something with the data
  }catch(e){
      console.log(e);//catch and log any errors
  }
}

async function getData1(url){
    try{
      let response = await fetch(url);
      let result = await response.json();
      drawTable(result);
   }catch(e){
       console.log(e);
   }
 }
 getData1(`https://api.spoonacular.com/recipes/findByNutrients?minCalories=${minMeal1}&maxCalories=${q}&apiKey=901bb73c94e444f1a6548125427a841d`);

 //end of meal 1
 
 function drawTable2(records){
  let result = document.querySelector('#result_1');
  
  let html= '';
  for(let record of records){
      
      html += `<tr>
       
        <td>${record.title}</td>
        <td>${record.calories}</td>
        <td>
       <img src="${record.image}">
     </td>   
        <td><a href="#${record.id}" onclick="getData22('https://api.spoonacular.com/recipes/${record.id}/information?includeNutrition=false&apiKey=901bb73c94e444f1a6548125427a841d', drawDetails1)" >View more information and Recipie URL </a></td>  
   
      </tr>`;
  }
  result.innerHTML = html;
}
function drawDetails1(record){
  const section = document.querySelector('#details_1');
  // details.innerHTML = `${JSON.stringify(record, null, 2)}`;
  details_1.innerHTML = `<ul>
        <li>Source Name: ${record.sourceName}</li>
        <li>Recipie Url: ${record.sourceUrl};</li>
        <li>Servings: ${record.summary}</li>
  </ul>`;
}

async function getData22(url, renderFun){
  try{
    let response = await fetch(url);//1. Send http request and get response
    let result = await response.json();//2. Get data from response
    renderFun(result);// 3. Do something with the data
  }catch(e){
      console.log(e);//catch and log any errors
  }
}

 async function getData2(url){
  try{
    let response = await fetch(url);
    let result = await response.json();
    drawTable2(result);
 }catch(e){
     console.log(e);
 }
}


getData2(`https://api.spoonacular.com/recipes/findByNutrients?minCalories=${minMeal2}&maxCalories=${w}&apiKey=901bb73c94e444f1a6548125427a841d`);
// end of meal 2

function drawTable3(records){
  let result = document.querySelector('#result_3');

  let html= '';
  for(let record of records){
      
      html += `<tr>
        <td>${record.title}</td>
        <td>${record.calories}</td>  
        <td>
       <img src="${record.image}">
     </td>    
        <td><a href="#${record.id}" onclick="getData23('https://api.spoonacular.com/recipes/${record.id}/information?includeNutrition=false&apiKey=901bb73c94e444f1a6548125427a841d', drawDetails2)" >View more information and Recipie URL</a></td>   
      </tr>`;
  }
  result.innerHTML = html;
}
function drawDetails2(record){
  const section = document.querySelector('#details_2');
  // details.innerHTML = `${JSON.stringify(record, null, 2)}`;
  details_2.innerHTML = `<ul>
        <li>Source Name: ${record.sourceName}</li>
        <li>Recipie Url: ${record.sourceUrl};</li>
        <li>Servings: ${record.summary}</li>
  </ul>`;
}

async function getData23(url, renderFun){
  try{
    let response = await fetch(url);//1. Send http request and get response
    let result = await response.json();//2. Get data from response
    renderFun(result);// 3. Do something with the data
  }catch(e){
      console.log(e);//catch and log any errors
  }
}



async function getData3(url){
  try{
    let response = await fetch(url);
    let result = await response.json();
    drawTable3(result);
 }catch(e){
     console.log(e);
 }
}

getData3(`https://api.spoonacular.com/recipes/findByNutrients?minCalories=${minMeal3}&maxCalories=${y}&apiKey=901bb73c94e444f1a6548125427a841d`);

 

