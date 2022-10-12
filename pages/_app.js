import React from 'react'
import '~/styles/globals.css'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment
  console.log(Component)
  return <Layout>
          <Component {...pageProps} />
        </Layout>
  
}

export default MyApp
