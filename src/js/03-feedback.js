const throttle = require('lodash.throttle');
import {
  saveDataToLocalStorage,
  clearLocalStorage,
  autocompleteFormFormLocalStorage,
} from './feedback/storageAPI';

const formRef = document.querySelector('.feedback-form');

autocompleteFormFormLocalStorage();

formRef.addEventListener('input', throttle(saveDataToLocalStorage, 500));
formRef.addEventListener('submit', clearLocalStorage);
