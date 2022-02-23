const blogs = document.querySelectorAll(".blog")
const blogContainer = document.querySelector(".blog-container")


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if (entry.isIntersecting)
      observer.unobserve(entry.target)
  })
}, {
  // threshold: 1
})
// observer.observe(blogs[0])

const lastblogObserver = new IntersectionObserver(entries => {
  const lastblog = entries[0]
  if (!lastblog.isIntersecting) return
  newBlog()
  lastblogObserver.unobserve(lastblog.target)
  lastblogObserver.observe(document.querySelector(".blog:last-child"))
}, {
  rootMargin: "100px"
})

lastblogObserver.observe(document.querySelector(".blog:last-child"))

blogs.forEach(blog => {
  observer.observe(blog)
})
function newBlog() {
  for (let i = 0; i < 10; i++) {
    const blog = document.createElement("div")
    blog.innerHTML = `
                    <div class="blog-title">
                      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, porro.</h2>
                    </div>
                    <div class="blog-content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque harum quam dolores! Aspernatur earum quibusdam nam veniam nihil? Exercitationem labore amet possimus reprehenderit quaerat rerum.</p>
                      <p>...<a href = "#">view more</a></p>
                    </div>
                    <div class="author-section">
                      <div class="author-basic_info">
                        <p>Written by: <span>Sahil Khadka</span>, <span>Thursday, 23th Feb 2022</span></p>
                      </div>
                      <div class="author-socials">
                        <h4>Connect with the author: </h4>
                        <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-github"></i></a></li>
                      </div>
                    </div>
                    `
    blog.classList.add("blog")
    observer.observe(blog)
    blogContainer.append(blog)
  }
}