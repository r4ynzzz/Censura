import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 text-white">
      <div className="max-h-6xl h-72 mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-bold text-xl text-sky-400">Censura</div>

        <div className="flex flex-col gap-2 text-sm">
          <h1 className="font-bold text-xl">Features</h1>
          <Link href="" className="hover:text-gray-600 transition-colors">
            About
          </Link>
          <Link href="" className="hover:text-gray-600 transition-colors">
            Contact
          </Link>
          <Link href="" className="hover:text-gray-600 transition-colors">
            Support
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <h1 className="font-bold text-xl">Company</h1>
          <Link href="" className="hover:text-gray-600 transition-colors">
            About
          </Link>
          <Link href="" className="hover:text-gray-600 transition-colors">
            Contact
          </Link>
          <Link href="" className="hover:text-gray-600 transition-colors">
            Team
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <h1 className="font-bold text-xl">More</h1>
          <Link href="" className="hover:text-gray-600 transition-colors">
            Support
          </Link>
          <Link href="" className="hover:text-gray-600 transition-colors">
            Reviews
          </Link>
          <Link href="" className="hover:text-gray-600 transition-colors">
            Blogs
          </Link>
        </div>

        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Censura. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
