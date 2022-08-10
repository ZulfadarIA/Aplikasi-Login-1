/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /* 
   * Membuat variabel email untuk menyimpan email password yang didapatkan saat button ditekan.
   * @Constant {string}
  */
  const email = inputEmailElement.value;
  
  /* 
   * Membuat variabel password untuk menyimpan nilai password yang didapatkan saat button ditekan.
   * @Constant {string}
  */
  const password = inputPasswordElement.value;
  
  /* Comment : Memastikan bahwa niali email dan password sesuai denagn nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    
    /* Comment : jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
    
 /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
  } else {
    showPopUp();
  }
});
