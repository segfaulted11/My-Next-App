import FoodCard from "../components/FoodCard";

const FoodsPage = async () => {
  const response = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods",
  );
  const foods = await response.json();
//   console.log(foods); //object, one of its property is data and that is array of objects that consists all the food data.

  const foodsArray = foods.data;
//   console.log(foodsArray); //array of objects

  return (<div>
<h2 className="text-3xl font-bold text-center">Food Items : {foodsArray.length}</h2>
<div className="grid grid-cols-3 gap-3">
{
    foodsArray.map((food)=>{
        return (
<FoodCard key={food.id} food={food}></FoodCard>
        )
    })
}
    </div>
  </div>);
};

export default FoodsPage;
