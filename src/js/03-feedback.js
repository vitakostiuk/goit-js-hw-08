const _ = require('lodash');

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const textarea = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const feedback = { email: '', message: '' };

feedbackForm.addEventListener('submit', onSubmit);

const onSetItemToLocalStorage = _.throttle(function () {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
}, 500);

emailInput.addEventListener('input', event => {
  feedback.email = event.currentTarget.value;
  onSetItemToLocalStorage();
});

textarea.addEventListener('input', event => {
  feedback.message = event.currentTarget.value;
  onSetItemToLocalStorage();
});

const savedFeedback = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedFeddback = JSON.parse(savedFeedback);

function onUpdateInput() {
  emailInput.value = parsedFeddback !== null ? parsedFeddback.email : '';
  textarea.value = parsedFeddback !== null ? parsedFeddback.message : '';
}
onUpdateInput();

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  const currentFeedback = { email: email.value, message: message.value };
  console.log(currentFeedback);

  localStorage.clear();
  event.currentTarget.reset();
}




// import throttle from 'lodash/throttle';

// const keyForStorage = 'feedback-form-state';

// const formRef = document.querySelector('.feedback-form');

// let data = {};
// let savedDataParsed = {};

// const savedData = localStorage.getItem(keyForStorage);
// if (savedData) {
//     savedDataParsed = JSON.parse(savedData);
// }
    
// data = savedDataParsed;
// formRef.elements.email.value = savedDataParsed.email ?? '';
// formRef.elements.message.value = savedDataParsed.message ?? '';
// console.log(data);
  
// const onInputForm = evt => {
//   data = {
//   ...data,
//     [evt.target.name]: evt.target.value,
//   }

//   const dataJson = JSON.stringify(data);
//   localStorage.setItem(keyForStorage, dataJson);
// }

// const onSubmitForm = evt => {
//   evt.preventDefault();
  
//   const {
//     elements: { email, message }
//   } = evt.currentTarget;
  
//   if (email.value === '' || message.value === '') {
//     return;
//   }
//   const finalData = {
//     email: formRef.elements.email.value,
//     message: formRef.elements.message.value,
//   }
//     console.log(finalData);
  
//   evt.currentTarget.reset();
//   localStorage.removeItem(keyForStorage);
//   data = {};
// }

// formRef.addEventListener('input', throttle(onInputForm, 500));
// formRef.addEventListener('submit', onSubmitForm);