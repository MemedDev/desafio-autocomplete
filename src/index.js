'user strict';

import FormController from './controller/FormController';
import './scss/style.scss';

const initialForm = {
  startCreateForm: () => {
    const createNewForm = new FormController();
    createNewForm.prepareInput();
  }
};

initialForm.init = function () {
  initialForm.startCreateForm();
}();
