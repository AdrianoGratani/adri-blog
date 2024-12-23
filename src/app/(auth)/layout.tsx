"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';

import "styles.css";

const navLinks = [
	{name: "Register", href: "/register"},
	{name: "Login", href: "/login"},
	{name: "Forgot Password", href: "/forgot-password"},
];

export default function AuthLayout(
	{children} : {
		children: React.ReactNode;
	}
) {
	const pathname = usePathname();

	return (
		<div>
		{
			navLinks.map((link)=> {

				const isActive = pathname.startsWith(link.href);
				return (
					<Link href={link.href} key={link.name}
						className={isActive ? "font-bold" : "text-blue-500"}
					>
					{link.name} link stays ONSCREEN because into layout.tsx
					</Link>
				)
			})
		}
		</div>
	)
}

