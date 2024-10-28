<template>
  <div class="blog-area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="single-blog-standard">
                <div class="blog-image">
                  <router-link to="/blog-details"
                    ><img
                      src="../../assets/images/blog/blog-large-1.jpg"
                      alt="image"
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
                      >Branding Involves Developing a Strategy to Creating a
                      Point of Differentiation.</router-link
                    >
                  </h3>
                  <p>
                    The IT industry offers a sea of options, from platforms,
                    programming languages, methodologies, technologies, tools,
                    and more. consulting services are important because they
                    play a vital role in businesses by covering the management,
                    implementation, deployment, and maintenance of an IT
                    infrastructure. IT industry offers a sea of options, from
                    platforms, programming languages, methodologies,
                    technologies, tools, and more.
                  </p>
                  <router-link to="/blog-details" class="default-btn"
                    >Read More <i class="ri-arrow-right-line"></i><span></span
                  ></router-link>
                </div>
              </div>
            </div>

            <div class="col-lg-12 col-md-12">
              <div class="single-blog-standard">
                <div class="blog-image">
                  <router-link to="/blog-details"
                    ><img
                      src="../../assets/images/blog/blog-large-2.jpg"
                      alt="image"
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
                      >Design is a Plan or Specification For The Construction of
                      an Object.</router-link
                    >
                  </h3>
                  <p>
                    The IT industry offers a sea of options, from platforms,
                    programming languages, methodologies, technologies, tools,
                    and more. IT consulting services are important because they
                    play a vital role in businesses by covering the management,
                    implementation, deployment, and maintenance of an IT
                    infrastructure. IT industry offers a sea of options, from
                    platforms, programming languages, methodologies,
                    technologies, tools, and more.
                  </p>
                  <router-link to="/blog-details" class="default-btn"
                    >Read More <i class="ri-arrow-right-line"></i><span></span
                  ></router-link>
                </div>
              </div>
            </div>

            <div class="col-lg-12 col-md-12">
              <div class="single-blog-standard">
                <div class="blog-image">
                  <router-link to="/blog-details"
                    ><img
                      src="../../assets/images/blog/blog-large-3.jpg"
                      alt="image"
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
                  <p>
                    The IT industry offers a sea of options, from platforms,
                    programming languages, methodologies, technologies, tools,
                    and more. IT consulting services are important because they
                    play a vital role in businesses by covering the management,
                    implementation, deployment, and maintenance of an IT
                    infrastructure. IT industry offers a sea of options, from
                    platforms, programming languages, methodologies,
                    technologies, tools, and more.
                  </p>
                  <router-link to="/blog-details" class="default-btn"
                    >Read More <i class="ri-arrow-right-line"></i><span></span
                  ></router-link>
                </div>
              </div>
            </div>

            <div class="col-lg-12 col-md-12">
              <div class="pagination-area">
                <a href="#" class="prev page-numbers"
                  ><i class="ri-arrow-left-line"></i
                ></a>
                <span class="page-numbers current" aria-current="page">1</span>
                <a href="#" class="page-numbers">2</a>
                <a href="#" class="page-numbers">3</a>
                <a href="#" class="page-numbers">4</a>
                <a href="#" class="next page-numbers"
                  ><i class="ri-arrow-right-line"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12">
          <BlogSidebar />
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
import BlogSidebar from "../Common/BlogSidebar";

export default {
  name: "BlogStandard",
  components: {
    BlogSidebar,
  },
};
</script>
