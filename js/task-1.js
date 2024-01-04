const categoriesList = document.querySelectorAll(`#categories .item`);
const count = categoriesList.length;
console.log(`Total categories: ${count}`);




categoriesList.forEach(category => {
  const name = category.querySelector(`h2`).textContent;
  const elements = category.querySelectorAll(`li`);
  console.log(`Category : ${name}`);
  console.log(`Elements : ${elements.length}`);
});


const title = document.querySelectorAll(`h2`);
title.forEach(title => {
  title.classList.add('title');
});
const item = document.querySelectorAll(`.item > ul > li`);
item.forEach(item => {
  item.classList.add(`liItem`);
});
const itemList = document.querySelectorAll('.item > ul');
itemList.forEach(itemList => {
  itemList.classList.add('item-list');
});

// const box = document.body.item.querySelectorAll(`li`);
// console.log(box);
// const list = document.querySelectorAll(`ul`);
// list.forEach(list => {
//   list.classList.add('item-list');
// });
// console.log();

console.log(itemList);