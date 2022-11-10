
  
  //close button
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      this.parentElement.remove();
    }
  }

//Adding list items on top of list
  var input = document.getElementById("input");
  input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
  var ul = document.getElementById("ul-list");
  //creating lists
  var li = document.createElement("li");
  var items = document.getElementById("input").value;
  console.log(items);
  if (items != "") {

   //creating checkbox
   var checkbox = document.createElement('input');
   checkbox.type = "checkbox";
   checkbox.value = 1;
   checkbox.name = "todo[]";

   //adding checkboxes and list values
   li.prepend(document.createTextNode(items));
   ul.prepend(li);
   li.prepend(checkbox);
   var checkboxes = document.querySelectorAll('ul input[type="checkbox"]');
   checkboxes.forEach(function (cb) {
     cb.addEventListener("change", cbClicked)
   })


  
   var mylist = document.getElementsByTagName("li");
   for (let i = 0; i < mylist.length; i++) {
     if (mylist[i].querySelector('.close') == null) {
       var span = document.createElement("span");
       var txt = document.createTextNode("x");
       span.className = "close";
       span.appendChild(txt);
       mylist[i].appendChild(span);
     }

     close[i].onclick = function () {
       this.parentElement.remove();
     }
   }

   //storing list values in array
   let data = [];
   for (let i = 0; i < mylist.length; i++) {
     data.push(mylist[i].innerText)
   }
   console.log(data);
   input.value = '';
 }
 else {
   alert("Input cannot  be empty")
 }
}
});



//Function for checkbox
function cbClicked(event) {
var cb = event.target
var isChecked = cb.checked
cb.closest("li")
 .classList.toggle("done", isChecked)
}
// Select all the checkboxes
var checkboxes = document.querySelectorAll('ul input[type="checkbox"]')
checkboxes.forEach(function (cb) {
cb.addEventListener("change", cbClicked)
})