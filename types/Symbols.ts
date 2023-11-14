import * as z from "zod";


export const SymbolsSchema = z.object({
    "symbols": z.record(z.string(), z.string()),
});
export type Symbols = z.infer<typeof SymbolsSchema>;