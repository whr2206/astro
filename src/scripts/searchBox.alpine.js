// SearchBox.alpine.js
import Alpine from 'alpinejs';

Alpine.data('searchBox', () => ({
  searchQuery: '',
  filteredPosts: [],
  posts: [
    // Sample blog posts data
    { title: 'Post 1', content: 'This is post 1' },
    { title: 'Post 2', content: 'This is post 2' },
    // Add more posts here...
  ],

  init() {
    this.filteredPosts = this.posts;
  },

  search() {
    const query = this.searchQuery.toLowerCase();
    this.filteredPosts = this.posts.filter((post) => {
      return post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query);
    });
  },
}));

export default Alpine;