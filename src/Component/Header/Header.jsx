
const Header = () => {
    return (
        <div className="lg:flex justify-between items-center p-4 border-b-2 border-gray-200" > 
            <h1 className="text-2xl font-bold">Country Search</h1>
            <div className="flex items-center gap-2">
                <input className="border border-gray-300 rounded-md p-2 hover:border-gray-400 focus:border-gray-400 transition-all" type="text" placeholder="Search Country" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Search</button>
            </div>
            
                <img className="w-10 h-10 rounded-full" src="https://i.ibb.co.com/bWKGBcz/pexels-photo-7063759.jpg" alt="" />
            
        </div>
    );
};

export default Header;