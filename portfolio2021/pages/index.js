import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import styled from '@emotion/styled'

const NewButton = styled(Button)`
background: red;
`

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewButton>Yo im button</NewButton>
    </div>
  );
}
