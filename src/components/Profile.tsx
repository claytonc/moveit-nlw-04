import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


export function Profile() {
  const {level, session} = useContext(ChallengesContext);


  return (
    <div className={styles.profileContainer}>

      <img src={session.user.image} alt="" />

      <div>

        <strong>{session.user.name}</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>

      </div>

    </div>
  )
}
