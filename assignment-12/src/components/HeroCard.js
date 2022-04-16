import React from 'react';

import styles from './HeroCard.module.css';

const HeroCard = (props) => {
  const { hero } = props;
  return (
    <div className={styles.heroCard}>
      <h3>{hero.name}</h3>
      <img src={hero.img_url} alt="avatar" />
      <p>Status: {hero.status}</p>
      <p>Origin: {hero.origin}</p>
      <p>Gender: {hero.gender}</p>
      <p>Hair: {hero.hair}</p>
    </div>
  );
};

export default HeroCard;
