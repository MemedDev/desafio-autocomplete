'user strict';

class FormHelper {
  constructor(elem, input) {
    this._elem = elem;
    this._input = input;
  }

  _hideSearch(active_class) {
    this._elem.querySelector('.search').classList.remove(active_class);
  }

  _calcBackground(elem, initial_position, multiplier, space) {
    const background_position_x = window.getComputedStyle(elem).backgroundPositionX;
    return `${background_position_x} ${(initial_position) + (multiplier - 1) * space}px`;
  }

  iconUpdate(elem, value, class_text, class_search) {
    const pixels = 48;
    const space = 25;

    const enter_numbers = value.split('\n').length;
    elem.style.backgroundPosition = this._calcBackground(elem, pixels, enter_numbers, space);

    if (enter_numbers % 2) {
      elem.classList.remove(class_text);
      elem.classList.add(class_search);
    } else {
      elem.classList.remove(class_search);
      elem.classList.add(class_text);
    }
  }

  preparePosition(search, inputVal, className, item) {
    const qntEntry = inputVal.split('\n').length;
    const value = inputVal.split('\n').slice(-1)[0];

    if (qntEntry % 2) {
      search.style.top = `${84 + (qntEntry * 25) - 25}px`;
      value.length > 3 && item.length ? search.classList.add(className) : search.classList.remove(className);
    } else {
      search.classList.remove(className);
    }
  }

  reset() {
    this._input.setAttribute('class', 'form__entry');
    this.iconUpdate(this._input, this._input.value, 'form__entry--text', 'form__entry--search');
    this._hideSearch('search--active');
    this._input.focus();
  }
}

export default FormHelper;
