function manipulatingElements(){
let newElement = document.createElement("li")


//newElement.innerText = "item-4"
//newElement.innerHTML="<b>Item-4</b>";
// newElement.textContent="Item-5"
// console.log(newElement.value);
let input =document.querySelector("input")
// input.textContent = "Item-4";
 //console.log(input.value) 
 newElement.innerText=input.value
//  console.log(newElement)

 let orderedList = document.querySelector("ol")
 //orderedList.append(newElement) can add both text and element node
//  orderedList.append("textNode",newElement)
//   orderedList.appendChild(newElement) //can add only element node
//   orderedList.appendChild("textNode",newElement) //here textNode is not possible
// orderedList.insertBefore(newElement,orderedList.children[0]) //accepts two arguments (newElement,referenceElement)
// orderedList.insertBefore(newElement,orderedList.firstChild) above and this for insert first
//orderedList.removeChild(orderedList.children[1]) //removes second item
// orderedList.replaceChild(newElement,orderedList.children[0]) //replaces first item with newElement, same like splice in array
// orderedList.remove() //removes entire ordered list from DOM
newElement.style.color="red"
newElement.style.fontSize="20px"
newElement.style.textShadow="2px 2px 5px blue"
newElement.style.boxShadow="5px 5px 10px gray" //dynamic cascading style
// orderedList.prepend("TextNode", newElement) //inserts new element at the beginning of the list also accepts both text and element node
// orderedList.prepend(newElement)
 orderedList.append(newElement)

}