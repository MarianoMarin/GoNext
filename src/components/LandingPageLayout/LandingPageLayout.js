import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import games from '../../data/games.json';
import { navigate } from 'hookrouter';

/**
 * This function redirects the user to the game details page of the given game
 * @param {*} event The input change event from the autocomplete input field
 * @param {*} gameValue The game object selected from the list
 */
function selectGameFromList(event, gameValue) {
    const gameId = gameValue.id;
    navigate(`/games/${gameId}`);
}

/**
 * This is the main rendering function for the Landing page
 * @returns The component to be rendered, representing the landing page
 */
export function LandingPageLayout() {

    // Construct the autocomplete search bar
    const searchBar =
    (<Autocomplete
        id='game-search-bar'
        options={games}
        getOptionLabel={(game) => game.title}
        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        onChange={selectGameFromList}
    />);

    // return the constructed layout for the App to show the user
    return (<div className='landing-page-wrapper'>
        {searchBar}
        <p>
            This is the <code>src/components/LandingPageLayout.js</code> component.
        </p>
        <div className='welcome-text'>
            <p>Welcome to Go Next!</p>
            <p>We're still booting up, but our aim is to be</p>
            <p>Your go-to place to find your next favorite game!</p>
        </div>
    </div>);
}