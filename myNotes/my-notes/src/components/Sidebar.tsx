import MenuButton from "./MenuButton";

const Sidebar = () => {
    return (
        <div className="fixed top-20 left-2">
            <MenuButton outerContainer="cursor-pointer p-3 m-auto hover:bg-gray-100 rounded-full" innerContainer="rounded-full hover:bg-gray-100 flex flex-col items-center"/>      
        </div>
    )
}

export default Sidebar;