(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(158),s=a(160);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"Page two"}),r.a.createElement("p",null,"Welcome to page 2"))}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(32),o=a.n(c);a.d(t,"a",function(){return o.a});a(155);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},155:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Static Site"}}}}},157:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(54),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},158:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),s=a(4),c=a.n(s),o=a(154),l=a(142),u=a.n(l),m=function(){return i.a.createElement("footer",{className:u.a.mainFooter},i.a.createElement("div",{className:u.a.mainSize},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},d=(a(159),a(143)),p=a.n(d),f=function(e){return i.a.createElement(o.a,{className:p.a.link,to:e.to},e.text)},y=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:p.a.mainHeader},i.a.createElement("div",{className:p.a.mainSize},i.a.createElement("h1",{className:p.a.mainTitle},i.a.createElement(o.a,{to:"/"},t)),i.a.createElement("nav",{className:p.a.nav},i.a.createElement(f,{to:"/",text:"Home"}),i.a.createElement(f,{to:"/about/",text:"About"}))))};y.propTypes={siteTitle:c.a.string},y.defaultProps={siteTitle:""};var g=y,h=a(144),E=a.n(h),w=function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:E.a.container},i.a.createElement("div",{className:E.a.mainSize},i.a.createElement("main",null,t))),i.a.createElement(m,null))},data:n})};w.propTypes={children:c.a.node.isRequired};t.a=w},160:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),s=a(4),c=a.n(s),o=a(163),l=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,c=e.title,o=n.data.site,u=t||o.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Static Site",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@nisansabag"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-c38b7bc525efe8c7a6e1.js.map