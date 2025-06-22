import { PropsWithClassName } from "@/types/props";
import type { FunctionComponent } from "react";

interface Props {
	onClick?: () => void;
}

const HamburgerIcon: FunctionComponent<PropsWithClassName<Props>> = ({
	className = "",
	onClick,
}) => {
	return (
		<svg
			onClick={onClick}
			className={className}
			viewBox="0 0 49 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M48.9457 2.08696C48.9457 3.23954 48.0113 4.17391 46.8587 4.17391H2.33696C1.18437 4.17391 0.25 3.23954 0.25 2.08696C0.25 0.934372 1.18437 0 2.33696 0H46.8587C48.0113 0 48.9457 0.934372 48.9457 2.08696Z"
				fill="#081339"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M48.9457 16C48.9457 17.1526 48.0113 18.087 46.8587 18.087H2.33696C1.18437 18.087 0.25 17.1526 0.25 16C0.25 14.8475 1.18437 13.9131 2.33696 13.9131H46.8587C48.0113 13.9131 48.9457 14.8475 48.9457 16Z"
				fill="#081339"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M48.9457 29.9131C48.9457 31.0657 48.0113 32.0001 46.8587 32.0001H2.33696C1.18437 32.0001 0.25 31.0657 0.25 29.9131C0.25 28.7606 1.18437 27.8262 2.33696 27.8262H46.8587C48.0113 27.8262 48.9457 28.7606 48.9457 29.9131Z"
				fill="#081339"
			/>
		</svg>
	);
};

export default HamburgerIcon;
