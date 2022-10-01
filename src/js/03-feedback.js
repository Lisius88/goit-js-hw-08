import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const keyForStorage = 'feedback-form-state';
let feedbackFormData = {};

populateTextArea();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

function onInput(evt) {
  feedbackFormData[evt.target.name] = evt.target.value;

  localStorage.setItem(keyForStorage, JSON.stringify(feedbackFormData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const storedFormDataObject = JSON.parse(localStorage.getItem(keyForStorage));
  if (storedFormDataObject) {
    console.log(storedFormDataObject);
  }

  resetLocalStorage(evt);
}

function populateTextArea() {
  const saveMessage = JSON.parse(localStorage.getItem(keyForStorage));

  if (saveMessage?.email) {
    form.email.value = saveMessage.email;
  }
  if (saveMessage?.message) {
    form.message.value = saveMessage.message;
  }
}

function resetLocalStorage(evt) {
  localStorage.removeItem(keyForStorage);

  evt.target.reset();

  feedbackFormData = {};
}
