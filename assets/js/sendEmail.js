export const sendEmail = (name,email) => {

    //Sending the email with the name and email
    emailjs.send("gmail", "yourjourney", {
        "from_name": name,
        "from_email": email,
    });
};