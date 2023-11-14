import * as z from "zod";

export const CurrencySchema = z.object({
    "symbol": z.string(),
    "name": z.string(),
    "code": z.string(),
    "flag": z.string(),
});
export type Currency = z.infer<typeof CurrencySchema>;