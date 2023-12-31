"use client"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { status } = useSession();
  return (
    <div className="flex justify-between items-center bg-slate-600 px-8 py-4">
      <Link className="text-gray-200 font-bold text-xl" href={"/"}>
        Next Google Auth MongoDB
      </Link>
      {status === 'authenticated' ? (
        <button
          onClick={() => signOut()}
          className="bg-slate-900 text-white px-6 py-2 rounded-mdt"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign In
        </button>
      )}
    </div>
  )
}