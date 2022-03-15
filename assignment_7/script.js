const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

document.getElementById('button').onclick = function (e) {
  e.preventDefault();

  if (password.value.length <= 8) {
    alert('Password length is less than 8');
  } else {
    document.getElementById('form-values').innerHTML =
      name.value + ' ' + email.value + ' ' + password.value;
  }
};
