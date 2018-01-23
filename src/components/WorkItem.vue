<template>
  <v-flex xs6 sm4 md3 class="work-item">
    <v-card>
      <div class="work-item-clip">
        <div
          @click="description = true"
          v-ripple
        >
          <div class="work-item-square">
            <img :src="item.image_data" class="work-item-image">
          </div>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ item.title }}</h3>
              <div>{{ item.circle_name }}</div>
            </div>
          </v-card-title>
        </div>
        <transition name="slide-description">
          <div
            v-if="description"
            @click="description = false"
            v-ripple
            class="work-item-description"
          >
            <v-card-title>
              <h3 class="headline mb-0">{{ item.title }}</h3>
              <p>Release: {{ item.release }}</p>
              <p>{{ item.description }}</p>
            </v-card-title>
          </div>
        </transition>
      </div>
      <v-card-actions v-if="item.website_link.length > 0">
        <v-btn
          v-for="link in item.website_link"
          :key="link.name"
          :href="link.url"
          flat
          target="_blank"
          color="orange"
        >{{ link.name }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  name: 'WorkItem',
  props: {
    item: {
      type: Object,
      optional: false,
    },
  },
  data() {
    return {
      description: false,
    };
  },
};
</script>
<style scoped>
.work-item-clip {
  position: relative;
  overflow: hidden;
}

.work-item-square {
  overflow: hidden;
  padding-bottom: 100%;
}

.work-item-image {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}

.work-item-description {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
}

.slide-description-enter-active,
.slide-description-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-description-enter,
.slide-description-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
