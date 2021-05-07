import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "util/analytics.js";
import { AuthProvider } from "util/auth.js";
import { ThemeProvider } from "util/theme.js";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <>
          <Navbar
            color="default"
            logo="/tempLogo.png"
            logoInverted="/tempLogo.png"
          />

          <Component {...pageProps} />

          <Footer
            bgColor="default"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            description="We Connect People to our Planet and Empower them to be Sustainable Citizens"
            copyright="© 2021 Offset.Life"
            logo="/tempLogo.png"
            logoInverted="/tempLogo.png"
            sticky={true}
          />
        </>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
