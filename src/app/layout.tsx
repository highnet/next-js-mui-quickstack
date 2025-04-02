"use client"
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@/theme";
import PageLayout from "@/components/PageLayout";
import ButtonAppBar from "@/components/ui/ButtonAppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import CssBaseline from "@mui/material/CssBaseline";
import { useThemeStore } from "@/stores/useThemeStore";
import { useEffect, useState } from "react";

function ThemedContent({ children }: { children: React.ReactNode }) {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
        setMounted(true);
  }, [isDarkMode]);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {mounted ? children : <div style={{ visibility: "hidden" }}>{children}</div>}
    </MUIThemeProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (    <html lang="en">
    <body className={`antialiased`}>
      <AppRouterCacheProvider>
        <ThemedContent>
          <PageLayout
            header={<ButtonAppBar />}
            main={children}
            footer={<BottomNavigation />}
          />
        </ThemedContent>
      </AppRouterCacheProvider>
    </body>
  </html>)
}