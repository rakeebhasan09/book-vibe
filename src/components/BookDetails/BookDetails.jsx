import { useLocation } from "react-router";

const BookDetails = () => {
	const location = useLocation();
	const { book } = location.state || {};
	const { image, bookName, author, category } = book;

	return (
		<div className="lg:mt-12">
			<div className="container ">
				<div className="grid md:grid-cols-2 lg:gap-12">
					<div className="bg-[rgba(19,19,19,0.05)] rounded-2xl lg:p-[74px]">
						<img src={image} alt="" />
					</div>
					<div>
						<h2 className="text-[#131313] lg:text-[48px] font-bold mb-4">
							{bookName}
						</h2>
						<p className="text-[rgba(19,19,19,0.80)] text-[20px] font-medium mb-6">
							By : {author}
						</p>
						<p className="text-[rgba(19,19,19,0.80)] text-[20px] font-medium py-4 border-t border-b">
							{category}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookDetails;
