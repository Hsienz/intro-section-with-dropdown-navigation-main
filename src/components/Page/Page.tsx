import { useState } from "react";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Main from "../Main/Main";
const Page = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="font-sans font-medium text-lg relative">
			<div
				onClick={() => {
					setMenuOpen(false);
				}}
				className={`bg-Almost_Black opacity-70 fixed top-0 z-[5] w-full h-screen ${
					menuOpen ? "" : "hidden"
				}`}
			></div>
			<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="md:p-12">
				{" "}
				<Main />
			</div>
			{menuOpen && (
				<div className="w-2/3 max-w-[300px] h-screen bg-Almost_White fixed top-0 right-0 pt-24 pb-8 px-8 overflow-y-auto scrollbar-hide z-[5]">
					<Nav />
				</div>
			)}
		</div>
	);
};
export default Page;
