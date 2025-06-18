import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [network, setNetwork] = useState(null);
  const [ethBalance, setEthBalance] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Install MetaMask!");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const networkInfo = await provider.getNetwork();
    const signer = await provider.getSigner();
    const balance = await provider.getBalance(accounts[0]);

    setWalletAddress(accounts[0]);
    setNetwork(networkInfo.name);
    setEthBalance(ethers.formatEther(balance));
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => connectWallet());
      window.ethereum.on("chainChanged", () => window.location.reload());
    }
  }, []);

  return (
    <WalletContext.Provider value={{ walletAddress, network, ethBalance, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
