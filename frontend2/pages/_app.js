import ReactTooltip from 'react-tooltip'
import { useRouter } from 'next/router'
import routes from "~/config/route"
import DefaultLayout from "~/layouts/DefaultLayout/DefaultLayout"
import '../styles/main.scss'
import { ToastContainer } from 'react-toastify';
import tooltipConfig from "~/config/tooltipConfig"
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'


function MyApp({ Component, pageProps }) {
  const [mouted, setMounted] = useState(false)
  const router = useRouter()
  let Layout = DefaultLayout
  routes.forEach(route => {
    if (route.path === router.pathname) {
      Layout = route.component
    }
  })
  useEffect(()=> {
    setMounted(true)
  }, [])
  return <>
    <Layout>
      {mouted && <ReactTooltip { ...tooltipConfig }/>}
      <ToastContainer />
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
