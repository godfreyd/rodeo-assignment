import { IInvoice } from "../interfaces";
import sumBy from 'lodash/sumBy';

export const countTotal = (invoice: IInvoice) => {
    const subtotal =  Number(sumBy(invoice.phases, 'total').toFixed(2));
    const minusDiscount = subtotal * (1 - invoice.discount/100);
    const total = minusDiscount - invoice.fee;
    return Number(total.toFixed(2));
}