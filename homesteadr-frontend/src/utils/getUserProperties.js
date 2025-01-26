async function getUserProperties(userId) {
    try {
      const result = await userOperations.getHouses(userId);
      
      if (result.success) {
        return result.data;
      }
      throw new Error(result.error);
    } catch (error) {
      console.error("Failed to fetch properties:", error);
      throw error;
    }
   }
   
   export default getUserProperties;