import DataFetching from "./components/DataFetching";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <DataFetching />
        </div>
      </div>
    </>
  );
}

export default App;
