import { createPublicClient, http } from "viem";
import { FC, PropsWithChildren } from "react";
import ResetCSS from "@/styles/ResetCSS";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  sepolia
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const Providers: FC<PropsWithChildren> = ({children}) => {

  const { chains, publicClient } = configureChains(
    [sepolia],
    [
      publicProvider()
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'CurrencyX',
    projectId: '032d67db79b577525a961d660ada0032',
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })

  return (
    <WagmiConfig config={wagmiConfig}>
      <ResetCSS />
      <RainbowKitProvider modalSize='compact' chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default Providers
