const API_ENDPOINT = 'https://x8ki-letl-twmt.n7.xano.io/api:WXxopL0o/views';

export const trackPageView = async (page: string): Promise<number> => {
  try {
    // Post to increment page view
    await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ page }),
    });

    // Get current page views count
    const result = await fetch(`${API_ENDPOINT}?page=${page}`);
    const data = await result.json();
    return data.views;
  } catch (error) {
    console.error('Failed to fetch page views: ', error);
    return 0;
  }
};