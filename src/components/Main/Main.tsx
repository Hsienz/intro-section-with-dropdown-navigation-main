import imageHeroMobile from "../../assets/images/image-hero-mobile.png";
import imageHeroDesktop from "../../assets/images/image-hero-desktop.png";
import clientAudiophile from "../../assets/images/client-audiophile.svg";
import clientDatabiz from "../../assets/images/client-databiz.svg";
import clientMaker from "../../assets/images/client-maker.svg";
import clientMeet from "../../assets/images/client-meet.svg";
const Main = () => {
	return (
		<div className="relative">
			<div className="flex justify-center">
				<img src={imageHeroMobile} alt="" />
			</div>
			<div className="px-4">
				<div className="flex flex-col items-center text-center">
					<h1 className="font-bold text-4xl text-Almost_Black mt-12">
						{" "}
						Make remote work
					</h1>

					<p className="text-Medium_Gray mt-4">
						Get your team in sync, no matter your location.
						Streamline processes, create team rituals, and watch
						productivity soar.
					</p>

					<button className="mt-6 text-Almost_White bg-Almost_Black py-3 px-6 rounded-2xl">
						{" "}
						Learn more
					</button>
				</div>
				<div className="my-12 flex gap-x-4 justify-between items-center">
					<img className="h-full" src={clientDatabiz} alt="" />
					<img className="h-full" src={clientAudiophile} alt="" />
					<img className="h-full" src={clientMeet} alt="" />
					<img className="h-full" src={clientMaker} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Main;
