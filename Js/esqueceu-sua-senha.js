$('#menu_principal').animate({bottom: '70px'}, function(){
    $('#texto-principal').fadeIn(4000);
  });


  $( '#texto-principal' ).submit(function( event ) {
    alert( "Acesse seu e-mail e configure sua senha!" );
    event.preventDefault();
    
  });