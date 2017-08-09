'user strict';

import View from './View';
import { converteCurrency } from '../helpers/ItemHelper';

class ListView extends View {

  constructor(elem) {
    super(elem);
  }

  prepareIcon(item) {
    return item.titularidade === 'Genérico' ?
      '<div class="itemmed__icon itemmed__icon--referency"></div>' :
      '<div class="itemmed__icon itemmed__icon--generic"></div>';
  }

  preparePrice(item) {
    return item.precoMax === item.precoMin ?
      `<span class="itemmed__price-default">${converteCurrency(item.precoMax)}</span>` :
      `<span class="itemmed__from">de ${converteCurrency(item.precoMax)}</span><span class="itemmed__to">por ${converteCurrency(item.precoMin)}</span>`;
  }

  template(model) {
    return `<ul class="itemmed">
      ${model.map(item => {
        return `
          <li class="itemmed__item">
              ${this.prepareIcon(item)}
              <div class="itemmed__title">
                  <span class="itemmed__name">${item.nome}</span>
                  <span class="itemmed__principle">${item.principioAtivo}</span>
              </div>
              <div class="itemmed__info">
                  <span class="itemmed__manufacturer">${item.fabricante}</span>
                  <span class="itemmed__ownership">${item.titularidade}</span>
              </div>
              <div class="itemmed__price">
                  ${this.preparePrice(item)}
              </div>
              <div class="itemmed__ownership-hover">
                  <span>${item.titularidade}</span>
              </div>
          </li>
          `}).join('')}
      </ul>`;
  }
}

export default ListView;
