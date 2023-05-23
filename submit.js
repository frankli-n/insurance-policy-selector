coolabahDB.remove()
// Save answers from the questionnaire
function submitQuestionnaire() {

  // Save answers from the questionnaire
  const radio1 = document.querySelector('input[name="question1"]:checked');
  const radio2 = document.querySelector('input[name="question2"]:checked');
  const radio3 = document.querySelector('input[name="question3"]:checked');

  // Convert answers to their values or set them as 'empty' if null
  const answer1 = radio1 ? radio1.value : 'empty';
  const answer2 = radio2 ? radio2.value : 'empty';
  const answer3 = radio3 ? radio3.value : 'empty';
  saveAnswers(answer1, answer2, answer3);
}
// save me answers the the db
const saveAnswers = (answer1, answer2, answer3) => {
  coolabahDB.remove()
    .then(() => {
      coolabahDB.set({
        answer1: answer1,
        answer2: answer2,
        answer3: answer3
      });
    })
    .then(() => {
      retrieveDatabase('policies');
      retrieveDatabase('answers');
      logic()
    })
    .catch((error) => {
      console.error("Error saving answers:", error);
    });
};


