"use client";

import React, { createContext, useContext, useRef } from "react";
import { StoreApi, useStore } from "zustand";

import {
  type CounterStore,
  createCounterStore,
  initialCounterStore,
} from "@/stores/counter-store";

export const CounterStoreContext = createContext<StoreApi<CounterStore> | null>(
  null
);

export interface CounterStoreProviderProps {
  children: React.ReactNode;
}

export const CounterStoreProvider = ({
  children,
}: CounterStoreProviderProps) => {
  const storeRef = useRef<StoreApi<CounterStore>>();

  if (!storeRef.current) {
    storeRef.current = createCounterStore();
  }
  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

export const useCounterStore = <T,>(
  selector: (store: CounterStore) => T
): T => {
  const counterStoreContext = useContext(CounterStoreContext);

  if (!counterStoreContext) {
    throw new Error(
      `useCounterStore must be used within a CounterStoreProvider`
    );
  }

  return useStore(counterStoreContext, selector);
};
