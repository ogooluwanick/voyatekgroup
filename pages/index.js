import { CustomModal } from "@/components";
import { SvgMiniMenu, SvgUser } from "@/icons";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoAddCircleOutline, IoSearch } from "react-icons/io5";
import { RxCaretSort } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import { BsChevronDown } from "react-icons/bs";
import Dropdown from "@/components/Dropdown";
import LoadingBox from "@/components/LoadingBox";
import toast from "react-hot-toast";

export default function Home() {
        const { register, handleSubmit, formState: { errors }, setValue, getValues, setFocus, watch } = useForm();
        const domain = "cad918dd2de89aa0e4c2"
        const [mode, setMode] = useState("Users")
        const [updateModal, setUpdateModal] = useState(false)
        const [newModal, setNewModal] = useState(false)
        const [deleteModal, setDeleteModal] = useState(false)
        const [loading, setLoading] = useState(false)
        const [showPassword, setShowPassword] = useState(false)
        const [users, setUsers] = useState([])
        const [currUser, setCurrUser] = useState({})
        const [role, setRole] = useState("")

        const handleDelete = async () => {
                setLoading(true)

                try {
                        const response = await axios.delete(`https://${domain}.free.beeceptor.com/api/users/${currUser.id}`,);
                        fetchUsers()
                        setDeleteModal(false)

                        setValue("password", "")
                        setValue("email", "")
                        setRole("")
                        setValue("f_name", "")
                } catch (error) {
                        toast.error(error?. response?.data?.error?.message??"Failed to delete user")

                        console.error('Error fetching users:', error);
                }

                setLoading(false)
        }

        const handlerUpdateUser = async ({ email, password, f_name }) => {
                setLoading(true)

                try {
                        const response = await axios.put(`https://${domain}.free.beeceptor.com/api/users/`,
                                { id:currUser.id, email, password, f_name, role },
                                config
                        );
                        fetchUsers()
                        setUpdateModal(false)

                        setValue("password", "")
                        setValue("email", "")
                        setRole("")
                        setValue("f_name", "")
                } catch (error) {
                        toast.error(error?. response?.data?.error?.message ??"Failed to update user")
                        console.error('Error fetching users:', error);
                }

                setLoading(false)
        }

        const handlerNewUser = async ({ email, password, f_name }) => {

                setLoading(true)

                try {
                        const response = await axios.post(`https://${domain}.free.beeceptor.com/api/users/`,
                                { email, password, f_name, role },
                                config
                        );
                        fetchUsers();
                        setNewModal(false)

                        setValue("password", "")
                        setValue("email", "")
                        setRole("")
                        setValue("f_name", "")
                } catch (error) {
                        toast.error(error?. response?.data?.error?.message ?? "Failed to add new user")
                        console.error('Error fetching users:', error);
                }

                setLoading(false)


        }

        const fetchUsers = async () => {
                setLoading(true)
                console.log("testing users")
                try {
                        const response = await axios.get(`https://${domain}.free.beeceptor.com/api/users/`);
                        setUsers(response.data);
                } catch (error) {
                        toast.error(error?. response?.data?.error?.message??"Failed to fetch users")

                        console.error('Error fetching users:', error);
                }
                setLoading(false)
        };


        useEffect(() => {

                fetchUsers();
        }, [])


        return (
                <>
                        <div className="">
                                <p className="text-[#98A2B3] text-sm font-medium py-[9px] mb-6">Settings / Users & Roles Settings</p>

                                <h1 className="text-[#1D2739] text-2xl	 font-bold mb-2">Users & Roles</h1>

                                <p className="text-[#98A2B3] font-light">Manage all users in your business</p>

                                <div className="mt-6 flex items-center gap-1 mb-4">
                                        <button className={` border-0 border-b-2 border-solid  py-2 px-4 ${mode === "Users" ? "text-[#0D6EFD] border-[#0D6EFD]" : "text-[#98A2B3] border-transparent"}  transition hover:text-[#0D6EFD] hover:border-[#0D6EFD]`} onClick={() => setMode("Users")}>Users</button>
                                        <button className={` border-0 border-b-2 border-solid  py-2 px-4 ${mode === "Roles" ? "text-[#0D6EFD] border-[#0D6EFD]" : "text-[#98A2B3]  border-transparent"}  transition hover:text-[#0D6EFD] hover:border-[#0D6EFD]`} onClick={() => setMode("Roles")}>Roles</button>
                                </div>

                                <div className="bg-white w-full rounded-md">
                                        <div className="p-4 flex items-center justify-center md:justify-between gap-2 flex-wrap">
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

                                                <button className="bg-[#0D6EFD] text-white   py-2 px-3 rounded-[8px] app__flex gap-2 transition hover:opacity-60" onClick={() => setNewModal(val => !val)}>
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
                                                                                        <span className="font-medium text-xs text-neutral-700 whitespace-nowrap">Email Address</span>
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
                                                                {
                                                                        (users)?.map((user, index) => (
                                                                                <tr className="bg-white border-b transition hover:bg-[#F0F2F5]" key={index}>
                                                                                        <th scope="row" className="px-6 py-[26px] font-medium text-gray-900 whitespace-nowrap ">
                                                                                                <div className="flex items-center gap-3">
                                                                                                        <input type="checkbox" className="w-[20px] h-[20px] cursor-pointer" />
                                                                                                        <span className="font-medium text-sm text-[#101928]"> {user.f_name}</span>
                                                                                                </div>
                                                                                        </th>
                                                                                        <td className="px-6 py-[26px] ">
                                                                                                <Link href={"mailto:" + user.email} className=" block w-full !max-w-[300px] truncate  font-normal text-sm hover:underline ">
                                                                                                        {user.email}
                                                                                                </Link>

                                                                                        </td>
                                                                                        <td className="px-6 py-[26px]">
                                                                                                {
                                                                                                        user.role === "Admin" ?
                                                                                                                <span className="text-[#0D6EFD] bg-[#F0F6FE] text-sm py-0.5 px-3 rounded-[12px] whitespace-nowrap">Administrator</span>
                                                                                                                : user.role === "Sales Manager" ?
                                                                                                                        <span className="text-[#0F973D] bg-[#E7F6EC] text-sm py-0.5 px-3 rounded-[12px] whitespace-nowrap ">Sales Manager</span>
                                                                                                                        : user.role === "Sales Representative" ?
                                                                                                                                <span className="text-[#F58A07] bg-[#FEF4E6] text-sm py-0.5 px-3 rounded-[12px] whitespace-nowrap">Sales Representative</span>
                                                                                                                                :
                                                                                                                                ""
                                                                                                }
                                                                                        </td>
                                                                                        <td className="px-6 py-[26px] app__flex gap-3">
                                                                                                <button className="font-bold text-sm text-[#0D6EFD]  hover:underline" onClick={() => { 
                                                                                                        setUpdateModal(val => !val); 
                                                                                                        setCurrUser(user) ;

                                                                                                        setValue("email", user.email)
                                                                                                        setRole(user?.role??"Admin")
                                                                                                        setValue("f_name", user.f_name)

                                                                                                }}>Edit</button>
                                                                                                <button className="font-bold text-sm text-[#98A2B3]  hover:underline" onClick={() => { setDeleteModal(val => !val); setCurrUser(user); }}>Remove</button>
                                                                                        </td>
                                                                                </tr>
                                                                        ))
                                                                }
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
                                                                <div className="mb-6">
                                                                        <span className="rounded-full border border-solid border-[#D2E4FE] h-[64px] w-[64px] min-h-[64px] min-w-[64px] app__flex block mx-auto mb-2">
                                                                                <SvgUser className=" text-[#0D6EFD] w-8 h-8 " />
                                                                        </span>

                                                                        <h1 className="text-[#1D2739] text-2xl	 font-bold mb-2 text-center">New User</h1>
                                                                </div>

                                                                <form onSubmit={handleSubmit(handlerNewUser)} className="w-full  px-[2px]">
                                                                        <div className="mb-6 "  >
                                                                                <label htmlFor="email" className='font-medium text-sm text-[#475367] mb-1'>Email Address </label>
                                                                                <div className={`  rounded-md border border-solid border-[#D0D5DD] p-4 app__flex transition hover:border-[#D2E4FE] focus-within:border-[#D2E4FE]`}>
                                                                                        <input id="email" className='flex-1 outline-none  text-sm placeholder:text-sm placeholder:text-[#98A2B3]' type="email" autoFocus disabled={loading} placeholder="New User’s Email Address"  {
                                                                                                ...register("email",
                                                                                                        {
                                                                                                                required: "Kindly input your email. 😂",
                                                                                                        })}
                                                                                        />
                                                                                </div>
                                                                                {errors.email ? <span className='text-sm text-red-600 '> {errors.email.message} </span> : ""}
                                                                        </div>

                                                                        <div className="mb-6 "  >
                                                                                <label htmlFor="f_name" className='font-medium text-sm text-[#475367] mb-1'>Full Name </label>
                                                                                <div className={`  rounded-md border border-solid border-[#D0D5DD] p-4 app__flex transition hover:border-[#D2E4FE] focus-within:border-[#D2E4FE]`}>
                                                                                        <input id="f_name" className='flex-1 outline-none  text-sm placeholder:text-sm placeholder:text-[#98A2B3]' type="text" autoFocus disabled={loading} placeholder="New User’s Full Name"  {
                                                                                                ...register("f_name",
                                                                                                        {
                                                                                                                required: "Kindly input your first name. 😂",
                                                                                                        })}
                                                                                        />
                                                                                </div>
                                                                                {errors.f_name ? <span className='text-sm text-red-600 '> {errors.f_name.message} </span> : ""}
                                                                        </div>


                                                                        <Dropdown currVal={role} onClick={(key) => setRole(key)} />

                                                                        <div className="mb-6 "  >
                                                                                <label htmlFor="password" className='font-medium text-sm text-[#475367] mb-1'>Create Password </label>
                                                                                <div className={`  rounded-md border border-solid border-[#D0D5DD] p-4 app__flex transition hover:border-[#D2E4FE] focus-within:border-[#D2E4FE]`}>
                                                                                        <input id="password" className='flex-1 outline-none  text-sm placeholder:text-sm placeholder:text-[#98A2B3]' type={showPassword ? "text" : "password"} autoFocus disabled={loading} placeholder="Create a Password for New User"  {
                                                                                                ...register("password",
                                                                                                        {
                                                                                                                required: "Kindly input your password. 😂",
                                                                                                        })}
                                                                                        />
                                                                                        <div className="cursor-pointer" onClick={() => setShowPassword(val => !val)}>
                                                                                                {
                                                                                                        !showPassword ?
                                                                                                                <RiEyeLine size={20} color="#343330" />
                                                                                                                :
                                                                                                                <RiEyeCloseLine size={20} color="#343330" />

                                                                                                }
                                                                                        </div>
                                                                                </div>
                                                                                {errors.password ? <span className='text-sm text-red-600 '> {errors.password.message} </span> : ""}
                                                                        </div>

                                                                        <div className="w-full">
                                                                                <button className="bg-[#0D6EFD] text-white rounded-[8px] transition hover:opacity-60 w-full  text-center py-4" type="submit">{loading ? <LoadingBox size={10} color={"white"} /> : "Add User"}</button>
                                                                        </div>
                                                                </form>

                                                        </CustomModal>
                                                </section>
                                        )
                                }
                        </AnimatePresence >

                        <AnimatePresence exitBeforeEnter >
                                {
                                        updateModal && (
                                                <section className='' >
                                                        <CustomModal
                                                                heading={" "}
                                                                modalOpen={updateModal}
                                                                setModalOpen={setUpdateModal}
                                                                modalWidth={"700px"}
                                                                onClose={() => { setCurrUser({}) }}
                                                        >
                                                                <div className="mb-6">
                                                                        <span className="rounded-full border border-solid border-[#D2E4FE] h-[64px] w-[64px] min-h-[64px] min-w-[64px] app__flex block mx-auto mb-2">
                                                                                <SvgUser className=" text-[#0D6EFD] w-8 h-8 " />
                                                                        </span>

                                                                        <h1 className="text-[#1D2739] text-2xl	 font-bold mb-2 text-center">Edit User</h1>
                                                                </div>

                                                                <form onSubmit={handleSubmit(handlerUpdateUser)} className="w-full  px-[2px]">
                                                                        <div className="mb-6 "  >
                                                                                <label htmlFor="email" className='font-medium text-sm text-[#475367] mb-1'>Email Address </label>
                                                                                <div className={`  rounded-md border border-solid border-[#D0D5DD] p-4 app__flex transition hover:border-[#D2E4FE] focus-within:border-[#D2E4FE]`}>
                                                                                        <input id="email" className='flex-1 outline-none  text-sm placeholder:text-sm placeholder:text-[#98A2B3]' type="email" autoFocus disabled={loading} placeholder="New User’s Email Address"  {
                                                                                                ...register("email",
                                                                                                        {
                                                                                                                required: "Kindly input your email. 😂",
                                                                                                        })}
                                                                                        />
                                                                                </div>
                                                                                {errors.email ? <span className='text-sm text-red-600 '> {errors.email.message} </span> : ""}
                                                                        </div>

                                                                        <div className="mb-6 "  >
                                                                                <label htmlFor="f_name" className='font-medium text-sm text-[#475367] mb-1'>Full Name </label>
                                                                                <div className={`  rounded-md border border-solid border-[#D0D5DD] p-4 app__flex transition hover:border-[#D2E4FE] focus-within:border-[#D2E4FE]`}>
                                                                                        <input id="f_name" className='flex-1 outline-none  text-sm placeholder:text-sm placeholder:text-[#98A2B3]' type="text" autoFocus disabled={loading} placeholder="New User’s Full Name"  {
                                                                                                ...register("f_name",
                                                                                                        {
                                                                                                                required: "Kindly input your first name. 😂",
                                                                                                        })}
                                                                                        />
                                                                                </div>
                                                                                {errors.f_name ? <span className='text-sm text-red-600 '> {errors.f_name.message} </span> : ""}
                                                                        </div>


                                                                        <Dropdown currVal={role} onClick={(key) => setRole(key)} />

                                                                        <div className="mb-6 "  >
                                                                                <label htmlFor="password" className='font-medium text-sm text-[#475367] mb-1'>Create Password </label>
                                                                                <div className={`  rounded-md border border-solid border-[#D0D5DD] p-4 app__flex transition hover:border-[#D2E4FE] focus-within:border-[#D2E4FE]`}>
                                                                                        <input id="password" className='flex-1 outline-none  text-sm placeholder:text-sm placeholder:text-[#98A2B3]' type={showPassword ? "text" : "password"} autoFocus disabled={loading} placeholder="Create a Password for New User"  {
                                                                                                ...register("password",
                                                                                                        {
                                                                                                                required: "Kindly input your password. 😂",
                                                                                                        })}
                                                                                        />
                                                                                        <div className="cursor-pointer" onClick={() => setShowPassword(val => !val)}>
                                                                                                {
                                                                                                        !showPassword ?
                                                                                                                <RiEyeLine size={20} color="#343330" />
                                                                                                                :
                                                                                                                <RiEyeCloseLine size={20} color="#343330" />

                                                                                                }
                                                                                        </div>
                                                                                </div>
                                                                                {errors.password ? <span className='text-sm text-red-600 '> {errors.password.message} </span> : ""}
                                                                        </div>

                                                                        <div className="w-full">
                                                                                <button className="bg-[#0D6EFD] text-white rounded-[8px] transition hover:opacity-60 w-full  text-center py-4" type="submit">{loading ? <LoadingBox size={10} color={"white"} /> : "Update User"}</button>
                                                                        </div>
                                                                </form>

                                                        </CustomModal>
                                                </section>
                                        )
                                }
                        </AnimatePresence >

                        <AnimatePresence exitBeforeEnter >
                                {
                                        deleteModal && (
                                                <section className='' >
                                                        <CustomModal
                                                                heading={""}
                                                                modalOpen={deleteModal}
                                                                setModalOpen={setDeleteModal}
                                                                modalWidth={"550px"}
                                                                onClose={() => { setCurrUser({}) }}
                                                        >
                                                                <div className="mb-6">
                                                                        <h1 className="text-[#1D2739] text-2xl	 font-bold mb-2 text-center">Delete this user</h1>

                                                                        <p className="text-center max-w-[360px] text-[#98A2B3] text-sm font-medium py-[9px] mb-6 mx-auto">This user and all associated data will be permanently removed. Do you wish to continue</p>

                                                                </div>

                                                                <div className="app__flex gap-3">
                                                                        <button className="text-[#475367] border-solid border border-[#D0D5DD] bg-[#F7F9FC] py-2 px-3 rounded-[8px] app__flex gap-2 transition hover:opacity-60" onClick={() => setDeleteModal(false)}>
                                                                                <span className="text-sm font-bold">Cancel action</span>
                                                                        </button>
                                                                        <button className="text-[#D42620] border-solid border border-[#EB9B98] bg-[#FBEAE9] py-2 px-3 rounded-[8px] app__flex gap-2 transition hover:opacity-60" onClick={() => handleDelete()}>
                                                                                <FaRegTrashAlt color="#D42620" size={20} />
                                                                                <span className="text-sm font-bold">{loading ? <LoadingBox size={10} color={"#D42620"} /> : "Yes, Delete"}</span>
                                                                        </button>
                                                                </div>

                                                        </CustomModal>
                                                </section>
                                        )
                                }
                        </AnimatePresence >
                </>
        );
}
