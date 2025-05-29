const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  const { name, value } = event.target;
  if (formData.hasOwnProperty(name)) {
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
}

function loadInfo() {
  const info = localStorage.getItem(STORAGE_KEY);

  if (!info) {
    return;
  }
  const parsed = JSON.parse(info);
  form.elements.email.value = parsed.email || '';
  form.elements.message.value = parsed.message || '';

  formData.email = parsed.email || '';
  formData.message = parsed.message || '';
}

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert(`All form fields must be filled in`);
    return;
  }
  console.log(formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
}

loadInfo();
