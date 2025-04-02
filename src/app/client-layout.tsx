"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@/theme";
import PageLayout from "@/components/PageLayout";
import ButtonAppBar from "@/components/ui/ButtonAppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";

function ThemedContent({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    // Sync theme with CSS variables
    document.documentElement.style.setProperty(
      "--background",
      theme.palette.background.default
    );
    document.documentElement.style.setProperty(
      "--foreground",
      theme.palette.mode === "light" ? "#171717" : "#ededed"
    );
  }, [isDarkMode, theme]);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <ThemedContent>
              <PageLayout
                header={<ButtonAppBar />}
                main={children}
                footer={<BottomNavigation />}
              />
            </ThemedContent>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
