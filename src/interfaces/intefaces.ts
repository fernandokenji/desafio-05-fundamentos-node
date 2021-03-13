interface Resquest {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface TransDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}
