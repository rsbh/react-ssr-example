export default ({ body, helmet }) => {
  return `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-41755939-7"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-41755939-7');
        </script>        
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="app">${body}</div>
        <script src="vendor.js" defer></script>
        <script src="bundle.js" defer></script>
      </body>      
    </html>
  `
}
