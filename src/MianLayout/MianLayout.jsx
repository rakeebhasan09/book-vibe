import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const MianLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default MianLayout;
