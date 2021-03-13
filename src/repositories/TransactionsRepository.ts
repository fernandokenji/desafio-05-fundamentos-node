import Transaction from '../models/Transaction';

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const balance = this.transactions.reduce(
      (totalAccount: Balance, trans: Transaction) => {
        if (trans.type === 'income') {
          totalAccount.income += trans.value;
        } else {
          totalAccount.outcome += trans.value;
        }
        return totalAccount;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    balance.total = balance.income - balance.outcome;
    return balance;
  }

  public create({ title, value, type }: TransDTO): Transaction {
    const trans = new Transaction({ title, value, type });
    this.transactions.push(trans);
    return trans;
  }
}

export default TransactionsRepository;
