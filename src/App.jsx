import Extensions from "./components/Extensions";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <section className="flex flex-col min-h-dvh light-gradient dark:dark-gradient transition-colors duration-600">
      <ThemeProvider>
        <div className="flex flex-col px-4 py-7 md:px-10 lg:px-20 xl:px-30">
          <Header />
          <Extensions />
        </div>
      </ThemeProvider>
    </section>
  );
}

export default App;
