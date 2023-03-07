import React from 'react'
import Head from 'next/head'
import style from '@styles/components/speakerpage/Speakers.module.scss'
function Speakers() {
    return (
        <>
            <Head>
                <title>Speakers-VIT Conference </title>
                <meta name="description" content="Conference on Linear Algebra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>Speakers</div>
        </>
    )
}

export default Speakers