import React from "react"
import { Link , navigate } from "gatsby"
import { isLoggedIn , logout } from "../services/auth"
import Layout from '../components/layout'
import NavBar from "../components/nav-bar"

export default function Home() {
  return (
    <Layout>
      <h1>ABC Industrial Management</h1>
      <p>
        {isLoggedIn() ? (
          <>
            View {"Client List"}
            <Link to='/clientlist'>Client List</Link>
          </>
        ) : (
          <nav>
                <NavBar/>
                onClick={event => {
                  event.preventDefault()
                  logout(() => navigate('/login'))
                }}
          </nav>
        )}
      </p>
    </Layout>
  )
}