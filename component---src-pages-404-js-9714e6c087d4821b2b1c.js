(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(148),s=a.n(i),o=a(158),c=a(154),l=a(160);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",{className:s.a.header},"Page not found"),r.a.createElement("p",{className:s.a.paragraph},"The Page you are looking for does not exists. ",r.a.createElement("span",null,"test")),r.a.createElement(c.a,{to:"/"},"Go back to the homepage"))}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(32),c=a.n(o);a.d(t,"a",function(){return c.a});a(155);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},155:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Western Spaghetti"}}}}},157:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(54),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},158:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(154),l=a(142),u=a.n(l),m=function(){return i.a.createElement("footer",{className:u.a.mainFooter},i.a.createElement("div",{className:u.a.mainSize},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},d=(a(159),a(143)),p=a.n(d),f=function(e){return i.a.createElement(c.a,{className:p.a.link,to:e.to},e.text)},g=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:p.a.mainHeader},i.a.createElement("div",{className:p.a.mainSize},i.a.createElement("h1",{className:p.a.mainTitle},i.a.createElement(c.a,{to:"/"},t)),i.a.createElement("nav",{className:p.a.nav},i.a.createElement(f,{to:"/",text:"Home"}),i.a.createElement(f,{to:"/about/",text:"About"}))))};g.propTypes={siteTitle:o.a.string},g.defaultProps={siteTitle:""};var h=g,y=a(144),E=a.n(y),w=function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:E.a.container},i.a.createElement("div",{className:E.a.mainSize},i.a.createElement("main",null,t))),i.a.createElement(m,null))},data:n})};w.propTypes={children:o.a.node.isRequired};t.a=w},160:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(163),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Western Spaghetti",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@nisansabag"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-9714e6c087d4821b2b1c.js.map