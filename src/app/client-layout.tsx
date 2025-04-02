"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@/theme";
import PageLayout from "@/components/PageLayout";
import ButtonAppBar from "@/components/ui/ButtonAppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import CssBaseline from "@mui/material/CssBaseline";
import { useThemeStore } from "@/stores/useThemeStore";

function ThemedContent({ children }: { children: React.ReactNode }) {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

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
          <ThemedContent>
            <PageLayout
              header={<ButtonAppBar />}
              main={children}
              footer={<BottomNavigation />}
            />
          </ThemedContent>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
