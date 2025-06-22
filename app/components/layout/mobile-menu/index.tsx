"use client";

import Logo from "@/app/components/common/logo";
import CloseIcon from "@/app/components/icons/close-icon";
import HamburgerIcon from "@/app/components/icons/hamburger-icon";
import { nav } from "@/config/nav";
import { PropsWithClassName } from "@/types/props";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const MobileMenu: FunctionComponent<PropsWithClassName> = ({ className }) => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const [hasRendered, setHasRendered] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "unset";
		}
	}, [isOpen]);

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	useEffect(() => {
		setHasRendered(true);
	}, []);

	return (
		<>
			<HamburgerIcon
				onClick={() => setIsOpen(true)}
				className={`cursor-pointer block sm:hidden h-[14px] ${className}`}
			/>
			{hasRendered &&
				createPortal(
					<div
						className={`z-10 fixed inset-0 bg-white ${clsx(
							isOpen ? "block" : "hidden"
						)} lg:hidden ${className}`}
					>
						<div>
							<div className="px-6 flex justify-between items-center min-h-[90px] border-b border-gray-300">
								<Logo />
								<CloseIcon
									onClick={() => setIsOpen(false)}
									className="cursor-pointer h-[14px]"
								/>
							</div>

							<div className="pt-8 px-6 flex flex-col gap-6 overflow-auto h-[calc(100vh-90px)]">
								{nav.map(({ title, href }) => (
									<div key={title}>
										<Link
											href={href}
											className={`underline-offset-8 hover:underline ${clsx(
												pathname === href && "underline!"
											)}`}
										>
											{title}
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>,
					document.body
				)}
		</>
	);
};

export default MobileMenu;
