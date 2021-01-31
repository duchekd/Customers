import './App.css';
import ReadAPI from './Components/ReadAPI'
import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <h1 className="header">List of Customers</h1>
      <ReadAPI></ReadAPI>
    </div>
  );
}

export default App;
