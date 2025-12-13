document.addEventListener("DOMContentLoaded", function() {
  const starsElements = document.querySelectorAll('.github-stars');

  starsElements.forEach(span => {
    const user = span.getAttribute('data-user');
    const repo = span.getAttribute('data-repo');
    const cacheKey = `github-stars-${user}-${repo}`;
    const cacheTimeKey = `${cacheKey}-time`;
    const now = new Date().getTime();
    const cacheDuration = 3600000; // 1 hour

    const cachedCount = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);

    if (cachedCount && cachedTime && (now - cachedTime < cacheDuration)) {
      span.textContent = cachedCount;
    } else {
      fetch(`https://api.github.com/repos/${user}/${repo}`)
        .then(response => {
           if (!response.ok) {
               if (response.status === 403) {
                   // Rate limit exceeded, fallback to cache if available even if expired, or keep "..."
                   if (cachedCount) {
                       span.textContent = cachedCount;
                   }
                   throw new Error('Rate limit exceeded');
               }
               throw new Error('Network response was not ok');
           }
           return response.json();
        })
        .then(data => {
          const stars = data.stargazers_count;
          span.textContent = stars;
          localStorage.setItem(cacheKey, stars);
          localStorage.setItem(cacheTimeKey, now);
        })
        .catch(error => {
          console.error('Error fetching stars:', error);
          // On error, show cached if available
          if (cachedCount) span.textContent = cachedCount;
        });
    }
  });
});
