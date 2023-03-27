import styles from "../styles/Home.module.scss";
import {Header} from "../src/components/common/header/Header";
import {Mercury} from "../src/components/pages/mercury/Mercury";
import Head from "next/head";

export default function MercuryPage() {
    return (
        <>
            <Head>
                <title>Mercury</title>
                <meta name="description" content="Mercury"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100;400;700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;400;700&display=swap" rel="stylesheet"/>
            </Head>
            <main className={styles.main}>
                <Header/>
                <Mercury/>
            </main>
        </>
    );
}