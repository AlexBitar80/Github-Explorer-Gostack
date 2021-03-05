(this["webpackJsonp05-primeiro-projeto-react"]=this["webpackJsonp05-primeiro-projeto-react"]||[]).push([[0],{74:function(n,t,e){"use strict";e.r(t);var r=e(2),o=e(1),c=e.n(o),i=e(35),a=e.n(i),s=e(12),l=e(11),u=e(5);var b=function(n,t){var e=Object(o.useState)((function(){var e=localStorage.getItem(n);return e?JSON.parse(e):t})),r=Object(l.a)(e,2),c=r[0],i=r[1];return Object(o.useEffect)((function(){localStorage.setItem(n,JSON.stringify(c))}),[n,c]),[c,i]},p={title:"dark",colors:{box:"#6272a4",background:"#282a36",text:"#fff",title:"#f8f8f2"}},x={title:"light",colors:{box:"#fff",background:"#f0f0f5",text:"#a8a8b3",title:"#3a3a3a"}},d=Object(o.createContext)({});function j(n){var t=n.children,e=b("@GithubExplorer:theme",x),o=Object(l.a)(e,2),c=o[0],i=o[1];return Object(r.jsx)(d.Provider,{value:{toggleTheme:function(){i("light"===c.title?p:x)}},children:Object(r.jsx)(u.b,{theme:c,children:t})})}var f=e(4),h=e(22),g=e.n(h),O=e(45),m=e(39),v=e(18),k=e(40),y=e.n(k).a.create({baseURL:"https://api.github.com/"}),w=e.p+"static/media/Logo.469cc31b.svg",S=e(6),z=e(44);function E(){var n=Object(S.a)(["\n  margin-top: 80px;\n  max-width: 700px;\n\n  a {\n    background: ",";\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n    transition: transform 0.2s;\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    img {\n      width: 64px;\n      height: 64px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin: 0 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: ",";\n      }\n\n      p {\n        font-size: 18px;\n        color: ",";\n        margin-top: 4px;\n      }\n    }\n    svg {\n      margin-left: auto;\n      color: #cbcbd6;\n    }\n  }\n"]);return E=function(){return n},n}function _(){var n=Object(S.a)(["\n  display: block;\n  color: #c53030;\n  margin-top: 8px;\n"]);return _=function(){return n},n}function I(){var n=Object(S.a)(["\n        border-color: #c53030;\n      "]);return I=function(){return n},n}function C(){var n=Object(S.a)(["\n  margin-top: 40px;\n  max-width: 700px;\n\n  display: flex;\n\n  input {\n    flex: 1;\n    height: 70px;\n    padding: 0 24px;\n    background: ",";\n    border: 0;\n    border-radius: 5px 0px 0px 5px;\n    color: ",";\n    border: 2px solid ",";\n    border-right: 0;\n\n    ","\n\n    &::placeholder {\n      color: #a8a8b3;\n    }\n  }\n\n  button {\n    width: 210px;\n    height: 70px;\n    border: 0;\n    background: #04d361;\n    border-radius: 0px 5px 5px 0px;\n    color: #fff;\n    font-weight: bold;\n    transition: background-color 0.2s;\n\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return C=function(){return n},n}function G(){var n=Object(S.a)(["\n  font-size: 48px;\n  color: ",";\n  max-width: 450px;\n  line-height: 56px;\n\n  margin-top: 80px;\n"]);return G=function(){return n},n}var J=u.e.h1(G(),(function(n){return n.theme.colors.title})),D=u.e.form(C(),(function(n){return n.theme.colors.box}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.box}),(function(n){return n.hasError&&Object(u.d)(I())}),Object(z.a)(.2,"#04d361")),N=u.e.span(_()),F=u.e.div(E(),(function(n){return n.theme.colors.box}),(function(n){return n.theme.colors.title}),(function(n){return n.theme.colors.text})),q=e(43),L=e(42),P=e(41),R=e.n(P);function T(){var n=Object(S.a)(["\n  margin-right: 1.25rem;\n"]);return T=function(){return n},n}function X(){var n=Object(S.a)(["\n  position: fixed;\n  display: flex;\n  right: 0;\n  bottom: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 6.5rem;\n  top: 30px;\n"]);return X=function(){return n},n}var B=u.e.div(X()),M=Object(u.e)(R.a)(T());function U(){var n=Object(o.useContext)(d).toggleTheme,t=Object(o.useContext)(u.a).title;return Object(r.jsxs)(B,{children:["dark"===t?Object(r.jsx)(L.a,{size:20}):Object(r.jsx)(q.a,{size:20}),Object(r.jsx)(M,{checked:"dark"===t,height:20,width:40,onChange:n,onColor:"#50fa7b",offColor:"#44475a",checkedIcon:!1,uncheckedIcon:!1,handleDiameter:20})]})}function A(){var n=Object(o.useState)(""),t=Object(l.a)(n,2),e=t[0],c=t[1],i=Object(o.useState)(""),a=Object(l.a)(i,2),u=a[0],b=a[1],p=Object(o.useState)((function(){var n=localStorage.getItem("@GithubExplorer:repositories");return n?JSON.parse(n):[]})),x=Object(l.a)(p,2),d=x[0],j=x[1];function f(){return(f=Object(m.a)(g.a.mark((function n(t){var r,o;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),e){n.next=4;break}return b("Digite o autor/nome do repositorio"),n.abrupt("return");case 4:return n.prev=4,n.next=7,y.get("repos/".concat(e));case 7:r=n.sent,o=r.data,j([].concat(Object(O.a)(d),[o])),c(""),b(""),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),b("Erro na busca por esse repositorio");case 17:case"end":return n.stop()}}),n,null,[[4,14]])})))).apply(this,arguments)}return Object(o.useEffect)((function(){localStorage.setItem("@GithubExplorer:repositories",JSON.stringify(d))}),[d]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(U,{}),Object(r.jsx)("img",{src:w,alt:"Github Explorer"}),Object(r.jsx)(J,{children:"Explore reposit\xf3rios no Github."}),Object(r.jsxs)(D,{hasError:!!u,onSubmit:function(n){return f.apply(this,arguments)},children:[Object(r.jsx)("input",{placeholder:"Digite aqui",onChange:function(n){return c(n.target.value)},value:e}),Object(r.jsx)("button",{type:"submit",children:"Pesquisar"})]}),u&&Object(r.jsx)(N,{children:u}),Object(r.jsx)(F,{children:d.map((function(n){return Object(r.jsxs)(s.b,{to:"/repositories/".concat(n.full_name),children:[Object(r.jsx)("img",{src:n.owner.avatar_url,alt:n.owner.login}),Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:n.full_name}),Object(r.jsx)("p",{children:n.description})]}),Object(r.jsx)(v.b,{size:20})]},n.full_name)}))})]})}function H(){var n=Object(S.a)(["\n  margin-top: 80px;\n\n  a {\n    background: ",";\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n    transition: transform 0.2s;\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    div {\n      margin: 0 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: ",";\n      }\n\n      p {\n        font-size: 18px;\n        color: ",";\n        margin-top: 4px;\n      }\n    }\n    svg {\n      margin-left: auto;\n      color: #cbcbd6;\n    }\n  }\n"]);return H=function(){return n},n}function K(){var n=Object(S.a)(["\n  margin-top: 80px;\n\n  header {\n    display: flex;\n    align-items: center;\n\n    img {\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin-left: 24px;\n\n      strong {\n        font-size: 36px;\n        color: ",";\n      }\n\n      p {\n        font-size: 18px;\n        color: ",";\n        margin-top: 4px;\n      }\n    }\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    margin-top: 40px;\n\n    li {\n      & + li {\n        margin-left: 80px;\n      }\n\n      strong {\n        display: block;\n        font-size: 36px;\n\n        color: ",";\n      }\n\n      span {\n        display: block;\n        margin-top: 4px;\n        color: ",";\n      }\n    }\n  }\n"]);return K=function(){return n},n}function Q(){var n=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: #a8a8b3;\n    transition: color 0.2s;\n\n    &:hover {\n      color: #666;\n    }\n\n    svg {\n      margin-right: 4px;\n    }\n  }\n"]);return Q=function(){return n},n}var V=u.e.header(Q()),W=u.e.section(K(),(function(n){return n.theme.colors.title}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.title}),(function(n){return n.theme.colors.text})),Y=u.e.div(H(),(function(n){return n.theme.colors.box}),(function(n){return n.theme.colors.title}),(function(n){return n.theme.colors.text}));function Z(){var n=Object(o.useState)(null),t=Object(l.a)(n,2),e=t[0],c=t[1],i=Object(o.useState)([]),a=Object(l.a)(i,2),u=a[0],b=a[1],p=Object(f.f)().params;return Object(o.useEffect)((function(){y.get("repos/".concat(p.repository)).then((function(n){c(n.data)})),y.get("repos/".concat(p.repository,"/issues")).then((function(n){b(n.data)}))}),[p.repository]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(V,{children:[Object(r.jsx)("img",{src:w,alt:"Github Explorer"}),Object(r.jsxs)(s.b,{to:"/",children:[Object(r.jsx)(v.a,{size:16}),"voltar"]})]}),e&&Object(r.jsxs)(W,{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("img",{src:e.owner.avatar_url,alt:e.owner.login}),Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:e.full_name}),Object(r.jsx)("p",{children:e.description})]})]}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:e.stargazers_count}),Object(r.jsx)("span",{children:"Stars"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:e.forks_count}),Object(r.jsx)("span",{children:"Forks"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:e.open_issues_count}),Object(r.jsx)("span",{children:"Issues abertas"})]})]})]}),Object(r.jsx)(Y,{children:u.map((function(n){return Object(r.jsxs)("a",{href:n.html_url,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:n.title}),Object(r.jsx)("p",{children:n.user.login})]}),Object(r.jsx)(v.b,{size:20})]},n.id)}))})]})}function $(){return Object(r.jsxs)(f.c,{children:[Object(r.jsx)(f.a,{path:"/",exact:!0,component:A}),Object(r.jsx)(f.a,{path:"/repositories/:repository+",component:Z})]})}var nn=e.p+"static/media/Github-dark.d09abf44.svg";function tn(){var n=Object(S.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: "," url(",") no-repeat 70% top;\n    --web-kit-font-smooth: antialiased;\n  }\n\n  body, input, button {\n    font: 16px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 20px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return tn=function(){return n},n}var en=Object(u.c)(tn(),(function(n){return n.theme.colors.background}),nn);function rn(){return Object(r.jsxs)(j,{children:[Object(r.jsx)(en,{}),Object(r.jsx)(s.a,{children:Object(r.jsx)($,{})})]})}a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(rn,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.b615250f.chunk.js.map