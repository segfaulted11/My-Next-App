   const blogs= [
  {
    "id": 1,
    "title": "Getting Started with JavaScript",
    "author": "John Smith",
    "category": "Programming",
    "publishedDate": "2026-05-10",
    "tags": ["JavaScript", "Web Development", "Beginner"],
    "excerpt": "Learn the fundamentals of JavaScript and start building interactive web applications.",
    "content": "JavaScript is one of the most popular programming languages for web development. It allows developers to create dynamic and interactive user experiences."
  },
  {
    "id": 2,
    "title": "The Future of Artificial Intelligence",
    "author": "Sarah Johnson",
    "category": "Technology",
    "publishedDate": "2026-04-22",
    "tags": ["AI", "Machine Learning", "Innovation"],
    "excerpt": "Exploring how AI is transforming industries and shaping the future.",
    "content": "Artificial Intelligence continues to evolve rapidly, impacting healthcare, finance, education, and many other sectors around the world."
  },
  {
    "id": 3,
    "title": "10 Tips for Remote Work Productivity",
    "author": "Michael Brown",
    "category": "Career",
    "publishedDate": "2026-03-15",
    "tags": ["Remote Work", "Productivity", "Work From Home"],
    "excerpt": "Practical strategies to stay productive and maintain work-life balance while working remotely.",
    "content": "Remote work offers flexibility, but it also requires discipline. Establishing routines and minimizing distractions can significantly improve productivity."
  },
  {
    "id": 4,
    "title": "A Beginner's Guide to Healthy Eating",
    "author": "Emily Davis",
    "category": "Health",
    "publishedDate": "2026-02-28",
    "tags": ["Nutrition", "Health", "Lifestyle"],
    "excerpt": "Simple dietary habits that can improve your overall well-being.",
    "content": "Healthy eating does not have to be complicated. Focusing on whole foods, balanced meals, and proper hydration can make a big difference."
  }
]

const BlogDetailsPage = async({params}) => {
    const response = await params;

    // console.log(response);//it returns an object where the property name is [foldername] and value is what you after blogs (blogs/...) in the url
    //{blogId: '11'}

    //now destructuring the object
    const {blogId} = response;
    // console.log(blogId)//11

    const expectedBlog = blogs.find((blog)=> {
        return (
            blog.id === parseInt(blogId)
        )
    })//it will return that element (object of blog) from the array whose id is equal to the id that is typed in the url after blogs (blogs/11)

    return (
        <div>
            <p className="text-center text-5xl">Blog details</p>
            {
              expectedBlog && <div>
                <h2>{expectedBlog.id}</h2>
                <h2>{expectedBlog.title}</h2>
                <h2>{expectedBlog.author}</h2>
                <h2>{expectedBlog.category}</h2>
                </div>
            }
            {/* if theres an element that matches the condition its going to show this on the ui otherwise it wont show anything. */}
        </div>
    );
};

export default BlogDetailsPage;