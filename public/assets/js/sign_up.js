$(document).ready(function () {
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var firstInput = $("input#first-name");
  var lastInput = $("input#last-name");

  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstInput.val().trim(),
      lastName: lastInput.val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }

    signUpUser(userData.email, userData.password, userData.firstName, userData.lastName);
    emailInput.val("");
    passwordInput.val("");
    firstInput.val("");
    lastInput.val("");
  });

  function signUpUser(email, password, firstName, lastName) {
    $.post("/users", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    })
      .then(function (data) {
        console.log(data)
        window.location.replace("/");
      })
      .catch(function (err) {
        console.log(err);
        alert("Oops! There's been an error signing you up. Please try again.");
      });
  }
});
