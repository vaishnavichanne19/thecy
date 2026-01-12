"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import { ClosedCaption, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://thecy-u3yu.vercel.app/api/auth/login", { email, password });

      if (res.data.success) {
        document.cookie = `adminToken=${res.data.token}; path=/; max-age=86400`;
        toast.success(res.data.message || "Login Successfil");
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error(error || "Server Error");
    }
  };

  return (
    <main className="admin-login-page">
      <div className="login-page">
        <div className="admin-logo m-5 p-2">
          <Image src={logo} alt="Logo" />
        </div>
        <form onSubmit={handleLogin} className="login-form">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute top-17 right-5"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Eye size={22} color="grey" />
              ) : (
                <EyeOff size={22} color="grey" />
              )}
            </div>
          </div>

          <div className="admin-login-btn mb-5 mt-3 flex justify-center">
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </main>
  );
};

export default Login;
