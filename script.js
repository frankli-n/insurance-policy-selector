function handlePolicySelection(policyId) {
  var selectedPolicy = document.getElementById('selectedPolicy');
  selectedPolicy.style.display = "block";
  var policyName = document.getElementById('policyName-' + policyId).innerText;
  var policyStatement = document.getElementById('policyStatement-' + policyId).innerText;
  
  selectedPolicy.innerHTML = `
    <h4>Selected Policy: ${policyName}</h4>
    <p>${policyStatement}</p>
  `;
  
  var policyButtons = document.getElementsByClassName('policy-button');
  for (var i = 0; i < policyButtons.length; i++) {
    if (policyButtons[i].id === 'policyButton-' + policyId) {
      policyButtons[i].classList.add('btn-success');
      policyButtons[i].innerText = 'Selected';
    } else {
      policyButtons[i].classList.remove('btn-success');
      policyButtons[i].innerText = 'Select';
    }
  }
}


function refreshPage() {
  location.reload();
}


function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}