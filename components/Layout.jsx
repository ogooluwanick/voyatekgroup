import React from 'react'
import Navbar from './Navbar'


const Layout = ({ children }) => {

        return (
                <div className={"global_layout"}>
                        <header>
                                <Navbar />
                        </header>
                        <main className={"main_container"}>
                                {children}
                        </main>
                </div>
        )
}

export default Layout