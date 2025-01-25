import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { auth, googleProvider } from "@/firebase/config";
import { FirebaseError } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(true)
    const [error, setError] = useState("")
  
    const handleAuth = async (e: React.FormEvent) => {
      e.preventDefault()
      setError("")
  
      try {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, email, password)
          console.log("User logged in successfully")
          // TODO: Redirect to dashboard or home page
        } else {
          await createUserWithEmailAndPassword(auth, email, password)
          console.log("User registered successfully")
          // TODO: Redirect to dashboard or home page
        }
      } catch (error) {
        const firebaseError = error as FirebaseError;
        setError(firebaseError.message)
      }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>{isLogin ? "Login" : "Register"}</CardTitle>
              <CardDescription>
                {isLogin ? "Enter your credentials to access your account" : "Create a new account to get started"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAuth} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button type="submit" className="w-full">
                  {isLogin ? "Login" : "Register"}
                </Button>
              </form>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-center w-full">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:underline">
                  {isLogin ? "Register" : "Login"}
                </button>
              </p>
            </CardFooter>
          </Card>
        </div>
    );
};

export default LoginPage;
