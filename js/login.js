$(document).ready(function() {
    var login = localStorage.getItem('login');
    if(login && login == "true"){
        window.location.href="dashboard.html";
    }
    $('#login-form').submit(function(event) {

        event.preventDefault();


        var username = $('#username').val();
        var password = $('#password').val();
        /*$user = localStorage.getItem('username');
  /*localStorage.getItem('password');
  localStorage.getItem('username');
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);*/



        // send an Ajax request to the PHP script
        $.ajax({
            url: 'http://localhost/guvi-s-task-master/php/login.php',
            type: 'POST',
            data: {user: username, pass: password},
            success: function(response) {
                // handle the response from the PHP script
                if (response == "success") {
                    $('#message').text("Login successful!");
                    localStorage.setItem('login', true);
                    window.location.href = 'dashboard.html'
                } else {
                    $('#message').text("Invalid username or password.");
                }
            },
            error: function() {
                $('#message').text("An error occurred while processing your request.");
            }
        });
    });
  });
