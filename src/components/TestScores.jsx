import React from 'react';
import styles from '../styles/components/testScores.module.css';

const Testscores = ({ id, scores }) => {
  const renderScores = () => scores.map((score, idx) => {
    const testnum = idx + 1;
    return (
      <ul className={styles.tagsList}>
        <li key={`${id}-${testnum}`} className={styles.detailInfo}>
          <span className={styles.testGrade}>Test {testnum}: </span>
          <span>{score}%</span>
        </li>
      </ul>
    );
  });

  return (
    <ul className="student__details__information">
      {renderScores()}
    </ul>
  );
};

export default Testscores;
