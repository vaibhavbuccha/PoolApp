import Router from './router';
import { Box } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
 
function App() {
  const routing = createBrowserRouter(Router)
  return (
    <Box>
      <RouterProvider router={routing} />
    </Box>
  );
}

export default App;
