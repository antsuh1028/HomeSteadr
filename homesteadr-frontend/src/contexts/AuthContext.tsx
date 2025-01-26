// contexts/AuthContext.tsx
import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
    useMemo,
    useCallback,
} from "react";
import { auth, db } from "@/firebase/config";
import {
    User as FirebaseUser,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { SavedHome, User, userOperations } from "../firebase/db";
import { arrayRemove, deleteDoc, doc, DocumentReference, onSnapshot, updateDoc } from "firebase/firestore";

interface AuthContextType {
    firebaseUser: FirebaseUser | null;
    userData: User | null;
    portfolio: SavedHome[] | null;
    watchlist: SavedHome[] | null;
    loading: boolean;
    logout: () => Promise<void>;
    addHome: (
        userId: string,
        homeData: Omit<SavedHome, "uid">,
        isWatchlist: boolean
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) => Promise<{
        success: boolean;
        homeRef?: DocumentReference<SavedHome>;
        error?: any;
    }>;
    deleteHome: (
        userId: string,
        homeRef: DocumentReference<SavedHome>,
        fromWatchlist: boolean
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) => Promise<{ success: boolean; error?: any }>;
}

const AuthContext = createContext<AuthContextType>({
    firebaseUser: null,
    userData: null,
    portfolio: null,
    watchlist: null,
    loading: true,
    logout: async () => {},
    addHome: async () => ({ success: false, error: "Not implemented" }),
    deleteHome: async () => ({ success: false, error: "Not implemented" }),
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
    const [userData, setUserData] = useState<User | null>(null);
    const [portfolio, setPortfolio] = useState<SavedHome[] | null>(null);
    const [watchlist, setWatchlist] = useState<SavedHome[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            setFirebaseUser(user);
            if (!user) {
                setUserData(null);
                setPortfolio(null);
                setWatchlist(null);
                setLoading(false);
            }
        });

        return () => unsubscribeAuth();
    }, []);

    // useEffect(() => {
    //     let unsubscribeFirestore: (() => void) | undefined;
    //     const init = async() => {
    //         if (firebaseUser) {
    //             const userRef = doc(db, "users", firebaseUser.uid);
    //             unsubscribeFirestore = onSnapshot(userRef, (doc) => {
    //                 if (doc.exists()) {
    //                     setUserData(doc.data() as User);
    //                     const houses = await userOperations.getHouses(firebaseUser.uid);
    //                     setPortfolio(houses.data?.portfolio || []);
    //                     setWatchlist(houses.data?.watchlist || []);
    //                 }

    //                 setLoading(false);
    //             });
    //         }
    //     };
    //     init();
    //     return () => {
    //         if (unsubscribeFirestore) {
    //             unsubscribeFirestore();
    //         }
    //     };
    // }, [firebaseUser]);
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

    useEffect(() => {
        const fetchHouses = async () => {
            if (firebaseUser) {
                const houses = await userOperations.getHouses(firebaseUser.uid);
                setPortfolio(houses.data?.portfolio || []);
                setWatchlist(houses.data?.watchlist || []);
            }
        };
        fetchHouses();
    }, [firebaseUser]);

    const logout = async () => {
        await signOut(auth);
        setFirebaseUser(null);
        setUserData(null);
    };

    // const addHome = useCallback(
    //     async (userId: string,homeData: Omit<SavedHome, 'uid'>, isWatchlist: boolean) => {
    //         return userOperations.addHome(userId, homeData, isWatchlist);
    //     },
    //     []
    // );

    // const addHome = useCallback(
    //     async (userId: string, homeData: Omit<SavedHome, 'uid'>, isWatchlist: boolean) => {
    //         const homeDataWithUid: SavedHome = { ...homeData, uid: userId };
    //         const result = await userOperations.addHome(userId, homeDataWithUid, isWatchlist);
    //         if (result.success && result.homeRef) {
    //             return { success: true, homeRef: result.homeRef as DocumentReference<SavedHome>, error: undefined };
    //         } else {
    //             return { success: false, error: result.error, homeRef: undefined };
    //         }
    //     },
    //     []
    // );

    // const deleteHome = useCallback(
    //     async (
    //         userId: string,
    //         homeRef: DocumentReference<SavedHome>,
    //         fromWatchlist: boolean

    //     ) => {
    //         return userOperations.deleteHome(userId, homeRef, fromWatchlist);
    //     },
    //     []
    // );

    const addHome = useCallback(
        async (
            userId: string,
            homeData: Omit<SavedHome, "uid">,
            isWatchlist: boolean
        ) => {
            const homeDataWithUid: SavedHome = { ...homeData, uid: userId };
            const result = await userOperations.addHome(
                userId,
                homeDataWithUid,
                isWatchlist
            );

            if (result.success && result.homeRef) {
                // Update local state immediately
                if (isWatchlist) {
                    setWatchlist((prev) => [...prev, homeDataWithUid]);
                }

                return {
                    success: true,
                    homeRef: result.homeRef as DocumentReference<SavedHome>,
                    error: undefined,
                };
            } else {
                return {
                    success: false,
                    error: result.error,
                    homeRef: undefined,
                };
            }
        },
        [setWatchlist]
    );

    const deleteHome = useCallback(async (
        userId: string,
        homeRef: DocumentReference<SavedHome>,
        fromWatchlist: boolean = true,
    ) => {
        try {
            // First, delete the home document
            await deleteDoc(homeRef);
    
            // Then, update the user's watchlist array
            const userRef = doc(db, 'users', userId);
            await updateDoc(userRef, {
                watchlist: arrayRemove(homeRef)
            });
    
            console.log('Successfully deleted document and updated watchlist');
            return { success: true, error: undefined };
        } catch (error) {
            console.error('Error in deleteHome:', error);
            return { success: false, error };
        }
    }, []);

    // const deleteHome = useCallback(
    //     async (
    //         userId: string,
    //         homeRef: DocumentReference<SavedHome>,
    //         fromWatchlist: boolean
    //     ) => {
    //         const result = await userOperations.deleteHome(
    //             userId,
    //             homeRef,
    //             fromWatchlist
    //         );

    //         if (result.success) {
    //             // Update local state immediately
    //             if (fromWatchlist) {
    //                 setWatchlist((prev) =>
    //                     (prev ?? []).filter((home) => home.location !== homeRef.id)
    //                 );
    //             }
    //         }

    //         return result;
    //     },
    //     [setWatchlist]
    // );

    const value = useMemo(
        () => ({
            firebaseUser,
            userData,
            portfolio,
            watchlist,
            loading,
            logout,
            addHome,
            deleteHome,
        }),
        [
            firebaseUser,
            userData,
            portfolio,
            watchlist,
            loading,
            addHome,
            deleteHome,
        ]
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
