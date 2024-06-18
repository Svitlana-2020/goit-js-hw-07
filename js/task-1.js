const categoriesItem = document.querySelectorAll(".item");
const categoriesArray = [...categoriesItem];
const numCategories = categoriesArray.length;
console.log (`Number of categories: ${numCategories}`);
function numItem (categoriesArray) {

return categoriesArray.map((function (firstLi) {
const liArray = firstLi.children;
const [h2, ul] = liArray;
const liArr = ul.children;
const finalArr = [...liArr];
const numI = finalArr.length;
const text = h2.textContent;
return `Categorie: ${text}
Elements: ${numI}`;
}
))
};

const results = numItem(categoriesArray);
results.forEach(result => console.log(result));