import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import games from '../../data/games.json';

export function LandingPageLayout() {
    const searchBar =
    (<Autocomplete
        id='game-search-bar'
        options={games}
        getOptionLabel={(game) => game.title}
        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />);

    // return the constructed layout for the App to show the user
    return (<>
        {searchBar}
        <p>
            This is the <code>src/components/LandingPageLayout.js</code> component.
        </p>
        <div className='welcome-text'>
            <p>Welcome to Go Next!</p>
            <p>We're still booting up, but our aim is to be</p>
            <p>Your go-to place to find your next favorite game!</p>
        </div>
        </>);
}