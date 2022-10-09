"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[1555],{11004:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(45987),i=n(1413),o=n(47313),a=n(68278),s=n(19860),c=n(17551),l=n(70499),d=n(61113),u=n(46417),h=["images","photoIndex","setPhotoIndex","isOpen"];function x(){var e=(0,s.Z)(),t="rtl"===e.direction,n=e.palette.grey[600].replace("#",""),r=function(e){return"url(https://api.iconify.design/carbon/".concat(e,".svg?color=%23").concat(n,"&width=").concat(32,"&height=").concat(32,")")},o=function(t){return{opacity:1,alignItems:"center",display:"inline-flex",justifyContent:"center",backgroundImage:"unset",backgroundColor:"transparent",transition:e.transitions.create("opacity"),"&:before":{display:"block",width:32,height:32,content:r(t)},"&:hover":{opacity:.72}}};return(0,u.jsx)(l.Z,{styles:{"& .ReactModalPortal":{"& .ril__outer":{backgroundColor:(0,c.Fq)(e.palette.grey[900],.96)},"& .ril__toolbar":{height:"auto !important",padding:e.spacing(2,3),backgroundColor:"transparent"},"& .ril__toolbarLeftSide":{display:"none"},"& .ril__toolbarRightSide":{height:"auto !important",padding:0,flexGrow:1,display:"flex",alignItems:"center","& li":{display:"flex",alignItems:"center"},"& li:first-of-type":{flexGrow:1},"& li:not(:first-of-type)":{width:40,height:40,justifyContent:"center",marginLeft:e.spacing(2)}},"& button:focus":{outline:"none"},"& .ril__toolbarRightSide button":{width:"100%",height:"100%","&.ril__zoomInButton":o("zoom-in"),"&.ril__zoomOutButton":o("zoom-out"),"&.ril__closeButton":o("close")},"& .ril__navButtons":{padding:e.spacing(3),"&.ril__navButtonPrev":(0,i.Z)({right:"auto",left:e.spacing(2)},o(t?"arrow-right":"arrow-left")),"&.ril__navButtonNext":(0,i.Z)({left:"auto",right:e.spacing(2)},o(t?"arrow-left":"arrow-right"))}}}})}function m(e){var t=e.images,n=e.photoIndex,s=e.setPhotoIndex,c=e.isOpen,l=(0,r.Z)(e,h);(0,o.useEffect)((function(){document.body.style.overflow=c?"hidden":"unset"}),[c]);var m=[(0,u.jsx)(d.Z,{variant:"subtitle2",children:"".concat(n+1," / ").concat(t.length)})];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x,{}),c&&(0,u.jsx)(a.Z,(0,i.Z)({animationDuration:160,nextSrc:t[(n+1)%t.length],prevSrc:t[(n+t.length-1)%t.length],onMovePrevRequest:function(){return s((n+t.length-1)%t.length)},onMoveNextRequest:function(){return s((n+1)%t.length)},toolbarButtons:m,reactModalStyle:{overlay:{zIndex:9999}}},l))]})}},44968:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(4942),i=n(1413),o=n(33486),a=n(77758),s=n(88564),c=n(61113),l=n(19536),d=n(47723),u=n(3484),h=n(46417),x=(0,s.ZP)("div")((function(e){var t,n=e.theme,o="light"===n.palette.mode;return{"& ul, & ol":(0,i.Z)((0,i.Z)({},n.typography.body1),{},{paddingLeft:n.spacing(5),"& li":{lineHeight:2}}),"& blockquote":(t={lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:n.spacing(3,3,3,8),borderRadius:2*Number(n.shape.borderRadius),backgroundColor:n.palette.background.neutral,color:"".concat(n.palette.text.secondary," !important")},(0,r.Z)(t,n.breakpoints.up("md"),{width:"80%"}),(0,r.Z)(t,"& p, & span",{marginBottom:"0 !important",fontSize:"inherit !important",fontFamily:"Georgia, serif !important",color:"".concat(n.palette.text.secondary," !important")}),(0,r.Z)(t,"&:before",{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:n.palette.text.disabled}),t),"& pre, & pre > code":{fontSize:16,overflowX:"auto",whiteSpace:"pre",padding:n.spacing(2),color:n.palette.common.white,borderRadius:n.shape.borderRadius,backgroundColor:o?n.palette.grey[900]:n.palette.grey[50016]},"& code":{fontSize:14,borderRadius:4,whiteSpace:"pre",padding:n.spacing(.2,.5),color:n.palette.warning[o?"darker":"lighter"],backgroundColor:n.palette.warning[o?"lighter":"darker"],"&.hljs":{padding:0,backgroundColor:"transparent"}}}}));function m(e){var t=Object.assign({},e);return(0,h.jsx)(x,{children:(0,h.jsx)(o.D,(0,i.Z)({rehypePlugins:[a.Z],components:p},t))})}var p={h1:function(e){var t=Object.assign({},e);return(0,h.jsx)(c.Z,(0,i.Z)({variant:"h1"},t))},h2:function(e){var t=Object.assign({},e);return(0,h.jsx)(c.Z,(0,i.Z)({variant:"h2"},t))},h3:function(e){var t=Object.assign({},e);return(0,h.jsx)(c.Z,(0,i.Z)({variant:"h3"},t))},h4:function(e){var t=Object.assign({},e);return(0,h.jsx)(c.Z,(0,i.Z)({variant:"h4"},t))},h5:function(e){var t=Object.assign({},e);return(0,h.jsx)(c.Z,(0,i.Z)({variant:"h5"},t))},h6:function(e){var t=Object.assign({},e);return(0,h.jsx)(c.Z,(0,i.Z)({variant:"h6"},t))},hr:function(e){var t=Object.assign({},e);return(0,h.jsx)(l.Z,(0,i.Z)({sx:{my:3}},t))},img:function(e){var t=Object.assign({},e);return(0,h.jsx)(u.Z,(0,i.Z)({alt:t.alt,ratio:"16/9",sx:{borderRadius:2,my:5}},t))},a:function(e){var t=Object.assign({},e);return t.href.includes("http")?(0,h.jsx)(d.Z,(0,i.Z)({target:"_blank",rel:"noopener"},t)):(0,h.jsx)(d.Z,(0,i.Z)({},t))}}},40885:function(e,t,n){n.d(t,{cU:function(){return P},i5:function(){return Z},A0:function(){return d}});var r=n(1413),i=n(88564),o=n(57829),a=n(46417),s=(0,i.ZP)(o.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":(0,r.Z)({opacity:1},t&&{"& .dotActive":{width:16,borderRadius:6}})}})),c=(0,i.ZP)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),l=(0,i.ZP)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function d(e){var t=null===e||void 0===e?void 0:e.color,n=(null===e||void 0===e?void 0:e.rounded)||!1;return{appendDots:function(t){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s,(0,r.Z)((0,r.Z)({rounded:n,component:"ul"},e),{},{children:t}))})},customPaging:function(){return(0,a.jsx)(c,{children:(0,a.jsx)(l,{className:"dotActive",sx:{bgcolor:t||"primary.main"}})})}}}var u=n(45987),h=n(19860),x=n(35898),m=n(42593),p=n(57597),g=["filled","customIcon","onNext","onPrevious","children"],f=(0,i.ZP)(p.w_,{shouldForwardProp:function(e){return"filled"!==e}})((function(e){var t=e.filled,n=e.theme;return(0,r.Z)({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:n.palette.text.primary}},t&&{opacity:.48,borderRadius:1.5*Number(n.shape.borderRadius),color:n.palette.common.white,backgroundColor:n.palette.grey[900],"&:hover":{opacity:1,color:n.palette.common.white,backgroundColor:n.palette.grey[900]}})}));function Z(e){var t=e.filled,n=void 0!==t&&t,i=e.customIcon,s=e.onNext,c=e.onPrevious,l=e.children,d=(0,u.Z)(e,g),m="rtl"===(0,h.Z)().direction,p={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return l?(0,a.jsxs)(o.Z,(0,r.Z)((0,r.Z)({},d),{},{children:[(0,a.jsx)(o.Z,{className:"arrow left",sx:(0,r.Z)((0,r.Z)({},p),{},{left:0}),children:(0,a.jsx)(f,{filled:n,onClick:c,children:v(i,m)})}),l,(0,a.jsx)(o.Z,{className:"arrow right",sx:(0,r.Z)((0,r.Z)({},p),{},{right:0}),children:(0,a.jsx)(f,{filled:n,onClick:s,children:j(i,m)})})]})):(0,a.jsxs)(x.Z,(0,r.Z)((0,r.Z)({direction:"row",spacing:1},d),{},{children:[(0,a.jsx)(f,{className:"arrow left",filled:n,onClick:c,children:v(i,m)}),(0,a.jsx)(f,{className:"arrow right",filled:n,onClick:s,children:j(i,m)})]}))}var v=function(e,t){return(0,a.jsx)(m.Z,{icon:e||"eva:arrow-right-fill",sx:(0,r.Z)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},j=function(e,t){return(0,a.jsx)(m.Z,{icon:e||"eva:arrow-right-fill",sx:(0,r.Z)({width:20,height:20},t&&{transform:" scaleX(-1)"})})},b=n(17551),y=n(47131),w=n(61113),k=["index","total","onNext","onPrevious","customIcon"],C=(0,i.ZP)(o.Z)((function(e){var t=e.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:(0,b.Fq)(t.palette.grey[900],.48)}})),I=(0,i.ZP)(y.Z)((function(e){return{padding:6,opacity:.48,color:e.theme.palette.common.white,"&:hover":{opacity:1}}}));function P(e){var t=e.index,n=e.total,i=e.onNext,o=e.onPrevious,s=e.customIcon,c=(0,u.Z)(e,k),l="rtl"===(0,h.Z)().direction;return(0,a.jsxs)(C,(0,r.Z)((0,r.Z)({},c),{},{children:[(0,a.jsx)(I,{size:"small",onClick:o,children:S(s,l)}),(0,a.jsxs)(w.Z,{variant:"subtitle2",children:[t+1,"/",n]}),(0,a.jsx)(I,{size:"small",onClick:i,children:R(s,l)})]}))}var S=function(e,t){return(0,a.jsx)(m.Z,{icon:e||"eva:arrow-right-fill",sx:(0,r.Z)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},R=function(e,t){return(0,a.jsx)(m.Z,{icon:e||"eva:arrow-right-fill",sx:(0,r.Z)({width:20,height:20},t&&{transform:" scaleX(-1)"})})}},41555:function(e,t,n){n.r(t),n.d(t,{default:function(){return _e}});var r=n(29439),i=n(13305),o=n(97890),a=n(47313),s=n(88564),c=n(17551),l=n(43265),d=n(73428),u=n(9019),h=n(57829),x=n(61113),m=n(65280),p=n(19536),g=n(94638),f=n(50373),Z=n(71673),v=n(5239),j=n(42785),b=n(48175),y=n(11338),w=n(71361),k=n(42593),C=n(44968),I=n(80120),P=n(67871),S=n(65033),R=n(1413),_=n(15861),z=n(45987),q=n(87757),N=n.n(q),O=n(28089),W=n(75627),B=n(1432),A=n(35898),F=n(55942),D=n(15480),T=n(69099),G=n(32703),E=n(40844),X=n(46417),M=["onClose","id"],Q=(0,s.ZP)("div")((function(e){var t=e.theme;return{margin:t.spacing(3),padding:t.spacing(3),borderRadius:2*Number(t.shape.borderRadius),backgroundColor:t.palette.background.neutral}}));function H(e){var t,n=e.onClose,r=e.id,i=(0,z.Z)(e,M),o=O.Ry().shape({rating:O.nK().required("Rating is required"),review:O.Z_().required("Review is required"),name:O.Z_().required("Name is required"),email:O.Z_().email("Email must be a valid email address").required("Email is required")}),a=(0,W.cI)({resolver:(0,B.X)(o),defaultValues:{rating:null,review:"",name:"",email:""}}),s=a.reset,c=a.control,l=a.handleSubmit,d=a.formState,u=d.errors,h=d.isSubmitting,m=function(){var e=(0,_.Z)(N().mark((function e(){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:s(),n(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,X.jsxs)(Q,(0,R.Z)((0,R.Z)({},i),{},{id:r,children:[(0,X.jsx)(x.Z,{variant:"subtitle1",gutterBottom:!0,children:"Add Review"}),(0,X.jsx)(E.RV,{methods:a,onSubmit:l(m),children:(0,X.jsxs)(A.Z,{spacing:3,children:[(0,X.jsxs)("div",{children:[(0,X.jsxs)(A.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",spacing:1.5,children:[(0,X.jsx)(x.Z,{variant:"body2",children:"Your review about this product:"}),(0,X.jsx)(W.Qr,{name:"rating",control:c,render:function(e){var t=e.field;return(0,X.jsx)(F.Z,(0,R.Z)((0,R.Z)({},t),{},{value:Number(t.value)}))}})]}),!!u.rating&&(0,X.jsxs)(D.Z,{error:!0,children:[" ",null===(t=u.rating)||void 0===t?void 0:t.message]})]}),(0,X.jsx)(E.au,{name:"review",label:"Review *",multiline:!0,rows:3}),(0,X.jsx)(E.au,{name:"name",label:"Name *"}),(0,X.jsx)(E.au,{name:"email",label:"Email *"}),(0,X.jsxs)(A.Z,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:[(0,X.jsx)(T.Z,{color:"inherit",variant:"outlined",onClick:function(){n(),s()},children:"Cancel"}),(0,X.jsx)(G.Z,{type:"submit",variant:"contained",loading:h,children:"Post review"})]})]})})]}))}var V=n(48310),L=n(74312),U=n(67216),Y=n(63585),K=n(61484),$=n(76221);function J(e){var t=e.product.reviews;return(0,X.jsxs)(h.Z,{sx:{pt:3,px:2,pb:5},children:[(0,X.jsx)(V.Z,{disablePadding:!0,children:t.map((function(e){return(0,X.jsx)(ee,{review:e},e.id)}))}),(0,X.jsx)(h.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:(0,X.jsx)(L.Z,{count:10,color:"primary"})})]})}function ee(e){var t=e.review,n=(0,a.useState)(!1),i=(0,r.Z)(n,2),o=i[0],s=i[1],c=t.name,l=t.rating,d=t.comment,u=t.helpful,m=t.postedAt,p=t.avatarUrl,g=t.isPurchased;return(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(U.ZP,{disableGutters:!0,sx:{mb:5,alignItems:"flex-start",flexDirection:{xs:"column",sm:"row"}},children:[(0,X.jsxs)(h.Z,{sx:{mr:2,display:"flex",alignItems:"center",mb:{xs:2,sm:0},minWidth:{xs:160,md:240},textAlign:{sm:"center"},flexDirection:{sm:"column"}},children:[(0,X.jsx)(Y.Z,{src:p,sx:{mr:{xs:2,sm:0},mb:{sm:2},width:{md:64},height:{md:64}}}),(0,X.jsxs)("div",{children:[(0,X.jsx)(x.Z,{variant:"subtitle2",noWrap:!0,children:c}),(0,X.jsx)(x.Z,{variant:"caption",sx:{color:"text.secondary"},noWrap:!0,children:(0,K.Mu)(m)})]})]}),(0,X.jsxs)("div",{children:[(0,X.jsx)(F.Z,{size:"small",value:l,precision:.1,readOnly:!0}),g&&(0,X.jsxs)(x.Z,{variant:"caption",sx:{my:1,display:"flex",alignItems:"center",color:"primary.main"},children:[(0,X.jsx)(k.Z,{icon:"ic:round-verified",width:16,height:16}),"\xa0Verified purchase"]}),(0,X.jsx)(x.Z,{variant:"body2",children:d}),(0,X.jsxs)(h.Z,{sx:{mt:1,display:"flex",flexWrap:"wrap",alignItems:"center"},children:[!o&&(0,X.jsx)(x.Z,{variant:"body2",sx:{mr:1},children:"Was this review helpful to you?"}),(0,X.jsxs)(T.Z,{size:"small",color:"inherit",startIcon:(0,X.jsx)(k.Z,{icon:o?"eva:checkmark-fill":"ic:round-thumb-up"}),onClick:function(){s((function(e){return!e}))},children:[o?"Helpful":"Thank","(",(0,$.v1)(o?u+1:u),")"]})]})]})]})})}var te=n(4942),ne=n(88718),re=n.n(ne),ie=n(47723),oe=n(79176),ae=(0,s.ZP)(F.Z)((function(e){return{marginBottom:e.theme.spacing(1)}})),se=(0,s.ZP)(u.ZP)((function(e){var t=e.theme;return{padding:t.spacing(3),display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center","&:nth-of-type(2)":(0,te.Z)({},t.breakpoints.up("md"),{borderLeft:"solid 1px ".concat(t.palette.divider),borderRight:"solid 1px ".concat(t.palette.divider)})}}));function ce(e){var t=e.product,n=e.onOpen,r=t.totalRating,i=t.totalReview,o=t.ratings,a=re()(o,(function(e){return e.starCount}));return(0,X.jsxs)(u.ZP,{container:!0,children:[(0,X.jsxs)(se,{item:!0,xs:12,md:4,children:[(0,X.jsx)(x.Z,{variant:"subtitle1",gutterBottom:!0,children:"Average rating"}),(0,X.jsxs)(x.Z,{variant:"h2",gutterBottom:!0,sx:{color:"error.main"},children:[r,"/5"]}),(0,X.jsx)(ae,{readOnly:!0,value:r,precision:.1}),(0,X.jsxs)(x.Z,{variant:"body2",sx:{color:"text.secondary"},children:["(",(0,$.v1)(i),"\xa0reviews)"]})]}),(0,X.jsx)(se,{item:!0,xs:12,md:4,children:(0,X.jsx)(A.Z,{spacing:1.5,sx:{width:1},children:o.slice(0).reverse().map((function(e){return(0,X.jsx)(le,{star:e,total:a},e.name)}))})}),(0,X.jsx)(se,{item:!0,xs:12,md:4,children:(0,X.jsx)(ie.Z,{href:"#move_add_review",underline:"none",children:(0,X.jsx)(T.Z,{size:"large",onClick:n,variant:"outlined",startIcon:(0,X.jsx)(k.Z,{icon:"eva:edit-2-fill"}),children:"Write your review"})})})]})}function le(e){var t=e.star,n=e.total,r=t.name,i=t.starCount,o=t.reviewCount;return(0,X.jsxs)(A.Z,{direction:"row",alignItems:"center",spacing:1.5,children:[(0,X.jsx)(x.Z,{variant:"subtitle2",children:r}),(0,X.jsx)(oe.Z,{variant:"determinate",value:i/n*100,sx:{mx:2,flexGrow:1,bgcolor:"divider"}}),(0,X.jsx)(x.Z,{variant:"body2",sx:{color:"text.secondary",minWidth:64,textAlign:"right"},children:(0,$.v1)(o)})]})}function de(e){var t=e.product,n=(0,a.useState)(!1),i=(0,r.Z)(n,2),o=i[0],s=i[1];return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(ce,{product:t,onOpen:function(){s((function(e){return!e}))}}),(0,X.jsx)(p.Z,{}),(0,X.jsxs)(S.Z,{in:o,children:[(0,X.jsx)(H,{onClose:function(){s(!1)},id:"move_add_review"}),(0,X.jsx)(p.Z,{})]}),(0,X.jsx)(J,{product:t})]})}var ue=n(19860),he=n(47131),xe=n(86853),me=n(26746),pe=n(50574),ge=["cart","product","onAddCart","onGotoStep"],fe=(0,s.ZP)("div")((function(e){var t=e.theme;return(0,te.Z)({padding:t.spacing(3)},t.breakpoints.up(1368),{padding:t.spacing(5,8)})}));function Ze(e){var t=e.cart,n=e.product,r=e.onAddCart,a=e.onGotoStep,s=(0,z.Z)(e,ge),c=(0,ue.Z)(),l=(0,o.s0)(),d=n.id,u=n.name,m=n.sizes,g=n.price,f=n.cover,Z=n.status,v=n.colors,j=n.available,y=n.priceSale,w=n.totalRating,C=n.totalReview,I=n.inventoryType,P=t.map((function(e){return e.id})).includes(d),S=t.filter((function(e){return e.id===d})).map((function(e){return e.quantity}))[0]>=j,q={id:d,name:u,cover:f,available:j,price:g,color:v[0],size:m[4],quantity:j<1?0:1},O=(0,W.cI)({defaultValues:q}),B=O.watch,D=O.control,G=O.setValue,M=O.handleSubmit,Q=B(),H=function(){var e=(0,_.Z)(N().mark((function e(t){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{P||r((0,R.Z)((0,R.Z)({},t),{},{subtotal:t.price*t.quantity})),a(0),l(b.vB.eCommerce.checkout)}catch(n){console.error(n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=(0,_.Z)(N().mark((function e(){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{r((0,R.Z)((0,R.Z)({},Q),{},{subtotal:Q.price*Q.quantity}))}catch(t){console.error(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,X.jsx)(fe,(0,R.Z)((0,R.Z)({},s),{},{children:(0,X.jsxs)(E.RV,{methods:O,onSubmit:M(H),children:[(0,X.jsx)(xe.Z,{variant:"light"===c.palette.mode?"ghost":"filled",color:"in_stock"===I?"success":"error",sx:{textTransform:"uppercase"},children:(0,i.G)(I||"")}),(0,X.jsx)(x.Z,{variant:"overline",sx:{mt:2,mb:1,display:"block",color:"sale"===Z?"error.main":"info.main"},children:Z}),(0,X.jsx)(x.Z,{variant:"h5",paragraph:!0,children:u}),(0,X.jsxs)(A.Z,{direction:"row",alignItems:"center",spacing:1,sx:{mb:2},children:[(0,X.jsx)(F.Z,{value:w,precision:.1,readOnly:!0}),(0,X.jsxs)(x.Z,{variant:"body2",sx:{color:"text.secondary"},children:["(",(0,$.v1)(C),"reviews)"]})]}),(0,X.jsxs)(x.Z,{variant:"h4",sx:{mb:3},children:[(0,X.jsx)(h.Z,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through"},children:y&&(0,$.e_)(y)}),"\xa0",(0,$.e_)(g)]}),(0,X.jsx)(p.Z,{sx:{borderStyle:"dashed"}}),(0,X.jsxs)(A.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{my:3},children:[(0,X.jsx)(x.Z,{variant:"subtitle1",sx:{mt:.5},children:"Color"}),(0,X.jsx)(W.Qr,{name:"color",control:D,render:function(e){var t=e.field;return(0,X.jsx)(pe.tR,{colors:v,value:t.value,onChange:t.onChange,sx:(0,R.Z)({},v.length>4&&{maxWidth:144,justifyContent:"flex-end"})})}})]}),(0,X.jsxs)(A.Z,{direction:"row",justifyContent:"space-between",sx:{mb:3},children:[(0,X.jsx)(x.Z,{variant:"subtitle1",sx:{mt:.5},children:"Size"}),(0,X.jsx)(E.Cc,{name:"size",size:"small",fullWidth:!1,FormHelperTextProps:{sx:{textAlign:"right",margin:0,mt:1}},helperText:(0,X.jsx)(ie.Z,{underline:"always",color:"text.secondary",children:"Size Chart"}),children:m.map((function(e){return(0,X.jsx)("option",{value:e,children:e},e)}))})]}),(0,X.jsxs)(A.Z,{direction:"row",justifyContent:"space-between",sx:{mb:3},children:[(0,X.jsx)(x.Z,{variant:"subtitle1",sx:{mt:.5},children:"Quantity"}),(0,X.jsxs)("div",{children:[(0,X.jsx)(ve,{name:"quantity",quantity:Q.quantity,available:j,onIncrementQuantity:function(){return G("quantity",Q.quantity+1)},onDecrementQuantity:function(){return G("quantity",Q.quantity-1)}}),(0,X.jsxs)(x.Z,{variant:"caption",component:"div",sx:{mt:1,textAlign:"right",color:"text.secondary"},children:["Available: ",j]})]})]}),(0,X.jsx)(p.Z,{sx:{borderStyle:"dashed"}}),(0,X.jsxs)(A.Z,{direction:"row",spacing:2,sx:{mt:5},children:[(0,X.jsx)(T.Z,{fullWidth:!0,disabled:S,size:"large",color:"warning",variant:"contained",startIcon:(0,X.jsx)(k.Z,{icon:"ic:round-add-shopping-cart"}),onClick:V,sx:{whiteSpace:"nowrap"},children:"Add to Cart"}),(0,X.jsx)(T.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Buy Now"})]}),(0,X.jsx)(A.Z,{alignItems:"center",sx:{mt:3},children:(0,X.jsx)(me.Z,{initialColor:!0})})]})}))}function ve(e){var t=e.available,n=e.quantity,r=e.onIncrementQuantity,i=e.onDecrementQuantity;return(0,X.jsxs)(h.Z,{sx:{py:.5,px:.75,border:1,lineHeight:0,borderRadius:1,display:"flex",alignItems:"center",borderColor:"grey.50032"},children:[(0,X.jsx)(he.Z,{size:"small",color:"inherit",disabled:n<=1,onClick:i,children:(0,X.jsx)(k.Z,{icon:"eva:minus-fill",width:14,height:14})}),(0,X.jsx)(x.Z,{variant:"body2",component:"span",sx:{width:40,textAlign:"center"},children:n}),(0,X.jsx)(he.Z,{size:"small",color:"inherit",disabled:n>=t,onClick:r,children:(0,X.jsx)(k.Z,{icon:"eva:plus-fill",width:14,height:14})})]})}var je=n(44021),be=n(3484),ye=n(11004),we=n(40885),ke=64,Ce=(0,s.ZP)("div")((function(e){return{"& .slick-slide":{float:"rtl"===e.theme.direction?"right":"left","&:focus":{outline:"none"}}}}));function Ie(e){var t=e.product,n=(0,a.useState)(!1),i=(0,r.Z)(n,2),o=i[0],s=i[1],l=(0,a.useState)(0),d=(0,r.Z)(l,2),u=d[0],x=d[1],m=(0,a.useState)(0),p=(0,r.Z)(m,2),g=p[0],f=p[1],Z=(0,a.useState)(),v=(0,r.Z)(Z,2),j=v[0],b=v[1],y=(0,a.useState)(),w=(0,r.Z)(y,2),k=w[0],C=w[1],I=(0,a.useRef)(null),P=(0,a.useRef)(null),S=t.images.map((function(e){return e})),_={dots:!1,arrows:!1,slidesToShow:1,draggable:!1,slidesToScroll:1,adaptiveHeight:!0,beforeChange:function(e,t){return f(t)}},z={dots:!1,arrows:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:t.images.length>3?3:t.images.length};(0,a.useEffect)((function(){I.current&&b(I.current),P.current&&C(P.current)}),[]);return(0,X.jsxs)(Ce,{children:[(0,X.jsx)(h.Z,{sx:{p:1},children:(0,X.jsxs)(h.Z,{sx:{zIndex:0,borderRadius:2,overflow:"hidden",position:"relative"},children:[(0,X.jsx)(je.Z,(0,R.Z)((0,R.Z)({},_),{},{asNavFor:k,ref:I,children:t.images.map((function(e){return(0,X.jsx)(be.Z,{alt:"large image",src:e,ratio:"1/1",onClick:function(){return function(e){var t=S.findIndex((function(t){return t===e}));s(!0),x(t)}(e)},sx:{cursor:"zoom-in"}},e)}))})),(0,X.jsx)(we.cU,{index:g,total:t.images.length,onNext:function(){var e;null===(e=P.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=P.current)||void 0===e||e.slickPrev()}})]})}),(0,X.jsx)(h.Z,{sx:(0,R.Z)((0,R.Z)((0,R.Z)((0,R.Z)((0,R.Z)((0,R.Z)({my:3,mx:"auto","& .slick-current .isActive":{opacity:1}},1===t.images.length&&{maxWidth:80}),2===t.images.length&&{maxWidth:160}),3===t.images.length&&{maxWidth:240}),4===t.images.length&&{maxWidth:240}),t.images.length>=5&&{maxWidth:384}),t.images.length>2&&{position:"relative","&:before, &:after":{top:0,zIndex:9,content:"''",height:"100%",position:"absolute",width:128/3,backgroundImage:function(e){return"linear-gradient(to left, ".concat((0,c.Fq)(e.palette.background.paper,0)," 0%, ").concat(e.palette.background.paper," 100%)")}},"&:after":{right:0,transform:"scaleX(-1)"}}),children:(0,X.jsx)(je.Z,(0,R.Z)((0,R.Z)({},z),{},{asNavFor:j,ref:P,children:t.images.map((function(e,t){return(0,X.jsx)(h.Z,{sx:{px:.75},children:(0,X.jsx)(be.Z,{disabledEffect:!0,alt:"thumb image",src:e,sx:(0,R.Z)({width:ke,height:ke,borderRadius:1.5,cursor:"pointer"},g===t&&{border:function(e){return"solid 3px ".concat(e.palette.primary.main)}})})},e)}))}))}),(0,X.jsx)(ye.Z,{images:S,mainSrc:S[u],photoIndex:u,setPhotoIndex:x,isOpen:o,onCloseRequest:function(){return s(!1)}})]})}var Pe=n(65794),Se=[{title:"100% Original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"ic:round-verified"},{title:"10 Day Replacement",description:"Marshmallow biscuit donut drag\xe9e fruitcake wafer.",icon:"eva:clock-fill"},{title:"Year Warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"ic:round-verified-user"}],Re=(0,s.ZP)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),justifyContent:"center",height:t.spacing(8),marginBottom:t.spacing(3),color:t.palette.primary.main,backgroundColor:"".concat((0,c.Fq)(t.palette.primary.main,.08))}}));function _e(){var e=(0,y.Z)().themeStretch,t=(0,v.I0)(),n=(0,a.useState)("1"),s=(0,r.Z)(n,2),c=s[0],S=s[1],R=(0,o.UO)().name,_=void 0===R?"":R,z=(0,v.v9)((function(e){return e.product})),q=z.product,N=z.error,O=z.checkout;(0,a.useEffect)((function(){t((0,j.wv)(_))}),[t,_]);return(0,X.jsx)(w.Z,{title:"Ecommerce: Product Details",children:(0,X.jsxs)(l.Z,{maxWidth:!e&&"lg",children:[(0,X.jsx)(P.Z,{heading:"Product Details",links:[{name:"Dashboard",href:b.vB.root},{name:"E-Commerce",href:b.vB.eCommerce.root},{name:"Shop",href:b.vB.eCommerce.shop},{name:(0,i.G)(_)}]}),(0,X.jsx)(Pe.Z,{}),q&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(d.Z,{children:(0,X.jsxs)(u.ZP,{container:!0,children:[(0,X.jsx)(u.ZP,{item:!0,xs:12,md:6,lg:7,children:(0,X.jsx)(Ie,{product:q})}),(0,X.jsx)(u.ZP,{item:!0,xs:12,md:6,lg:5,children:(0,X.jsx)(Ze,{product:q,cart:O.cart,onAddCart:function(e){t((0,j.Z5)(e))},onGotoStep:function(e){t((0,j.$w)(e))}})})]})}),(0,X.jsx)(u.ZP,{container:!0,sx:{my:8},children:Se.map((function(e){return(0,X.jsx)(u.ZP,{item:!0,xs:12,md:4,children:(0,X.jsxs)(h.Z,{sx:{my:2,mx:"auto",maxWidth:280,textAlign:"center"},children:[(0,X.jsx)(Re,{children:(0,X.jsx)(k.Z,{icon:e.icon,width:36,height:36})}),(0,X.jsx)(x.Z,{variant:"subtitle1",gutterBottom:!0,children:e.title}),(0,X.jsx)(x.Z,{sx:{color:"text.secondary"},children:e.description})]})},e.title)}))}),(0,X.jsx)(d.Z,{children:(0,X.jsxs)(g.ZP,{value:c,children:[(0,X.jsx)(h.Z,{sx:{px:3,bgcolor:"background.neutral"},children:(0,X.jsxs)(f.Z,{onChange:function(e,t){return S(t)},children:[(0,X.jsx)(m.Z,{disableRipple:!0,value:"1",label:"Description"}),(0,X.jsx)(m.Z,{disableRipple:!0,value:"2",label:"Review (".concat(q.reviews.length,")"),sx:{"& .MuiTab-wrapper":{whiteSpace:"nowrap"}}})]})}),(0,X.jsx)(p.Z,{}),(0,X.jsx)(Z.Z,{value:"1",children:(0,X.jsx)(h.Z,{sx:{p:3},children:(0,X.jsx)(C.Z,{children:q.description})})}),(0,X.jsx)(Z.Z,{value:"2",children:(0,X.jsx)(de,{product:q})})]})})]}),!q&&(0,X.jsx)(I.Ti,{}),N&&(0,X.jsx)(x.Z,{variant:"h6",children:"404 Product not found"})]})})}}}]);