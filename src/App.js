import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';
import Sidebar from './components/Sidebar';
import RightBar from './components/RightBar';
import Feed from './components/Feed';
import { Box, Container, Stack } from '@mui/material';

function App() {
  return (
    <Stack direction="row" spacing={2}>
      <Sidebar />
      <Feed />
      <RightBar />
    </Stack>
  );
}

export default App;
