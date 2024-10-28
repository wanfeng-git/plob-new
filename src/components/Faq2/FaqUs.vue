<template>
  <div class="contact-area ptb-100">
    <div class="container">
      <div class="contact-form">
        <h3>联系我们</h3>

        <form id="contactForm">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  placeholder="姓名*"
                />
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control"
                  placeholder="邮箱*"
                />
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  class="form-control"
                  placeholder="电话"
                />
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="msg_subject"
                  class="form-control"
                  placeholder="职位"
                />
              </div>
            </div>

            <div class="col-lg-12 col-md-12">
              <div class="form-group">
                <textarea
                  name="message"
                  class="form-control"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="想要告诉我们"
                ></textarea>
              </div>
            </div>

            <div class="col-lg-12 col-md-12">
              <button type="submit" class="default-btn">
                发送 <i class="ri-arrow-right-line"></i><span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>
