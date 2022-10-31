import '../styles/globals.css';
import Layout from '../components/Layout';
import {ThemeProvider} from '../utils/ThemeContext';
import {UserProductOrderDetailsProvider} from '../utils/UserProductOrderDetailsContext';
import {SessionProvider} from "next-auth/react";

function MyApp({ 
  Component, 
  pageProps: {session, ...pageProps }, 
}) { 
  return (
    <SessionProvider session={session}>
      <UserProductOrderDetailsProvider>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </UserProductOrderDetailsProvider>
    </SessionProvider>
  ) 
}
export default MyApp
