import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const gridDivs = [
        { bg: "bg-slate-800", border: "border-b border-slate-900" },
        { bg: "bg-slate-800", border: "border-b border-slate-900" },
        { bg: "bg-slate-800", border: "border-b border-slate-900" },
        { bg: "bg-slate-800", border: "border-b border-slate-900" },
        { bg: "bg-slate-800", border: "border-b border-slate-900" },
        { bg: "bg-slate-800", border: "border-b border-slate-900" },
        { bg: "bg-slate-800", border: "border-b border-slate-900" },
        { bg: "bg-gradient-to-b from-slate-800 to-slate-900", border: "border-b border-slate-900" },
    ]

    const name = `Saurav${" "}Hathi`;
    const profession = "Software Engineer";

    const skills = [
        "ReactJs",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Frame Motion",
        "Tailwind CSS",
        "HTML5",
        "CSS",
        "TypeScript",
        "Python",
    ]

    return (
        <div className="h-screen flex flex-col items-center justify-center relative select-none">
            <motion.div
                className="grid grid-cols-12 grid-rows-12 w-full h-full absolute top-0 left-0 z-0">
                {gridDivs.map((div, index) => {
                    return (
                        <motion.div
                            initial="offscreen"
                            whileHover="onhover"
                            variants={{
                                offscreen: {
                                    opacity: 0,
                                    scale: 1,
                                },
                                onhover: {
                                    opacity: 0.2,
                                    scale: 1.1,
                                    transition: {
                                        duration: 0.5
                                    }
                                }
                            }}

                            key={index}
                            className={`col-span-12 row-span-12 ${div.bg} ${div.border} select-none`} />
                    )
                })}
            </motion.div>
            <div className="z-10 flex flex-wrap items-center justify-center gap-10 px-2">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={{
                        offscreen: {
                            opacity: 0,
                            x: -50,
                        },
                        onscreen: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 0.2,
                                duration: 0.5
                            }
                        }
                    }}

                    className="w-64 h-64 relative group">
                    <Image src="https://avatars.githubusercontent.com/u/61316762?v=4" alt="Profile Picture" fill className="profileImage"/>
                </motion.div>
                <div className="flex flex-col items-center md:items-start gap-2">
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-50 tracking-[0.1rem]">
                        {
                            name.split("").map((char, index) => {
                                return (
                                    <motion.span
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        key={index}>
                                        {char}
                                    </motion.span>
                                )
                            })
                        }
                    </h1>
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-1xl md:text-2xl mb-1 font-semibold text-slate-600 tracking-[0.5rem]">
                            {profession}
                    </motion.h2>
                    <ul className="max-w-[20rem] md:max-w-[25rem] flex flex-wrap items-center gap-2">
                        {skills.map((tag, index) => {
                            return (
                                <motion.li
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    key={index}
                                    className="liTag cursor-pointer">
                                    {tag}
                                </motion.li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div >
    )
}