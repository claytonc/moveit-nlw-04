import Head from 'next/head'
import styles from '../styles/components/Login.module.css'
import { signIn } from 'next-auth/client'

export function Login() {
  return (
    <>
    <Head>
        <title>Faça login com seu github - Move.it</title>
    </Head>


    <div className={styles.container}>

        <div>&nbsp;</div>

        <div className={styles.formLogin}>
            <img className={styles.logo} src="./logo.svg" alt="Logo"/>
            <h1>Bem-vindo</h1>

            <div className={styles.description}>
              <img src="./icons/github.svg" alt="Logo"/>
              <p>Faça login com seu Github para começar</p>

              <form>
                <div>
                    <button
                      type="button"
                      onClick={() => signIn('github')} />
                  </div>
              </form>

            </div>
        </div>
    </div>

    </>
  )
}
