"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[347],{722:function(n,e,i){i.r(e),i.d(e,{default:function(){return g}});var t,r,s,l=i(885),o=i(501),c=i(871),a=i(791),d=i(168),h=i(42),u=h.Z.button(t||(t=(0,d.Z)(["\n    background-color: gray;\n    margin-top: 10px;\n    margin-right: 10px;\n    margin-left: 10px;\n    border: navajowhite;\n    padding: 5px;\n    color: white;\n    &:hover{\n       color: blue;\n    }\n"]))),x=i(75),p=h.Z.ul(r||(r=(0,d.Z)(["\ndisplay: flex;\n    flex-direction: row;\n    list-style: none;\n"]))),j=h.Z.div(s||(s=(0,d.Z)(["\n      margin-left: 30px;\n      margin-right: 50px;\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n"]))),v=i(184),f=function(n){var e=n.movi;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(p,{children:[(0,v.jsx)("div",{children:(0,v.jsx)("li",{children:(0,v.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):x,alt:"movi.title",width:300,height:400})})}),(0,v.jsxs)(j,{children:[(0,v.jsxs)("li",{children:[(0,v.jsxs)("h3",{children:[e.title,"(",e.release_date.substring(0,4),")"]}),(0,v.jsxs)("p",{children:["use Score: ",10*e.vote_average,"%"]})]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("h3",{children:"Overview"}),e.overview]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("h3",{children:"Genres"}),e.genres.map((function(n){var e=n.id,i=n.name;return(0,v.jsx)("p",{children:i},e)}))]})]})]})})},g=function(){var n,e,i=(0,c.UO)().movieId,t=(0,c.TH)(),r=(0,a.useRef)(null!==(n=null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),s=(0,c.s0)(),d=(0,a.useState)(null),h=(0,l.Z)(d,2),x=h[0],p=h[1];return(0,a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(i,"?api_key=0754829cbe2d4a3d2043b315bf2671de&language=en-US")).then((function(n){return n.json()})).then((function(n){return p(n)}))}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u,{type:"button",onClick:function(){s(r.current)},children:"Go back"}),x&&(0,v.jsx)(f,{movi:x}),(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)(c.j3,{})]})}},75:function(n,e,i){n.exports=i.p+"static/media/noImageAvailable.ac3b9d7ddc9aab861b22.jpg"}}]);
//# sourceMappingURL=movie-details-page.0d28b3f7.chunk.js.map