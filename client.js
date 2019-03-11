

$( document ).ready( readyNow );


let allEmployees = [];
const NUMBER_OF_MONTHS = 12;
const MONTHLY_SALARY_LIMIT = 20000;
let monthlyTotal; // moved where this variable was defined so I could call it in multiple functions.
// realized I needed to set it but not assign a value here so it wouldn't throw off new values added.

function readyNow() {
    // submit button to add each employee to DOM
    $('#inputFields').on('submit', addEmployee);

    // delete button to remove an employee
    $('#deleteButton').on('click', removeEmployee);
} // end readyNow
// readyNow, start, init function first thing that runs. Good place to store


// This function will grab the employee info from the input fields and push it into the array
function addEmployee( event ){
    event.preventDefault();
    console.log('in addEmployee');

    // setting up the newEmployee object from user inputs
    let newEmployee = {
        first: $( '#firstName' ).val(), // almost forgot to make sure this is working! And it worked!
        last: $( '#lastName' ).val(),
        id: $( '#idNum' ).val(),
        title: $( '#jobTitle' ).val(),
        salary: $( '#annualSalary' ).val()
    } // end newEmployee

    // console.log( 'newEmployee:', newEmployee ); // check to see if my object works!

    // push newEmployee object into array
    allEmployees.push( newEmployee );
    
    console.log( 'allEmployees:', allEmployees ); // pushing to array works!

    // empty input fields
    // gave my input fields a class to empty the inputs instead of listing them individually, and it works!
    // DON'T FORGET THIS!!!! $( '.employeeInputs' ).val( '' );

    render();
    monthlyCosts();
    
} // end addEmployee

// function to display employees on the DOM as they are added to the array
function render(){
    console.log('in render'); 

    let updateTable = $( '#tableInputs' );
    updateTable.empty(); // need to clear outside of the loop. if in, it would empty at every instance in the loop

    for ( employee of allEmployees ){
        // console.log( 'employee:', employee );
        updateTable.append(`<tr>
        <td> ${employee.first} </td>
        <td> ${employee.last} </td>
        <td> ${employee.id} </td>
        <td> ${employee.title} </td>
        <td> $${employee.salary} </td>
        < /tr>`);
        // <td><button class="delete" >Delete</button></td>
        
    }

    // monthlyCosts();

} // end render

// Function to calculate monthly totals of salary costs
function monthlyCosts(){
    console.log('this updates the monthly cost total');

    monthlyTotal = 0;

    // for loop to add all of the employee salaries in the array together
    for ( employee of allEmployees ){
        monthlyTotal += parseInt(employee.salary / NUMBER_OF_MONTHS);
    }

    // set total background color to red if monthlyTotal exceeds max
    if ( monthlyTotal > MONTHLY_SALARY_LIMIT ){
        console.log('Turn red!');
        $( '#total' ).css( 'background-color', 'red' );
        
    }

    // update text in the DOM with the new monthlyTotal
    $('#total span').text( '$' + monthlyTotal.toFixed(2) );
    
} // end monthlyCosts

// function to remove an employee from the table when the button is clicked
function removeEmployee () {
    console.log('This button will remove an employee.');

    let employeeID = $('#idNum').val();

    // variable to determine how much to take out of the current monthlyTotal
    let removeMonthly = 0;

    // for loop finds each employee matching the ID enter in the field 
    for ( let i = 0; i < allEmployees.length; i++ ){

        let person = allEmployees[i];
        // conditional to say the if that ID is found in the array of employees, to splice that employee from the array
        if ( person.id === employeeID ){
            allEmployees.splice( i, 1 );
            // Finding the value of the amount to remove from the monthly total 
            // by finding the value of the specific employee's salary and dividing by 12
            removeMonthly = parseInt( person.salary / NUMBER_OF_MONTHS );
            console.log( 'employeeToRemove:', person );    
        }
    }

    // Define the new monthly total value and update value in DOM
    monthlyTotal = monthlyTotal - removeMonthly;
    $('#total span').text('$' + monthlyTotal.toFixed(2));

    if (monthlyTotal <= MONTHLY_SALARY_LIMIT) {
        $('#total').css('background-color', 'white');

    }

    // need to re-display employee array on DOM to remove employee from DOM
    render(); 
} // end removeEmployee

