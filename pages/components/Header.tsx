import { motion } from 'framer-motion';
import styles from '../../styles/Home.module.css'
import Link from "next/link";
import { SocialIcon } from 'react-social-icons';

export default function Header() {

    const navLinks: { [key: string]: string } = {
        github: "https://github.com/sauravhathi",
        youtube: "https://www.youtube.com/c/sauravhathi",
        linkedin: "https://www.linkedin.com/in/sauravhathi/",
        instagram: "https://www.instagram.com/saurav_hathi/",
        telegram: "https://t.me/sauravhathi_yt_discussion"
    }

    return (
        <header
            className="max-w-7xl mx-auto sticky top-0 z-50 flex flex-row justify-center items-center p-4"
        >
            <motion.nav
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}

                className="flex flex-row items-center gap-2">
                {Object.keys(navLinks).map((key, index) => {
                    return (
                        <SocialIcon url={navLinks[key]} key={index}
                            bgColor="#334155" fgColor="#fff"
                            style={{ height: 35, width: 35 }} className="hover:scale-125 transform transition duration-200 ease-in-out"

                        />
                    )
                })}
            </motion.nav>
        </header>
    )
}
