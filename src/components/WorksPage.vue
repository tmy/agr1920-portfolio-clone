<template>
  <div class="works-page">
    <h1 class="display-1">WORKS</h1>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <work-item
          v-for="item in works"
          :item="item"
          :key="item.image_name"
        ></work-item>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import works from '../models/works';
import WorkItem from './WorkItem';

export default {
  name: 'WorksPage',
  components: {
    WorkItem,
  },
  data() {
    return {
      works,
    };
  },
};
</script>
