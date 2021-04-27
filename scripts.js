
var typeText = document.querySelector(".typeText")
var textToBeTyped = "Type something."
var index = 0, isAdding = true


var nameField = document.getElementById('nameField');
var lastNameValue = undefined;

updateNameDisplay();

setInterval(updateNameDisplay, 100);

function updateNameDisplay() {
  var thisValue = nameField.value || "Call me Ishmael.";
  if (lastNameValue != thisValue) {
    document.getElementById('nameDisplay').innerHTML = lastNameValue = thisValue;
  }
}

/*
var elems = document.getElementsByClassName('cardText');
for(var i = 0; i < elems.length; i++) {
    elems[i].textContent = 'This should change';
  }
}
*/

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of
    // the textToBeTyped using index.
    typeText.innerText = textToBeTyped.slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTyped.length) {
        // no more text to add
        isAdding = false
        //break: wait 4s before playing again
        setTimeout( function () {
          playAnim()
        }, 4000)
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
      } else {
        // decrement index by 1
        index--
      }
    }
    // call itself
    playAnim()
  }, 120)
}
// start animation
playAnim()


