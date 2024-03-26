// Spells.js
import React, { useState, useEffect } from 'react';
import fetchSpells from './SpellsAxios';
import { Link } from 'react-router-dom';


function Spells() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    async function getSpells() {
      const spellsData = await fetchSpells();
      setSpells(spellsData);
    }
    getSpells();
  }, []);

  return (
    <div>
      <h1>Spells</h1>
      <ul>
        {spells.map((spell, index) => (
        <li>
        <Link to={`/spells/${spell.index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          {spell.name}
        </Link>
      </li>
      ))}
      </ul>
    </div>
  );
}

export default Spells;
