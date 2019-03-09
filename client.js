
console.log( 'ready to start' );

$( document ).ready( readyNow );


let allEmployees = [];


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

// function to display employees on the DOM
function displayEmployees(){
    console.log('in displayEmployees'); 

    let updateTable = $( '#tableInputs' );
    updateTable.empty();

    for ( employee of allEmployees ){
        // console.log( 'employee:', employee );
        updateTable.append(`<tr><td> ${employee.first} </td><td> ${employee.last} </td><td> ${employee.id} </td><td> ${employee.title} </td><td> ${employee.salary} </td></tr>`);
        
    }

}


function monthlyCosts(){
    console.log('this updates the monthly cost total');

    let monthlyTotal = 0;

    // for loop to add all of the employee salaries in the array
    for ( employee of allEmployees ){
        monthlyTotal += employee.salary / 12;
    }
    console.log('monthlyTotal:', monthlyTotal);

    $('#total span').text( '$' + monthlyTotal.toFixed(2) );
    
}


function readyNow(){
    console.log('in readyNow');
    $( '#submitBtn' ).on( 'click', addEmployee )
    
    // update monthlyTotal in DOM
}