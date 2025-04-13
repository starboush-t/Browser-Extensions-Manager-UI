import Extensions from "./components/Extensions";
import Header from "./components/Header";
import {ThemeProvider} from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider >
      <div className="light-gradient dark:dark-gradient w-full h-screen px-4 py-5">
        <Header />
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
