import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function ButtonAppBar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            QuickStack
          </Typography>
          <Link href="/" passHref style={{ textDecoration: 'none' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/about" passHref style={{ textDecoration: 'none' }}>
            <Button color="inherit">About</Button>
          </Link>
          <IconButton
            sx={{ ml: 1 }}
            onClick={toggleTheme}
            color="inherit"
            aria-label="toggle theme"
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
