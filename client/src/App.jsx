import { EthProvider } from "./contexts/EthContext";
import Main from "./components";
import Footer from "./components/Footer";

function App() {
  return (
    <EthProvider>
      <div id="App">
        <Main />
        <hr />
        <Footer />
      </div>
    </EthProvider>
  );
}

export default App;
