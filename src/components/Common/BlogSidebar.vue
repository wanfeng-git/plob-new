<template>
  <div class="widget-area">
    <div class="widget widget_search">
      <form class="search-form">
        <input
          type="search"
          class="search-field"
          placeholder="Search Something"
        />
        <button type="submit"><i class="ri-search-line"></i></button>
      </form>
    </div>

    <div class="widget widget_categories">
      <h3 class="widget-title">Post Categories</h3>

      <ul>
        <li><a href="#">Brand Identity Design(20)</a></li>
        <li><a href="#">Digital Marketing(08)</a></li>
        <li><a href="#">Design and Development(15)</a></li>
        <li><a href="#">IT Startup Consulting(22)</a></li>
        <li><a href="#">Cloud Computing Service(12)</a></li>
        <li><a href="#">Domain and Hosting(06)</a></li>
      </ul>
    </div>

    <div class="widget widget_plod_posts_thumb">
      <h3 class="widget-title">Popular Posts</h3>

      <div class="item">
        <router-link to="/blog-details" class="thumb">
          <span class="fullimage cover bg1" role="img"></span>
        </router-link>

        <div class="info">
          <h4 class="title usmall">
            <router-link to="/blog-details"
              >Design is a Plan or Specification for the
              Construction.</router-link
            >
          </h4>

          <span><i class="ri-time-line"></i> March 14, 2022</span>
        </div>
      </div>

      <div class="item">
        <router-link to="/blog-details" class="thumb">
          <span class="fullimage cover bg2" role="img"></span>
        </router-link>

        <div class="info">
          <h4 class="title usmall">
            <router-link to="/blog-details"
              >Branding Involves Developing Strategy to Create a
              Point.</router-link
            >
          </h4>

          <span><i class="ri-time-line"></i> March 14, 2022</span>
        </div>
      </div>

      <div class="item">
        <router-link to="/blog-details" class="thumb">
          <span class="fullimage cover bg3" role="img"></span>
        </router-link>

        <div class="info">
          <h4 class="title usmall">
            <router-link to="/blog-details"
              >Digital Marketing is Tatally Different From Tradetion
              Marketing</router-link
            >
          </h4>

          <span><i class="ri-time-line"></i> March 14, 2022</span>
        </div>
      </div>

      <div class="item">
        <router-link to="/blog-details" class="thumb">
          <span class="fullimage cover bg4" role="img"></span>
        </router-link>

        <div class="info">
          <h4 class="title usmall">
            <router-link to="/blog-details"
              >The Data-Driven Approach to Understanding</router-link
            >
          </h4>

          <span><i class="ri-time-line"></i> March 14, 2022</span>
        </div>
      </div>
    </div>

    <div class="widget widget_tag_cloud">
      <h3 class="widget-title">Popular Tags</h3>

      <div class="tagcloud">
        <a href="#">Agency</a>
        <a href="#">Branding</a>
        <a href="#">Marketing</a>
        <a href="#">Design</a>
        <a href="#">Development</a>
        <a href="#">Consulting</a>
        <a href="#">Startup</a>
        <a href="#">Popular</a>
        <a href="#">WordPress</a>
        <a href="#">Financial</a>
        <a href="#">Branding</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogSidebar",
};
</script>
