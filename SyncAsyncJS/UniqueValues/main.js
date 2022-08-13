// Fetch only the unique values from an array using ES6 one liner.

const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
]

// Accessing Categories. Set() provide unique values only trimming the same value to unique.
// [...] - Spread Operator. Turn it back to array.
const categories = ['all',...new Set(menu.map((item) => item.category))];
console.log(categories);

const names = ['all',...new Set(menu.map((item) => item.name))];
console.log(names);

const result = document.getElementById('result');
result.innerHTML = categories.map((category) => `<button>${category}</button>`).join(' ');