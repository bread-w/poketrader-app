$(document).ready(function () {
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }

    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function signUpUser(email, password) {
    $.post("/api/users", {
      email: email,
      password: password,
    })
      .then(function (data) {
        window.location.replace("/login");
      })
      .catch(function (err) {
        console.log(err);
        alert("Oops! There's been an error signing you up. Please try again.");
      });
  }
});
