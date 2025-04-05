'use client'

// Define TypeScript interfaces for props
import {useState} from "react";
import Image from "next/dist/client/legacy/image";
import {Icon} from "@iconify/react";
import Tag from "@/components/ui/Tag";

type Post = {
    username: string;
    timestamp: string;
    content: string;
    codeSnippet: string;
    likes: number;
    repliesCount: number;
}

// Sample data for the posts
const samplePosts: Post[] = [
    {
        username: 'doloroque',
        timestamp: '2 days ago (edited)',
        content:
            "I wouldn't call concurrent.futures more 'advanced' - it's a simpler interface that works very much the same regardless of whether you use multiple threads or multiple processes as the underlying parallelization gimmick.",
        codeSnippet: `Personally I think that to import multiprocessing as mp
def mp_factorizer_map(nums, nprocs):
    with mp.Pool(nprocs) as pool:
        return [(num, factors) for num, factors in zip(nums, pool.map(factorize_naive, nums))]`,
        likes: 18000,
        repliesCount: 2,
    },
    {
        username: 'doloroque',
        timestamp: '2 days ago (edited)',
        content:
            "I wouldn't call concurrent.futures more 'advanced' - it's a simpler interface that works very much the same regardless of whether you use multiple threads or multiple processes as the underlying parallelization gimmick.",
        codeSnippet: `Personally I think that to import multiprocessing as mp
def mp_factorizer_map(nums, nprocs):
    with mp.Pool(nprocs) as pool:
        return [(num, factors) for num, factors in zip(nums, pool.map(factorize_naive, nums))]`,
        likes: 18000,
        repliesCount: 2,
    },
];

const WidgetDetails = () => {
    const [inputText, setInputText] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    return (
        <div className="mx-auto p-6 max-w-[820px]">
            <h2 className="text-4xl font-bold mb-4 line-clamp-1 ">GoogleAds Airline Flights content generation</h2>

            <div className="flex flex-col md:flex-row w-full gap-4">
                <div className="w-full md:w-7/10 gap-2 bg-gray-300 rounded-2xl overflow-hidden">
                    <img
                        src="/assets/bg/marketing_campaign.png"
                        alt="Google Ads Content Generator"
                        className="w-full h-[315px] object-cover"
                    />
                </div>

                <div
                    className="w-full md:w-3/10 h-1/2 md:h-[315px] dark:bg-card-bg text-white p-4 rounded-2xl shadow-lg flex flex-col justify-center">
                    {/* Rating section */}
                    <div className="flex flex-col items-center bg-[#0f1013] py-2 rounded-md">
                        <div className="text-2xl font-bold mb-2">3.6</div>
                        <div className="flex items-center space-x-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-4xl text-yellow-400">★</span>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm">1 Rating</p>
                    </div>

                    {/* Info text */}
                    <div className="text-center text-xs font-bold mt-4 mb-2 text-blue-300">
                        You have 2 free runs
                    </div>

                    {/* Price and discount */}
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <p className="text-xl font-semibold"><span className=" text-yellow-500">₿ </span>7.2</p>
                        <span className="text-sm text-red-500">-10%</span>
                    </div>

                    {/* Call to Action button */}
                    <button
                        className="w-full bg-[#45321d] text-yellow-500 hover:bg-yellow-700 hover:text-white font-semibold py-2 rounded-lg transition-colors">
                        GET STARTED
                    </button>
                </div>
            </div>

            {/* Tags */}
            <div className="mt-8 flex gap-2">
                {["css", "cross-browser", "highlighting", "textselection"].map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-400">
                The Google Ads Content Generator for Airline Flights widget is designed to streamline
                and enhance your advertising campaigns by generating high-quality...
            </p>

            {/* Example Output */}
            <div className="mt-4 pt-4">
                <h3 className="font-semibold mb-2 text-xl text-gray-500">Example Output</h3>
                <div className="w-fit flex items-center gap-2 bg-gray-800 py-2.5 pl-2.5 pr-5 rounded-lg">
                    {/*<span className="text-white bg-gray-600 p-1 rounded">📄</span>*/}
                    <Icon icon="tabler:file-text" className="size-10"/>
                    <div className="flex flex-col">
                        <span className="text-gray-300 text-base">Marketing_Campaign.pdf</span>
                        <span className="text-gray-500 text-xs">example output</span>
                    </div>

                </div>
            </div>

            {/* Input Area */}
            <div className="flex items-center space-x-4 mt-4">
                <Image
                    src="/assets/logo/logo-1.svg"
                    alt="User avatar"
                    width={35}
                    height={35}
                    className="w-6 h-6 rounded-full"
                />
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded p-2 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Share your thoughts..."
                />
            </div>

            {/* Posts Container */}
            <div className="mt-6">
                {samplePosts.map((post, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded mb-4">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/avatar.png"
                                alt="User avatar"
                                width={24}
                                height={24}
                                className="w-6 h-6 rounded-full"
                            />
                            <a href="#" className="text-gray-300 font-bold hover:text-gray-200">
                                {post.username}
                            </a>
                            <span className="text-gray-500 text-sm">{post.timestamp}</span>
                        </div>
                        <p className="text-white leading-relaxed mt-2">{post.content}</p>
                        <pre
                            className="bg-gray-800 p-4 rounded text-gray-200 font-mono text-sm mt-2 whitespace-pre-wrap">
                {post.codeSnippet}
              </pre>
                        <div className="flex items-center space-x-4 mt-4">
                            <button
                                className="text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                💬 Reply
                            </button>
                            <a href="#" className="text-gray-400 hover:text-gray-200">
                                View replies ({post.repliesCount})
                            </a>
                            <button
                                className="text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                ❤️ {post.likes.toLocaleString()}
                            </button>
                            <button
                                className="text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                👎
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/*</div>*/}
            {/*</div>*/}
        </div>
    );
};

export default WidgetDetails;
