import React from 'react'
import { motion } from 'framer-motion'
import './Transition.css'

const Transition = (WrappedComponent: React.ComponentType) => {
    return () => (
    <>  
        <WrappedComponent/>
        <motion.div
        className='transition-start'
        initial={{ scaleY: 0}}
        animate={{ scaleY: 0}}
        exit={{ scaleY: 1}}
        transition={{ duration:2, ease:[ 0.22, 1, 0.36, 1]}}
        />

        <motion.div 
        className='transition-end'
        initial={{ scaleY: 1}}
        animate={{ scaleY: 0}}
        exit={{ scaleY: 0}}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1]}}       
        />
    </>
    )
}

export default Transition;