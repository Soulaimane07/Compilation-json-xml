import { useState } from "react";
import File from "./Components/File/File";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

function App() {
  const [showFile, setShowfile] = useState(false)
  console.log(showFile);
  

  return (
    <div className="text-gray-700">
      <Navbar/>
      <Main setShowfile={setShowfile} />
      <Footer />

      {showFile && <File filedata={showFile} setShowfile={setShowfile} />}
    </div>
  );
}

export default App;
