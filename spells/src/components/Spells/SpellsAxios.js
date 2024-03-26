// SpellsAxios.js
import axios from 'axios';

const fetchSpells = async () => {
  try {
    const response = await axios.get('https://www.dnd5eapi.co/api/spells');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching spells:', error);
    return [];
  }
};

export default fetchSpells;
