import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Virtual Pool | Perfil</title>
      </Head>
      <div className={styles.background}>
        <Header path="perfil"/>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="./images/vpool2.png" alt="Logo Virtual Pool" />
          </div>
          <div className={styles.text}>
            <span>
              Virtual Pool é um jogo competitivo de sinuca online, onde os usuários 
              ganham/perdem pontos após disputar partidas com outros jogadores. 
              Os jogadores são ranqueados de acordo com suas pontuações.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}