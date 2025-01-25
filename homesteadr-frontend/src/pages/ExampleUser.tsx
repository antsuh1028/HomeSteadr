// Example component
import { useAuth } from "@/contexts/AuthContext";

const ExampleUser = () => {
    const { firebaseUser, userData, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!firebaseUser || !userData) {
        return <div>Please log in</div>;
    }

    return (
        <div>
            <h1>Welcome {userData.name}</h1>
            <div>Email: {userData.email}</div>
            <div>Saved Homes: {userData.portfolio.length}</div>
            <div>Watchlist Items: {userData.watchlist.length}</div>
        </div>
    );
};

export default ExampleUser;
