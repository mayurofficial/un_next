import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useRouter } from "next/router"
import { getSession } from "@session/cookie"
import HomeNavbar from "@components/Header/HomeNavbar"
import Navbar from "@components/Header/Navbar"
import Footer from "@components/footer/footer"

export default function PublicLayout({ children }) {
  const { replace } = useRouter()
  const session = getSession("user-token")

  React.useEffect(() => {
    if (session) {
      replace("/user/dashboard", "/user/dashboard")
    }
  }, [session])
  return (
    <>
      {
        (children.type.name === 'Home' ||
        children.type.name === 'Contact')  
        ? <HomeNavbar /> : <Navbar />
      }
      {children}
      <Footer />
    </>

  )
}
