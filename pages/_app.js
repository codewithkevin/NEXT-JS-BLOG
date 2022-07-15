import React, {useEffect, useState} from 'react'
import { Layout } from '../components'
import '../styles/globals.css'
import '../styles/global.scss'

// import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
