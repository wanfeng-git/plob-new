<template>
  <div class="error-area">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="error-content">
            <img src="../../assets/images/404.png" alt="error" />

            <h3>Error 404 : page not found</h3>

            <router-link to="/" class="default-btn">
              Go To Home
              <i class="ri-arrow-right-line"></i>
              <span></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>
