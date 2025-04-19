import { createDisplayText } from "../../../utilities/display-text";

const currencyTemplate = {
    gold: undefined
}

export type CurrencyKey = keyof typeof currencyTemplate;

export type Currency = Record<CurrencyKey, number>;

export const currencyKeys = Object.keys(currencyTemplate) as CurrencyKey[];
export const currencyDisplayText = createDisplayText(currencyKeys);