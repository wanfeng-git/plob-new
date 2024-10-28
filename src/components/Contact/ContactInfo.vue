<template>
  <div class="contact-info-area pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-12">
          <div class="contact-address">
            <h3>联系地址:</h3>
            <p>为您提供更多的选择,从平台、编程语言、方法、技术、工具等等。</p>

            <ul class="address-info">
              <li>
                <i class="ri-customer-service-line"></i>
                <a href="tel:04118959800">(0411) 895-9800</a>
              </li>

              <li>
                <i class="ri-global-line"></i>
                <a href="mailto:he.tong@hicity.world">he.tong@hicity.world</a>
              </li>

              <li>
                <i class="ri-map-pin-line"></i>
                辽宁省大连市高新园区三丰大厦B座2006室
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-8 col-md-12">
          <div id="map">
            <iframe
              src="https://map.baidu.com/search/%E8%BE%BD%E5%AE%81%E7%9C%81%E5%A4%A7%E8%BF%9E%E5%B8%82%E9%AB%98%E6%96%B0%E5%9B%AD%E5%8C%BA%E4%B8%89%E4%B8%B0%E5%A4%A7%E5%8E%A6b%E5%BA%A7/@13527947,4675643,19z?querytype=s&da_src=shareurl&wd=%E8%BE%BD%E5%AE%81%E7%9C%81%E5%A4%A7%E8%BF%9E%E5%B8%82%E9%AB%98%E6%96%B0%E5%9B%AD%E5%8C%BA%E4%B8%89%E4%B8%B0%E5%A4%A7%E5%8E%A6B%E5%BA%A7&c=1&src=0&pn=0&sug=0&l=5&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2"
            ></iframe>
            <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"></iframe> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
};
</script>
