export const UsePrint = (children) => {
  const win = window.open('about:blank', '_new')
  win?.document.write(
    [
      '<html>',
      '   <head>',
      '   </head>',
      '   <body onload="window.print()" onafterprint="window.close()">',
      `${children}`,
      '   </body>',
      '</html>',
    ].join(''),
  )
  win?.document.close()
}
