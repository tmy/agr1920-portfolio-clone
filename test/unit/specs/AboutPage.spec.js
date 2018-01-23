import Vue from 'vue';
import AboutPage from '@/components/AboutPage';

describe('AboutPage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AboutPage);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.about-page h1').textContent)
      .toEqual('ABOUT');
  });
});
