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
    amount: number;
    price: number;
    discount: number;
    total?: number;
}

export interface IPhase {
    title: string;
    discount: number;
    fee: number;
    items: IPhaseItem[];
    subtotal: number;
    total?: number;
}

export interface IInvoice {
    number: number,
    partner: string,
    date: string,
    totalCount: number,
    fee: number,
    discount: number,
    phases: IPhase[]
}