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
import { auth } from "@/firebase/config";
import { userOperations } from "@/firebase/db";
import { FirebaseError } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
                console.log("User logged in successfully");
                // TODO: Redirect to dashboard or home page
            } else {
                const user = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                console.log("User auth registered successfully");
                // SAVE TO OUR DB
                await userOperations.createUser(user.user.uid,{
                    email: user.user.email as string,
                    name: user.user.displayName as string, 
                });
                console.log("user account stored successfully");


                /* -------------------- USE FOLLOWING IS TESTING PURPOSES---------------------------------------------------------
                console.log('getuserbyid function:', await userOperations.getUserById(user.user.uid));
                // console.log('getuserbyemail function:', await userOperations.getUserByEmail(user.user.email as string));
                const home1: SavedHome = {
                    location: '10618 floral drive',
                    price: '1 million!',
                };
                const home2: SavedHome = {
                    location: '10888 anteater drive',
                    price: '300,200',
                };
                const addhome1 = await userOperations.addHome(user.user.uid, home1, false);
                console.log('testing addhom to portfolio:', addhome1);
                const addhome2 = await userOperations.addHome(user.user.uid, home2, true)
                console.log('testing addhome to watchlist:', addhome2);
                console.log('check houses: ', await userOperations.getHouses(user.user.uid));
                console.log('delete houses: ' , await userOperations.deleteHome(user.user.uid, addhome1.homeRef!, false))
                console.log('editing first house! will fail', await userOperations.updateHome(user.user.uid, addhome2.homeRef!, {
                    ...home2, 
                    price: '1',
                }, false));
                console.log('editing first house! will succeed', await userOperations.updateHome(user.user.uid, addhome2.homeRef!, {
                    ...home2, 
                    price: '1',
                }, true));
                console.log('check houses again: ', await userOperations.getHouses(user.user.uid));
                */
            }
            navigate("/");                
        } catch (error) {
            const firebaseError = error as FirebaseError;
            setError(firebaseError.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>{isLogin ? "Login" : "Register"}</CardTitle>
                    <CardDescription>
                        {isLogin
                            ? "Enter your credentials to access your account"
                            : "Create a new account to get started"}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleAuth} className="space-y-4">
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium"
                            >
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
                            <label
                                htmlFor="password"
                                className="text-sm font-medium"
                            >
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
                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}
                        <Button type="submit" className="w-full">
                            {isLogin ? "Login" : "Register"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <p className="text-sm text-center w-full">
                        {isLogin
                            ? "Don't have an account? "
                            : "Already have an account? "}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-blue-500 hover:underline"
                        >
                            {isLogin ? "Register" : "Login"}
                        </button>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default LoginPage;
