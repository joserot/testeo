import Container from "../components/common/Container";
import Aside from "../components/common/Aside";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsPrinterFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { MdDinnerDining } from "react-icons/md";
import { MdRamenDining } from "react-icons/md";
import { MdWbTwilight } from "react-icons/md";

const recipe = () => {
	return (
		<Container>
			<main className="recipe-page">
				<section className="recipe-main-section">
					<div className="recipe-header-links">
						<a>Home</a>
						<a>American</a>
						<a>Tasty Oriental Supreme Black Bean Soup</a>
					</div>

					<div className="recipe-video">
						<img src="/img/slider-1.jpg" />
						<button>
							WATCH <AiOutlinePlayCircle />
						</button>
					</div>

					<div className="recipe-header-bio">
						<img src="/img/avatar.jpeg" />
						<span className="author">BY MOHAMED GAMIL</span>
						<span className="category">
							Collection: <a>American</a>
						</span>
						<h1>Tasty Oriental Supreme Black Bean Soup</h1>
						<div className="rrss">
							<button className="add">
								<AiOutlineHeart /> Add to Favorites
							</button>
							<button>
								<AiOutlineLike />{" "}
							</button>
							<button>
								<BsPinterest />
							</button>
							<button>
								<BsFacebook />
							</button>
							<button>
								<BsTwitter />
							</button>
							<button>
								<BsPrinterFill />
							</button>
							<button>
								<AiOutlineMail />
							</button>
						</div>
					</div>

					<div className="stars">
						<AiTwotoneStar />
						<AiTwotoneStar />
						<AiTwotoneStar />
						<AiTwotoneStar />
						<AiTwotoneStar />
					</div>
					<span className="review">5 out of 5 stars (based on 1 review)</span>
					<div className="cook">
						<article>
							<span>
								Skill level: <strong>Advanced, Beginner, Intermediate</strong>{" "}
							</span>
							<span>
								Total Time: <strong>35 min</strong>{" "}
							</span>
							<MdDinnerDining />
						</article>
						<article>
							<span>
								Preparation: <strong>15 min</strong>{" "}
							</span>
							<span>
								Cooking: <strong>20 min</strong>{" "}
							</span>
							<MdRamenDining />
						</article>
						<article>
							<span>
								No. of Ingredients: <strong>10</strong>{" "}
							</span>
							<span>
								Yields: <strong>4 servings</strong>{" "}
							</span>
							<MdWbTwilight />
						</article>
					</div>

					<div className="cook-recipe">
						<div className="ingredients">
							<h2>Ingredients:</h2>
							<ul>
								{" "}
								<li>2 tbsp. extra-virgin olive oil</li>
								<li>1 medium red onion, finely chopped</li>{" "}
								<li>1 jalapeño, minced</li>
								<li>2 cloves garlic, minced</li>{" "}
								<li>2 cloves garlic, minced</li>
								<li>1 tbsp. tomato paste</li> <li>kosher salt</li>
								<li>Freshly ground black pepper</li>{" "}
								<li>1/2 tsp. ground cumin</li>
								<li>1 tsp. chili powder</li>{" "}
							</ul>
						</div>
						<div className="steps">
							<h2>Steps:</h2>
							<p>
								In a large pot over medium heat, heat oil. Add onion and cook
								until soft and translucent, about 5 minutes. Add jalapeños and
								garlic and cook until fragrant, about 2 minutes. Add tomato
								paste, stir to coat vegetables, and cook about a minute more.
								Season with salt, pepper, cumin, and chili powder and stir to
								coat.
							</p>
							<p>
								Add black beans and broth. Stir soup, add bay leaf, and bring to
								a boil. Immediately reduce to a simmer and let simmer until
								slightly reduced and thickened, 15 to 20 minutes. (If a thinner
								soup is desired, add more broth as needed.)
							</p>
							<p>
								Remove bay leaf and let cool slightly. Using an immersion
								blender or food processor, blend soup to desired consistency.
							</p>
							<p>
								Serve with a dollop of sour cream, sliced avocado, and cilantro.
							</p>
						</div>
					</div>

					<div className="tags">
						<h3>Tags:</h3>
						<a>BEANS</a>
						<a>GARLIC</a>
						<a>SOUP</a>
					</div>

					<div className="something-else">
						<h2>Looking for Something Else</h2>
						<div className="something-else-cards">
							<article>
								<div className="card-play">
									<AiOutlinePlayCircle />{" "}
								</div>
								<img src="/img/slider-2.jpg" />
								<div className="card-cook">
									<span>
										<MdDinnerDining />
										10 ingredients
									</span>
									<span>
										<MdRamenDining />
										60 minutes
									</span>
								</div>
								<h3>Gluten Free Pizza Crusts - A Perfect Complement</h3>
							</article>

							<article>
								<div className="card-play">
									<AiOutlinePlayCircle />
								</div>
								<img src="/img/slider-3.jpg" />
								<div className="card-cook">
									<span>
										<MdDinnerDining />
										10 ingredients
									</span>
									<span>
										<MdRamenDining />
										60 minutes
									</span>
								</div>
								<h3>Gluten Free Pizza Crusts - A Perfect Complement</h3>
							</article>

							<article>
								<div className="card-play">
									<AiOutlinePlayCircle />
								</div>
								<img src="/img/slider-4.jpg" />
								<div className="card-cook">
									<span>
										<MdDinnerDining />
										10 ingredients
									</span>
									<span>
										<MdRamenDining />
										60 minutes
									</span>
								</div>
								<h3>Gluten Free Pizza Crusts - A Perfect Complement</h3>
							</article>
						</div>
					</div>
				</section>
				<Aside />
			</main>
		</Container>
	);
};

export default recipe;
