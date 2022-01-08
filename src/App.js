import './App.css';
import { LandingPageLayout } from './components/LandingPageLayout/LandingPageLayout';
import {useRoutes} from 'hookrouter';
import { GamePageLayout } from './components/GamePageLayout/GamePageLayout';

/**
 * This is the root render of the GoNext app.
 * @returns The correct App view based on the URL
 */
function App() {
  // This list defines all valid URL routes within the app
  const routes = {
    '/' :()=><LandingPageLayout test-id='landing-page-component'/>,
    '/games/:id':({id}) => <GamePageLayout gameId={id}/>,
  };

  // This picks the correct component based on the incoming route, and renders the result
  const routeResults = useRoutes(routes);
  return (
    <div className="App">
      {routeResults}
    </div>
  );
}

export default App;
