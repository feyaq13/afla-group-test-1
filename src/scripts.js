var planFieldsObject = function () {
  const fields = document.querySelectorAll('.form-choose-licence-plan__field');
  var currentPlanField = function findElementInFocus() {
    Array.from(fields).find(function (field) {
      return field.classList.contains('focus');
    });
  };

  return {
    fields: fields,
    currentPlanField: currentPlanField
  }
}();

// const planFields = document.querySelectorAll('.form-choose-licence-plan__field');
planFieldsObject.fields.forEach(field => field.addEventListener('click', selectCurrent));

var currentPlanField = planFieldsObject.currentPlanField();

// console.log(planFieldsObject.fields);

function selectCurrent(e) {
  if (planFieldsObject.currentPlanField()) {
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

let licensePrice = 34;
// console.log(Array.from(planFields));

// .find(childNode => childNode.dataset?.value).dataset.value;

numberOfLicenses.addEventListener('change', function() {
  numberOfLicensesValue = numberOfLicenses.selectedIndex + 1;
  calculate()
});

planFieldsObject.fields.forEach((field, i ) => field.addEventListener('click', function (e) {
  licensePrice = e.currentTarget.querySelector('span').dataset.value;
  calculate()
}));

function calculate() {
  totalPriceElement.value = numberOfLicensesValue * licensePrice;
}

calculate();

