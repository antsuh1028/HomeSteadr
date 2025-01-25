// contexts/AuthContext.tsx
import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
    useMemo,
} from "react";
import { auth, db } from "@/firebase/config";
import { User as FirebaseUser, onAuthStateChanged } from "firebase/auth";
import { User } from "../firebase/db";
import { doc, onSnapshot } from "firebase/firestore";

interface AuthContextType {
    firebaseUser: FirebaseUser | null;
    userData: User | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    firebaseUser: null,
    userData: null,
    loading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            setFirebaseUser(user);
            if (!user) {
                setUserData(null);
                setLoading(false);
            }
        });

        return () => unsubscribeAuth();
    }, []);

    useEffect(() => {
        let unsubscribeFirestore: (() => void) | undefined;

        if (firebaseUser) {
            const userRef = doc(db, "users", firebaseUser.uid);
            unsubscribeFirestore = onSnapshot(userRef, (doc) => {
                if (doc.exists()) {
                    setUserData(doc.data() as User);
                }
                setLoading(false);
            });
        }

        return () => {
            if (unsubscribeFirestore) {
                unsubscribeFirestore();
            }
        };
    }, [firebaseUser]);

    const value = useMemo(
        () => ({
            firebaseUser,
            userData,
            loading,
        }),
        [firebaseUser, userData, loading]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
