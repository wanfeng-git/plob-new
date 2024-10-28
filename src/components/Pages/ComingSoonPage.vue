<template>
  <div class="coming-soon-area">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="coming-soon-content">
          <h1>
            <router-link to="/">Plob</router-link>
          </h1>

          <h2>We Are Launching Soon</h2>

          <div id="timer" class="flex-wrap justify-content-center d-flex">
            <div
              id="days"
              class="time align-items-center flex-column d-flex justify-content-center"
            >
              <h3>{{ days }}</h3>
              <p>Days</p>
            </div>
            <div
              id="hours"
              class="time align-items-center flex-column d-flex justify-content-center"
            >
              <h3>{{ hours }}</h3>
              <p>Hours</p>
            </div>
            <div
              id="minutes"
              class="time align-items-center flex-column d-flex justify-content-center"
            >
              <h3>{{ minutes }}</h3>
              <p>Minutes</p>
            </div>
            <div
              id="seconds"
              class="time align-items-center flex-column d-flex justify-content-center"
            >
              <h3>{{ seconds }}</h3>
              <p>Seconds</p>
            </div>
          </div>

          <form class="newsletter-form" data-toggle="validator">
            <div class="form-group">
              <input
                type="email"
                class="input-newsletter"
                placeholder="Enter your email"
                name="EMAIL"
                required
                autocomplete="off"
              />
            </div>

            <button type="submit" class="default-btn">Subscribe</button>
            <div id="validator-newsletter" class="form-result"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComingSoonPage",
  data() {
    return {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    };
  },
  created() {
    // Turn data into viewable values
    setInterval(() => {
      this.commingSoonTime();
    }, 1000);
  },
  methods: {
    commingSoonTime() {
      let endTime = new Date("December 5, 2029 17:00:00 PDT");
      let endTimeParse = Date.parse(endTime) / 1000;
      let now = new Date();
      let nowParse = Date.parse(now) / 1000;
      let timeLeft = endTimeParse - nowParse;
      let days = Math.floor(timeLeft / 86400);
      let hours = Math.floor((timeLeft - days * 86400) / 3600);
      let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      let seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60,
      );
      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }
      this.days = days;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    },
  },
};
</script>
