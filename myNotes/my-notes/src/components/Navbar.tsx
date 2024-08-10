import MenuButton from "./MenuButton";
import addIcon from "../img/plus.svg"

const Navbar = () => {
    return (
        // <div className="flex gap-4 items-center">
        <div className="grid gap-4 navbar">
            <MenuButton outerContainer="cursor-pointer m-auto hover:bg-gray-100 rounded-full" innerContainer="rounded-full hover:bg-gray-100 flex flex-col items-center"/>      
            <div className="breadcrumbs text-md text-black">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Documents</a></li>
                    <li>Add Document</li>
                </ul>
            </div>
            <div className="teste">
                <img className="cursor-pointer" src={addIcon} />
            </div>
        </div>
    )
}

export default Navbar;