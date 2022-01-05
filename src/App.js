import './App.css';
import { LandingPageLayout } from './components/LandingPageLayout';
import {useRoutes} from 'hookrouter';

function App() {
  const routes = {
    '/' :()=><LandingPageLayout/>,
  };
  const routeResults = useRoutes(routes);
  return (
    <div className="App">
      {routeResults}
    </div>
  );
}

export default App;
