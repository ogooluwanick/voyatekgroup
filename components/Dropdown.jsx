import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { FaCaretDown } from 'react-icons/fa'
import useOnclickOutside from 'react-cool-onclickoutside'
import { SvgSearch } from '../icons'
import { BsChevronDown } from 'react-icons/bs'
const Dropdown = ({ className, currVal, options = ["Admin", "Sales Manager", "Sales Representative"], onClick, right = false }) => {
        const ref = useOnclickOutside(() => setShow(false));

        const [show, setShow] = useState(false)
        const [search, setSearch] = useState(currVal)
        const [filteredOptions, setFilteredOptions] = useState(options);

        useEffect(() => {
                setFilteredOptions(
                        (options).filter(([key, value]) =>
                                value.toLowerCase().includes(search.toLowerCase()) || key.toLowerCase().includes(search.toLowerCase())
                        )
                );
        }, [search, options]);

        return (
                <div className='relative ' >
                        <div className={` flex items-center gap-1.5 justify-between cursor-pointer w-full  ${className}`} >
                                <div className="mb-6 w-full"  >
                                        <label htmlFor="f_name" className='font-medium text-sm text-[#475367] mb-1'>Role </label>
                                        <div className={`  rounded-md border border-solid border-[#D0D5DD] p-4 app__flex transition hover:border-[#D2E4FE] focus-within:border-[#D2E4FE]`} onClick={() => {setShow(val => !val); setSearch("")}} >
                                                <input id="f_name" className='flex-1 outline-none  text-sm placeholder:text-sm placeholder:text-[#98A2B3]' type="text" value={search} onChange={(e) => setSearch(e.target.value)}    placeholder="Select Role"  />

                                                <BsChevronDown size={20} color='#343330' />
                                        </div>
                                </div>
                        </div>

                        <AnimatePresence exitBeforeEnter >
                                {
                                        show &&
                                        <motion.div className={`absolute top-[90px] ${right && "right-0"} w-full min-w-[250px]  text-sm text-offBlack bg-white border-[0.5px] border-solid border-[#DFDFDF] rounded-b-md   z-[2]`} initial={{ opacity: "0" }} animate={{ opacity: 1 }} exit={{ opacity: "0" }} transition={{ type: "spring", bounce: 0.3, duration: 0.4 }} ref={ref}  style={{boxShadow:"0px 10px 10px 0px #0000000A  0px 20px 25px -5px #0000001A "}}>

                                                <div className="max-h-[300px] overflow-y-auto mt-2">
                                                        {
                                                                filteredOptions.map((val, i) => (
                                                                        <div className="text-sm text-neutral-800 py-[18px] px-4 border-0 border-b border-solid border-[#E4E7EC] truncate cursor-pointer transition hover:underline focus:underline" key={i} onClick={() => { onClick(val), setSearch(val); setShow(false) }}>
                                                                                {val}
                                                                        </div>
                                                                ))
                                                        }
                                                </div>
                                        </motion.div>
                                }
                        </AnimatePresence  >
                </div>
        )
}

export default Dropdown