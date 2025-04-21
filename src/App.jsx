import Extensions from "./components/Extensions";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="light-gradient dark:dark-gradient w-full h-fit px-4 py-7 md:px-10 lg:px-20 xl:px-30">
          <Header />
          <Extensions />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
