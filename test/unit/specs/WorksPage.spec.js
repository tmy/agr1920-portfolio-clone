import Vue from 'vue';
import WorksPage from '@/components/WorksPage';

describe('AboutPage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(WorksPage);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.works-page h1').textContent)
      .toEqual('WORKS');
  });
});
