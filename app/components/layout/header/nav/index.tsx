"use client";

import { nav } from "@/config/nav";
import { PropsWithClassName } from "@/types/props";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

const Nav: FunctionComponent<PropsWithClassName> = ({ className = "" }) => {
	const pathname = usePathname();

	return (
		<nav className={`flex gap-8 items-center ${className}`}>
			{nav.map(({ title, href }) => (
				<Link
					key={title}
					href={href}
					className={`underline-offset-8 hover:underline ${clsx(
						pathname === href && "underline!"
					)}`}
				>
					{title}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
