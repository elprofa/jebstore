import Head from 'next/head'
import SectionAccueil from '../components/molecule/SectionAccueil'
import SectionProduit from '../components/molecule/SectionProduit'
export default function Home() {

  return (
    <div className="App">
      <Head>
        <title>King components</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="main">
        <SectionAccueil />
        <SectionProduit />
      </main>

    </div>
  )
}
