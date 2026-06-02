// app/login/page.tsx
"use client";

import { useState } from "react";
import { AuthLayout } from "../components/AuthLayout";
import { AuthInput } from "../components/AuthInput";

type AuthMode = "SIGN_UP_EMAIL" | "SIGN_UP_PASSWORD" | "LOGIN";

export default function LoginPage() {
  // Хуудасны төлөвүүд: SIGN_UP_EMAIL (Алхам 1), SIGN_UP_PASSWORD (Алхам 2), LOGIN (Нэвтрэх)
  const [mode, setMode] = useState<AuthMode>("SIGN_UP_EMAIL");

  // Формын утгууд
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Алдаа харуулах төлөвүүд
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  // Алхам 1: Имэйл шалгаад дараагийн алхам руу шилжих
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Имэйл хаягаа оруулна уу.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Имэйл хаяг буруу байна. Жишээ: example@mail.com");
      return;
    }
    setEmailError("");
    setMode("SIGN_UP_PASSWORD"); // Нууц үг зохиох хэсэг рүү шилжих
  };

  // Алхам 2: Бүртгэлийг дуусгаж баталгаажуулах
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      setPasswordError("Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой.");
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Нууц үгс хоорондоо тохирохгүй байна.");
      return;
    }
    setPasswordError("");
    alert("Бүртгэл амжилттай үүслээ!");
    window.location.href = "/";
  };

  // Нэвтрэх (Login) үйлдлийг удирдах функц
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setLoginError("Имэйл болон нууц үгээ гүйцэд оруулна уу.");
      return;
    }
    setLoginError("");
    alert("Амжилттай нэвтэрлээ!");
    window.location.href = "/";
  };

  return (
    <AuthLayout>
      {/* 1. БҮРТГҮҮЛЭХ - АЛХАМ 1: ИМЭЙЛ ОРУУЛАХ */}
      {mode === "SIGN_UP_EMAIL" && (
        <form onSubmit={handleEmailSubmit} className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Create your account
            </h2>
            <p className="text-xs text-gray-400 font-medium">
              Sign up to start your delivery order
            </p>
          </div>

          <AuthInput
            label="Email Address"
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />

          <button
            type="submit"
            className="w-full py-3.5 bg-[#E53935] hover:bg-[#D32F2F] text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-[#E53935]/10 mt-2">
            Next
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Already have an account?{" "}
            <span
              onClick={() => {
                setLoginError("");
                setMode("LOGIN"); // Нэвтрэх төлөв рүү шилжих
              }}
              className="text-[#E53935] cursor-pointer hover:underline font-semibold ml-1">
              Login
            </span>
          </p>
        </form>
      )}

      {/* 2. БҮРТГҮҮЛЭХ - АЛХАМ 2: НУУЦ ҮГ ЗОХИОХ */}
      {mode === "SIGN_UP_PASSWORD" && (
        <form onSubmit={handleRegisterSubmit} className="space-y-6 relative">
          {/* Буцах товчлуур - Имэйл оруулах хэсэг рүү буцна */}
          <button
            type="button"
            onClick={() => setMode("SIGN_UP_EMAIL")}
            className="absolute -top-14 left-0 p-2 rounded-lg bg-[#1A1A1A] border border-gray-800 hover:bg-[#262626] transition-colors flex items-center justify-center group">
            <img
              src="/chevron-left.svg"
              alt="Go Back"
              className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100"
            />
          </button>

          <div className="space-y-1 pt-2">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Create new password
            </h2>
            <p className="text-xs text-gray-400 font-medium">
              Set a strong password for your account
            </p>
          </div>

          <AuthInput
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <AuthInput
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={passwordError}
          />

          <button
            type="submit"
            className="w-full py-3.5 bg-[#E53935] hover:bg-[#D32F2F] text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-[#E53935]/10 mt-2">
            Sign Up
          </button>
        </form>
      )}

      {/* 3. НЭВТРЭХ ХЭСЭГ (LOGIN) */}
      {mode === "LOGIN" && (
        <form onSubmit={handleLoginSubmit} className="space-y-6 relative">
          {/* Буцах товчлуур - Нэвтрэхээс буцаад бүртгүүлэх эхний хуудас руу шилжинэ */}
          <button
            type="button"
            onClick={() => setMode("SIGN_UP_EMAIL")}
            className="absolute -top-14 left-0 p-2 rounded-lg bg-[#1A1A1A] border border-gray-800 hover:bg-[#262626] transition-colors flex items-center justify-center group">
            <img
              src="/images/chevron-left.svg"
              alt="Go Back"
              className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100"
            />
          </button>

          <div className="space-y-1 pt-2">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Welcome Back
            </h2>
            <p className="text-xs text-gray-400 font-medium">
              Login to access your delivery account
            </p>
          </div>

          <AuthInput
            label="Email Address"
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <AuthInput
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={loginError}
          />

          <button
            type="submit"
            className="w-full py-3.5 bg-[#E53935] hover:bg-[#D32F2F] text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-[#E53935]/10 mt-2">
            Login
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Don't have an account?{" "}
            <span
              onClick={() => setMode("SIGN_UP_EMAIL")}
              className="text-[#E53935] cursor-pointer hover:underline font-semibold ml-1">
              Sign Up
            </span>
          </p>
        </form>
      )}
    </AuthLayout>
  );
}
