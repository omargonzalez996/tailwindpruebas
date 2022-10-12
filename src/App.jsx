import "./App.css";
import logo from "./assets/logo.svg";
function App() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-12 w-12" src={logo} alt="logo" />
      </div>
      <div className="text-xl font-medium text-black">
        <h1>ALSLASD</h1>
        <p className="text-slate-500">puto el que lo lea</p>
      </div>
    </div>
  );
}

export default App;
