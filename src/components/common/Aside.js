import { HiOutlineClock } from "react-icons/hi";

const Aside = () => {
	return (
		<aside className="aside-section">
			<h3>Popular Recipes</h3>
			<div className="popular-recipe-card">
				<img src="/img/slider-1.jpg" />
				<div>
					<h5>Gluten Free Pizza Crusts - A Perfect Complement</h5>
					<span>10 ingredients - 60 minutes</span>
				</div>
			</div>

			<div className="popular-recipe-card">
				<img src="/img/slider-2.jpg" />
				<div>
					<h5>Gluten Free Pizza Crusts - A Perfect Complement</h5>
					<span>10 ingredients - 60 minutes</span>
				</div>
			</div>

			<div className="popular-recipe-card">
				<img src="/img/slider-3.jpg" />
				<div>
					<h5>Gluten Free Pizza Crusts - A Perfect Complement</h5>
					<span>10 ingredients - 60 minutes</span>
				</div>
			</div>

			<h3>What's Cooking</h3>

			<div className="what-cooking-card">
				<img src="/img/slider-1.jpg" />
				<div className="titles">
					<h3>Gluten Free Pizza Crusts — A Perfect Complement</h3>
					<span>
						<HiOutlineClock /> February 17, 2022
					</span>
				</div>
			</div>

			<div className="what-cooking-card">
				<img src="/img/slider-2.jpg" />
				<div className="titles">
					<h3>Gluten Free Pizza Crusts — A Perfect Complement</h3>
					<span>
						<HiOutlineClock /> February 17, 2022
					</span>
				</div>
			</div>

			<div className="what-cooking-card">
				<img src="/img/slider-3.jpg" />
				<div className="titles">
					<h3>Gluten Free Pizza Crusts — A Perfect Complement</h3>
					<span>
						<HiOutlineClock /> February 17, 2022
					</span>
				</div>
			</div>
			<h3>Popular Post</h3>

			<div className="popular-post-card">
				<img src="/img/slider-4.jpg" />
				<div>
					<h5>Gluten Free Pizza Crusts - A Perfect Complement</h5>
					<span>October 4, 2021</span>
				</div>
			</div>

			<div className="popular-post-card">
				<img src="/img/slider-5.jpg" />
				<div>
					<h5>Gluten Free Pizza Crusts - A Perfect Complement</h5>
					<span>October 4, 2021</span>
				</div>
			</div>

			<div className="popular-post-card">
				<img src="/img/slider-6.jpg" />
				<div>
					<h5>Gluten Free Pizza Crusts - A Perfect Complement</h5>
					<span>October 4, 2021</span>
				</div>
			</div>
		</aside>
	);
};

export default Aside;
