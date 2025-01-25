// Example component
import { fetchData } from "@/actions/queryAI";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const ExampleUser = () => {
    const { firebaseUser, userData, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!firebaseUser || !userData) {
        return <div>Please log in</div>;
    }

    const handleClick = async() => {
        const data = await fetchData();
        console.log('ai stuff:', data);
    };

    return (
        <div>
            <h1>Welcome {userData.name}</h1>
            <div>Email: {userData.email}</div>
            <div>Saved Homes: {userData.portfolio.length}</div>
            <div>Watchlist Items: {userData.watchlist.length}</div>
            <Button onClick={handleClick}></Button>
        </div>
    );
};

export default ExampleUser;
