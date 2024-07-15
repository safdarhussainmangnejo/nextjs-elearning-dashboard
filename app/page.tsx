import Image from "next/image";
import styles from "./page.module.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import Layout from "./theme/Layout";
import { ThemeContextProvider } from "./theme/ThemeContext";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import Dashboard from "./components/dashboard/Dashboard";

export default function Home() {
  return (
    <>
      <ThemeContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Component {...pageProps} /> */}
          <Layout>
            <Dashboard />
          </Layout>
        </ThemeProvider>
      </ThemeContextProvider>

      {/* <ThemeContextProvider>
    <Layout>
      <div>
        <h2>Dashboard Operational</h2>
      </div>
    </Layout>
    </ThemeContextProvider> */}

      {/* <HomePage/> */}
      {/* <main><h1>Hello DH Solutions</h1></main> */}
    </>
  );
}
