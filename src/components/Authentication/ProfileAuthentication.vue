<template>
  <div class="profile-authentication-area ptb-100">
    <div class="container">
      <div class="row">
        <!-- <div class="col-lg-6 col-md-12">
          <div class="login-form">
            <h2>Login</h2>

            <form>
              <div class="form-group">
                <label>Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                />
              </div>

              <div class="form-group">
                <label>Email or Phone</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email or phone"
                />
              </div>

              <div class="form-group">
                <label>Password</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                />
              </div>

              <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="checkme"
                    />
                    <label class="form-check-label" for="checkme"
                      >Remember me</label
                    >
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6 lost-your-password">
                  <a href="#" class="lost-your-password"
                    >Forgot your password?</a
                  >
                </div>
              </div>

              <button type="submit" class="default-btn">
                Login <span></span>
              </button>
            </form>
          </div>
        </div> -->

        <div class="col-lg-6 col-md-12">
          <div class="register-form">
            <h2>Register</h2>

            <form>
              <div class="form-group">
                <label>Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                />
              </div>

              <div class="form-group">
                <label>Email or Phone</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email or phone"
                />
              </div>

              <div class="form-group">
                <label>Password</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                />
              </div>

              <p class="description">
                The password should be at least eight characters long. To make
                it stronger, use upper and lower case letters, numbers, and
                symbols like ! " ? $ % ^ & )
              </p>

              <button type="submit" class="default-btn">
                Register Now <span></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileAuthentication",
};
</script>
