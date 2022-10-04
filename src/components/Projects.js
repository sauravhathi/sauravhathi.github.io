
const Projects = () => {

    const Author = "Saurav Hathi";
    const AuthorLink = "https://github.com/sauravhathi";
    const AuthorDP = "https://avatars.githubusercontent.com/u/61316762?v=4";


    const Projects = [
        {
            thumbnail: "https://user-images.githubusercontent.com/61316762/193886642-5196aa1a-ca6e-4062-822c-a28de3f24e4e.png",
            title: "Hidden and Seek Gifts Game using ReactJS and TailwindCSS",
            description: "This is a simple game made using ReactJS and TailwindCSS. The game hides three gifts (at random each time the game is loaded). Your task is to find the gifts. Find the gifts in the fewest number of guesses.The game rates you according to your performance.",
            link: "https://github.com/sauravhathi/hide-and-seek-gifts",
            author: Author,
            authorLink: AuthorLink,
            authorDP: AuthorDP,
            date: "2022-10-04",
            readTime: "2 min read",
            tags: ["ReactJS", "TailwindCSS", "Game"],
        },
        {
            thumbnail: "https://user-images.githubusercontent.com/61316762/180591758-6992bb30-a6bf-4b1e-aa46-d336551a4b50.png",
            title: "Reward Calculation Java GUI",
            description: "A new announcement has been made by the Mayor, the Fair will be on for more than a month. For rewarding customers who actively purchase in the fair, the developers are asked to compute reward points for credit card purchasing. For a small demo implementation, we now compute reward points for VISA card and HP VISA card. The reward points for VISA card is 1% of the spending for all kinds of purchases. For HP Visa card, 10 additional points are given for fuel purchases. Also, include method Overriding for the method computeRewardPoints() which computes the reward points for both types. write a program using the above specification for computing the reward points.",
            link: "https://github.com/sauravhathi/Reward-Calculation-Java-GUI-Project",
            author: Author,
            authorLink: AuthorLink,
            authorDP: AuthorDP,
            date: "2021-05-01",
            readTime: "5 min",
            tags: ["Java", "GUi", "JavaGUI"],
        },
        {
            thumbnail: "https://user-images.githubusercontent.com/61316762/191570944-90300c92-6638-452b-ae40-dd38bd1f69f1.png",
            title: "BMI Calculator using ReactJs and TailwindCSS",
            description: "BMI Calculator is a simple web app that calculates your BMI (Body Mass Index) based on your height and weight. It also gives you a brief description of your BMI status.",
            link: "https://github.com/sauravhathi/bmi-calculator",
            author: Author,
            authorLink: AuthorLink,
            authorDP: AuthorDP,
            date: "2021-05-01",
            readTime: "5 min",
            tags: ["ReactJs", "TailwindCSS", "BMI"],
        },
        {
            thumbnail: "https://user-images.githubusercontent.com/61316762/166089371-0cf22c4b-bb66-42ad-9a79-6f0e86461222.png",
            title: "Auto Typer using Python and Tkinter",
            description: "Auto Typer is a simple python script that automatically types the text you want. It is a very useful tool for people who want to type the same text again and again. It is also useful for people who want to prank their friends by typing random text.",
            link: "https://github.com/sauravhathi/autotyper",
            author: Author,
            authorLink: AuthorLink,
            authorDP: AuthorDP,
            date: "2021-05-01",
            readTime: "5 min",
            tags: ["Python", "Tkinter", "AutoTyper", "Exe,", "Msi"],
        },
        {
            thumbnail: "https://user-images.githubusercontent.com/61316762/192310661-55ac8d64-9a29-485a-b947-f701e17123c5.png",
            title: "Operating System Lab Process Scheduling, Disk Scheduling, Banker's Concurrency And Deadlock, Page Replacement Algorithms",
            description: "This repository contains the programs for the Operating System Lab. The programs are written in C language. The programs are as follows: 1. Process Scheduling 2. Disk Scheduling 3. Banker's Concurrency And Deadlock 4. Page Replacement Algorithms",
            link: "https://github.com/sauravhathi/operating-system-lab",
            author: Author,
            authorLink: AuthorLink,
            authorDP: AuthorDP,
            date: "2022-05-01",
            readTime: "5 min",
            tags: ["HTML", "Operating System", "OS", "Lab"],
        }
    ]


    return (

        <div class="py-16 lg:pl-4 lg:pr-4" id="Projects">
            <div class="m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div class="mb-12 space-y-2 text-center">
                    <h2 class="px-3 py-1.5 text-5xl font-bold"
                    >
                        Projects
                    </h2>
                </div>

                <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-2 grid-cols-1">

                    {Projects.map((post) => (
                        <div class="bg-white rounded-lg shadow-lg">
                            <div class="p-4">
                                <a href={post.link}><img class="rounded-lg" src={post.thumbnail} alt="Blog Thumbnail" /></a>
                            </div>
                            <div class="p-4">
                                <h2 class="text-xl font-semibold truncate ...">{post.title}</h2>
                                <p class="mt-2 text-gray-600 truncate ...">{post.description}</p>
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

export default Projects;