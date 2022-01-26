import throttle from 'lodash/throttle';

const keyForStorage = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

let data = {};
let savedDataParsed = {};

const savedData = localStorage.getItem(keyForStorage);
if (savedData) {
    savedDataParsed = JSON.parse(savedData);
}
    
data = savedDataParsed;
formRef.elements.email.value = savedDataParsed.email ?? '';
formRef.elements.message.value = savedDataParsed.message ?? '';
  
const onInputForm = evt => {
  data = {
  ...data,
    [evt.target.name]: evt.target.value,
  }

  const dataJson = JSON.stringify(data);
  localStorage.setItem(keyForStorage, dataJson);
}

const onSubmitForm = evt => {
  evt.preventDefault();
  
  const {
    elements: { email, message }
  } = evt.currentTarget;
  
  if (email.value === '' || message.value === '') {
    return;
  }
  const finalData = {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  }
    console.log(finalData);
  
  evt.currentTarget.reset();
  localStorage.removeItem(keyForStorage);
  data = {};
}

formRef.addEventListener('input', throttle(onInputForm, 500));
formRef.addEventListener('submit', onSubmitForm);