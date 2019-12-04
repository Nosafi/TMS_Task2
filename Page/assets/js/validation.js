$(document).ready(function(){
    $('#sign_up_form').validate({
    rules: {
      input_name: {
        required: true,
        minlength: 1,
        maxlength: 10,
      },
      input_email: {
        required: true,
        email: true,
      },
      input_password: {
        required: true,
        minlength: 8,
        maxlength: 20,
      },
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
  $('#contact_us_form').validate({
    rules: {
      input_name: {
        required: true,
        minlength: 1,
        maxlength: 10,
      },
      input_email: {
        required: true,
        email: true,
      },
      input_subject: {
        required: true,
        minlength: 8,
        maxlength: 20,
      },
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});