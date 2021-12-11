import Head from 'next/head'
import Button from '../components/shared/Button'
import Icon from '../components/shared/Icon'
import Image from '../components/shared/Image'
import Link from '../components/shared/Link'
import SubTitle from '../components/shared/SubTitle'
import Title from '../components/shared/Title'
import { AiFillAndroid } from "react-icons/ai";
import Input from '../components/shared/Input'
import Select from '../components/shared/Select'
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
