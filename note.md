<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <!--
            Change h1 title to "My Personal Diary"
            Create a new form with an ID of "entryForm"
            Inside the form, create a textarea with class of "entry-textbox"
        -->
        <h1>My Personal Diary</h1>
        <script src="index.pack.js"></script>
    </body>
</html>

/*
  - Go over to the index.html file and give the button a class of "button"
  - Back in the index.css file, target the button using its class
  - Give the button rounded edges using the border-radius property
  - Use the padding property to add space between the button's text and its edges
  - move the button to the right of the page
*/

/*
 - Create a variable named "entryForm" and use the document.getElementById method
   to make its value the entryForm from our HTML document.
*/

 /* create a new section and give it an id of "entries" */

/*
    create a new variable named "entriesSection" and assign it
    a value of the HTML section we just created
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

/* 
    - Give the entries section the background color, #16697A
      (or any other color of your choice)
    - Give it the text color, #EDE7E3
      (if you used your own color, this should be something that is visible
       on the background)
    - Like we did before, give it rounded edges.
 */

 /*
    clear the entry textbox whenever the submit button is clicked
  */

  /*
  Hide the user's entry by default after it is appended to the entries
  section
*/

/*
  - In the addEntryToDom() function, create a new variable named
      displayEntryButton.
  - Use the document.createElement method to create an HTML button
      and make that the value of the new variable.
  - Use the innerText property to set the button's inner text to "1";
  - Append the button to the entriesNav div we created on line 4.
*/

 /*
      - Add a click event listener to the displayEntryButton.
      - Set the display property of the entryDiv to 'block' whenever
          it's clicked.
*/

  /*
    - Target the div for the display-entry buttons and give it a
        bottom padding of 1em to separate it from the entry texts
    - Target the display-entry buttons and give each of them a margin
        of 0.2em to separate them from one another
    - Use the hover pseudo-class to change the cursor on the
        display-entry buttons to "pointer" whenever they are hovered on
 */

 /*
      - Inside the displayEntryButton addEventListener function,
          create a new variable named 'allEntries'.
      - use the document.queryselectorAll method to select all
          elements with the class of 'single-entry' and make that the
          value of the new allEntries variable.
    */

    /*
            - Use a for loop to iterate through all the elements in the
              allEntries variable.
            - Set each element's style.display property to 'none'.
        */