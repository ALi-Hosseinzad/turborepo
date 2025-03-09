module.exports = {
  meta: {
    type: 'problem',
    hasSuggestions: true,
  },
  create: (context) => ({
    VariableDeclarator(node) {
      const regex = /^[\u0600-\u06FF\s]+$/
      if (node.init) {
        if (node.init.type === 'Literal') {
          if (regex.test(node.init.value)) {
            context.report({
              node,
              message: 'Do not use persian var',
            })
          }
        }
      }
    },
  }),
}
