import { BrowserRouter as Router, Route} from 'react-router-dom';
import GlobalState from "./context/Global/globalState";
import Home from "./pages/Home";

function App() {
  return (
      <GlobalState>
    <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </GlobalState>
  );
}

export default App;
