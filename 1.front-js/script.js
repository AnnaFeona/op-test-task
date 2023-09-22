// "use strict";
const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1`;
const API_URL_MOCK = `https://fanated.com/coingecko/mock`;

const body = document.querySelector('body');
const main = createEl('main', body, ['main', 'wrapper']);
const table = createEl('table', main, ['table']);

createTable();

async function getData() {
  const responce = await fetch(API_URL, { method: 'GET', headers: {}});
  if (!responce.ok) {
    const message = await responce.text();

    console.log(message);

    throw new Error(message);
  }

  return responce.json();
}

async function createTable() {
  const tableHeader = createEl('tr', table, ['table__header']);
  createEl('th', tableHeader).textContent = 'id';
  createEl('th', tableHeader).textContent = 'symbol';
  createEl('th', tableHeader).textContent = 'name';


  const data = await getData();
  const currTable = data.map((item) => {
    return {
      name: item.name,
      id: item.id,
      symbol: item.symbol,
    }
  });

  currTable.forEach((item, index) => {
    const { id, name, symbol } = item;
    const row = createEl('tr', table, ['table__row']);
    createEl('td', row, ['table__cell']).textContent = name;
    createEl('td', row, ['table__cell']).textContent = id;
    createEl('td', row, ['table__cell']).textContent = symbol;

    if (index < 5) {
      row.style.backgroundColor = 'blue';
    }

    if (symbol.toLowerCase() == 'usdt') {
      row.style.backgroundColor = 'green';
    }
  })
}

function createEl(selector, parent, classes) {
  const child = document.createElement(selector);

  if (classes) {
    child.classList.add(...classes);
  }
  parent.append(child);

  return child;
}
