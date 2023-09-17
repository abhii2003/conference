import React from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.scss';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import Sidebar from '@/components/dashsidebar';
import { Provider } from 'react-redux';
import store from '../redux/store';


export default function App({ Component, pageProps }) {
  const router = useRouter();
  let dashBoard = router.route;
  if (dashBoard.match("/dashboard")) {
    dashBoard = true;
  }
  else {
    dashBoard = false;
  }
  if (dashBoard) {
    return (
      <>
        <Provider store={store}>
          <Nav />
          <Component {...pageProps} />
          <Footer />
          <Sidebar />
        </Provider>
      </>
    )
  }
  else {
    return (
      <>
        <Provider store={store}>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </>
    )
  }
}
