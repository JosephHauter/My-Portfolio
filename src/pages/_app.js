// pages/_app.js
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  
  export default MyApp