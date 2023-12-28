import Link from "next/link"
// import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-600 px-8 py-4">
      <Link className="text-gray-200 font-bold text-2xl" href={"/"}>
        Next Google Auth MongoDB
      </Link>
      <button
        className="bg-slate-900 text-white px-6 py-2 rounded-md">
        Sign In
      </button>
    </nav>
  )
}