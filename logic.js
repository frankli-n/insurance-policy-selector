function logic() {
  Promise.all([retrieveDatabase('policies'), retrieveDatabase('answers')])
    .then(([policies, answers]) => {
      // Compare the results from both tables
      // Here you can perform your comparison logic
      // Perform your comparison logic here
      const valuesList = [];
      for (const key in answers) {
        const value = answers[key];
        valuesList.push(value);
      }

      let matchFound = false;
      const radioButtons = document.querySelectorAll('.question-radio');

      for (const key in policies) {
        const policy = policies[key];
        for (const answerpathKey in policy) {
          const valueList = policy[answerpathKey];
          // Compare valueList with valuesList
          if (valueList.length === valuesList.length && valueList.every((val, index) => val === valuesList[index])) {
            matchFound = true;
            // Call another function and pass the key as an argument
            displayRefresh();
            displayPolicy(key);
            disableRadioInputs()
            scrollToBottom()
          }
        }
      }
    })

    .catch((error) => {
      console.error('Error retrieving data:', error);
    });
}

function displayPolicy(policyKey) {
  // Use the policyKey argument in your other function
  const recommendedPolicyElement = document.getElementById('recommendedPolicy');
  recommendedPolicyElement.style.display = "block";

  let pstr = ''
  if (policyKey == 'comp') {
    pstr = 'we recommend Comprehensive insurance.'
    highlightCard('COMP')
  }
  if (policyKey == 'ctp') {
    pstr = 'we recommend Compulsary Third Party (CTP) insurance.'
    highlightCard("CTP")
  }
  if (policyKey == 'tpp') {
    pstr = 'we recommend Third party property (TPP) insurance. '
    highlightCard('TPP')
  }
  if (policyKey == 'any') {
    pstr = 'it is unclear which policy suits you.'
  }
  if (policyKey == 'ctpAndTpp') {
    pstr = 'a lower cost policy such as CTP or TPP would suit you the most.'
    highlightCard('CTP')
    highlightCard('TPP')

  }
  if (policyKey == 'tppAndComp') {
    pstr = 'a higher protection policy such as TPP or Comprehensive would suit you the most.'
    highlightCard('TPP')
    highlightCard('COMP')
  }
  recommendedPolicyElement.textContent = 'Based on your needs ' + pstr;

  // Perform your actions with the policy key here
}

function displayRefresh() {
  const refreshButton = document.getElementById('refreshBtn')
  refreshButton.style.display = 'block';
}

function disableRadioInputs() {
  var radioInputs = document.querySelectorAll('input[type="radio"]');

  radioInputs.forEach(function (radioInput) {
    radioInput.disabled = true;
  });
}


function highlightCard(cardId) {
  var card = document.getElementById(cardId);
  // card.style.backgroundColor = 'yellow';
  card.classList.add('highlighted');
  console.log('yolo')
}
