import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import PageLayout from "@/components/PageLayout";
import ButtonAppBar from "@/components/ui/ButtonAppBar";
import BottomNavigation from "@mui/material/BottomNavigation";

export const metadata: Metadata = {
  title: "MUI Next.js Quickstack",
  description: "A Next.js app with MUI and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <PageLayout
              header={<ButtonAppBar />}
              main={children}
              footer={<BottomNavigation />}
            />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
