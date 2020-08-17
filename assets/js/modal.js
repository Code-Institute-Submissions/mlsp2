import {sendEmail} from './sendEmail.js'

console.log(sendEmail);
// Form Validation

$("#submit").click(function(event){
    event.preventDefault();
    var name = $("#fullname").val();
    var email = $("#emailaddress").val();
    var emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   
    
    if(name == '' || email == ''){
        swal({
            title: "Empty Fields!",
            text: "Please check the missing fields",
            icon: "warning",
            button: "Ok, thank you",
        });  
    }
    else if(!emailPattern.test(email)){
        swal({
            title: "Invalid Email!",
            text: "Please write a valid email address",
            icon: "warning",
            button: "Ok, thank you",
        }); 
        
    }
    else{
        swal({
            title: "Good job!",
            text: "You're subscriptions has been registered",
            icon: "success",
            button: "Awesome!",
        });
        sendEmail(name,email)
    };
});

