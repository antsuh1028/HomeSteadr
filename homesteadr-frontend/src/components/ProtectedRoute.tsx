// components/ProtectedRoute.tsx
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "react-router-dom";
import { useEffect } from "react";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  return user ? <>{children}</> : null;
}
