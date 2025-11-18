import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
return (
<header className="p-4 bg-gray-800 shadow-lg flex justify-between items-center">
<Link to="/" className="text-2xl font-bold text-blue-400">
MovieRec
</Link>
</header>
);
}