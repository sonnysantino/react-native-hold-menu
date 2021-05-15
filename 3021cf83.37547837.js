(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(7),o=a(0),r=a.n(o),s=a(88),l=a(87);var c=({title:e,url:t})=>r.a.createElement("video",{muted:!0,loop:!0,autoPlay:!0,controls:!1,playsInline:!0,title:e,width:"100%"},r.a.createElement("source",{src:t,type:"video/mp4"})),d={id:"getting-started",title:"Getting Started",description:"A performant, easy to use hold to open context menu for React Native powered by Reanimated. \ud83d\udd25",hide_title:!0,slug:"/",hide_table_of_contents:!0},p={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"A performant, easy to use hold to open context menu for React Native powered by Reanimated. \ud83d\udd25",source:"@site/docs/getting-started.mdx",slug:"/",permalink:"/react-native-hold-menu/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started.mdx",version:"current",sidebar:"someSidebar",next:{title:"Usage",permalink:"/react-native-hold-menu/docs/usage"}},b=[{value:"Features",id:"features",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Todo",id:"todo",children:[]},{value:"Contributors",id:"contributors",children:[]}],m={toc:b};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"react-native-hold-menu"},"React Native Hold Menu"),Object(s.b)("p",null,"A performant, easy to use hold to open context menu for React Native powered by Reanimated."),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-native-hold-menu"},Object(s.b)("img",{parentName:"a",src:"https://img.shields.io/github/package-json/v/enesozturk/react-native-hold-menu/develop?label=Reanimated%20v2&style=flat-square",alt:"Reanimated v2 version"}))," ",Object(s.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-native-hold-menu"},Object(s.b)("img",{parentName:"a",src:"https://img.shields.io/npm/l/react-native-hold-menu?style=flat-square",alt:"npm"}))," ",Object(s.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-native-hold-menu"},Object(s.b)("img",{parentName:"a",src:"https://img.shields.io/badge/types-included-blue?style=flat-square",alt:"npm"}))," ",Object(s.b)("a",{parentName:"p",href:"https://expo.io/"},Object(s.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000",alt:"runs with expo"}))),Object(s.b)(c,{title:"React Native Bottom Sheet",url:Object(l.a)("video/hold-menu-preview.mp4"),mdxType:"Video"}),Object(s.b)("h2",{id:"features"},"Features"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Powered with Reanimated v2. \ud83d\ude80"),Object(s.b)("li",{parentName:"ul"},"Smooth interactions & animations."),Object(s.b)("li",{parentName:"ul"},"Supports dark/light Mode. \ud83c\udf1a \ud83c\udf1d"),Object(s.b)("li",{parentName:"ul"},"Supports device orientation change."),Object(s.b)("li",{parentName:"ul"},"Compatible with Expo."),Object(s.b)("li",{parentName:"ul"},"Written in ",Object(s.b)("inlineCode",{parentName:"li"},"TypeScript"),".")),Object(s.b)("h2",{id:"installation"},"Installation"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"This library currently written with Reanimated v2. If you use Reanimated v1 in your application, you may need waiting for next version of the Hold Menu. It is in my todo list.")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cmd"},"yarn add react-native-hold-menu\n")),Object(s.b)("h4",{id:"dependencies"},"Dependencies"),Object(s.b)("p",null,"This library needs these dependencies to be installed in your project before you can use it:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-reanimated@2.1.0 react-native-gesture-handler react-native-unimodules\n")),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},Object(s.b)("strong",{parentName:"p"},"React Native Gesture Handler")," needs extra steps to finalize its installation, please follow their ",Object(s.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler"},"installation instructions"),"."),Object(s.b)("p",{parentName:"div"},Object(s.b)("strong",{parentName:"p"},"React Native Reanimated v2")," needs extra steps to finalize its installation, please follow their ",Object(s.b)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/installation"},"installation instructions"),"."),Object(s.b)("p",{parentName:"div"},Object(s.b)("strong",{parentName:"p"},"React Native Unimodules")," needs extra steps to finalize its installation, please follow their ",Object(s.b)("a",{parentName:"p",href:"https://docs.expo.io/bare/installing-unimodules/"},"installation instructions"),". And make sure you excluded unwanted modules in your app. You can check the ",Object(s.b)("a",{parentName:"p",href:"https://github.com/enesozturk/react-native-hold-menu/tree/main/example"},"exampale project"),"."))),Object(s.b)("h2",{id:"todo"},"Todo"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Support for Reanimated v1"),Object(s.b)("li",{parentName:"ul"},"Support for Animated")),Object(s.b)("h2",{id:"contributors"},"Contributors"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://twitter.com/gorhom"},"Mo Gorhom"))))}u.isMDXComponent=!0}}]);