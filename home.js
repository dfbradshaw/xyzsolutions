import React from 'react'
import Layout from '../components/layout'
import { Link } from "@reach/router"
import { isLoggedIn } from "../services/auth"


const home = ({location}) => {
    return (
        <Layout>
            <h1>Client Inventory Management System</h1>
            {isLoggedIn() ? (
          <>
            <nav><Link to='/clientlist'>Client List</Link></nav>
            <nav><Link to='/newclient'>New Client</Link></nav>
            <nav><Link to='/search'>Search</Link></nav>
            <nav><Link to="/logout">Logout</Link></nav>
            
          </>
        ) : (
          <nav>
            <Link to='/login'>Login</Link>    
                
          </nav>
        )}
            
        </Layout>
    )
}
export default home;