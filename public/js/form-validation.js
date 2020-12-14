const forms = document.querySelectorAll('.needs-validation');

// Enable Bootstrap validation custom styles
// https://v5.getbootstrap.com/docs/5.0/forms/validation/#custom-styles
forms.forEach((form) => {
  form.addEventListener(
    'submit',
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    },
    false
  );
});
