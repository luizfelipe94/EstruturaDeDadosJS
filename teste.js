const Queue = require('./Queue');
(()=> {
    const fila = new Queue();
    fila.enqueue("teste1");
    fila.enqueue("teste2");
    fila.enqueue("teste3");
    fila.enqueue("teste4");
    fila.enqueue("teste5");

    console.log(fila.toString());

    fila.dequeue();
    fila.dequeue();
    fila.dequeue();
    console.log(fila);
})();