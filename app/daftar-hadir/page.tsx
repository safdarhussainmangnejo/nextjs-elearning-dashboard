import React from 'react'
import { ThemeContextProvider } from '../theme/ThemeContext';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Layout from '../theme/Layout';
import theme from '../theme';
import DaftarHadirForm from '../components/dashboard/DaftarHadir';
export const DaftarHadir = () => {
    return (
      <ThemeContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Component {...pageProps} /> */}
          <Layout>
          <DaftarHadirForm />
          </Layout>
        </ThemeProvider>
      </ThemeContextProvider>
      );
}

export default DaftarHadir;