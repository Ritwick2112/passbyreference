let obj={
  a:'a',
  b:'b',
  c:{
    deep:'try and catch me'
  }
};

let clone=Object.assign({},obj);
let clone2={...obj};
let superClone=JSON.parse(JSON.stringify(obj));


obj.c.deep='hahahahaha';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);