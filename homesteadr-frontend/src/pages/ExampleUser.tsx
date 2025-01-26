import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { userOperations } from "@/firebase/db";
import { useState } from "react";

const ExampleUser = () => {
    const { firebaseUser, userData, loading } = useAuth();
    const [addingHome, setAddingHome] = useState(false);

    const homeData = {
        location: "123 Main St, Springfield, IL",
        currentPrice: 500000,
        originalPrice: 400000,
        size: 2000
    };

    const handleAddHome = async () => {
        if (!firebaseUser) return;

        setAddingHome(true);
        try {
            const result = await userOperations.addHome(firebaseUser.uid, homeData, false);
            if (result.success) {
                console.log("Home added successfully:", result.homeRef);
            } else {
                console.error("Error adding home:", result.error);
            }
        } catch (error) {
            console.error("Error in handleAddHome:", error);
        } finally {
            setAddingHome(false);
        }
    };

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
            <Button onClick={handleAddHome} disabled={addingHome}>
                {addingHome ? "Adding Home..." : "Add Home"}
            </Button>
        </div>
    );
};

export default ExampleUser;