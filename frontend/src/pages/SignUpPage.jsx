import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User, ArrowRight, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStore } from "../stores/useUserStore.js";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, loading } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };


  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        className="sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mt-6 text-center text-3xl font-extrabold text-yellow-400">
          Tạo tài khoản
        </h2>
      </motion.div>


      <motion.div
        className="sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
            <div className="bg-gray-200 py-8 px-4 shadow sm:rounded-lg sm:px-10">

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="block w-full px-3 py-2 pl-10 rounded-md shadow-sm
                            placeholder-gray-400 focus:outline-none bg-white sm:text-sm"
                            placeholder="Tên của bạn"
                        />
                        </div>
                    </div>

                    <div>
                        <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="block w-full px-3 py-2 pl-10 rounded-md shadow-sm
                            placeholder-gray-400 focus:outline-none bg-white sm:text-sm"
                            placeholder="Nhập chính xác email của bạn"
                        />
                        </div>
                    </div>

                    <div>
                        <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                            id="password"
                            type="password"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="block w-full px-3 py-2 pl-10 rounded-md shadow-sm
                            placeholder-gray-400 focus:outline-none bg-white sm:text-sm"
                            placeholder="Tạo mật khẩu(dễ nhớ chút nhé ^^)"
                        />
                        </div>
                    </div>

                    <div>
                        <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                            id="confirmPassword"
                            type="password"
                            required
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            className="block w-full px-3 py-2 pl-10 rounded-md shadow-sm
                            placeholder-gray-400 focus:outline-none bg-white sm:text-sm"
                            placeholder="Xác nhận lại mật khẩu nhé"
                        />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent
                        rounded-md shadow-sm text-sm font-medium text-white bg-green-600
                        hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-green-500 transition duration-150 ease-in-out disabled:opacity-50"
                        disabled={loading}
                    >

                        {loading ? (
                            <>
                            <Loader className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                            Đang tải...
                            </>
                        ) : (
                            <>
                            <UserPlus className="mr-2 h-5 w-5" aria-hidden="true" />
                            Đăng ký
                            </>
                        )}
                    </button>
                    
                </form>


                <p className="mt-8 text-center text-sm">
                Bạn đã có tài khoản? 
                <Link to="/login" className="font-medium text-yellow-500 hover:text-yellow-400">
                    Đăng nhập
                    <ArrowRight className="inline h-4 w-4" />
                </Link>
                </p>

            </div>


      </motion.div>
    </div>
  );

};

export default SignUpPage;