import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterPosts(searchTerm) {
      searchTerm = searchTerm.toLowerCase();
      let filteredPosts = this.get('model').filter((post) => {
        return post.title.toLowerCase().includes(searchTerm);
      });

      this.set('posts', filteredPosts);
    }
  }
});
