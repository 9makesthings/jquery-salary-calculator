
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
    $( '.employeeInputs' ).val( '' );
    
}


function readyNow(){
    console.log('in readyNow');
    $( '#submitBtn' ).on( 'click', addEmployee )
}