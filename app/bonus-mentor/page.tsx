'use server'
import React from 'react'
import BonusMentorForm from '../components/dashboard/BonusMentor'
import { ThemeContextProvider } from '../theme/ThemeContext';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Layout from '../theme/Layout';
import theme from '../theme';
export const BonusMentor = () => {
    return (
      <BonusMentorForm />
      // <ThemeContextProvider>
      //   <ThemeProvider theme={theme}>
      //     <CssBaseline />
      //     <Layout>
      //     <BonusMentorForm />
      //     </Layout>
      //   </ThemeProvider>
      // </ThemeContextProvider>
      );
}

export default BonusMentor;