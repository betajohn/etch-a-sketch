const mainDiv=document.getElementById("mainDiv");
const gridWidth=640;
const gridHeight=640;
let rows=16;
newGrid();

function newGrid(){
  mainDiv.replaceChildren();
  while(rows>100 | rows<1){
    
    rows=prompt("How many rows and columns do you want?"); 
    if(rows>100 | rows<1){
      alert("Number can't be smaller than 1 or bigger than 100");
    }
  }
  let pix=640/rows;

  mainDiv.style.gridTemplateColumns=`repeat(${rows},${pix}px)`;
  mainDiv.style.gridTemplateRows=`repeat(${rows},${pix}px)`;

  for(let i=0;i<rows*rows;i++){
    const x=document.createElement("div");
    x.classList.add("div");
    x.textContent="1";
    x.style.fontSize="0";
    x.addEventListener("mouseover",()=> {
     if(Number(x.textContent)==1){
        x.style.backgroundColor=`rgba(${randomN()}, ${randomN()}, ${randomN()}, 0.${x.textContent})`;
     }else{
      if(Number(x.textContent)<10){
        x.style.backgroundColor=x.style.backgroundColor.replace(/[^,]+(?=\))/, "0."+x.textContent);
      
      }
     }  
     if(Number(x.textContent)==10){
      x.style.backgroundColor=x.style.backgroundColor.replace(/[^,]+(?=\))/, "1");
     }
     x.textContent=Number(x.textContent)+1;

      
     }
      
  
    );
    //x.addEventListener("mouseover",()=> x.textContent="x");
    //x.textContent="x";
    mainDiv.appendChild(x);
    
  }
  rows=101;
}

function randomN(){
  return Math.floor(Math.random() * (255 - 0 + 1) + 0);
}