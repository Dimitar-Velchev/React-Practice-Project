//Base URL
const base_url = "https://api.rawg.io/api";

const API_KEY = "82f28c739a4c4eee9af14a8d8670f3f9";

//Getting date

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//FULL URL
const popular_games = `${base_url}/games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=15`;
const upcoming_games = `${base_url}/games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=15`;
const new_games = `${base_url}/games?key=${API_KEY}&dates=${lastYear},${currentDate}&orderig=-released&page_size=15`;

//SHORT URL
export const popularGamesURL = () => `${popular_games}`;
export const upcomingGamesURL = () => `${upcoming_games}`;
export const newGamesURL = () => `${new_games}`;

//GAME DETAILS

//export const gameDetailsURL = (game_id) => `${base_url}/games${game_id}${API_KEY}`

export const gameDetailsURL = (game_id) => `${base_url}/games/${game_id}.json?&key=${API_KEY}`;

//GameScreenShot

export const gameScreenShootURL = (game_id) => `${base_url}/games/${game_id}/screenshots?&key=${API_KEY}`;
