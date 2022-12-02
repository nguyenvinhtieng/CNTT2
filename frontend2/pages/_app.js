import ReactTooltip from 'react-tooltip'
import { useRouter } from 'next/router'
import routes from "~/config/route"
import DefaultLayout from "~/layouts/DefaultLayout/DefaultLayout"
import '../styles/main.scss'
import tooltipConfig from "~/config/tooltipConfig"
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
      <ReactTooltip { ...tooltipConfig }/>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
