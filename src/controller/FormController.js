'user strict';

import ListModel from '../models/ListModel';

import FormHelper from '../helpers/FormHelper';
import { filterItem } from '../helpers/ItemHelper';

import ListView from '../views/ListView';

import RequestService from '../services/RequestService';

import * as CONF from '../config/constants';


class FormController {
  constructor() {
    const $ = document.querySelector.bind(document);
    this._searchList = $('.search__list');
    this._prescription = $('#prescription');
    this._search = $('.search');
    this._formContainer = $('.form__container');

    this._listView = new ListView(this._searchList, this._prescription, this._search);
    this._listModel = new ListModel([], this._prescription);
    this._formHelper = new FormHelper(this._formContainer, this._prescription);
    this._data = [];
    this.getMed();
  }

  getMed() {
    RequestService().then(data => {
      this._data = data;
    });
  }

  prepareInput() {
    this._prescription.addEventListener('keyup', (e) => {
      this.showSearch(e.target.value, 'search--active');
    });
    this._prescription.addEventListener('keydown', (e) => {
      this.updateList(e);
    });
  }

  showSearch(value_input, class_active) {
    const item = filterItem(value_input, this._data);

    this._formHelper.iconUpdate(this._prescription, value_input, 'form__entry--text', 'form__entry--search');
    this._formHelper.preparePosition(this._search, value_input, class_active, item);

    this._listView.update(item);
    this.prepareAction();
  }

  prepareAction() {
    let action = document.getElementsByClassName('itemmed__item');
    const self = this;
    for (var i = 0; i < action.length; i++) {
      action[i].addEventListener("click", function (e) {
        e.preventDefault();
        self.add(e);
      }, false);
    }
  }

  add(e, medicines) {
    const elem = e.path.filter(item => {
      if (item.classList && item.classList.contains('itemmed__item')) {
        return item;
      }
    })[0];
    const item_name = elem.querySelector('.itemmed__name').textContent;
    const item_type = elem.querySelector('.itemmed__manufacturer').textContent;
    const value = `${item_name} ${item_type}`;

    this._listModel.addNewItem(value);
  }

  updateList(e, name) {
    if (e.keyCode === CONF.KEY_ENTER) {
      const item = e.target.value.split(/\r*\n/);
      this._listModel.changeItemList(item);
    }
  }
}

export default FormController;
