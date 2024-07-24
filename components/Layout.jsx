import React from 'react'
import Navbar from './Navbar'


const Layout = ({ children }) => {

        return (
                <div className={"global_layout"}>
                        <header>
                                <Navbar />
                        </header>
                        <main className={"min-h-[100dvh] mx-auto max-w-[1675px] pt-[110px] px-6 md:pl-[304px]"}>
                                {children}
                        </main>
                </div>
        )
}

export default Layout