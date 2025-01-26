// API call function
 async function getArticles() {
    try {
      const response = await fetch('http://localhost:3005/api/articles');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }
   }

   export default getArticles;