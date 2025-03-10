export default function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
    port: 3000
  });

  return {
    dir: {
      input: 'src',
      output: '_site'
    },
  };
};