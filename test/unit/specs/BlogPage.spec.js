import Vue from 'vue';
import BlogPage from '@/components/BlogPage';

describe('BlogPage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(BlogPage);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.blog-page h1').textContent)
      .toEqual('BLOG');
  });
});
