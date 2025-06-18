import WalletInfo from "./components/WalletInfo";
import { WalletProvider } from "./context/WalletProvider";

function App() {
  return (
    <WalletProvider>
      <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <WalletInfo />
      </main>
    </WalletProvider>
  );
}

export default App;
