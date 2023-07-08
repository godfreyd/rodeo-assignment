import { IPhase } from "../interfaces";

export const countPhaseTotal = (phase: IPhase) => {
    const minusDiscount = phase.subtotal * (1 - phase.discount/100);

    const total = minusDiscount - phase.fee;

    return Number(total.toFixed(2));
}