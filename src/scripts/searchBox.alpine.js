// SearchBox.alpine.js
import Alpine from 'alpinejs';

Alpine.data('searchBox', () => ({
  searchQuery: '',
  filteredPosts: [],
  posts: [],
  isLoading: true,

  async init() {
    try {
      // Dynamically import all blog post Markdown files
      const blogPosts = import.meta.glob('../../pages/posts/*.md');
      
      // Load and process all blog posts
      this.posts = await Promise.all(
        Object.entries(blogPosts).map(async ([path, resolver]) => {
          const post = await resolver();
          const content = await post.compiledContent(); // Await here!
          return {
            title: post.frontmatter.title,
            content: content,  // Now content holds the actual text
            slug: path.replace('../../pages/posts/', '').replace('.md', ''),
            date: post.frontmatter.date,
            description: post.frontmatter.description || ''
          };
        })
      );

      // Initially show all posts
      this.filteredPosts = this.posts;
      this.isLoading = false;
    } catch (error) {
      console.error('Error loading blog posts:', error);
      this.isLoading = false;
    }
  },

  search() {
    // If query is empty, show all posts
    if (!this.searchQuery.trim()) {
      this.filteredPosts = this.posts;
      return;
    }

    // Perform case-insensitive search across multiple fields
    const query = this.searchQuery.toLowerCase();
    this.filteredPosts = this.posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) || 
        post.content.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query)
      );
    });
  },
}));

export default Alpine;