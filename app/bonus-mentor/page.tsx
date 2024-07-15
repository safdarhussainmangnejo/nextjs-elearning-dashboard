import React from 'react'
import BonusMentorForm from '../components/dashboard/BonusMentor'
import { ThemeContextProvider } from '../theme/ThemeContext';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Layout from '../theme/Layout';
import theme from '../theme';
export const BonusMentor = () => {
    return (
      <ThemeContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Component {...pageProps} /> */}
          <Layout>
          <BonusMentorForm />
          </Layout>
        </ThemeProvider>
      </ThemeContextProvider>
      );
}

export default BonusMentor;