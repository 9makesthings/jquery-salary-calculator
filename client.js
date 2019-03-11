

$( document ).ready( readyNow );


let allEmployees = [];

let monthlyTotal; // moved where this variable was defined so I could call it in multiple functions.
// realized I needed to set it but not assign a value here so it wouldn't throw off new values added.


// This function will grab the employee info from the input fields and push it into the array
function addEmployee(){
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

    displayEmployees();
    monthlyCosts();
    
}

// function to display employees on the DOM as they are added to the array
function displayEmployees(){
    console.log('in displayEmployees'); 

    let updateTable = $( '#tableInputs' );
    updateTable.empty();

    for ( employee of allEmployees ){
        // console.log( 'employee:', employee );
        updateTable.append(`<tr><td> ${employee.first} </td><td> ${employee.last} </td><td> ${employee.id} </td><td> ${employee.title} </td><td> $${employee.salary} </td></tr>`);
        
    }

}

// Function to calculate monthly totals of salary costs
function monthlyCosts(){
    console.log('this updates the monthly cost total');

    monthlyTotal = 0;

    // for loop to add all of the employee salaries in the array together
    for ( employee of allEmployees ){
        monthlyTotal += employee.salary / 12;
    }

    // set total background color to red if monthlyTotal exceeds max
    if ( monthlyTotal > 20000 ){
        console.log('Turn red!');
        $( '#totalContainer' ).css( 'background-color', 'red' );
        
    }

    // update text in the DOM with the new monthlyTotal
    $('#total span').text( '$' + monthlyTotal.toFixed(2) );
    
}

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
            removeMonthly = person.salary / 12;
            console.log( 'employeeToRemove:', person );    
        }
    }

    // Define the new monthly total value and update value in DOM
    monthlyTotal = monthlyTotal - removeMonthly;
    $('#total span').text('$' + monthlyTotal.toFixed(2));

    // need to re-display employee array on DOM to remove employee from DOM
    displayEmployees(); 
}


function readyNow(){
    // submit button to add each employee to DOM
    $( '#submitButton' ).on( 'click', addEmployee );
    
    // delete button to remove an employee
    $( '#deleteButton' ).on( 'click', removeEmployee );
}