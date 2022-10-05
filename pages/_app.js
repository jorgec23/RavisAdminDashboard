import '../styles/globals.css';
import Layout from '../components/Layout';
import {ThemeProvider} from '../utils/ThemeContext';
import {UserProductOrderDetailsProvider} from '../utils/UserProductOrderDetailsContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProductOrderDetailsProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </UserProductOrderDetailsProvider>
  ) 
}

export default MyApp
