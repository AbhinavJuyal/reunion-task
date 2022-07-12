import { Toaster } from "react-hot-toast";
import "./App.css";
import Navigation from "./components/Navigation";
import { SearchProvider } from "./context/SearchContext";
import Rent from "./pages/Rent";

function App() {
  return (
    <div className="bg-secondary">
      <div className="w-full bg-white">
        <Navigation />
      </div>
      <div className="px-24 pt-16 top-[104px] right-0 left-0 bottom-0 min-h-screen max-w-[2500px] mx-auto">
        <SearchProvider>
          <Rent />
        </SearchProvider>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
