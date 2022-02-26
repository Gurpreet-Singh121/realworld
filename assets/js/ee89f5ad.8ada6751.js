"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[854],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||c;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,s=new Array(c);s[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<c;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9367:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),s=["components"],a={sidebar_position:6},i="Postman",p={unversionedId:"specs/backend-specs/postman",id:"specs/backend-specs/postman",isDocsHomePage:!1,title:"Postman",description:"For your convenience, we have a Postman collection that you can use to test your API endpoints as you build your app.",source:"@site/docs/specs/backend-specs/postman.md",sourceDirName:"specs/backend-specs",slug:"/specs/backend-specs/postman",permalink:"/docs/specs/backend-specs/postman",editUrl:"https://github.com/gothinkster/realworld/tree/main/docs/docs/docs/specs/backend-specs/postman.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"CORS",permalink:"/docs/specs/backend-specs/cors"},next:{title:"Tests",permalink:"/docs/specs/backend-specs/tests"}},l=[{value:"Running API tests locally",id:"running-api-tests-locally",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"postman"},"Postman"),(0,c.kt)("p",null,"For your convenience, we have a ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/gothinkster/realworld/blob/master/api/Conduit.postman_collection.json"},"Postman collection")," that you can use to test your API endpoints as you build your app."),(0,c.kt)("h2",{id:"running-api-tests-locally"},"Running API tests locally"),(0,c.kt)("p",null,"To locally run the provided Postman collection against your backend, follow instructions ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/gothinkster/realworld/tree/main/api"},"here"),"."))}d.isMDXComponent=!0}}]);