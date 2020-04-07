const planFields = document.querySelectorAll('.form-choose-licence-plan__field');
planFields.forEach(field => field.addEventListener('click', selectCurrent));

var currentPlanField = Array.from(planFields).find(function (field) {
  return field.classList.contains('focus');
});


function selectCurrent(e) {
  if (currentPlanField) {
    currentPlanField.classList.remove('focus');
  }

  e.currentTarget.querySelector('input').checked = true;
  e.currentTarget.classList.add('focus');
  currentPlanField = e.currentTarget;
  document.querySelector('.choose-plan > span').innerText = currentPlanField.dataset.index;
}

const totalPriceElement = document.querySelector('.total-price');
const numberOfLicenses = document.querySelector('select');
let numberOfLicensesValue = numberOfLicenses.selectedIndex + 1;

let licensePrice = Array.from(planFields);
console.log(Array.from(planFields));

// .find(childNode => childNode.dataset?.value).dataset.value;

numberOfLicenses.addEventListener('change', function() {
  numberOfLicensesValue = numberOfLicenses.selectedIndex + 1;
  calculate()
});

planFields.forEach((field, i ) => field.addEventListener('click', function (e) {
  licensePrice = e.currentTarget.querySelector('span').dataset.value;
  calculate()
}));

function calculate() {
  totalPriceElement.value = numberOfLicensesValue * licensePrice;
}

calculate();

