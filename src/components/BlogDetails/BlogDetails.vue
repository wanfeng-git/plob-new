<template>
  <div class="blog-details-area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="blog-details-desc">
            <div class="article-image">
              <img
                :src="details[0].attributes.image.data.attributes.url"
                alt="image"
              />
            </div>

            <div class="article-content">
              <!-- 图片下方作者和时间 -->
              <ul class="entry-meta">
                <li>
                  <i class="ri-user-line"></i>
                  {{ details[0].attributes.author }}
                </li>
                <li>
                  <i class="ri-time-line"></i>
                  {{ formatPublishedDate(details[0].attributes.publishedAt) }}
                </li>
              </ul>
              <!-- 下方标题 -->
              <h3>{{ details[0].attributes.title }}</h3>
              <!-- 主体内容 -->
              <span v-html="details[0].attributes.richText"></span>
            </div>

            <div class="article-footer">
              <!-- 标签按钮 -->
              <!-- <div class="article-tags">
                <router-link to="/blog">{{
                  details[0].attributes.tag
                }}</router-link>
              </div> -->

              <!-- 外部链接图标 -->
              <!-- <div class="article-share">
                <ul class="social">
                  <li><span>Share On:</span></li>
                  <li>
                    <a href="#" target="_blank"
                      ><i class="ri-facebook-fill"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                      ><i class="ri-twitter-fill"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                      ><i class="ri-linkedin-fill"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                      ><i class="ri-messenger-fill"></i
                    ></a>
                  </li>
                </ul>
              </div> -->
            </div>

            <!-- 评论区 -->
            <!-- <div class="article-comments">
              <h4>2 Comments</h4>

              <div class="comments-list">
                <img
                  src="../../assets/images/clients/clients-1.png"
                  alt="image"
                />
                <h5>Steven Smith</h5>
                <span>April 24, 2022 at 10:59 AM</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" class="reply-btn"><i class="ri-reply-fill"></i></a>
              </div>

              <div class="comments-list">
                <img
                  src="../../assets/images/clients/clients-3.png"
                  alt="image"
                />
                <h5>James Anderson</h5>
                <span>April 24, 2022 at 10:59 AM</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" class="reply-btn"><i class="ri-reply-fill"></i></a>
              </div>
            </div> -->

            <!-- 邮箱按钮 -->
            <!-- <div class="article-leave-comment">
              <h4>Leave a Comment</h4>

              <form>
                <div class="row">
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name*"
                      />
                    </div>

                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Email*"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-12">
                    <div class="form-group">
                      <textarea
                        name="message"
                        class="form-control"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <button type="submit" class="default-btn">
                      Post A Comment <i class="ri-arrow-right-line"></i
                      ><span></span>
                    </button>
                  </div>
                </div>
              </form>
            </div> -->
          </div>
        </div>
        <!-- 右侧筛相关组件 -->
        <div class="col-lg-4 col-md-12">
          <BlogSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogSidebar from "../Common/BlogSidebar";

export default {
  name: "BlogDetails",
  components: {
    BlogSidebar,
  },
  props: ["detailsContent"],
  data: function () {
    return {
      details: this.detailsContent,
    };
  },
  methods: {
    formatPublishedDate(dateString) {
      const options = { month: "long", day: "numeric", year: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
};
</script>
