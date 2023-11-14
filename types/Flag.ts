import * as z from "zod";


export const FlagSchema = z.object({
    "code": z.string(),
    "name": z.string(),
    "country": z.string(),
    "countryCode": z.string(),
    "flag": z.string(),
});
export type Flag = z.infer<typeof FlagSchema>;