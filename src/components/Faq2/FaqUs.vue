<template>
  <div class="contact-area ptb-100">
    <div class="container">
      <div class="contact-form">
        <h3>联系我们</h3>

        <form @submit.prevent="sendEmail" id="contactForm">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <input
                  v-model="name"
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  placeholder="姓名*"
                  required
                />
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  class="form-control"
                  placeholder="邮箱*"
                  required
                />
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="form-group">
                <input
                  v-model="phone_number"
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
                  v-model="msg_subject"
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
                  v-model="message"
                  name="message"
                  class="form-control"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="想要告诉我们"
                  required
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

<script setup>
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const email = ref("");
const phone_number = ref("");
const msg_subject = ref("");
const message = ref("");

const sendEmail = async () => {
  const response = await axios.post("http://localhost:1337/api/send-emails", {
    name: name.value,
    recipient: email.value,
    tel: phone_number.value,
    job: msg_subject.value,
    message: message.value,
  });

  alert(response.data.message); // 显示成功消息
  clearForm(); // 清空表单
};

const clearForm = () => {
  name.value = "";
  email.value = "";
  phone_number.value = "";
  msg_subject.value = "";
  message.value = "";
};
</script>
