// Event Propagation : the process of how events are transmitted or propagated through the DOM hierarchy.

// Bubbling : events are executed from bottom to up.
document.getElementById("myElement").addEventListener("click", function () {
  console.log("Bubbling Phase: My Element");
});
document.addEventListener("click", function () {
  console.log("Bubbling Phase: Document");
});

// Capturing : events are executed from top to bottom.
document.getElementById("myElement").addEventListener(
  "click",
  function () {
    console.log("Capturing Phase: My Element");
  },
  true
);
document.addEventListener(
  "click",
  function () {
    console.log("Capturing Phase: Document");
  },
  true
);

// focus and blur etc doesnt bubble.
const test = event.currentTarget.tagName; // gives all the tagname inclining parents.
const test1 = event.target.tagName; // only gives clicked or interacted tagname.
const test2 = this.tagName; // works same as currentTarget.

// stop propagation
document.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Bubbling Phase: Document");
});

// Event delegation : single event listener is attached to a common ancestor, rather than to each individual child element.
<ul id="itemList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>;
document.getElementById("itemList").addEventListener("click", function (event) {
  // Check if the clicked element is an <li> inside the #itemList
  if (event.target.tagName === "LI") {
    // Access the text content of the clicked <li> element
    var clickedItem = event.target.textContent;
    console.log("Clicked on:", clickedItem);

    // Add your logic for handling the click here
  }
});

// Close a modal when you click outside
<>
  // Close a modal when you click outside
  <button id="openModalBtn">Open Modal</button>
  <div id="myModal">
    <p>This is a modal. Click outside to close.</p>
  </div>
</>;

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var openModalBtn = document.getElementById("openModalBtn");

  // Open the modal on button click
  openModalBtn.addEventListener("click", function () {
    event.stopPropagation();
    modal.style.display = "block";
  });

  // Close the modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target !== modal) {
      modal.style.display = "none";
    }
  });
});
