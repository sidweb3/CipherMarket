import { useMemo, type ReactNode } from 'react';
import { WalletProvider as AleoWalletProvider } from '@demox-labs/aleo-wallet-adapter-react';
import { WalletModalProvider } from '@demox-labs/aleo-wallet-adapter-reactui';
import { DecryptPermission, WalletAdapterNetwork } from '@demox-labs/aleo-wallet-adapter-base';
import { LeoWalletAdapter, FoxWalletAdapter, PuzzleWalletAdapter } from 'aleo-adapters';

export function WalletProvider({ children }: { children: ReactNode }) {
  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: 'CipherMarket',
      }),
      new FoxWalletAdapter({
        appName: 'CipherMarket',
      }),
      new PuzzleWalletAdapter({
        appName: 'CipherMarket',
        appDescription: 'Confidential Data Exchange with Zero-Knowledge Proofs',
        appIconUrl: `${window.location.origin}/logo.png`,
        programIdPermissions: {
          [WalletAdapterNetwork.TestnetBeta]: ['data_attestation.aleo'],
        },
      }),
    ],
    []
  );

  return (
    <AleoWalletProvider
      wallets={wallets}
      network={WalletAdapterNetwork.TestnetBeta}
      decryptPermission={DecryptPermission.UponRequest}
      autoConnect={false}
    >
      <WalletModalProvider>{children}</WalletModalProvider>
    </AleoWalletProvider>
  );
}