$(function() {

  $('#signInBtn').on('click', (event) => {
    event.preventDefault();
    console.log('I have been clicked')
    $.ajax('/signin', {
      type: 'GET',
      cache: false
    }).done((data) => {
      console.log('shall have been routed to SignIn page now');
      $('body').html(data);
    }).catch((err) => console.log(err));
  });

  $('#signUpBtn').on('click', (event) => {
    event.preventDefault();
    console.log('I have been clicked')
    $.ajax('/signup', {
      type: 'GET',
      cache: false
    }).done((data) => {
      console.log('shall have been routed to SignUp page now')
      $('body').html(data);
    }).catch((err) => console.log(err));
  });

  // $('#submitBtn').on('click', (event) => {
  //   event.preventDefault();
  //   const newPet = {
  //     pets_name: $('#pet-name').val().trim(),
  //     pets_breed: $('#pet-breed').val().trim(),
  //     pets_age: $('#pet-age').val().trim(),
  //     pets_temperament: $('#pet-temperament').val().trim(),
  //     UserId: $('#UserId').val(),
  //   };
  //   if (Object.values(newPet).includes('')) return;
  //   $.ajax('/api/signup-pet', {
  //     type: 'POST',
  //     data: newPet,
  //     success: (res) => {
  //       window.location.href = '/profile';
  //     }
  //   });
  //   // .get('/profile', (req, res) => {
  //   //   res.render('profile.handlebar');
  //   // });
  // });

});
