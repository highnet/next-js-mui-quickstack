import { useThemeStore } from "@/stores/useThemeStore";
import { darkTheme, lightTheme } from "@/theme";
import { CssBaseline } from "@mui/material";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";

export default function ThemedContent({ children }: { children: React.ReactNode }) {
    const isDarkMode = useThemeStore((state) => state.isDarkMode);
    const theme = isDarkMode ? darkTheme : lightTheme;
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
          setMounted(true);
    }, [isDarkMode]);
  
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {mounted ? children : <div style={{ visibility: "hidden" }}>{children}</div>}
      </ThemeProvider>
    );
  }