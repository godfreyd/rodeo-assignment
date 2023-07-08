enum Taxes {
  GIFT,
  INCOME,
  SALES,
  VALUE_ADDED,
}

export interface IPhaseItem {
  title: string;
  tax: keyof typeof Taxes;
  unit: string;
  amount: string;
  price: string;
  discount: string;
  total: string;
}

export interface IPhase {
  title: string;
  discount?: string;
  fee?: string;
  items: IPhaseItem[];
  subtotal: string;
  total: string;
}
