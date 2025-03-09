module.exports = {
  meta: {
    type: 'problem',
    hasSuggestions: true,
  },
  create: (context) => ({
    JSXElement(node) {
      const regex = /^[\u0600-\u06FF\s]+$/
      for (const item of node.children) {
        if (item.type === 'Literal') {
          if (regex.test(item.value)) {
            context.report({
              node,
              message: 'Do not use persian character in jsx elements',
            })
          }
        }
      }
    },
  }),
}
