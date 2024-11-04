import { form } from './elements.js';
import { addTransaction, init } from './transaction.js';

document.addEventListener('DOMContentLoaded', init);
form.addEventListener('submit', addTransaction);
