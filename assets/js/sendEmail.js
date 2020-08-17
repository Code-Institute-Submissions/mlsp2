export const sendEmail = (name,email) => {

    //Sending the email with the name and email
    emailjs.send("gmail", "yourjourney", {
        "from_name": name,
        "from_email": email,
    })
        .then(
            function (response) {
                swal({
                    title: "Good job!",
                    text: "You're subscriptions has been registered",
                    icon: "success",
                    button: "Awesome!",
                });
                
            },
            function (error) {
                swal({
                    title: "Error!",
                    text: "Please check fields",
                    icon: "warning",
                    button: "Ok, thank you",
                }); 
                
            }

        );
};