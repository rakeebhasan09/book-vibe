import { Link } from "react-router";
import bannerImage from "./images/banner-book.png";

const Banner = () => {
	return (
		<section className="mt-10 md:mt-12">
			<div className="container">
				<div className="p-7 pb-12 md:py-16 md:px-14 lg:py-20 lg:px-20 xl:px-[120px] bg-[rgba(19,19,19,0.05)] rounded-lg md:rounded-2xl lg:rounded-3xl">
					<div className="flex flex-col-reverse gap-y-7 md:flex-row items-center">
						<div className="flex-1">
							<h2 className="text-[#131313] text-[28px] md:text-[40px] lg:text-[56px] font-bold max-w-[526px] mb-10 md:mb-8 lg:mb-12">
								Books to freshen up your bookshelf
							</h2>
							<Link
								to={"/"}
								className="py-[12px] px-7 bg-[#23BE0A] rounded-lg text-white"
							>
								View The List
							</Link>
						</div>
						<div>
							<img
								className="max-w-[240px] lg:max-w-[318px]"
								src={bannerImage}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
