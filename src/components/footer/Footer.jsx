import React from "react"

const Footer = () => {
    return (
        <div className="max-w-full overflow-hidden">
            <div className="max-w-screen-xl  mx-auto py-10 flex gap-32">
                <div className="basis-1/2">
                    <h1 className="text-[4rem] sm:text-[11.5rem] font-semibold leading-none tracking-tight">
                        refokus.
                    </h1>
                </div>
                <div className="basis-1/2 flex gap-4">
                    <div className="basis-1/3 ">
                        <h4 className="mb-5 text-zinc-400">Socials</h4>
                        {["website", "Twitter", "LinkedIn","Github"].map((item, index) => {
                            // Define the URLs for each social media platform
                            const urls = {
                                Website: "https://bhriguverma-theta.vercel.app",
                                Twitter: "https://twitter.com/shareesharee73",
                                LinkedIn: "https://www.linkedin.com/in/bhrigu-verma-89090a273/",
                                Github:"https://github.com/bhrigu-verma"
                            };
                        
                            return (
                                <a
                                    key={index}
                                    href={urls[item]} // Use the URL from the urls object
                                    className="block mt-2 text-zinc-300"
                                    target="_blank" // Open the link in a new tab
                                    rel="noopener noreferrer" // Security measure for external links
                                >
                                    {item}
                                </a>
                            );
                        })}
                        
                    </div>
                    <div className="basis-1/3 hidden sm:block">
                        <h4 className="mb-10 text-zinc-500">Sitemaps</h4>
                        {["Home", "Work", "Careers", "Contact"].map(
                            (item, index) => (
                                <a
                                    key={index}
                                    href={`#${item}`}
                                    className="block mt-2 text-zinc-300"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>

                    <div className="basis-1/2  flex-col items-end hidden sm:block">
                        <p className="text-right">
                            Refokus is pioneering digital agency driven by
                            design and empowered by technology.
                        </p>
                        <img
                            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                            alt=""
                            className="w-24 px-4 py-1 mt-8 bg-blue-600"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
