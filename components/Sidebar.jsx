import React from 'react'
import { motion } from 'framer-motion';
import { SvgBell, SvgCloud, SvgLock, SvgMoney, SvgTag, SvgUser, SvgUsers } from '@/icons';
import Link from 'next/link';
import { RxExit } from "react-icons/rx";

const Sidebar = () => {
        return (
                <>
                        <motion.div className={"mobileMenu hidden md:block"} initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", bounce: 0.3, duration: 0.4 }} key="side-menu" >
                                <p className="text-neutral-700 text-[12px] font-bold leading-[17.4px] px-4 mb-2">Settings</p>

                                <div className="app__flex flex-col gap-3  ">
                                        {
                                                [
                                                        {icon:<SvgUser className="w-[20px] h-[20px]"/> , title:"Account"},
                                                        {icon:<SvgLock className="w-[20px] h-[20px]"/> , title:"Security"},
                                                        {icon:<SvgBell className="w-[20px] h-[20px]"/> , title:"Notifications"},
                                                        {icon:<SvgMoney className="w-[20px] h-[20px]"/> , title:"Pricing"},
                                                        {icon:<SvgTag className="w-[20px] h-[20px]"/> , title:"Sales"},
                                                        {icon:<SvgUsers className="w-[20px] h-[20px]"/> , title:"Users & Roles"},
                                                        {icon:<SvgCloud className="w-[20px] h-[20px]"/> , title:"Backups"},
                                                ].map((nav, i) => (
                                                        <div className="w-full px-2" key={i}>
                                                                <Link href={`#${nav.title.toLowerCase()}`} className=" w-full flex items-center gap-2  text-neutral-400 rounded-md px-3 py-4 font-light transition hover:bg-[#F0F6FE] hover:font-medium hover:text-[#0D6EFD]" >
                                                                        {nav.icon}
                                                                        {nav.title}
                                                                </Link>
                                                        </div>
                                                ))
                                        }
                                </div>

                                <hr className="h-0 border-0 border-b border-solid border-[#F0F2F5] mx-2" />
                                
                                <div className="mx-4 mt-auto absolute bottom-6">
                                        <button className=" rounded app__flex gap-3 px-4 py-3 border-solid border border-neutral-600  transition hover:opacity-60">
                                                <RxExit color='#475569' size={20}  />
                                                <span className="text-sm text-neutral-600  font-medium">Back to Dashboard</span>
                                        </button>
                                </div>

                        </motion.div>
                </>
        )
}

export default Sidebar