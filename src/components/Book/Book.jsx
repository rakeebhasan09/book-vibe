import { Star } from "lucide-react";

const Book = ({ book }) => {
	const { image, tags, bookName, author, rating } = book;
	return (
		<div className="flex flex-col p-4 md:p-6 border-[1px] border-[rgba(19,19,19,0.15)] rounded-2xl">
			<div className="book-img bg-[#F3F3F3] rounded-2xl py-5 lg:py-8 mb-6">
				<img className="h-[166px] block mx-auto" src={image} alt="" />
			</div>
			<div className="flex grow flex-col ">
				<div className="flex items-center gap-3">
					{tags.map((tag, idx) => (
						<span
							key={idx}
							className="py-[7px] px-4 block bg-[rgba(35,190,10,0.05)] rounded-full text-[#23BE0A] font-medium"
						>
							{tag}
						</span>
					))}
				</div>
				<div className="!flex-grow pb-5 border-b-[1px] border-b-[rgba(19,19,19,0.15)] border-dashed">
					<h2 className="text-[#131313] text-[24px] font-bold my-4">
						{bookName}
					</h2>
					<p className="text-[rgba(19,19,19,0.80)] font-medium ">
						By : {author}
					</p>
				</div>
				<div className="pt-5">
					<div className="flex items-center justify-between">
						<p className="text-[rgba(19,19,19,0.80)] font-medium">
							Fiction
						</p>
						<div className="flex items-center gap-2">
							{rating}
							<Star />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Book;
