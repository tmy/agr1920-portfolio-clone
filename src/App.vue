<template>
  <v-app>
    <v-tabs grow light>
      <v-tabs-bar class="purple lighten-4">
        <v-tabs-item
          :to="{ name: 'About' }"
          class="tab-link-about"
          ripple
        >ABOUT</v-tabs-item>
        <v-tabs-item
          :to="{ name: 'Works' }"
          class="tab-link-works"
          ripple
        >WORKS</v-tabs-item>
        <v-tabs-item
          :to="{ name: 'Blog' }"
          class="tab-link-blog"
          ripple
        >BLOG</v-tabs-item>
        <v-tabs-slider class="purple lighten-2"></v-tabs-slider>
      </v-tabs-bar>
    </v-tabs>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
