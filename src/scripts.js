const totalPriceElement = document.querySelector('.total-price');
const selectedPlanNumberElement = document.querySelector('.choose-plan > span');

const licenseRadioFields = document.querySelectorAll('.form-choose-licence-plan__field');
licenseRadioFields.forEach((field) => field.addEventListener('click', selectPlan));

const licensesQuantitySelectElement = document.querySelector('select');
licensesQuantitySelectElement.addEventListener('change', calculate);

let currentLicenseRadioField = Array.from(licenseRadioFields).find(function (fieldElement) {
  return fieldElement.classList.contains('focus');
});

function calculate() {
  totalPriceElement.value = getLicensesQuantity() * getCurrentLicensePrice();
  selectedPlanNumberElement.innerText = currentLicenseRadioField.dataset.index;
}

function selectPlan(e) {
  currentLicenseRadioField.classList.remove('focus');
  currentLicenseRadioField = e.currentTarget;
  e.currentTarget.querySelector('input').checked = true;
  currentLicenseRadioField.classList.add('focus');

  calculate();
}

function getCurrentLicensePrice() {
  return currentLicenseRadioField.dataset.value;
}

function getLicensesQuantity() {
  return licensesQuantitySelectElement.value;
}
