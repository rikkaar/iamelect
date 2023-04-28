import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 0.2},
    animate: { opacity: 1},
};

const AnimatedPage = ({ children }) => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            transition={{ duration: 1 }}
            className={"content"}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;