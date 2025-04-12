import Extensions from "./components/Extensions";
import Header from "./components/Header";
import {ThemeProvider} from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider >
      <div className="bg-white dark:bg-gray-600 w-full h-screen">
        <Header />
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
