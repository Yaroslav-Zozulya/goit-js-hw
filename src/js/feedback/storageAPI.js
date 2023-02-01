const formRef = document.querySelector('.feedback-form');

const saveDataToLocalStorage = () => {
  const data = {};
  new FormData(formRef).forEach((value, key) => (data[key] = value));

  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  } catch (error) {
    console.log(error.message);
  }
};

const clearLocalStorage = e => {
  e.preventDefault();
  try {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.clear();
  } catch (error) {
    console.log(error.message);
  }
  formRef.reset();
};

const autocompleteFormFormLocalStorage = () => {
  try {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (data) {
      for (const key in data) {
        formRef.elements[key].value = data[key];
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

export {
  saveDataToLocalStorage,
  clearLocalStorage,
  autocompleteFormFormLocalStorage,
};
