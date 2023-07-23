import { MantineProvider } from '@mantine/core';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
    <Navbar/>
    </MantineProvider>
    </>
  );
}

export default App;
