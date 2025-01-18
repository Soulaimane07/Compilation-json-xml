import React, { useState } from 'react'
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import File from "../../Components/File/File"
import Main from "./Main"

function Home() {
  const [showFile, setShowfile] = useState(false)

  return (
    <div>
        <Navbar />
        <Main setShowfile={setShowfile} />
        <Footer />

        {showFile && <File filedata={showFile} setShowfile={setShowfile} />}
    </div>
  )
}

export default Home