import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";


const Navbar = () => {
    const { user, logout } = useUserStore();
    const isAdmin = user?.role == "admin";
    const {cart}  = useCartStore();

    return (
        <header className='fixed top-0 left-0 w-full bg-gray-50 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-gray-300'>
            <div className='container mx-auto px-4 py-3'>
                <div className="flex flex-wrap justify-between items-center">
                <Link to='/' className='text-3xl font-bold text-yellow-400 items-center space-x-2 flex'>
                    2004STORE
                </Link>

                <nav className='flex flex-wrap items-center gap-4'>
                    <Link to={"/"} className=' hover:text-emerald-400 transition duration-300 ease-in-out'>
                    Trang chủ
                    </Link>

                    {user && (
                        <Link to={"/cart"} className="relative group">
                            <ShoppingCart className="inline-block mr-1 text-yellow-400 group-hover:text-green-500 size-10" />
                            <span className="hidden sm:inline">Giỏ hàng</span>
                            {cart.length > 0 && (<span
                                className="absolute -top-2 right-2 bg-yellow-500 text-white rounded-full px-2 py-0.5
                                text-xs group-hover:bg-green-400 transition duration-300 ease-in-out"
                            >
                            {cart.length}
                            </span>
                            )}       
                        </Link>
                        )}

                    {isAdmin && (
                        <Link
                            className="bg-yellow-500 hover:bg-green-500 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
                            to={"/secret-dashboard"}
                        >
                            <Lock className="inline-block mr-1" size={18} />
                            <span className="hidden sm:inline">Quản trị viên</span>
                        </Link>
                        )}


                    {user ? (
                        <button className="bg-green-700 hover:bg-green-500 text-white py-2 px-4
                        rounded-md flex items-center transition duration-300 ease-in-out"
                        onClick={logout}
                        >
                            <LogOut size={18} />
                            <span className="hidden sm:inline ml-2">Đăng xuất</span>
                        </button>
                    ) : (
                        <>
                            <Link to={"/signup"} className="bg-emerald-500 hover:bg-emerald-400 text-white py-2 px-4
                            rounded-md flex items-center transition duration-300 ease-in-out">
                                <UserPlus className="mr-2" size={18} />
                                Đăng ký
                            </Link>

                            <Link to={"/login"} className="bg-emerald-500 hover:bg-emerald-400 text-white py-2 px-4
                            rounded-md flex items-center transition duration-300 ease-in-out">
                                <LogIn className="mr-2" size={18} />
                                Đăng nhập
                            </Link>
                        </>


                        )}

                </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
