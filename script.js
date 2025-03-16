const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let sum=0;

const getSum = () => {
//Add your code here
	let sum = 0;
  let prices = document.getElementsByClassName("price");
  for (let price of prices) {
    sum += Number(price.innerHTML);
  }
	

  const newRow = document.querySelector("table").insertRow(-1);
	  newRow.setAttribute("id","ans");

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerText = "Total Value";
  cell2.innerText = sum;
	
	
  
};

getSumBtn.addEventListener("click", getSum);
