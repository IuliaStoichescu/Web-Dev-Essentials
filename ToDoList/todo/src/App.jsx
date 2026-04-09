import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import ToDoContainer from "./ToDoContainer";
import ResponsiveAppBar from "./ResponsiveAppBar";
function App() {

  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar />
      <ToDoContainer />
    </>
  )
}

export default App
