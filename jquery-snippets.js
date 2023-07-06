// Get and Post Requests
    $.get("example.php?name=david", function(data, status) {
        // output the result to console
        console.log(data, status);
    });
    $.post("example.php", {
        "name": "David"
    }, function(data, status) {
        // output the result to console
        console.log(data, status);
    });

//Scroll to top
    $(".scrolltotop").click(function(event) {
        event.preventDefault();
        $("html").animate({ scrollTop: 0 }, "slow");
    });

/**** Forms ******/

    //Form submit and reset
    $("#form_id")[0].submit();

    //Prevent form from being submitted more than once
    $("#form_id")[0].submit(function(event) {
        $("#form_id")[0].submit(function(event) {
            return false;
        });
    });

//Form validation - might be more regex than JQuery

    //Email Validation
    if (/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($("#email").val())) {
        console.log("Input field has valid email!");
    }

    //Length validation
    if ($("#password").val().length < 5 || $("#password").val().length > 15) {
        console.log("Password must be between 5 and 15 characters long!");
    }

    //Username validation
    if (!/^[a-zA-Z0-9]+$/.test($("#username").val())) {
        console.log("Username must contain only numbers and characters!");
    }





