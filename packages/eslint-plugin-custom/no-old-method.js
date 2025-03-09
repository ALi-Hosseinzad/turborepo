module.exports = {
  meta: {
    type: 'problem',
    hasSuggestions: true,
  },
  create: (context) => ({
    CallExpression(node) {
      if (node.callee.name === 'oldMethod') {
        context.report({
          node,
          message: 'Do not use old method',
        })
      }
    },
  }),
}
