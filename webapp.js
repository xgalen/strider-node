
module.exports = {
  // an object that defines the schema for configuration
  config: {
    fork: {
      type: String,
      enum: ['io.js', 'Node.js'],
      default: 'Node.js'
    },
    runtime: {
      type: String,
      enum: ['0.8', '0.10', '0.12', 'stable', 'latest', 'whatever'],
      default: 'whatever'
    },
    caching: {
      type: String,
      enum: ['strict', 'loose', 'none'],
      default: 'none'
    },
    test: { type: String, default: 'npm test' },
    globals: [{
      type: String
    }]
  }
};
