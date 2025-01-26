// components/ProtectedRoute.tsx
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate  } from "react-router-dom";
import { useEffect } from "react";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { userData, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !userData) {
      navigate("/login");
    }
  }, [userData, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  return userData ? <>{children}</> : null;
}
