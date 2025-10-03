import Books from "../Books/Books";

const BookArea = () => {
	return (
		<section className="py-10 md:py-20 lg:pt-[100px] lg:pb-[130px]">
			<div className="container">
				<h2 className="text-center text-[#131313] font-bold text-[30px] lg:text-[40px] mb-5 lg:mb-9">
					Books
				</h2>
				<Books />
			</div>
		</section>
	);
};

export default BookArea;
