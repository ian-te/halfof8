import React from "react"
import android192 from './img/android-chrome-192x192.png'
import appleTouch from './img/apple-touch-icon-180x180.png'
import favicon16 from './img/favicon-16x16.png'
import favicon32 from './img/favicon-32x32.png'
import favicon96 from './img/favicon-96x96.png'
import mstile from './img/mstile-144x144.png'


let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouch}/>
          <link rel="icon" type="image/png" href={favicon32} sizes="32x32"/>
          <link rel="icon" type="image/png" href={android192} sizes="192x192"/>
          <link rel="icon" type="image/png" href={favicon96} sizes="96x96"/>
          <link rel="icon" type="image/png" href={favicon16} sizes="16x16"/>
          <link rel="manifest" href="/manifest.json"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="msapplication-TileImage" content={mstile} />
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <div dangerouslySetInnerHTML={{__html: `<script type="text/javascript" >(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter13731373 = new Ya.Metrika({ id:13731373, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script>`}}></div> 
        </body>
      </html>
    )
  }
}
