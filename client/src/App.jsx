import { Outlet } from "react-router-dom";
import Header from "./components/layouts/Header";
import TabSwitcher from "./components/TabSwitcher";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="min-h-screen max-w-screen-2xl w-full">
      <Header />
        <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
