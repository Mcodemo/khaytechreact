"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[8451],{25416:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),i=t(45987),o=t(88564),a=t(61113),c=t(3484),s=t(46417),l=["title","description","img"],d=(0,o.ZP)("div")((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function u(e){var n=e.title,t=e.description,o=e.img,u=(0,i.Z)(e,l);return(0,s.jsxs)(d,(0,r.Z)((0,r.Z)({},u),{},{children:[(0,s.jsx)(c.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:o||"/images/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,s.jsx)(a.Z,{variant:"h5",gutterBottom:!0,children:n}),t&&(0,s.jsx)(a.Z,{variant:"body2",sx:{color:"text.secondary"},children:t})]}))}},67871:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(1413),i=t(45987),o=t(65406),a=t.n(o),c=t(57829),s=t(61113),l=t(47723),d=t(29466),u=t(3404),h=t(46417),x=["links","activeLast"];function f(e){var n=e.links,t=e.activeLast,o=void 0!==t&&t,a=(0,i.Z)(e,x),l=n[n.length-1].name,d=n.map((function(e){return(0,h.jsx)(g,{link:e},e.name)})),f=n.map((function(e){return(0,h.jsx)("div",{children:e.name!==l?(0,h.jsx)(g,{link:e}):(0,h.jsx)(s.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},e.name)}));return(0,h.jsx)(u.Z,(0,r.Z)((0,r.Z)({separator:(0,h.jsx)(c.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},a),{},{children:o?d:f}))}function g(e){var n=e.link,t=n.href,r=n.name,i=n.icon;return(0,h.jsxs)(l.Z,{variant:"body2",component:d.rU,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[i&&(0,h.jsx)(c.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:i}),r]},r)}var m=["links","action","heading","moreLink","sx"];function Z(e){var n=e.links,t=e.action,o=e.heading,d=e.moreLink,u=void 0===d?[]:d,x=e.sx,g=(0,i.Z)(e,m);return(0,h.jsxs)(c.Z,{sx:(0,r.Z)({mb:5},x),children:[(0,h.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,h.jsxs)(c.Z,{sx:{flexGrow:1},children:[(0,h.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,h.jsx)(f,(0,r.Z)({links:n},g))]}),t&&(0,h.jsx)(c.Z,{sx:{flexShrink:0},children:t})]}),(0,h.jsx)(c.Z,{sx:{mt:2},children:a()(u)?(0,h.jsx)(l.Z,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return(0,h.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},55844:function(e,n,t){t.d(n,{$W:function(){return m},K:function(){return b},V7:function(){return u},et:function(){return c},Nl:function(){return S},hM:function(){return g}});var r=t(24076),i=t(67478),o=t(25416),a=t(46417);function c(e){var n=e.isNotFound;return(0,a.jsx)(a.Fragment,{children:n?(0,a.jsx)(r.Z,{children:(0,a.jsx)(i.Z,{colSpan:9,children:(0,a.jsx)(o.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})})}):(0,a.jsx)(r.Z,{children:(0,a.jsx)(i.Z,{colSpan:9,sx:{p:0}})})})}var s=t(47131),l=t(42593),d=t(28100);function u(e){var n=e.actions,t=e.open,r=e.onClose,i=e.onOpen;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{onClick:i,children:(0,a.jsx)(l.Z,{icon:"eva:more-vertical-fill",width:20,height:20})}),(0,a.jsx)(d.Z,{open:Boolean(t),anchorEl:t,onClose:r,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-1,width:160,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:n})]})}var h=t(1413),x=t(35898),f=t(84488);function g(e){var n=Object.assign({},e);return(0,a.jsx)(r.Z,(0,h.Z)((0,h.Z)({},n),{},{children:(0,a.jsx)(i.Z,{colSpan:9,children:(0,a.jsxs)(x.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,a.jsx)(f.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1}}),(0,a.jsx)(f.Z,{variant:"text",width:240,height:20}),(0,a.jsx)(f.Z,{variant:"text",width:160,height:20}),(0,a.jsx)(f.Z,{variant:"text",width:160,height:20}),(0,a.jsx)(f.Z,{variant:"text",width:160,height:20}),(0,a.jsx)(f.Z,{variant:"text",width:160,height:20})]})})}))}function m(e){var n=e.emptyRows,t=e.height;return n?(0,a.jsx)(r.Z,{sx:(0,h.Z)({},t&&{height:t*n}),children:(0,a.jsx)(i.Z,{colSpan:9})}):null}var Z=t(23477),p=t(44758),v=t(82558),j=t(57829),w={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function b(e){var n=e.order,t=e.orderBy,o=e.rowCount,c=void 0===o?0:o,s=e.headLabel,l=e.numSelected,d=void 0===l?0:l,u=e.onSort,x=e.onSelectAllRows,f=e.sx;return(0,a.jsx)(Z.Z,{sx:f,children:(0,a.jsxs)(r.Z,{children:[x&&(0,a.jsx)(i.Z,{padding:"checkbox",children:(0,a.jsx)(p.Z,{indeterminate:d>0&&d<c,checked:c>0&&d===c,onChange:function(e){return x(e.target.checked)}})}),s.map((function(e){return(0,a.jsx)(i.Z,{align:e.align||"left",sortDirection:t===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:u?(0,a.jsxs)(v.Z,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:function(){return u(e.id)},sx:{textTransform:"capitalize"},children:[e.label,t===e.id?(0,a.jsx)(j.Z,{sx:(0,h.Z)({},w),children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var y=t(61113);function S(e){var n=e.dense,t=e.actions,r=e.rowCount,i=e.numSelected,o=e.onSelectAllRows;return(0,a.jsxs)(x.Z,{direction:"row",alignItems:"center",sx:(0,h.Z)({px:2,top:0,right:8,zIndex:9,height:58,borderRadius:1,position:"absolute",width:"calc(100% - 16px)",bgcolor:"primary.lighter"},n&&{pl:1,height:38}),children:[(0,a.jsx)(p.Z,{indeterminate:i>0&&i<r,checked:r>0&&i===r,onChange:function(e){return o(e.target.checked)}}),(0,a.jsxs)(y.Z,{variant:"subtitle1",sx:(0,h.Z)({ml:2,flexGrow:1,color:"primary.main"},n&&{ml:3}),children:[i," selected"]}),t&&t]})}},66429:function(e,n,t){t.d(n,{ZP:function(){return o},sQ:function(){return c},fQ:function(){return s}});var r=t(29439),i=t(47313);function o(e){var n=(0,i.useState)((null===e||void 0===e?void 0:e.defaultDense)||!1),t=(0,r.Z)(n,2),o=t[0],a=t[1],c=(0,i.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),s=(0,r.Z)(c,2),l=s[0],d=s[1],u=(0,i.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),h=(0,r.Z)(u,2),x=h[0],f=h[1],g=(0,i.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),m=(0,r.Z)(g,2),Z=m[0],p=m[1],v=(0,i.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),j=(0,r.Z)(v,2),w=j[0],b=j[1],y=(0,i.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),S=(0,r.Z)(y,2),C=S[0],k=S[1];return{dense:o,order:x,page:Z,setPage:p,orderBy:l,rowsPerPage:w,selected:C,setSelected:k,onSelectRow:function(e){var n=C.indexOf(e),t=[];-1===n?t=t.concat(C,e):0===n?t=t.concat(C.slice(1)):n===C.length-1?t=t.concat(C.slice(0,-1)):n>0&&(t=t.concat(C.slice(0,n),C.slice(n+1))),k(t)},onSelectAllRows:function(e,n){k(e?n:[])},onSort:function(e){""!==e&&(f(l===e&&"asc"===x?"desc":"asc"),d(e))},onChangePage:function(e,n){p(n)},onChangeDense:function(e){a(e.target.checked)},onChangeRowsPerPage:function(e){b(parseInt(e.target.value,10)),p(0)}}}function a(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function c(e,n){return"desc"===e?function(e,t){return a(e,t,n)}:function(e,t){return-a(e,t,n)}}function s(e,n,t){return e>0?Math.max(0,(1+e)*n-t):0}},8451:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var r=t(93433),i=t(29439),o=t(12488),a=t(47313),c=t(29466),s=t(97890),l=t(43265),d=t(69099),u=t(73428),h=t(51629),x=t(61689),f=t(47131),g=t(66835),m=t(57861),Z=t(57829),p=t(91034),v=t(83929),j=t(70024),w=t(5239),b=t(42785),y=t(48175),S=t(11338),C=t(66429),k=t(71361),P=t(42593),R=t(62677),B=t(67871),_=t(55844),D=t(13305),I=t(19860),A=t(24076),L=t(67478),N=t(44758),O=t(61113),E=t(51405),W=t(76221),F=t(86853),z=t(3484),M=t(54285),T=t(46417);function G(e){var n=e.row,t=e.selected,r=e.onEditRow,o=e.onSelectRow,c=e.onDeleteRow,s=(0,M.Z)(),l=(s.user,s.general),d=(0,I.Z)(),u=n.gateway,h=n.createdat,x=n.name,f=n.cover,g=(n.createdAt,n.inventoryType),m=n.amount,Z=(0,a.useState)(null),p=(0,i.Z)(Z,2),v=p[0],j=p[1],w=function(){j(null)};return(0,T.jsxs)(A.Z,{hover:!0,selected:t,children:[(0,T.jsx)(L.Z,{padding:"checkbox",children:(0,T.jsx)(N.Z,{checked:t,onClick:o})}),(0,T.jsxs)(L.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,T.jsx)(z.Z,{disabledEffect:!0,alt:x,src:f,sx:{borderRadius:1.5,width:48,height:48,mr:2}}),(0,T.jsx)(O.Z,{variant:"subtitle2",noWrap:!0,children:u.name})]}),(0,T.jsx)(L.Z,{children:h}),(0,T.jsx)(L.Z,{align:"center",children:(0,T.jsx)(F.Z,{variant:"light"===d.palette.mode?"ghost":"filled",color:("out_of_stock"===g?"error":"low_stock"===g&&"warning")||"success",sx:{textTransform:"capitalize"},children:g?(0,D.G)(g):""})}),(0,T.jsxs)(L.Z,{align:"right",children:[l.cur_sym,(0,W.e_)(m)]}),(0,T.jsx)(L.Z,{align:"right",children:(0,T.jsx)(_.V7,{open:v,onOpen:function(e){j(e.currentTarget)},onClose:w,actions:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(E.Z,{onClick:function(){c(),w()},sx:{color:"error.main"},children:[(0,T.jsx)(P.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,T.jsxs)(E.Z,{onClick:function(){r(),w()},children:[(0,T.jsx)(P.Z,{icon:"eva:edit-fill"}),"Edit"]})]})})})]})}var Q=t(35898),U=t(15082),K=t(41727);function V(e){var n=e.filterName,t=e.onFilterName;return(0,T.jsxs)(Q.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2.5,px:3},children:[(0,T.jsx)(U.Z,{value:n,onChange:function(e){return t(e.target.value)},placeholder:"Search product...",InputProps:{startAdornment:(0,T.jsx)(K.Z,{position:"start",children:(0,T.jsx)(P.Z,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}}),(0,T.jsx)(x.Z,{title:"Filter list",children:(0,T.jsx)(f.Z,{children:(0,T.jsx)(P.Z,{icon:"ic:round-filter-list"})})})]})}var $=[{id:"name",label:"Product",align:"left"},{id:"createdAt",label:"Create at",align:"left"},{id:"inventoryType",label:"Status",align:"center",width:180},{id:"price",label:"Price",align:"right"},{id:""}];function H(){var e=(0,C.ZP)({defaultOrderBy:"createdAt"}),n=e.dense,t=e.page,D=e.order,I=e.orderBy,A=e.rowsPerPage,L=e.setPage,N=e.selected,O=e.setSelected,E=e.onSelectRow,W=e.onSelectAllRows,F=e.onSort,z=e.onChangeDense,M=e.onChangePage,Q=e.onChangeRowsPerPage,U=(0,S.Z)().themeStretch,K=(0,s.s0)(),H=(0,w.I0)(),X=(0,w.v9)((function(e){return e.product})),q=X.products,J=X.isLoading,Y=(0,a.useState)([]),ee=(0,i.Z)(Y,2),ne=ee[0],te=ee[1],re=(0,a.useState)(""),ie=(0,i.Z)(re,2),oe=ie[0],ae=ie[1];(0,a.useEffect)((function(){H((0,b.Xp)())}),[H]),(0,a.useEffect)((function(){q.length&&te(q)}),[q]);var ce=function(e){var n=e.tableData,t=e.comparator,r=e.filterName,i=n.map((function(e,n){return[e,n]}));i.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n=i.map((function(e){return e[0]})),r&&(n=n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(r.toLowerCase())})));return n}({tableData:ne,comparator:(0,C.sQ)(D,I),filterName:oe}),se=n?60:80,le=!ce.length&&!!oe||!J&&!ce.length;return(0,T.jsx)(k.Z,{title:"Ecommerce: Product List",children:(0,T.jsxs)(l.Z,{maxWidth:!U&&"lg",children:[(0,T.jsx)(B.Z,{heading:"Product List",links:[{name:"Dashboard",href:y.vB.root},{name:"E-Commerce",href:y.vB.eCommerce.root},{name:"Product List"}],action:(0,T.jsx)(d.Z,{variant:"contained",startIcon:(0,T.jsx)(P.Z,{icon:"eva:plus-fill"}),component:c.rU,to:y.vB.eCommerce.new,children:"New Product"})}),(0,T.jsxs)(u.Z,{children:[(0,T.jsx)(V,{filterName:oe,onFilterName:function(e){ae(e),L(0)}}),(0,T.jsx)(R.Z,{children:(0,T.jsxs)(h.Z,{sx:{minWidth:800},children:[N.length>0&&(0,T.jsx)(_.Nl,{dense:n,numSelected:N.length,rowCount:ne.length,onSelectAllRows:function(e){return W(e,ne.map((function(e){return e.id})))},actions:(0,T.jsx)(x.Z,{title:"Delete",children:(0,T.jsx)(f.Z,{color:"primary",onClick:function(){return function(e){var n=ne.filter((function(n){return!e.includes(n.id)}));O([]),te(n)}(N)},children:(0,T.jsx)(P.Z,{icon:"eva:trash-2-outline"})})})}),(0,T.jsxs)(g.Z,{size:n?"small":"medium",children:[(0,T.jsx)(_.K,{order:D,orderBy:I,headLabel:$,rowCount:ne.length,numSelected:N.length,onSort:F,onSelectAllRows:function(e){return W(e,ne.map((function(e){return e.id})))}}),(0,T.jsxs)(m.Z,{children:[(J?(0,r.Z)(Array(A)):ce).slice(t*A,t*A+A).map((function(e,n){return e?(0,T.jsx)(G,{row:e,selected:N.includes(e.id),onSelectRow:function(){return E(e.id)},onDeleteRow:function(){return function(e){var n=ne.filter((function(n){return n.id!==e}));O([]),te(n)}(e.id)},onEditRow:function(){return n=e.name,void K(y.vB.eCommerce.edit((0,o.o)(n)));var n}},e.id):!le&&(0,T.jsx)(_.hM,{sx:{height:se}},n)})),(0,T.jsx)(_.$W,{height:se,emptyRows:(0,C.fQ)(t,A,ne.length)}),(0,T.jsx)(_.et,{isNotFound:le})]})]})]})}),(0,T.jsxs)(Z.Z,{sx:{position:"relative"},children:[(0,T.jsx)(p.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:ce.length,rowsPerPage:A,page:t,onPageChange:M,onRowsPerPageChange:Q}),(0,T.jsx)(v.Z,{control:(0,T.jsx)(j.Z,{checked:n,onChange:z}),label:"Dense",sx:{px:3,py:1.5,top:0,position:{md:"absolute"}}})]})]})]})})}},12488:function(e,n,t){t.d(n,{o:function(){return o}});var r=t(66797),i=t(26675);function o(e,n){return void 0===n&&(n={}),function(e,n){return void 0===n&&(n={}),(0,i.B)(e,(0,r.pi)({delimiter:"."},n))}(e,(0,r.pi)({delimiter:"-"},n))}},13305:function(e,n,t){t.d(n,{G:function(){return c}});var r=t(66797),i=t(26675),o=t(36815);function a(e,n){var t=e.toLowerCase();return 0===n?(0,o.l)(t):t}function c(e,n){return void 0===n&&(n={}),(0,i.B)(e,(0,r.pi)({delimiter:" ",transform:a},n))}},36815:function(e,n,t){function r(e){return e.charAt(0).toUpperCase()+e.substr(1)}t.d(n,{l:function(){return r}})}}]);