import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMeasure } from 'react-use';
import { useRouter } from 'next/router';
import { MenuToggle } from './MenuToggle';
import { MenuItem } from './MenuItem';
import styles from './Nav.module.scss';

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const Nav = ({ navItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [containerRef, { height }] = useMeasure();

    const toggleOpen = () => setIsOpen(prevIsOpen => !prevIsOpen);
    const router = useRouter();

    useEffect(() => {
        router.events.on('routeChangeComplete', () => {
            console.log('COMPLETE');
            setIsOpen(false);
        });
        return () => {
            router.events.off();
        };
    }, [router.events]);

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            transition: {
                type: 'spring',
                stiffness: 20,
                restDelta: 2,
            },
        }),
        closed: {
            clipPath: 'circle(30px at 40px 40px)',
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40,
            },
        },
    };

    return (
        <div className={styles.root}>
            <motion.nav
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                custom={height}
                ref={containerRef}
            >
                <motion.div className={styles.background} variants={sidebar} />
                <motion.ul variants={navVariants}>
                    {navItems.map((item, index) => (
                        <MenuItem key={index} item={item} />
                    ))}
                </motion.ul>
                <MenuToggle toggle={toggleOpen} />
            </motion.nav>
        </div>
    );
};
export default Nav;
