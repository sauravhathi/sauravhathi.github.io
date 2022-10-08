
const Blog = () => {

    const Author = "Saurav Hathi";
    const AuthorLink = "https://github.com/sauravhathi";
    const AuthorDP = "https://avatars.githubusercontent.com/u/61316762?v=4";


    const BlogPost = [
        {
            thumbnail: "https://images.unsplash.com/photo-1615793171325-4aba32a8c4ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "How to create a blog using ReactJS",
            description: "In this blog, I will tell you how to create a blog using ReactJS. This blog is created using ReactJS.",
            author: Author,
            authorLink: AuthorLink,
            authorDP: AuthorDP,
            date: "2021-04-10",
            readTime: "5 min read",
            tags: ["ReactJS", "Blog", "Tutorial"],
            link: "https://github.com/sauravhathi"
        },

    ]


    return (

        <div class="py-16 lg:pl-4 lg:pr-4" id="Blog">
            <div class="m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div class="mb-12 space-y-2 text-center">
                <h2 class="px-3 py-1.5 text-4xl font-bold"
                    >Blog</h2>
                </div>

                <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-2 grid-cols-1">
                    
                    {BlogPost.map((post) => (
                        <div class="bg-white rounded-lg shadow-lg">
                            <div class="p-4">
                            <a href={post.link}><img class="rounded-lg" src={post.thumbnail} alt="Blog Thumbnail" /></a>
                            </div>
                            <div class="p-4">
                                <h2 class="text-xl font-semibold">{post.title}</h2>
                                <p class="mt-2 text-gray-600">{post.description}</p>
                                <div class="flex items-center mt-4 text-gray-700">
                                <a href={post.authorLink}><img class="w-10 h-10 object-cover rounded-full" src={post.authorDP} alt="Author DP" /></a>
                                    <div class="ml-3">
                                        <h3 class="text-sm font-semibold">{post.author}</h3>
                                        <span class="text-sm">{post.date} • {post.readTime}</span>
                                    </div>
                                </div>
                                <div class="flex flex-wrap mt-4 -m-1">
                                    {post.tags.map((tag) => (
                                        <span class="m-1">
                                            <a href="#" class="px-2 py-1 text-sm text-gray-600 bg-gray-200 rounded hover:bg-gray-300">{tag}</a>
                                        </span>
                                    ))}
                                </div>
                                <div class="flex justify-end mt-4">
                                    <a href={post.link} class="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;