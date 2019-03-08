
console.log( 'ready to start' );

$( document ).ready( readyNow );


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

    console.log( 'newEmployee:', newEmployee );
    
    
}


function readyNow(){
    console.log('in readyNow');
    $( '#submitBtn' ).on( 'click', addEmployee )
}