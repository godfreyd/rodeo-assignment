import { IPhaseItem } from "../interfaces";
import sumBy from 'lodash/sumBy';

export const countSubTotal = (items: IPhaseItem[]) => {
    return Number(sumBy(items, 'total').toFixed(2));
}