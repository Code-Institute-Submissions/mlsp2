//Getting the button from the DOM
//let submitButton = document.getElementById('button') 

//Add event listener on click to the button - notice i added the event as argument to the function
export const sendEmail = (name,email) => {

    //prevent the reload of the page. here i prevent the event.
   // event.preventDefault()

    //Getting the name and email from the DOM
    //let fullName = document.getElementById('fullname').value
    //let email = document.getElementById('emailaddress').value

    //Sending the email with the name and email
    emailjs.send("gmail", "yourjourney", {
        "from_name": name,
        "from_email": email,
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                
            },
            function (error) {
                console.log("FAILED", error);
                
            }

        );
};

//module.exports = sendEmail