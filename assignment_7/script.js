const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

document.getElementById('button').onclick = function (e) {
  e.preventDefault();

  var validation = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

  if (password.value.length <= 8 || password.value.match(validation)) {
    alert('Password length is less than 8 or has special characters');
  } else {
    document.getElementById('form-values').innerHTML =
      name.value + ' ' + email.value + ' ' + password.value;
  }
};
