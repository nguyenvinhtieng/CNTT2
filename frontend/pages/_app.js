import React from 'react'
import '~/styles/globals.css'
import DataProvider from "../redux/store";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment

  return <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  
}

export default MyApp
