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
			<span className="flex" onClick={() => setOpen(!open)}>
				{props.icon && <img className="h-full scale-125 self-center mr-4" src={props.icon}></img>}
				{props.title}
				{props.child && (
					<img className="h-full self-center ml-4" src={open ? iconArrowUp : iconArrowDown} alt="" />
				)}
			</span>

			{props.child && open && (
				<span className="flex flex-col gap-y-4 ml-8 mt-4">
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
