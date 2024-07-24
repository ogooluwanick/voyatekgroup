import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useContext } from 'react'
import { IoSearch } from "react-icons/io5";
import { Sidebar } from '.';
import { Store } from '@/context/Store';
import Link from 'next/link';
import { SvgBell, SvgGear, SvgQuestion, SvgWallet } from '@/icons';
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
        const { screen, scrollPos} = useContext(Store)

        return (
                <>
                        <div className={` dash_navbar ${scrollPos >= 5  ? "blur_navbar" :'' } flex items-center justify-between gap-6 border-b border-solid border-[#E4E7EC] bg-white  py-[20.5px]  px-[36px]`}>
                                <motion.a className="rounded-[3.43px] bg-[#0A6DE4] h-[48px] w-[49.85px] app__flex" href='/' drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}>
                                        <Image src="/go-logo.png" alt="go logo" width={36.1} height={34.3} className=''/>
                                </motion.a>

                                <div className=" flex-1 flex items-center justify-between gap-6 ">
                                        <div className="w-full max-w-[629px] rounded-md  px-3 py-2.5 app__flex gap-2 bg-[#F0F2F5]" style={{boxShadow: "0px 1px 2px 0px #1018280D"}}>
                                                <IoSearch size={20} color='#475367'/>
                                                <input type="text" className="flex-1 bg-inherit placeholder:text-[#667185] text-sm placeholder:text-sm placeholder:font-light  outline-none" placeholder='Search here...' />
                                        </div>

                                        <div className="app__flex gap-4">
                                                <div className="app__flex gap-2 text-[12px] text-[#647995] leading-[17.4px]">
                                                        <Link className="w-[64px] app__flex flex-col gap-1 transition hover:text-[#0D6EFD] hover:font-medium" href="">
                                                                <SvgBell className="w-6 h-6"/>
                                                                <span className="">Notifications</span>
                                                        </Link>
                                                        <Link className="w-[64px] app__flex flex-col gap-1 transition hover:text-[#0D6EFD] hover:font-medium" href="">
                                                                <SvgWallet className="w-6 h-6"/>
                                                                <span className="">Wallet</span>
                                                        </Link>
                                                        <Link className="w-[64px] app__flex flex-col gap-1 transition hover:text-[#0D6EFD] hover:font-medium" href="">
                                                                <SvgQuestion className="w-6 h-6"/>
                                                                <span className="">Inquiries</span>
                                                        </Link>
                                                        <Link className="w-[64px] app__flex flex-col gap-1 transition hover:text-[#0D6EFD] hover:font-medium" href="">
                                                                <SvgGear className="w-6 h-6"/>
                                                                <span className="">Settings</span>
                                                        </Link>
                                                </div>
                                                <div className="app__flex gap-2 cursor-pointer">
                                                        <Image src="/1647516270950.jpeg" alt="go logo" width={36.1} height={34.3} className='rounded-full h-[38px] w-[38px] min-h-[38px] min-w-[38px]' />
                                                        <BsChevronDown size={16} color='#667185' />
                                                </div>
                                        </div>
                                </div>

                                
                        </div>
                        <AnimatePresence exitBeforeEnter >
                                {
                                        <Sidebar  />
                                }
                        </AnimatePresence>
                </>
        )
}

export default Navbar