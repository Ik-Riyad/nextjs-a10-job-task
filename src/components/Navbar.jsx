"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-52 py-4 shadow-md bg-white">
            <Link href='/' className="flex items-center">
                <svg className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h1 className="text-2xl font-bold text-gray-900">MyStore</h1>
            </Link>
            <div className="space-x-6">
                <Link href="/products" className="hover:text-blue-500">Products</Link>
                <Link href="/login" className="hover:text-blue-500">Login</Link>
            </div>
        </nav>
    );
}
