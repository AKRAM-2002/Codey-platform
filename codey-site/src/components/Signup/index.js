import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Codey from '../../assets/Codey.png';
import Logo from '../../assets/codey-logo.png';
import Saly from '../../assets/Saly-14.png';
import Facebook from '../../assets/Facebook.png';
import Apple from '../../assets/apple.png';
import Google from '../../assets/google.png';
import { Eye, EyeOff } from 'lucide-react';
import { validateSignup } from './signupAction';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validateSignup(formData);
    if (!result.success) {
      const errorObject = {};
      result.errors.forEach((err) => {
        errorObject[err.path] = err.message;
      });
      setErrors(errorObject);
    } else {
      console.log("Form data is valid", formData);
      // Proceed with form submission
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Logo */}
      <div className="relative top-4 left-4 flex items-center gap-0">
        <img src={Logo} alt="Logo" className="w-16 h-16" />
        <img src={Codey} alt="Codey" className="w-20 h-auto -ml-1 mt-1" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex min-h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-20">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 max-w-xl">
            <div className="space-y-6 lg:pr-12">
              <h1 className="text-4xl lg:text-7xl font-bold font-poppins">
                Create
              </h1>
              <h2 className="text-2xl lg:text-4xl font-medium font-poppins">
                Your Account
              </h2>
              <p className="text-gray-600 font-poppins">
                Already have an account?
                <br />
                You can {" "}
                <Link to="/signin" className="text-blue-600 font-semibold hover:text-blue-700">
                  Login here
                </Link>
              </p>
            </div>
          </div>

          {/* Center Image - Hidden on mobile */}
          <div className="hidden lg:block">
            <img src={Saly} alt="Illustration" className="w-64 h-auto" />
          </div>

          {/* Right Column - Sign Up Form */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-medium font-poppins text-center mb-8">
                Sign up
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full h-[62px] px-4 bg-emerald-50/50 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full h-[62px] px-4 bg-emerald-50/50 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>

                <div className="relative">
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full h-[62px] px-4 bg-emerald-50/50 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  {errors.password && <p className="text-red-500">{errors.password}</p>}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full h-[59px] bg-emerald-500 text-white rounded-lg
                  font-medium shadow-lg shadow-emerald-500/20 hover:bg-emerald-600
                  transition-colors"
                >
                  Create Account
                </button>

                <div className="text-center text-gray-400">
                  or sign up with
                </div>

                <div className="flex justify-center gap-4">
                  <SocialButton icon={Facebook} />
                  <SocialButton icon={Apple} />
                  <SocialButton icon={Google} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

// Social Button Component
const SocialButton = ({ icon }) => (
  <button className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg
    transition-shadow flex items-center justify-center">
    <img src={icon} alt="social" className="w-6 h-6" />
  </button>
);
