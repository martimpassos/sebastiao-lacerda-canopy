(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{6202:function(e,c,a){"use strict";a.d(c,{Z:function(){return Related_Related}});var o,r,i=a(218);a(7294);var s=a(9288),t=(0,s.zo)("section",{padding:"$gr4 0"}),n=a(9499);a(4614);var l=a(9897),u=(0,s.zo)("div",(o={marginBottom:"$gr5","@xs":{"& > div > div":{alignItems:"center",textAlign:"center","& > div":{"&:last-child":{paddingTop:"$gr2"}}}}},(0,n.Z)(o,"& .clover-slider-header-label",{fontSize:"$gr6",fontFamily:"$sans",fontWeight:"300 !important",letterSpacing:"-0.01em"}),(0,n.Z)(o,"& .clover-slider-header-summary",{display:"block",fontSize:"$gr3 !important",color:"$slate11 "}),(0,n.Z)(o,"& .clover-slider-header-view-all",{color:"$slate1"}),(0,n.Z)(o,".swiper-slide",{a:{"> div":{borderRadius:"3px",overflow:"hidden"}}}),(0,n.Z)(o,"figure",{"> div":{borderRadius:"3px",overflow:"hidden",boxShadow:"2px 2px 5px #0001"}}),(0,n.Z)(o,"figcaption",{margin:"$gr1 0","> span":{textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"3",overflow:"hidden",whiteSpace:"normal",fontWeight:"400",fontSize:"$gr4",fontFamily:"$sans",textDecoration:"none !important"}}),(0,n.Z)(o,"& a figcaption, & a:visited figcaption",{color:"$slate12"}),(0,n.Z)(o,"& a:hover figcaption, & a:focus figcaption",{color:"$indigo11"}),o)),d=a(4430),g=a(5049),v=a(7668),p=a(5893),spaceBetween=function(e){return g.hO*(0,d.gr)(e)},m=(r={},(0,n.Z)(r,v.b.xxs,{slidesPerView:2,slidesPerGroup:2,spaceBetween:spaceBetween(1)}),(0,n.Z)(r,v.b.xs,{slidesPerView:2,slidesPerGroup:2,spaceBetween:spaceBetween(1)}),(0,n.Z)(r,v.b.sm,{slidesPerView:3,slidesPerGroup:3,spaceBetween:spaceBetween(1)}),(0,n.Z)(r,v.b.md,{slidesPerView:3,slidesPerGroup:3,spaceBetween:spaceBetween(2)}),(0,n.Z)(r,v.b.lg,{slidesPerView:5,slidesPerGroup:5,spaceBetween:spaceBetween(2)}),(0,n.Z)(r,v.b.xl,{slidesPerView:5,slidesPerGroup:5,spaceBetween:spaceBetween(2)}),r),Viewer_Slider=function(e){var c=e.collectionId;return(0,p.jsx)(u,{children:(0,p.jsx)(l.default,{iiifContent:c,options:{breakpoints:m}})})},Related_Related=function(e){var c=e.collections,a=e.title,o=void 0===a?"Related Works":a;return(0,p.jsxs)(t,{children:[o&&(0,p.jsx)(i.Z,{as:"h2",children:o}),c.map(function(e){return(0,p.jsx)(Viewer_Slider,{collectionId:e},e)})]})}},1098:function(e,c,a){"use strict";a.r(c),a.d(c,{__N_SSG:function(){return _},default:function(){return Work}});var o=a(4729),r=a(7843),i=a(6202),s=a(1522),t=a(1830),n=a(9288),l=(0,n.zo)("div",{}),u=(0,n.zo)("section",{maxWidth:"1280px",margin:"auto",position:"relative",paddingTop:"$gr3",".work-summary":{fontSize:"$gr5",fontFamily:"$sans",fontWeight:"300",color:"$slate11",marginBottom:"$gr4","@sm":{fontSize:"$gr4",marginBottom:"$gr4"}},"dl, .work-summary":{img:{maxHeight:"$gr5 !important",margin:"$gr1 0","@sm":{maxHeight:"$gr4 !important"}}}}),d=(0,n.zo)("div",{dl:{dt:{padding:"$gr3 0 $gr2",fontFamily:"$display"},dd:{padding:"0 0 $gr1",margin:"0"}}}),g=a(7058),v=a(218),p=a(1664),m=a.n(p),f=a(5893),Work_ManifestId=function(e){var c=e.manifestId;return(0,f.jsxs)("dl",{children:[(0,f.jsx)("dt",{children:"IIIF Manifest"}),(0,f.jsx)("dd",{style:{wordBreak:"break-word"},children:(0,f.jsx)(m(),{href:c,children:c})})]})};a(7294);var ValueAsListItem=function(e){var c=e.searchParam,a=e.searchValues,o=e.value;if(!o)return(0,f.jsx)(f.Fragment,{});var r=null==a?void 0:a.find(function(e){return e.value===o});return(0,f.jsx)(m(),{href:"/search?".concat(c,"=").concat(encodeURIComponent(null==r?void 0:r.slug)),children:(0,f.jsx)("span",{dangerouslySetInnerHTML:{__html:o}})})},Inner=function(e){var c=e.manifest,a=c.id,o=c.label,r=c.metadata,i=c.requiredStatement,s=c.summary,n=g.map(function(e){return{Content:(0,f.jsx)(ValueAsListItem,{searchParam:e.slug,searchValues:e.values}),matchingLabel:{none:[e.label]}}});return(0,f.jsx)(u,{children:(0,f.jsxs)(l,{children:[(0,f.jsx)(v.Z,{as:"h1",children:(0,f.jsx)(t.Label,{label:o,as:"span"})}),s&&(0,f.jsx)(t.Summary,{summary:s,as:"p",className:"work-summary"}),(0,f.jsxs)(d,{children:[r&&(0,f.jsx)(t.Metadata,{customValueContent:n,metadata:r}),i&&(0,f.jsx)(t.RequiredStatement,{requiredStatement:i}),(0,f.jsx)(Work_ManifestId,{manifestId:a})]})]})})},_=!0;function Work(e){var c=e.manifest,a=e.related,t=c.id;return(0,f.jsxs)(r.Z,{children:[(0,f.jsx)(s.Z,{iiifContent:t}),(0,f.jsxs)(o.Z,{children:[(0,f.jsx)(Inner,{manifest:c}),(0,f.jsx)(i.Z,{collections:a})]})]})}},9529:function(e,c,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/[slug]",function(){return a(1098)}])},4614:function(){},7058:function(e){"use strict";e.exports=JSON.parse('[{"label":"Data","slug":"data","values":[{"value":"circa 1922","slug":"circa-1922","doc_count":94,"docs":[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,106,124,130,131,132,133,134,135,136,137,138,139,141,142,143,144,145,146,147,148,149,150,151,152,153,154,157,158,159,162,163,164,165,166,167,171,172]},{"value":"circa 1915","slug":"circa-1915","doc_count":27,"docs":[75,77,79,80,82,83,85,86,88,89,90,160,168,191,192,193,194,197,198,199,200,204,207,208,209,210,211]},{"value":"circa 1917","slug":"circa-1917","doc_count":23,"docs":[3,4,6,7,110,111,112,113,114,115,116,117,118,119,120,121,122,123,125,126,127,128,129]},{"value":"circa 1925","slug":"circa-1925","doc_count":14,"docs":[67,73,74,177,179,180,181,182,183,184,185,196,202,212]},{"value":"circa 1935","slug":"circa-1935","doc_count":9,"docs":[68,69,70,71,72,78,84,93,186]},{"value":"1922","slug":"1922","doc_count":7,"docs":[1,2,87,140,178,203,206]},{"value":"circa 1920","slug":"circa-1920","doc_count":7,"docs":[0,65,107,109,161,189,205]},{"value":"circa 1930","slug":"circa-1930","doc_count":6,"docs":[95,97,103,104,155,156]},{"value":"1930","slug":"1930","doc_count":5,"docs":[5,94,102,213,214]},{"value":"circa 1926","slug":"circa-1926","doc_count":5,"docs":[96,98,99,100,101]},{"value":"circa 1927","slug":"circa-1927","doc_count":2,"docs":[169,170]},{"value":"circa 1940","slug":"circa-1940","doc_count":2,"docs":[81,187]},{"value":"09/1930","slug":"091930","doc_count":1,"docs":[105]},{"value":"12/03/1923","slug":"12031923","doc_count":1,"docs":[91]},{"value":"1915","slug":"1915","doc_count":1,"docs":[195]},{"value":"1921","slug":"1921","doc_count":1,"docs":[176]},{"value":"1934","slug":"1934","doc_count":1,"docs":[175]},{"value":"20/01/1922","slug":"20011922","doc_count":1,"docs":[108]},{"value":"circa 1905","slug":"circa-1905","doc_count":1,"docs":[188]},{"value":"circa 1906","slug":"circa-1906","doc_count":1,"docs":[173]},{"value":"circa 1907","slug":"circa-1907","doc_count":1,"docs":[76]},{"value":"circa 1910","slug":"circa-1910","doc_count":1,"docs":[190]},{"value":"circa 1916","slug":"circa-1916","doc_count":1,"docs":[66]},{"value":"circa 1918","slug":"circa-1918","doc_count":1,"docs":[215]},{"value":"circa 1928","slug":"circa-1928","doc_count":1,"docs":[174]},{"value":"circa 1929","slug":"circa-1929","doc_count":1,"docs":[92]},{"value":"circa 1933","slug":"circa-1933","doc_count":1,"docs":[201]}]},{"label":"Tipo","slug":"tipo","values":[{"value":"Fotografia","slug":"fotografia","doc_count":216,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215]}]},{"label":"Autoria","slug":"autoria","values":[{"value":"Autoria desconhecida","slug":"autoria-desconhecida","doc_count":216,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215]}]}]')}},function(e){e.O(0,[412,409,971,897,41,995,774,888,179],function(){return e(e.s=9529)}),_N_E=e.O()}]);