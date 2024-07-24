import React, { useContext, useEffect } from 'react'
import { motion } from "framer-motion"
import PropTypes from 'prop-types';
import useOnclickOutside from 'react-cool-onclickoutside'
import ReactDOM from 'react-dom'; // Import ReactDOM


import { Store } from '@/context/Store';
import { SvgCancel } from '@/icons';

const CustomModal = ({ children, heading, setModalOpen, modalWidth, key, onClose }) => {
        const { screen } = useContext(Store)
        const ref = useOnclickOutside(() => {
                setModalOpen(false);
                if (onClose) {
                        onClose();
                }
        });


        useEffect(() => {
                const handleKeyDown = (event) => {
                        if (event.key === 'Escape') {
                                setModalOpen(false); // Update the state when Escape is pressed
                        }
                };

                document.addEventListener('keydown', handleKeyDown);

                return () => {
                        document.removeEventListener('keydown', handleKeyDown);
                };
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);


        return (
                <div className={"modalOverlay"}    >
                        <motion.div initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "100%", opacity: 0 }} transition={{ type: "spring", bounce: 0.3, duration: 0.35 }} className={"modalBox"} style={{ width: screen > 900 ? modalWidth : "95%" }} ref={ref} key={key && key}>
                                {
                                        heading ?
                                                <nav >
                                                        <h5 className='font-bold text-offBlack text-[20px]'>{heading}</h5>
                                                        <button className='circle_cancle' onClick={(e) => { e.preventDefault(); setModalOpen(false) }} ><SvgCancel className="w-[20px] h-[20px] min-w-[20px] min-h-[20px]" /></button>
                                                </nav>
                                                : ""
                                }
                                <section>
                                        {children}
                                </section>
                        </motion.div>
                </div>
        )
}

CustomModal.defaultProps = {
        heading: "",
        isOpen: false,
        modalWidth: "60%",


}

CustomModal.propTypes = {
        heading: PropTypes.string,
        isOpen: PropTypes.bool.isRequired,
        modalWidth: PropTypes.string,
}

export default CustomModal