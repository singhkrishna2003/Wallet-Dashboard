import { useWallet } from '../context/WalletProvider';

const WalletInfo = () => {
  const { walletAddress, network, ethBalance, connectWallet } = useWallet();

  return (
    <div className="p-6 max-w-md mx-auto rounded-lg shadow-lg bg-white dark:bg-gray-800">
      {!walletAddress ? (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="text-gray-900 dark:text-white space-y-3">
          <p><strong>Address:</strong> {walletAddress}</p>
          <p><strong>Network:</strong> {network}</p>
          <p><strong>ETH Balance:</strong> {ethBalance} ETH</p>
        </div>
      )}
    </div>
  );
};

export default WalletInfo;
