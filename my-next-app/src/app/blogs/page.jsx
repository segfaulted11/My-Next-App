import Link from "next/link";

const Blogs = () => {
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
    return (
        <div>
        <h2 className="text-5xl text-center font-bold">Blogs</h2>
        {
            blogs.map((eachBlog)=>{
                return(
                 <div key={eachBlog.id}>  
                  <p className="text-3xl font-bold">  {eachBlog.author} </p>
                    <Link href={`/blogs/${eachBlog.id}`}>show details</Link>
                    </div>
                )
            })
        }
        </div>
    );
};

export default Blogs;