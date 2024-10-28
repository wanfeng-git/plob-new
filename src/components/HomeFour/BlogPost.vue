<template>
  <div class="blog-area pb-70">
    <div class="container">
      <div class="section-title">
        <h2>Popular Blog Post</h2>
        <p>
          We are try to Update with Latest Article and Blog Post Best Strategic
          Planning
        </p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="single-blog">
            <div class="blog-image">
              <router-link to="/blog-details"
                ><img src="../../assets/images/blog/blog-4.jpg" alt="image"
              /></router-link>
            </div>

            <div class="blog-content">
              <ul class="entry-meta">
                <li class="tag">Branding</li>
                <li>
                  <i class="ri-time-line"></i>
                  March 14, 2022
                </li>
                <li>
                  <i class="ri-message-2-line"></i>
                  (0) Comment
                </li>
              </ul>
              <h3>
                <router-link to="/blog-details"
                  >Branding Involves Developing a Strategy to Creating a Point
                  of Differentiation.</router-link
                >
              </h3>
              <router-link to="/blog-details" class="blog-btn"
                >Read More <i class="ri-arrow-right-line"></i
              ></router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-blog">
            <div class="blog-image">
              <router-link to="/blog-details"
                ><img src="../../assets/images/blog/blog-5.jpg" alt="image"
              /></router-link>
            </div>

            <div class="blog-content">
              <ul class="entry-meta">
                <li class="tag">Agency</li>
                <li>
                  <i class="ri-time-line"></i>
                  March 14, 2022
                </li>
                <li>
                  <i class="ri-message-2-line"></i>
                  (0) Comment
                </li>
              </ul>
              <h3>
                <router-link to="/blog-details"
                  >Design is a Plan or Specification For The Construction of an
                  Object.</router-link
                >
              </h3>
              <router-link to="/blog-details" class="blog-btn"
                >Read More <i class="ri-arrow-right-line"></i
              ></router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-blog">
            <div class="blog-image">
              <router-link to="/blog-details"
                ><img src="../../assets/images/blog/blog-6.jpg" alt="image"
              /></router-link>
            </div>

            <div class="blog-content">
              <ul class="entry-meta">
                <li class="tag">Marketing</li>
                <li>
                  <i class="ri-time-line"></i>
                  March 14, 2022
                </li>
                <li>
                  <i class="ri-message-2-line"></i>
                  (0) Comment
                </li>
              </ul>
              <h3>
                <router-link to="/blog-details"
                  >Branding Involves Developing the Strategy to Create a
                  Point.</router-link
                >
              </h3>
              <router-link to="/blog-details" class="blog-btn"
                >Read More <i class="ri-arrow-right-line"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="blog-shape-1">
      <img src="../../assets/images/blog/shape-1.png" alt="image" />
    </div>
    <div class="blog-shape-2">
      <img src="../../assets/images/blog/shape-2.png" alt="image" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "BlogPost",
};
</script>
