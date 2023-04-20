import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
      <BrowserRouter>
          <div className={"site-container"}>
                  <Header/>
                  <AppRouter/>
                  <Footer/>
          </div>
      </BrowserRouter>
  )
}

export default App
