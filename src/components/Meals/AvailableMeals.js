import classes from "../Meals/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Biryani",
    description: "A flavorful and aromatic rice dish",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Nihari",
    description: "enjoyed as a breakfast dish...pieces of meat",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Saag (Sarson da Saag)",
    description: "A Punjabi dish made from mustard greens....makki di roti ",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Halwa Puri",
    description: "A popular breakfast dish...accompanied by chana masala",
    price: 14.99,
  },
  {
    id: "m5",
    name: "Paya",
    description: " enjoyed for its hearty and nutritious",
    price: 22.99,
  },
  {
    id: "m6",
    name: "Chicken Karahi",
    description: " A quick and flavorful dish...bold and spicy flavor",
    price: 21.99,
  },
  {
    id: "m7",
    name: "Chapli Kebab Wrap",
    description: "flatbread or tortilla with fresh vegetables... tasty handheld meal",
    price: 15.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
    key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
