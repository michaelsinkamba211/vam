function toggleReadMore1() {
    var para = document.getElementById("blog1");
    para.style.maxHeight = para.style.maxHeight === "100%" ? "50px" : "100%";
  }


  function toggleReadMore2() {
    var para = document.getElementById("blog2");
    para.style.maxHeight = para.style.maxHeight === "100%" ? "50px" : "100%";
  }


  function toggleReadMore3() {
    var para = document.getElementById("blog3");
    para.style.maxHeight = para.style.maxHeight === "100%" ? "50px" : "100%";
  }

  function toggleReadMore4() {
    var para = document.getElementById("blog4");
    para.style.maxHeight = para.style.maxHeight === "100%" ? "50px" : "100%";
  }


  function toggleReadMore5() {
    var para = document.getElementById("blog5");
    para.style.maxHeight = para.style.maxHeight === "100%" ? "50px" : "100%";
  }


  function toggleReadMore6() {
    var para = document.getElementById("blog6");
    para.style.maxHeight = para.style.maxHeight === "100%" ? "50px" : "100%";
  }




//   see more blogs


function toggleAdditionalBlogs() {
    // Select all blogs starting from the 5th one
    var additionalBlogs = document.querySelectorAll('.blog:nth-child(n+4)');
  
    // Toggle the display property of additional blogs
    additionalBlogs.forEach(function(blog) {
      blog.style.display = (blog.style.display === 'none' || blog.style.display === '') ? 'block' : 'none';
    });
  
    // Toggle the "See More" button text
    var seeMoreBtn = document.getElementById('seeMoreBtn');
    seeMoreBtn.innerText = (seeMoreBtn.innerText === 'See More Blogs') ? 'See Less Blogs' : 'See More Blogs';
  }
  