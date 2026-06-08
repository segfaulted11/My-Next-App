const FoodDeatailPage = async ({ params }) => {
  const response = await params;
//   console.log(response); //object
  //deconstructing
  const { foodId } = response;
  // console.log(foodId)//route name

  const res = await fetch (`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
  const foodData = await res.json();
  const foodDataProperty = foodData.data;
//   console.log(foodDataProperty)//expected food object

  const {dish_name,id,category,rating,price} = foodDataProperty

  return (
    <div>
      <h2 className="text-center font-bold text-3xl">Food Details Page</h2>
      <p>id : {id}</p>
      <p>dishName : {dish_name}</p>
      <p>price : {price}</p>
      <p>rating : {rating}</p>
    </div>
  );
};

export default FoodDeatailPage;
