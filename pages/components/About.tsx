import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-10 h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-2">
                <motion.h3
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    
                    className="text-4xl text-slate-50 font-bold">
                    <span className="text-blue-500">console</span>
                    <span className="text-slate-50">.</span>
                    <span className="text-pink-600">log</span>
                    <span className="text-slate-50">(</span>
                    <span className="text-green-500">&quot;Hi, I&apos;m Saurav Hathi&quot;</span>
                    <span className="text-slate-50">)</span>
                </motion.h3>
                <p className="text-lg text-slate-500">
                    I am a web developer/engineer with a particular interest in front-end technologies.
                    I have experience developing websites, Web applications, and Web services using{" "}
                    <span className="codeTag">Java</span>,{" "}
                    <span className="codeTag">Python</span>,{" "}
                    <span className="codeTag">Node.js</span>,{" "}
                    <span className="codeTag">ReactJS</span>,
                    {" "}
                    and
                    {" "}
                    <span className="codeTag">MongoDB</span>.
                    I enjoy playing around with data and code.
                    Along with being passionate about creating inclusive spaces for everyone,
                    I love learning new things and building cool stuff.
                    Learning is a lifelong process,
                    so I&apos;m always discovering new things.
                    &quot;Learning is a life-long journey&quot;
                </p>
            </div>
        </div>
    )
}