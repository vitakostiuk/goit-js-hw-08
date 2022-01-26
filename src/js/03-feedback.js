
const _ = require('lodash');

const keyForStorage = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

let data = {};
console.log(data);

const savedData = localStorage.getItem(keyForStorage);
console.log(savedData);
const savedDataParsed = JSON.parse(savedData);
console.log(savedDataParsed);
data = savedDataParsed;
console.log(data);

const savedDataNotNull = () => {
  if (savedData) {
    formRef.elements.email.value = savedDataParsed.email ?? '';
    formRef.elements.message.value = savedDataParsed.message ?? '';
  }
}
savedDataNotNull();
  
const onInputForm = evt => {
  data = {
  ...data,
    [evt.target.name]: evt.target.value,
  }

  const dataJson = JSON.stringify(data);
  localStorage.setItem(keyForStorage, dataJson);
}

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

formRef.addEventListener('input', _.throttle(onInputForm, 500));
// formRef.addEventListener('submit', onSubmitForm);