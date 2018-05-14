const a = h('ul', { 'class': 'list' },
  h('li', {}, 'item1'),
  h('li', {}, 'item2'),
)

const b = h('ul', { 'class': 'list' },
  h('li', {}, 'item1'),
  h('li', {}, 'hello!'),
)


console.log(a);
console.log(b);

const $root = document.getElementById('root');
$root.appendChild(createElement(a));

// 어떤 이벤트가 발생했을때 b라는게 만들어지고.. 그담에 업데이트 해라.. 
updateElement($root, b, a);