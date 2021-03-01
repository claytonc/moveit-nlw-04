import { GetServerSideProps } from 'next';
import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Login } from '../components/Login';
import { Profile } from "../components/Profile";
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from "../contexts/CountdownContext";
import styles from '../styles/pages/Home.module.css';
import { useSession } from 'next-auth/client'

interface HomeProps {
  level: number;
  currentExperience:number;
  challengesCompleted: number;
  session: object;
}

export default function Home(props: HomeProps) {

  const [session] = useSession()

  return (

    <>

    <Head>
      <title>Inicio | move.it</title>
    </Head>

    {session ? (

      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
        session={session}
      >

        <div className={styles.container}>

          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallengesProvider>

    ) : (

      <Login/>

    )}

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const {
    level,
    currentExperience,
    challengesCompleted
  }  = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
