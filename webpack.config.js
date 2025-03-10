module.exports = {
  // ...existing configuration...
  module: {
    rules: [
      // ...existing rules...
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    ],
  },
};
