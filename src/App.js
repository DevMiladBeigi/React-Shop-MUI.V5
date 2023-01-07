import { useEffect } from "react";
import { Container, Button } from "@mui/material";
import {ThemeProvider} from "@mui/system"
import theme from './styles/theme/index'
import Appbar from "./components/appbar";
import Banner from "./components/banner";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ backgroundColor: "#fff" }}>
        <Appbar/>
        <Banner/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
