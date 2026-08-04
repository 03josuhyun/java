import shoppingList from "./data.js";
const bestProduct = document.querySelector('.best_product');

for(let i=0; i<shoppingList.length; i++){
  let bestDiv = document.createElement('div');
  bestDiv.setAttribute('class','best_box');

  let bestImgBox = document.createElement('div');
  bestImgBox.setAttribute('class', 'best_img');

  let bestImg = document.createElement('img');
  bestImg.setAttribute('src',shoppingList[i].src);
  bestImgBox.appendChild(bestImg);
  bestDiv.appendChild(bestImgBox);

  let bestNameP = document.createElement('p');
  let bestNameText = document.createTextNode(shoppingList[i].name);
  bestNameP.appendChild(bestNameText);
  bestDiv.appendChild(bestNameP);

  let bestPriceP = document.createElement('p');
  let bestPriceText = document.createTextNode(shoppingList[i].price);
  bestPriceP.appendChild(bestPriceText);
  bestDiv.appendChild(bestPriceP);
  bestPriceP.setAttribute('class','price');

  bestProduct.appendChild(bestDiv);
}//shopingList_for