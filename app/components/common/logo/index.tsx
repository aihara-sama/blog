import LogoIcon from "@/app/components/icons/logo-icon";
import { PropsWithClassName } from "@/types/props";
import Link from "next/link";
import { FunctionComponent } from "react";

const Logo: FunctionComponent<PropsWithClassName> = ({ className = "" }) => {
	return (
		<Link href={"/"} className={`flex items-center gap-[6px] ${className}`}>
			<LogoIcon className="h-[14px]" /> <span>Blog</span>
		</Link>
	);
};

export default Logo;
