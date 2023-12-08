import { Link } from "react-router-dom";

const Header = () => {
    const navLink = [
        {
            navName: "home"
        },
        {
            navName: "about"
        },
        {
            navName: "portfolio"
        },
        {
            navName: "favorites"
        },
        {
            navName: "contact"
        },
        {
            navName: "settings"
        }
    ]
    return (
        <nav>
            {/* <div className='absolute right-0 top-0'>
                <img src="./images/birdFlowerEuclidean.png" className='h-[100px]' alt="" />
            </div> */}
            <div className="container flex items-center justify-between m-auto">
                <img src={"./images/logoPortfolio.png"} className="w-[250px] h-[100px]" alt="" />
                <div className="flex space-x-4">
                    {navLink.map((item, index) => (
                        <div className="nav-item" key={index}>
                            <Link to="/" className="nav-link">{item.navName}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Header;