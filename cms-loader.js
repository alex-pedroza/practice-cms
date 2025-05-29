// FREE CMS USING JSONBIN.IO (No coding needed!)
const CMS_URL = "https://api.jsonbin.io/v3/b/YOUR_BIN_ID";

fetch(CMS_URL, {
  headers: {
    "X-Master-Key": "$2a$10$YOUR_API_KEY"
  }
})
  .then(res => res.json())
  .then(data => {
    const content = data.record;
    
    // Display blog posts
    document.getElementById("blog-posts").innerHTML = 
      content.posts.map(post => `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.content}</p>
        </div>
      `).join("");
    
    // Display testimonials
    document.getElementById("testimonials").innerHTML = 
      content.testimonials.map(t => `
        <div class="testimonial">
          <p>"${t.text}"</p>
          <p>- ${t.author}</p>
        </div>
      `).join("");
  })
  .catch(err => console.error("Error loading CMS data:", err));