function sum(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function div(x, y) {
  return x / y;
}

function mult(x, y) {
  return x * y;
}

function Queue() {
  const data = [];

  const add = (value) => {
    data.push(value);
  };

  const remove = () => {
    if (data.length === 0) {
      return -1;
    }
    const value = data[data.length - 1];
    data.splice(data.length - 1, 1);
    return value;
  };

  const print = () => {
    console.log(data);
  };

  return {
    add,
    remove,
    print,
  };
}

class Pilha {
  constructor() {
    var items = [];

    this.empilha = function (element) {
      items.push(element);
    };

    this.desempilha = function () {
      return items.pop();
    };

    this.isEmpty = function () {
      return items.length === 0;
    };

    this.size = function () {
      return items.length;
    };

    this.print = function () {
      console.log(items.toString());
    };
  }
}

module.exports = { sum, sub, mult, div, Queue, Pilha };
