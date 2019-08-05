const Queue = require("./Queue");
const fila = new Queue();

for(let i=0; i<10; i++){
    fila.enqueue(i);
}

let index = 0
const iterator = {
  next: () => {
    if (index >= Object.keys(fila._items).length) return { done: true }
    return {
      value: fila._items[index++],
      done: false
    }
  }
}

const QueueIt = {
	[Symbol.iterator]: () => iterator
}


for(n of QueueIt){
    console.log(n);
}