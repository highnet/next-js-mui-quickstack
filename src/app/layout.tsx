"use client"
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import PageLayout from "@/components/PageLayout";
import ButtonAppBar from "@/components/ui/ButtonAppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import ThemedContent from "@/components/ThemedContent";



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