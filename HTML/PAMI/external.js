var selectElement = document.getElementById('selectperiod');
var quarElements = document.querySelectorAll('.quar1');

selectElement.addEventListener('change', function() {
  for (var i = 0; i < quarElements.length; i++) {
    quarElements[i].style.display = 'none';
  }
  var selectedElement = document.getElementById(this.value);
  if (selectedElement) {
    selectedElement.style.display = 'block';
  }
});

var selectElement = document.getElementById('selectperiod');
var monthElements = document.querySelectorAll('.month1');

selectElement.addEventListener('change', function() {
  for (var i = 0; i < monthElements.length; i++) {
    monthElements[i].style.display = 'none';
  }
  var selectedElement = document.getElementById(this.value);
  if (selectedElement) {
    selectedElement.style.display = 'block';
  }
});

function checkPeriod() {
    var monthly = document.getElementById("month");
    var quarterly = document.getElementById("quarterly");
    
    if (monthly.checked) {
        quarterly.disabled = true;
    } else if (quarterly.checked) {
        monthly.disabled = true;
    } else {
        monthly.disabled = false;
        quarterly.disabled = false;
    }
}