import { useState } from "react";
import iconArrowDown from "../../assets/images/icon-arrow-down.svg";
import iconArrowUp from "../../assets/images/icon-arrow-up.svg";
type NavElemType = {
	icon?: string;
	title: string;
	child?: NavElemType[];
};
const NavElem = (props: NavElemType) => {
	const [open, setOpen] = useState(false);
	return (
		<button>
			<span className="flex group" onClick={() => setOpen(!open)}>
				{props.icon && (
					<img
						className="h-full scale-125 self-center mr-4"
						src={props.icon}
					></img>
				)}
				<p className="group-hover:text-Almost_Black transition-all"> {props.title}</p>
				{props.child && (
					<img
						className="h-full self-center ml-4 group-hover:brightness-0 transition-all"
                        src={open ? iconArrowUp : iconArrowDown}
						alt=""
					/>
				)}
			</span>

			{props.child && open && (
				<span className="flex flex-col gap-y-4 ml-8 mt-4 md:bg-Almost_White md:shadow-[0_0_30px_0px_hsl(0,0%,41%,0.5)] md:p-7 md:rounded-2xl md:absolute md:z-10">
					{props.child.map((x, i) => (
						<NavElem key={i} {...x} />
					))}
				</span>
			)}
		</button>
	);
};
export default NavElem;
export type { NavElemType };
