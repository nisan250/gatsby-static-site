(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(158),c=a(145),l=a.n(c),o=function(e){return r.a.createElement("section",{className:l.a.container},r.a.createElement("h1",{className:l.a.title},e.text),r.a.createElement("div",{className:l.a.subtitle},e.subtitle))},s=a(146),u=a.n(s);a.d(t,"query",function(){return m});t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(i.a,null,r.a.createElement("div",{className:u.a.container},r.a.createElement(o,{text:t.frontmatter.title}),r.a.createElement("div",{style:{width:"100%",height:"200px",backgroundColor:"#fafafa",backgroundImage:"Url(https://source.unsplash.com/960x200/?"+t.frontmatter.keywords+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",marginBottom:"30px"}}),r.a.createElement("div",{className:u.a.content,dangerouslySetInnerHTML:{__html:t.html}})))};var m="3084592650"},154:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(32),o=a.n(l);a.d(t,"a",function(){return o.a});a(155);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},155:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Western Spaghetti"}}}}},157:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(54),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(154),s=a(142),u=a.n(s),m=function(){return i.a.createElement("footer",{className:u.a.mainFooter},i.a.createElement("div",{className:u.a.mainSize},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},d=(a(159),a(143)),f=a.n(d),p=function(e){return i.a.createElement(o.a,{className:f.a.link,to:e.to},e.text)},E=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:f.a.mainHeader},i.a.createElement("div",{className:f.a.mainSize},i.a.createElement("h1",{className:f.a.mainTitle},i.a.createElement(o.a,{to:"/"},t)),i.a.createElement("nav",{className:f.a.nav},i.a.createElement(p,{to:"/",text:"Home"}),i.a.createElement(p,{to:"/about/",text:"About"}))))};E.propTypes={siteTitle:l.a.string},E.defaultProps={siteTitle:""};var v=E,h=a(144),g=a.n(h),y=function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:g.a.container},i.a.createElement("div",{className:g.a.mainSize},i.a.createElement("main",null,t))),i.a.createElement(m,null))},data:n})};y.propTypes={children:l.a.node.isRequired};t.a=y},159:function(e,t,a){"use strict";a(162)("link",function(e){return function(t){return e(this,"a","href",t)}})},162:function(e,t,a){var n=a(11),r=a(17),i=a(18),c=/"/g,l=function(e,t,a,n){var r=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(c,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-templates-post-js-f568e019975d12454521.js.map