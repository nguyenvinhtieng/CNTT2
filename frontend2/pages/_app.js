import { useRouter } from 'next/router'
import routes from "~/config/route"
import DefaultLayout from "~/layouts/DefaultLayout/DefaultLayout"
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  let Layout = DefaultLayout
  routes.forEach(route => {
    if (route.path === router.pathname) {
      Layout = route.component
    }
  })

  return <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
