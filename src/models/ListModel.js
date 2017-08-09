'user strict';

import FormHelper from '../helpers/FormHelper';

class ListModel {
  constructor(list, input) {
    const $ = document.querySelector.bind(document);
    this._list = [];
    this._input = input;
    this._formHelper = new FormHelper($('.form__container'), input);
  }

  addNewItem(value) {
    let arr = this._input.value.split(/\r*\n/).slice(0, -1);
    arr.push(value);
    this._list = arr;
    this._input.value = this._list.map(item => `${item} \n`).join('');
    this._formHelper.reset();
  }

  changeItemList(list) {
    this._list = list;
  }
}

export default ListModel;
