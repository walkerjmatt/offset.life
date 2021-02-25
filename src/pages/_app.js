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
            description="Together we can offset your life and help save our planet!"
            copyright="© 2020 Offset.Life"
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
