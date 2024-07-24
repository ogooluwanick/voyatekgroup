import { CustomModal } from "@/components";
import { SvgMiniMenu } from "@/icons";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoAddCircleOutline, IoSearch } from "react-icons/io5";
import { RxCaretSort } from "react-icons/rx";

export default function Home() {
        const [mode, setMode] = useState("Users")
        const [newModal, setNewModal] = useState(false)
        console.log("newModal",newModal)

        return (
                <>
                        <div className="">
                                <p className="text-[#98A2B3] text-sm font-medium py-[9px] mb-6">Settings / Users & Roles Settings</p>

                                <h1 className="text-[#1D2739] text-2xl	 font-bold mb-2">Users & Roles</h1>

                                <p className="text-[#98A2B3] font-light">Manage all users in your business</p>

                                <div className="mt-6 flex items-center gap-1 mb-4">
                                        <button className={`${mode === "Users" ? "text-[#0D6EFD] border-[#0D6EFD]" : "text-[#98A2B3] "} border-0 border-b-2 border-solid border-transparent py-2 px-4  transition hover:text-[#0D6EFD] hover:border-[#0D6EFD]`} onClick={() => setMode("Users")}>Users</button>
                                        <button className={`${mode === "Roles" ? "text-[#0D6EFD] border-[#0D6EFD]" : "text-[#98A2B3] "} border-0 border-b-2 border-solid border-transparent py-2 px-4  transition hover:text-[#0D6EFD] hover:border-[#0D6EFD]`} onClick={() => setMode("Roles")}>Roles</button>
                                </div>

                                <div className="bg-white w-full rounded-md">
                                        <div className="p-4 flex items-center justify-between">
                                                <div className="app__flex gap-2">
                                                        <div className="w-full max-w-[290px] rounded-md  px-3 py-2.5 app__flex gap-2 bg-white boder-solid border border-neutral-300" style={{ boxShadow: "0px 2px 4px -2px #0000000A  0px 4px 8px -2px #00000014" }} >
                                                                <IoSearch size={20} color='#94A3B8' />
                                                                <input type="text" className="flex-1 bg-inherit placeholder:text-neutral-400 text-sm placeholder:text-sm placeholder:font-light  outline-none" placeholder='Search here...' />
                                                        </div>
                                                        <button className="text-neutral-700 border-solid border border-neutral-300 py-2 px-3 rounded-[8px] app__flex gap-2 transition hover:opacity-60">
                                                                <SvgMiniMenu className="w-[20px] h-[20px]" />
                                                                <span className="text-sm">Filter</span>
                                                        </button>

                                                </div>

                                                <button className="bg-[#0D6EFD] text-white   py-2 px-3 rounded-[8px] app__flex gap-2 transition hover:opacity-60" onClick={()=>setNewModal(val=>!val)}>
                                                        <IoAddCircleOutline size={20} color="white" />
                                                        <span className="text-sm font-bold ">New User</span>
                                                </button>
                                        </div>



                                        <div className="relative overflow-x-auto ">
                                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                                        <thead className="text-xs text-[#1D2739] font-medium bg-[#F0F2F5]">
                                                                <tr>
                                                                        <th scope="col" className="px-6 py-3">
                                                                                <div className="flex items-center">
                                                                                        <input type="checkbox" className="w-[20px] h-[20px] cursor-pointer mr-3" />

                                                                                        <span className="font-medium text-xs text-neutral-700">Name</span>
                                                                                        <RxCaretSort color="#94A3B8" size={20} />
                                                                                </div>

                                                                        </th>
                                                                        <th scope="col" className="px-6 py-3">
                                                                                <div className="flex items-center">
                                                                                        <span className="font-medium text-xs text-neutral-700">Email Address</span>
                                                                                        <RxCaretSort color="#94A3B8" size={20} />
                                                                                </div>
                                                                        </th>
                                                                        <th scope="col" className="px-6 py-3">
                                                                                <div className="flex items-center">
                                                                                        <span className="font-medium text-xs text-neutral-700">Role</span>
                                                                                        <RxCaretSort color="#94A3B8" size={20} />
                                                                                </div>
                                                                        </th>
                                                                        <th scope="col" className="px-6 py-3">
                                                                                <span className="font-medium text-xs text-neutral-700">Actions</span>
                                                                        </th>
                                                                </tr>
                                                        </thead>
                                                                <tbody className="">
                                                                        <tr className="bg-white border-b transition hover:bg-[#F0F2F5]">
                                                                                <th scope="row" className="px-6 py-[26px] font-medium text-gray-900 whitespace-nowrap ">
                                                                                        <div className="flex items-center gap-3">
                                                                                                <input type="checkbox" className="w-[20px] h-[20px] cursor-pointer" />
                                                                                                <span className="font-medium text-sm text-[#101928]">Apple MacBook Pro</span>
                                                                                        </div>
                                                                                </th>
                                                                                <td className="px-6 py-[26px] ">
                                                                                        <Link href={"mailto:taiwoisaac@email.com"} className=" block w-full !max-w-[300px] truncate  font-normal text-sm hover:underline ">
                                                                                                taiwoisaac@email.com
                                                                                        </Link>
                                                                                        
                                                                                </td>
                                                                                <td className="px-6 py-[26px]">
                                                                                        <span className="text-[#0D6EFD] bg-[#F0F6FE] text-sm py-0.5 px-3 rounded-[12px]">Administrator</span>
                                                                                </td>
                                                                                <td className="px-6 py-[26px] app__flex gap-3">
                                                                                        <button className="font-bold text-sm text-[#0D6EFD]  hover:underline">Edit</button>
                                                                                        <button className="font-bold text-sm text-[#98A2B3]  hover:underline">Remove</button>
                                                                                </td>
                                                                        </tr>
                                                                        <tr className="bg-white border-b ">
                                                                                <th scope="row" className="px-6 py-[26px] font-medium text-gray-900 whitespace-nowrap ">
                                                                                        <div className="flex items-center gap-3">
                                                                                                <input type="checkbox" className="w-[20px] h-[20px] cursor-pointer" />
                                                                                                <span className="">Microsoft Surface Pro</span>
                                                                                        </div>
                                                                                </th>
                                                                                <td className="px-6 py-[26px]">
                                                                                        White
                                                                                </td>
                                                                                <td className="px-6 py-[26px]">
                                                                                        <span className="text-[#0F973D] bg-[#E7F6EC] text-sm py-0.5 px-3 rounded-[12px]">Administrator</span>
                                                                                </td>
                                                                                <td className="px-6 py-[26px] text-right">
                                                                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                                                </td>
                                                                        </tr>
                                                                        <tr className="bg-white ">
                                                                                <th scope="row" className="px-6 py-[26px] font-medium text-gray-900 whitespace-nowrap ">
                                                                                        <div className="flex items-center gap-3">
                                                                                                <input type="checkbox" className="w-[20px] h-[20px] cursor-pointer" />
                                                                                                <span className="">Microsoft Surface Pro</span>
                                                                                        </div>
                                                                                </th>
                                                                                <td className="px-6 py-[26px]">
                                                                                        Black
                                                                                </td>
                                                                                <td className="px-6 py-[26px]">
                                                                                <span className="text-[#F58A07] bg-[#FEF4E6] text-sm py-0.5 px-3 rounded-[12px]">Administrator</span>
                                                                                </td>

                                                                                <td className="px-6 py-[26px] text-right">
                                                                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                                                </td>
                                                                        </tr>
                                                                </tbody>
                                                </table>
                                        </div>

                                </div>
                        </div>

                        <AnimatePresence exitBeforeEnter >
                                {
                                        newModal && (
                                                <section className='' >
                                                        <CustomModal
                                                                heading={" "}
                                                                modalOpen={newModal}
                                                                setModalOpen={setNewModal}
                                                                modalWidth={"700px"}
                                                                onClose={() => { }}
                                                        >
                                                        </CustomModal>
                                                </section>
                                        )
                                }
                        </AnimatePresence >
                </>
        );
}
