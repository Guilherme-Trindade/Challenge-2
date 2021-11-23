function showPassword() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fieldPassword = document.getElementById('field-password');
  
    if(eye.style.display === 'none') {
      eye.style.display = 'block';
      eyeSlash.style.display = 'none';
      fieldPassword.type = 'text';
    } else {
      eye.style.display = 'none';
      eyeSlash.style.display = 'block';
      fieldPassword.type = 'password';
    }
  };


  $('#menu_principal').animate({bottom: '70px'}, function(){
    $('#texto-principal').fadeIn(4000);
  });
 
  function entrar() {
    window.location = "file:///C:/Users/Guilherme%20Trindade/Desktop/Charliger%202/Pagina_e-commerce.html"
  }