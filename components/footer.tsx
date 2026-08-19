import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-bold text-xl">Censura</div>
        <div className="flex gap-6 text-sm">
          <Link href="" className="hover:text-gray-600 transition-colors">
            About
          </Link>
          <Link href="" className="hover:text-gray-600 transition-colors">
            Contact
          </Link>
          <Link href="" className="hover:text-gray-600 transition-colors">
            Support
          </Link>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Censura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
