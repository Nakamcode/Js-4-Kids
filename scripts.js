let firstElementCreated = document.createElement("li"); //created the li element with name firstElementCreated
firstElementCreated.innerText = "Javascript is Genius"; //Assigned this content to the li
firstElementCreated.classList.add("list-item"); //Assigned a css class to it

let ul = document.querySelector("ul"); //selected the ul element
ul.append(firstElementCreated); //added the li I created to it

let removeBtn = document.querySelector(".removeBtn"); //selected the button element
console.log(removeBtn.style);

removeElement = () => {
  let listItems = document.querySelectorAll(".list-item"); //selected the list from ul
  console.log(listItems);
  for (let i = 0; i < listItems.length; i++) {
    //use for loop to select all the li element
    let lastItem = listItems.length - 1; //a variable that read the last element of list items
    // listItems[0].remove();
    listItems[lastItem].remove(); //remove the last li element
    // console.log(lastItem);
    console.log("length is " + listItems.length);
  }
  if (listItems.length == 0) {
    alert("The list is finish my boy 😁⬇🙏🤣"); //works when the list items is empty
    location.reload(); //refresh the page
  }

  // create a if state that refresh the window when the length is zero
};

removeBtn.addEventListener("click", removeElement);
