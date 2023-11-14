import { create } from "zustand";
import { getCurrencies, getRates } from "../services/CurrencyService";
import { type Currency } from "../types/Currency";
import { Rates } from "../types/Rates";
import { isRecent } from "../helper/date";

interface CurrencyState {
  currencies: Currency[] | null;
  selectedFrom: Currency | null;
  selectedTo: Currency | null;
  rates: Rates | null;
  setCurrencies: (currencies: Currency[]) => void;
  setRates: (rates: Rates) => void;
  setSelectedFrom: (selectedFrom: Currency) => void;
  setSelectedTo: (selectedTo: Currency) => void;
  fetchCurrencies: () => void;
  fetchRates: () => void;
}

const useCurrencyStore = create<CurrencyState>((set) => ({
  currencies: null,
  selectedFrom: null,
  selectedTo: null,
  rates: null,
  setCurrencies: (currencies: Currency[]) => set({ currencies }),
  setSelectedFrom: (selectedFrom: Currency) => set({ selectedFrom }),
  setSelectedTo: (selectedTo: Currency) => set({ selectedTo }),
  setRates: (rates: Rates) => set({ rates }),
  fetchCurrencies: async () => {
    const response = await getCurrencies();
    set({ currencies: response });
    set({ selectedFrom: response![0] });
    set({ selectedTo: response![1] });
  },
  fetchRates: async () => {
      const response = await getRates();
      set({ rates: response });
    
  },
}));

export default useCurrencyStore;
