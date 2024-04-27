// globals.js
import axios from 'axios';

// Function to fetch players from Serie A
async function fetchSerieAPlayers() {
    try {
        const apiKey = '94fadb6ba04543abb2d445fdca9684df';
        const response = await axios.get('https://api.football-data.org/v2/competitions/SA/players', {
            headers: {
                'X-Auth-Token': apiKey
            }
        });

        // Extract player data from the response
        const players = response.data.players;
        
        // Shuffle the array of players to get random players
        shuffleArray(players);

        // Return the first 36 players (or less if there are fewer than 36 players)
        return players.slice(0, 36);
    } catch (error) {
        console.error('Error fetching Serie A players:', error);
        return [];
    }
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Export an object containing the array of players and the function to fetch them
export default {
    serieAPlayers: [], // Array to store the Serie A players globally

    async fetchAndSaveSerieAPlayers() {
        // Fetch Serie A players
        const players = await fetchSerieAPlayers();
        
        // Save players to the global array
        this.serieAPlayers = players;
    }
};
