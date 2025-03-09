module.exports = {
  meta: {
    type: 'problem',
    hasSuggestions: true,
  },
  create: (context) => ({
    VariableDeclarator(node) {
      const regex = /^[\u0600-\u06FF\s]+$/
      if (regex.test(node.init)) {
        context.report({
          node,
          message: 'Do not use old method',
        })
      }
    },
  }),
}
