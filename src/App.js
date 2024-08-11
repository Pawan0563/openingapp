import {
  Routes,
  Route,
 
} from "react-router-dom";
import Login1 from "./components/Login1";
import Upload from "./components/Upload";
import Uploading from "./components/Uploading";
import Uploaded from "./components/Uploaded";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Login1 />} />
    
        <>
          <Route path="upload" element={<Upload  />} />
          <Route path="uploading" element={<Uploading />} />
          <Route path="uploaded" element={<Uploaded />} />
        </>
      
    </Routes>
  );
}

export default App;
