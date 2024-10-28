<template>
  <div class="team-area pt-100 pb-70">
    <div class="container">
      <div class="row" v-if="teams">
        <div
          class="col-lg-3 col-md-6"
          v-for="team in teams.teamItem"
          :key="team.id"
        >
          <div class="single-team-box">
            <div class="image">
              <img :src="team.image.data.attributes.url" alt="image" />

              <ul class="social">
                <li v-for="social in team.socialLink" :key="social.id">
                  <a :href="social.link" target="_blank">
                    <i :class="social.icon"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="content">
              <h3>{{ team.name }}</h3>
              <span>{{ team.designation }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OurTeam",
  data() {
    return {
      teams: null,
    };
  },
  created: async function () {
    const response = await axios.get(
      "http://localhost:1337/api/ourteam?populate=deep",
    );
    const {
      data: { attributes },
    } = response.data;
    this.teams = attributes;
  },
};
</script>
