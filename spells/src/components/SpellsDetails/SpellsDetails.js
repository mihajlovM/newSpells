 
 
  import SpellCard from './../SpellsCard/SpellCard'
   import { useState, useEffect } from "react";
  
  const SpellsDetails = ({ spell }) => {
   
 
 
  
    if (!spell) {
      return <p> loading</p>;
    }
  
    return (
      <div className="page-wrapper">
        <header className="page-header">
          <h1>Spell Detail</h1>
        </header>
        <main className="page-content">
          <SpellCard
        
            key={spell?.index}
            name={spell?.name}
            description={spell?.desc[0]}
            castingTime={spell?.casting_time}
            range={spell?.range}
            components={spell?.components}
            duration={spell?.duration}
          ></SpellCard>
        </main>
      </div>
    );
  };
  export default SpellsDetails;
  