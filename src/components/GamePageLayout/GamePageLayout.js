import games from '../../data/games.json';

/**
 * This function finds the correct game data object using the given gameId
 * @param {*} gameId The id of the game to be retrieved
 * @returns {Object} The whole game data object corresponding to the given id
 */
function getGameData(gameId) {
    return games.filter((game) => game.id === gameId)[0];
}

/**
 * This is the main render function of the GameLayoutPage
 * @param {gameId} string The id of the game to be dispayed
 * @returns A GameLayooutPage showing the details of the game requested by the user.
 */
export function GamePageLayout({ gameId }) {
    
    // Here we prepare all our relevant variables so we can easily render
    const gameData = getGameData(gameId);
    const platformsList = gameData.platforms.join(", ");
    const gameTitleText = `Game Title: ${gameData.title}`;
    const gamePlatformListText = `Available on: ${platformsList}`;

    // Here we use our calculated values to render the page
    return <div className='game-page-wrapper'>
        <p className='game-title'>
            {gameTitleText}
        </p>
        <p className='game-platforms'>
            {gamePlatformListText}
        </p>
    </div>
}