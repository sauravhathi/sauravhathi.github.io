import Link from "next/link";

export default function Footer() {
    return (
        <footer className="sticky bottom-0 bg-slate-900 text-slate-50 py-2 px-2">
            <div className="text-center">
            &copy; {new Date().getFullYear()} <Link href="https://github.com/sauravhathi" title="github">Saurav Hathi</Link>
            </div>
        </footer>
    )
}