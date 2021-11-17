import '../styles/globals.css';
import '../styles/index.css';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// MyApp.getStaticProps = async (appContext) => {
//   // calls page's `getStaticProps` and fills `appProps.pageProps`
//   const appProps = await App.getStaticProps(appContext);

//   return { ...appProps };
// };

export default MyApp;
