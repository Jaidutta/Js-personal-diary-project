/*
 - Create a variable named "entryForm" and use the document.getElementById method
   to make its value the entryForm from our HTML document.
*/

const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');
/*
 - Add an event listener to the entryForm variable that prevents the page from
   reloading whenever the submit button is clicked.
*/

/*
  - Inside the addEntryToDom function, create a new variable named entryDiv.
  - Use the document.createElement method to create an html Div and make it the
      new variable's value.
  - On a new line, give the new div a class of 'single-entry'.
  - Change the div's innerText property to the user's input from the textbox
  - Use the appendChild method to add the new div to the entriesSection
      variable created on line 2
*/

let count = 1;
function addEntryToDom(event) {
  event.preventDefault();
  const entryDiv = document.createElement('div');
  entryDiv.classList = 'single-entry';
  entryDiv.textContent = entryTextbox.value;
  entryDiv.style.display = 'none';
  entriesSection.appendChild(entryDiv);
  // console.log(entryTextbox[0].value);
  /*
    clear the entry textbox whenever the submit button is clicked
    */
   entryTextbox.value = '';

   const displayEntryButton = document.createElement('button');
   displayEntryButton.classList = 'display-entry-button';
   displayEntryButton.innerText = count;
   entriesNav.appendChild(displayEntryButton);

    
    /*
      - Add a click event listener to the displayEntryButton.
      - Set the display property of the entryDiv to 'block' whenever
          it's clicked.
    */
    
   displayEntryButton.addEventListener('click', function() {
    const allEntries = document.querySelectorAll('.single-entry');
        /*
            - Use a for loop to iterate through all the elements in the
              allEntries variable.
            - Set each element's style.display property to 'none'.
        */
       for (let index = 0; index < allEntries.length; index++) {
        allEntries[index].style.display = 'none';
      }
      entryDiv.style.display = 'block';
  
   })

   count++
}

entryForm.addEventListener('submit', addEntryToDom)


