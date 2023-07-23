import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <>
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
    <Navbar/>
    </MantineProvider>
  </ColorSchemeProvider>
    </>
  );
}

export default App;
