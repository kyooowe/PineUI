import { memo } from "react";

const Footer = memo(() => {
    return (
        <footer className="bg-white dark:bg-black py-4 px-8 flex justify-between">
            <div className="flex-1">
                <p className="text-gray-600 dark:text-gray-400">Made by <a href="https://github.com/kyooowe">Kyooowe</a></p>
            </div>
            <div className="flex-1 text-right">
                <p className="text-gray-600 dark:text-gray-400">Crafted with ♡</p>
            </div>
        </footer>
    );
})

export default Footer;