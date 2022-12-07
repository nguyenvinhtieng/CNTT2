import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { useRouter } from "next/router";
import routes from "~/config/route";
import DefaultLayout from "~/layouts/DefaultLayout/DefaultLayout";
import "../styles/main.scss";
import { ToastContainer } from "react-toastify";
import tooltipConfig from "~/config/tooltipConfig";
import "react-toastify/dist/ReactToastify.css";
import 'react-medium-image-zoom/dist/styles.css'

import DataProvider from "~/redux/store";
import Wrapper from "~/components/Wrapper/Wrapper";
import Loading from "~/components/Loading/Loading";
function MyApp({ Component, pageProps }) {
  const [mouted, setMounted] = useState(false);
  const router = useRouter();
  let Layout = DefaultLayout;
  routes.forEach((route) => {
    if (route.path === router.pathname) {
      Layout = route.component;
    }
  });
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <DataProvider>
      <Wrapper> 
        <Layout>
          {mouted && <ReactTooltip {...tooltipConfig} />}
          <Loading />
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </Wrapper>
    </DataProvider>
  );
}

export default MyApp;
