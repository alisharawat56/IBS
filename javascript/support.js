
    // $(".Feedback").hide();
        $(".feedform2").hide();
        $(".feedform3").hide();

    
    $(".complaint").click(function(){
        $(".feedform2").hide();
        $(".feedform3").hide();
        $(".feedform1").show();
    });
    
    $(".csubmit").click(function(){
        alert("Your complaint has been filed and will be looked into \n Thank you and sorry for the inconvience!");
        $("feedform1").hide();
    });

    $(".feedback").click(function(){
        $(".feedform1").hide();
        $(".feedform3").hide();
        $(".feedform2").show();
    });
    
    $(".fsubmit").click(function(){
        alert("Your feedback has been resgistered \n Thank you!");
        $("feedform1").hide();
    });


    $(".suggestion").click(function(){
        $(".feedform2").hide();
        $(".feedform1").hide();
        $(".feedform3").show();
    });
    
    $(".ssubmit").click(function(){
        alert("Your suggestion has been registered and will be looked into \n Thank you!");
        $("feedform1").hide();
    });





