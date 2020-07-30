/*var modalButton = document.querySelector('.modal-button');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');




            modalButton.addEventListener('click',function(){
                modalBg.classList.add('bg-active');
            });
            modalClose.addEventListener('click',function(){
                modalBg.classList.remove('bg-active');
            })*/

// Form Validation

$("#submit").click(function(){
    var name = $("#fullname").val();
    var email = $("#emailaddress").val();
   
    if(name == '' || email == ''){
        swal({
            title: "Empty Fields!",
            text: "Please check the missing fields",
            icon: "warning",
            button: "Ok, thank you",
        });  
    }
    if(email !== /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/){
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
    };
});

