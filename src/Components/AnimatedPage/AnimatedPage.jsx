import {motion} from 'framer-motion'

const animations = {
    initial : {opacity: 0},
    animation : {opacity: 1}, 
    exit : {opacity: 0},
}

const AnimatedPage = ({children}) => {

    return(
        <motion.div variants={animations} initial="initial" animate="animation" exit="exit" transition={{duration: 1}}>
            {children}
        </motion.div>
    )
}

export default AnimatedPage