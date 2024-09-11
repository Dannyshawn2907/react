import React from "react";
import Image from "../../public/images/image-omelette.jpeg";

const Menu = () => {
  return (
    <div className="body">
    <div className="content-container">
      <div>
        <img src={Image} alt="" />
        <div className="simple">
          <h1>Simple omelette Recipe</h1>
          <p>
            An easy and Quick dish, perfect for any meal. This classic omelette
            combines beaten eggs <br /> cooked to perfection, optionally filled
            with your choice of cheese, vegetables, or meats.
          </p>
        </div>

        <div className="Preparation">
          <h1>Preparation time</h1>
          <ul>
            <li>Total: Approximately 10 minutes</li>
            <li>Preparation: 5 minutes</li>
            <li> Cooking: 5 minutes</li>
          </ul>
        </div>

        <div className="Ingredients">
          <h1>Ingredients</h1>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>

        <div className="Instructions">
          <h1>Instructions</h1>
          <ul>
            <li>
              1 Beat the eggs: In a bowl, beat the eggs with a pinch of salt and
              pepper until they are well mixed.You can add a tablespoon of water
              or milk for a fluffier texture.
            </li>

            <li>
              2 Heat the pan: Place a non-stick frying pan over medium heat and
              add butter or oil.
            </li>

            <li>
              3 Cook the omelette: Once the butter is melted and bubbling, pour
              in the eggs. Tilt the pan to ensure the eggs evenly coat the
              surface.
            </li>

            <li>
              4 Add fillings (optional): When the eggs begin to set at the edges
              but are still slightly runny in the middle, sprinkle your chosen
              fillings over one half of the omelette.
            </li>

            <li>
              5 Fold and serve: As the omelette continues to cook, carefully
              lift one edge and fold it over the fillings. Let it cook for
              another minute, then slide it onto a plate.
            </li>

            <li>
              6 Enjoy: Serve hot, with additional salt and pepper if needed.
            </li>
          </ul>
        </div>

        <div className=" Nutrition">
          <h1> Nutrition</h1>
          <p>
            {" "}
            Calories <span>277kcal</span>
          </p>
          <p>
            Carbs <span>0g</span>
          </p>
          <p>
            {" "}
            Protein <span>20g</span>
          </p>
          <p>
            {" "}
            Fat <span>22g</span>
          </p>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Menu;
