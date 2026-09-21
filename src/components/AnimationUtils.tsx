import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
    children,
    className = '',
    delay = 0,
    staggerDelay = 0.1,
}) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface StaggerItemProps extends HTMLMotionProps<'div'> {
    delay?: number;
    variant?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'flip';
}

const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    flip: {
        hidden: { opacity: 0, rotateY: 90 },
        visible: { opacity: 1, rotateY: 0 },
    },
};

export const StaggerItem: React.FC<StaggerItemProps> = ({
    children,
    className = '',
    delay = 0,
    variant = 'fadeUp',
    style,
    ...props
}) => {
    return (
        <motion.div
            variants={variants[variant]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: '-50px' }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay,
            }}
            className={className}
            style={style}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Section header animation wrapper
export const SectionHeader: React.FC<{
    children: ReactNode;
    className?: string;
    delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Card grid animation wrapper
export const AnimatedGrid: React.FC<{
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    delay?: number;
}> = ({ children, className = '', staggerDelay = 0.1, delay = 0 }) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Individual animated card
export const AnimatedCard: React.FC<{
    children: ReactNode;
    className?: string;
    variant?: 'fadeUp' | 'scale' | 'flip';
    delay?: number;
    index?: number;
    onClick?: () => void;
}> = ({ children, className = '', variant = 'fadeUp', delay = 0, index, onClick }) => {
    const itemDelay = index !== undefined ? index * 0.1 : delay;

    return (
        <motion.div
            variants={variants[variant]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: '-50px' }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: itemDelay,
            }}
            className={className}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};