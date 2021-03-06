import throttle from 'lodash/throttle';

const keyForStorage = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

let data = {};

const onInputForm = evt => {
  data[evt.target.name] = evt.target.value;
  
  const dataJson = JSON.stringify(data);
  localStorage.setItem(keyForStorage, dataJson);
}

const savedData = localStorage.getItem(keyForStorage);
const dataParsed = JSON.parse(savedData);

const savedInput = () => {
  formRef.elements.email.value = dataParsed !== null ? dataParsed.email : '';
  formRef.elements.message.value = dataParsed !== null ? dataParsed.message : '';
  // formRef.elements.email.value = dataParsed.email ?? '';
  // formRef.elements.message.value = dataParsed.message ?? '';
}
savedInput();

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