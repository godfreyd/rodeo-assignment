import { IPhaseItem } from "../interfaces";

const taxMap = {
    GIFT: 0,
    INCOME: 12,
    SALES: 18,
    VALUE_ADDED: 24,
};

export const countTotal = (product: IPhaseItem) => {

    const beforeTax = (product.amount * product.price) * (1 - product.discount/100);

    const total = beforeTax * (1 + taxMap[product.tax]/100);

    return Number(total.toFixed(2));
}