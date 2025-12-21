//Parent 

function traversingElement(){
let getParent = document.querySelector('.child1');
console.log(getParent.parentElement);   

let getParent1 =document.querySelector('html')
console.log(getParent1.parentElement);  //null
console.log(getParent1.parentNode);
}

function selectChild(){
    let getChild = document.querySelector('.parent');
    console.log(getChild)
    console.log(getChild.children);  //HTMLCollection

}
selectChild();
// .childElementCount  //3
// .childNodes  //NodeList includes all the child
// .children // includes only elementNode
// .firstChild // firstchild including element and text Node
// .firstElementChild // first element Node
// .lastChild  // last child including element and text Node
// .lastElementChild // last element Node

// Siblings
// .nextSibling  // next sibling including element and text Node
// .nextElementSibling  // next element Node
// .previousSibling  // previous sibling including element and text Node
// .previousElementSibling  // previous element Node





//NodeType => Element Node,attribute Node, text Node,comment Node, html Document Node
