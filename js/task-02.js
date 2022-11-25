const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const obj1 = document.createElement('li');
obj1.textContent = "Potatoes";
obj1.classList.add("item");

const obj2 = document.createElement('li');
obj2.textContent = "Mushrooms";
obj2.classList.add("item");

const obj3 = document.createElement('li');
obj3.textContent = "Garlic";
obj3.classList.add("item");

const obj4 = document.createElement('li');
obj4.textContent = "Tomatos";
obj4.classList.add("item");

const obj5 = document.createElement('li');
obj5.textContent = "Herbs";
obj5.classList.add("item");

const obj6 = document.createElement('li');
obj6.textContent = "Condiments";
obj6.classList.add("item");

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(obj1, obj2, obj3, obj4, obj5, obj6);
console.log(ingredientsEl);