/*var modalButton = document.querySelector('.modal-button');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');




            modalButton.addEventListener('click',function(){
                modalBg.classList.add('bg-active');
            });
            modalClose.addEventListener('click',function(){
                modalBg.classList.remove('bg-active');
            })*/
         

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
    } else{
        swal({
            title: "Good job!",
            text: "You're subscriptions has been registered",
            icon: "success",
            button: "Awesome!",
        });
    };
});

$("#submit").click(function(){
    var email = $("#emailaddress").val();
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)){
        swal({
            title: "Good job!",
            text: "You're subscriptions has been registered",
            icon: "success",
            button: "Awesome!",
        });
    }
});