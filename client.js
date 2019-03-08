
console.log( 'ready to start' );

$( document ).ready( readyNow );


// This function will grab the employee info from the input fields and push it into the array
function addEmployee(){
    console.log('in addEmployee');

    // setting up the newEmployee object
    // let newEmployee = {
       let firstName = $( '#firstName' ).val(); // almost forgot to make sure this is working!
    //     lastName = $( '#lastName' ).val();
    //     idNumber = $( '#idNum' ).val();
    //     title = $( '#jobTitle' ).val();
    //     salary = $( '#annualSalary' ).val();
    // }

    console.log( 'firstName:', firstName );
    
    
}


function readyNow(){
    console.log('in readyNow');
    $( '#submitBtn' ).on( 'click', addEmployee )
}