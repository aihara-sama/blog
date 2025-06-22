import Logo from "@/app/components/common/logo";
import Nav from "@/app/components/layout/header/nav";
import MobileMenu from "@/app/components/layout/mobile-menu";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
	return (
		<header className="h-[90px] flex items-center border-b border-gray-300 max-w-[1280px] mx-auto px-6 py-8">
			<Logo />
			<Nav className="ml-16 hidden sm:flex" />
			<MobileMenu className="sm:hidden block ml-auto" />
		</header>
	);
};

export default Header;
