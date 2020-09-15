// Задание 2
// В HTML есть пустой список ul#ingredients.
// < ul id = "ingredients" ></ >
// 	В JS есть массив строк.
const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const list = document.querySelector("#ingredients");

const taglist = ingredients.map(el => {
	const item = document.createElement("li");
	item.textContent = el;
	return item;
});

list.append(...taglist);