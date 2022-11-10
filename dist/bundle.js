/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
//close button
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    this.parentElement.remove();
  };
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
        cb.addEventListener("change", cbClicked);
      });
      var mylist = document.getElementsByTagName("li");
      for (var _i = 0; _i < mylist.length; _i++) {
        if (mylist[_i].querySelector('.close') == null) {
          var span = document.createElement("span");
          var txt = document.createTextNode("x");
          span.className = "close";
          span.appendChild(txt);
          mylist[_i].appendChild(span);
        }
        close[_i].onclick = function () {
          this.parentElement.remove();
        };
      }

      //storing list values in array
      var data = [];
      for (var _i2 = 0; _i2 < mylist.length; _i2++) {
        data.push(mylist[_i2].innerText);
      }
      console.log(data);
      input.value = '';
    } else {
      alert("Input cannot  be empty");
    }
  }
});

//Function for checkbox
function cbClicked(event) {
  var cb = event.target;
  var isChecked = cb.checked;
  cb.closest("li").classList.toggle("done", isChecked);
}
// Select all the checkboxes
var checkboxes = document.querySelectorAll('ul input[type="checkbox"]');
checkboxes.forEach(function (cb) {
  cb.addEventListener("change", cbClicked);
});
/******/ })()
;