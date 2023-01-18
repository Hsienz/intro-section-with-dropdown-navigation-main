import imageHeroMobile from "../../assets/images/image-hero-mobile.png";
import imageHeroDesktop from "../../assets/images/image-hero-desktop.png";
import clientAudiophile from "../../assets/images/client-audiophile.svg";
import clientDatabiz from "../../assets/images/client-databiz.svg";
import clientMaker from "../../assets/images/client-maker.svg";
import clientMeet from "../../assets/images/client-meet.svg";
const Main = () => {
	return (
		<div className="relative flex flex-col md:flex-row-reverse md:max-h-[724px] md:justify-between">
			<div className="flex justify-center md:hidden">
				<img src={imageHeroMobile} alt="" />
			</div>
			<div className="justify-center hidden md:flex">
				<img className="h-full" src={imageHeroDesktop} alt="" />
			</div>
			<div className="px-4 md:w-3/5">
				<div className="flex flex-col items-center text-center md:h-full md:text-left md:items-start md:justify-between">
					<h1 className="font-bold text-4xl text-Almost_Black mt-12 md:mt-36 md:text-[4.125rem] md:leading-[4.375rem]">
						{" "}
						Make remote work
					</h1>

					<p className="text-Medium_Gray mt-4 md:mt-0">
						Get your team in sync, no matter your location.
						Streamline processes, create team rituals, and watch
						productivity soar.
					</p>

					<button className="mt-6 text-Almost_White bg-Almost_Black py-3 px-6 rounded-2xl md:mt-0">
						{" "}
						Learn more
					</button>
					<div className="my-12 gap-x-4 justify-between items-center flex flex-wrap md:my-0 md:w-full">
						<img src={clientDatabiz} alt="" />
						<img src={clientAudiophile} alt="" />
						<img src={clientMeet} alt="" />
						<img src={clientMaker} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
