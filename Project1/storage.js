export function getTransactionsFromStorage() {
    return JSON.parse(localStorage.getItem('transactions')) || [];
  }
  
  export function updateLocalStorage(transactions) {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }
  