import './App.css';
import { LandingPageLayout } from './components/LandingPageLayout/LandingPageLayout';
import {useRoutes} from 'hookrouter';

function App() {
  const routes = {
    '/' :()=><LandingPageLayout test-id='landing-page-component'/>,
  };
  const routeResults = useRoutes(routes);
  return (
    <div className="App">
      {routeResults}
    </div>
  );
}

export default App;
