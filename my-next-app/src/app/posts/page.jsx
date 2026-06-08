import { Suspense } from "react";
import Posts from "../components/Posts";

const PostsPage = () => {

    //Data Fetching (loading data) using fetch and 'use()' hook
    const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(response=>response.json());
    console.log(postsPromise)//it returns a promise not the array of object

    //loading data and showing the data in the different places
    return (
        <div>
            <Suspense fallback={<h2 className="text-3xl">posts loading....</h2>}>
<Posts postsPromise={postsPromise}></Posts>
            </Suspense>
        </div>
    );
};

export default PostsPage;