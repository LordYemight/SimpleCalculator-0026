This code combines CSS styling with JavaScript logic to create a visually appealing calculator with responsive design and basic arithmetic operations. 
It selects the necessary HTML elements using document.querySelector and document.querySelectorAll methods.
It applies CSS styles to the container, header, body, display, and buttons elements from the Javascript "script.js". 
It attaches event listeners to each button element using a forEach loop and the addEventListener method.
It defines a click event handler function, handleClick, which determines the type of button clicked (operator or number) based on the classList property.
If the clicked button is a number, the handleNumber function appends the number to the display value.
If the clicked button is an operator, the handleOperator function performs different actions based on the operator value.
For "AC", it clears the display.
For "DEL", it removes the last character from the display.
For "=", it evaluates the expression using eval and displays the result on the display.
For other operators, it appends the operator to the display value.
