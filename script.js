// Style the body 
const bod = document.querySelector('body');
bod.style.height = '100vh';
bod.style.display = 'flex';
bod.style.alignItems = 'center';
bod.style.justifyContent = 'center';
bod.style.background = 'lightgrey';

// Style for Header
const basi = document.querySelector('.basi');
basi.style.textAlign = 'center';

// Style the container div
const container = document.querySelector('.container');
container.style.poistion = 'relative';
container.style.maxWidth = '300px';
container.style.width = '100%';
container.style.borderRadius = '12px';
container.style.padding = '10px 20px 20px';
container.style.background = 'white';
container.style.boxShadow = '0 0 20px bisque';

// Get the display element
const display = document.querySelector('.display');

// Style the display input
display.style.height =  '80px';
display.style.width = '100%';
display.style.outline = 'none';
display.style.border = 'none';
display.style.textAlign = 'right';
display.style.marginBottom = '10px';
display.style.fontSize = '25px';
display.style.color = 'black';
display.style.pointerEvents = 'none';

// style for operators
const operat = document.querySelector("#opt");
operat.style.color = 'deepskyblue';
const opeat = document.querySelector("#opt1");
opeat.style.color = 'deepskyblue';
const opera = document.querySelector("#opt2");
opera.style.color = 'deepskyblue';
const oprat = document.querySelector("#opt3");
oprat.style.color = 'deepskyblue';
const perat = document.querySelector("#opt4");
perat.style.color = 'deepskyblue';
const oerat = document.querySelector("#opt5");
oerat.style.color = 'deepskyblue';
const operate = document.querySelector("#opt6");
operate.style.color = 'deepskyblue';
const operatess = document.querySelector("#opt7");
operatess.style.color = 'deepskyblue';

// Get all the buttons
const buttons = document.querySelectorAll('button');

// style the class = "buttons"
const butns = document.querySelector('.butns');
butns.style.display = 'grid'; 
butns.style.gridGap = '10px';
butns.style.gridTemplateColumns = 'repeat(4, 1fr)';


// Style the buttons
buttons.forEach(button => {
  button.style.padding = '10px';
  button.style.borderRadius = '6px';
  button.style.border = 'none';
  button.style.fontSize = '20px';
  button.style.cursor = 'pointer';
  button.style.backgroundColor = 'bisque';
});

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

// Click event handler
function handleClick(event) {
  const button = event.target;
  const buttonValue = button.dataset.value;

  // Handle different button types
  if (button.classList.contains('operator')) {
    handleOperator(buttonValue);
  } else {
    handleNumber(buttonValue);
  }
}

// Handle number button clicks
function handleNumber(value) {
  display.value += value;
}

// Handle operator button clicks
function handleOperator(value) {
  switch (value) {
    case 'AC':
      // Clear the display
      display.value = '';
      break;
    case 'DEL':
      // Remove the last character from the display
      display.value = display.value.slice(0, -1);
      break;
    case '=':
      // Evaluate the expression and display the result
      try {
        const result = eval(display.value);
        display.value = result;
      } catch (error) {
        display.value = 'Error';
      }
      break;
    default:
      // Append the operator to the display
      display.value += value;
      break;
  }
}

