export const sendEmail = (name,email) => {

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