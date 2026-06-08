import Image from "next/image";
import Link from "next/link";


const FoodCard = ({food}) => {
    return (
<div className="card bg-base-100 w-96 shadow-sm">

      <Image src={food.image_link} alt="food img" width={200} height={200}></Image>

  <div className="card-body">
    <h2 className="card-title">
    <p>{food.dish_name}</p>
      <div className="badge badge-secondary">{food.category}</div>
    </h2>
    <p>{food.price} Taka</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Rating : {food.rating}</div>
    </div>

    <button className="btn btn-primary">Buy Now!</button>

    <Link href={`/foods/${food.id}`}>
    <button className="btn btn-soft">View Details!</button>
    </Link>

  </div>
</div>
    );
};

export default FoodCard;