const fields = document.querySelectorAll('.form-choose-licence-plan__field');
fields.forEach(field => field.addEventListener('click', selectCurrent));

var current = Array.from(fields).find(function (field) {
  if (field.classList.contains('focus')) {
    return field
  }
});

function selectCurrent(e) {
  if (current) {
    current.classList.remove('focus');
  }

  e.currentTarget.querySelector('input').checked = true;
  e.currentTarget.classList.add('focus');
  current = e.currentTarget;
}

