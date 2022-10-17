var addBtn = document.getElementById("addBtn");
var getNumber = document.getElementById("enterNumber");

var li = document.createElement("li");
var ul = document.querySelector("ul");

addContact = () => {
  let newValue = getNumber.value;
  li.innerText = newValue;
  ul.append(li);
  console.log(ul);
};

addBtn.addEventListener("click", addContact);

/* ---------------------------------- steps --------------------------------- */
/*
# create a variable
# create element
# aside the variable to a content
# 
*/
