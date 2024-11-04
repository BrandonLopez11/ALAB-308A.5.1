import { getTransactionsFromStorage, updateLocalStorage } from './storage.js';
import { addTransactionDOM, updateValues } from './ui.js';

let transactions = getTransactionsFromStorage();

export function addTransaction(e) {
  e.preventDefault();
  
  const textValue = text.value.trim();
  const amountValue = amount.value.trim();

  if (textValue === '' || amountValue === '') {
    alert('Please add a text and amount');
    return;
  }

  const transaction = {
    id: generateID(),
    text: textValue,
    amount: +amountValue,
  };

  transactions.push(transaction);
  addTransactionDOM(transaction);
  updateValues(transactions);
  updateLocalStorage(transactions);

  text.value = '';
  amount.value = '';
}

function generateID() {
  return Math.floor(Math.random() * 100000000);
}

export function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);
  updateLocalStorage(transactions);
  init();
}

export function init() {
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM);
  updateValues(transactions);
}
