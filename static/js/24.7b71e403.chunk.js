"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[24],{24:(e,r,t)=>{t.r(r),t.d(r,{default:()=>_});var n=t(791),a=t(87),s=t(802);const i="Home_container__GowWm",l="Home_secondHeading__3rKM7",c="Home_error__g0ZVF",o="Home_list__yqOBM",h="Home_link__mKhZa";var d=t(184);const m=e=>{let{handleFetching:r}=e;const{enqueueSnackbar:t}=(0,s.Ds)(),[m,_]=(0,n.useState)([]),[u,g]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{r("https://api.themoviedb.org/3/trending/movie/day?language=en-US").then((e=>e.results)).then((e=>_(e))).catch((()=>{g(!0),t("Error: Failed to get information from the server.",{variant:"error"})}))}),[r,t]),(0,d.jsx)("main",{children:(0,d.jsxs)("div",{className:i,children:[(0,d.jsx)("h2",{className:l,children:"Trending today"}),(u||!m.length)&&(0,d.jsx)("p",{className:c,children:"Error: Failed to get information from the server."}),m.length>0&&(0,d.jsx)("div",{children:(0,d.jsx)("ul",{className:o,children:m.map((e=>(0,d.jsx)("li",{children:(0,d.jsx)(a.rU,{className:h,to:"/movies/".concat(e.id),children:e.title})},e.id)))})})]})})},_=e=>{let{handleFetching:r}=e;return(0,d.jsx)(s.wT,{maxSnack:3,children:(0,d.jsx)(m,{handleFetching:r})})}}}]);
//# sourceMappingURL=24.7b71e403.chunk.js.map