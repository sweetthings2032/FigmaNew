import Topbar from "./conponents/topbar/Topbar";
import Sidebar from "./conponents/sidebar/Sidebar";
import "./app.css";
import Analytics from "./conponents/analytics/analytics";
import Footer from "./conponents/footer/Footer";
function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          <Analytics />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
