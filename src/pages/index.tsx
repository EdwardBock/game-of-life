import Head from 'next/head'
import CellField from "components/CellField";


type HomeProps = {
}

export default function Home(
    {}: HomeProps
) {
    return (
        <>
            <Head>
                <title>Game of Life</title>
                {/*<link rel="icon" href="/favicon.ico"/>*/}
            </Head>


           <p>Game of life</p>
        </>
    )
}