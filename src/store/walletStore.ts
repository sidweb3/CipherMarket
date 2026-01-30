import { create } from 'zustand';
import { WalletAdapter } from '@demox-labs/aleo-wallet-adapter-base';

export type WalletType = 'leo' | 'fox' | 'puzzle' | null;

interface WalletState {
  connected: boolean;
  address: string | null;
  walletType: WalletType;
  adapter: WalletAdapter | null;
  connecting: boolean;
  setAdapter: (adapter: WalletAdapter | null) => void;
  setConnected: (connected: boolean) => void;
  setAddress: (address: string | null) => void;
  setWalletType: (type: WalletType) => void;
  setConnecting: (connecting: boolean) => void;
  disconnect: () => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  connected: false,
  address: null,
  walletType: null,
  adapter: null,
  connecting: false,
  
  setAdapter: (adapter) => set({ adapter }),
  setConnected: (connected) => set({ connected }),
  setAddress: (address) => set({ address }),
  setWalletType: (walletType) => set({ walletType }),
  setConnecting: (connecting) => set({ connecting }),
  
  disconnect: () => {
    set({
      connected: false,
      address: null,
      walletType: null,
      adapter: null,
      connecting: false,
    });
  },
}));