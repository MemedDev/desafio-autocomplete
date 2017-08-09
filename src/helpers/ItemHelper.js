'user strict';

export function filterItem(value_input, data) {
  const value = value_input.split('\n').slice(-1)[0];

  return data.filter((item) => item.nome.toLowerCase().indexOf(value.toLowerCase()) > -1);
}

export function converteCurrency(number) {
  if (typeof number !== 'number') return;

  const decimal = number.toFixed(2).replace('.', ',');

  return `R$ ${decimal}`;
}
