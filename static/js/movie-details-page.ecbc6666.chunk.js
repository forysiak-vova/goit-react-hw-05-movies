"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[347],{722:function(n,e,i){i.r(e),i.d(e,{default:function(){return v}});var r,t,s,c=i(885),l=i(501),o=i(871),a=i(791),d=i(168),h=i(42),u=h.Z.button(r||(r=(0,d.Z)(["\n    background-color: gray;\n    margin-top: 10px;\n    margin-right: 10px;\n    margin-left: 10px;\n    border: navajowhite;\n    padding: 5px;\n    color: white;\n    &:hover{\n       color: blue;\n    }\n"]))),x=i(75),j=h.Z.ul(t||(t=(0,d.Z)(["\ndisplay: flex;\n    flex-direction: row;\n    list-style: none;\n"]))),p=h.Z.div(s||(s=(0,d.Z)(["\n      margin-left: 30px;\n      margin-right: 50px;\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n"]))),g=i(184),f=function(n){var e=n.movi;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(j,{children:[(0,g.jsx)("div",{children:(0,g.jsx)("li",{children:(0,g.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):x,alt:"movi.title",width:300,height:400})})}),(0,g.jsxs)(p,{children:[(0,g.jsxs)("li",{children:[(0,g.jsxs)("h3",{children:[e.title,"(",e.release_date.substring(0,4),")"]}),(0,g.jsxs)("p",{children:["use Score: ",10*e.vote_average,"%"]})]}),(0,g.jsxs)("li",{children:[(0,g.jsx)("h3",{children:"Overview"}),e.overview]}),(0,g.jsxs)("li",{children:[(0,g.jsx)("h3",{children:"Genres"}),e.genres.map((function(n){var e=n.id,i=n.name;return(0,g.jsx)("p",{children:i},e)}))]})]})]})})},v=function(){var n=(0,o.UO)().movieId,e=(0,o.s0)(),i=(0,a.useState)(null),r=(0,c.Z)(i,2),t=r[0],s=r[1];return(0,a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=0754829cbe2d4a3d2043b315bf2671de&language=en-US")).then((function(n){return n.json()})).then((function(n){return s(n)}))}),[]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{onClick:function(){return e(-1)},children:"Go back"}),t&&(0,g.jsx)(f,{movi:t}),(0,g.jsx)("p",{children:"Additional information"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]}),(0,g.jsx)(o.j3,{})]})}},75:function(n,e,i){n.exports=i.p+"static/media/noImageAvailable.ac3b9d7ddc9aab861b22.jpg"}}]);
//# sourceMappingURL=movie-details-page.ecbc6666.chunk.js.map