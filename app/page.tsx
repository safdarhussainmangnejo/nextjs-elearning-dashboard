// 'use client'
// import styles from "./page.module.css";
// import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
// import Layout from "./theme/Layout";
// import { ThemeContextProvider } from "./theme/ThemeContext";
// import theme from "./theme";
// import { CssBaseline } from "@mui/material";
// import Dashboard from "./components/dashboard/Dashboard";

// export default function Home(Component: React.ComponentType) {
//   return (props: any) => (
//     <>
//       <ThemeContextProvider>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <Layout>
//           <Dashboard />
//           {Component ? <Component {...props} />: <Dashboard />}
//           </Layout>
//         </ThemeProvider>
//       </ThemeContextProvider>
//     </>
//   );
// }

import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
const Home = () => {
  return <Dashboard />;
};

export default Home;