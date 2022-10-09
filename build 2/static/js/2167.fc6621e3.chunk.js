"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[2167],{12167:function(e,r,n){n.r(r),n.d(r,{default:function(){return W}});var i=n(4942),t=n(29466),a=n(88564),s=n(73428),l=n(61113),d=n(47723),o=n(43265),c=n(57829),m=n(54285),u=n(66281),x=n(48175),h=n(71361),f=n(53449),p=n(3484),Z=n(1413),g=n(15861),j=n(29439),b=n(87757),v=n.n(b),y=n(28089),w=n(47313),_=n(75627),q=n(1432),k=n(35898),P=n(99881),E=n(41727),S=n(47131),C=n(32703),I=n(58434),A=n(42593),L=n(40844),R=n(46417);function U(){var e=(0,m.Z)().register,r=(0,I.Z)(),n=(0,w.useState)(!1),i=(0,j.Z)(n,2),t=i[0],a=i[1],s=y.Ry().shape({firstname:y.Z_().required("First name required"),lastname:y.Z_().required("Last name required"),username:y.Z_().required("Username required"),mobile:y.Z_().required("Phone Number required"),email:y.Z_().email("Email must be a valid email address").required("Email is required"),password:y.Z_().required("Password is required")}),l=(0,_.cI)({resolver:(0,q.X)(s),defaultValues:{firstname:"",lastname:"",email:"",mobile:"",username:"",password:""}}),d=l.reset,o=l.setError,c=l.handleSubmit,u=l.formState,x=u.errors,h=u.isSubmitting,f=function(){var n=(0,g.Z)(v().mark((function n(i){return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e(i.email,i.mobile,i.username,i.password,i.firstname,i.lastname);case 3:n.next=10;break;case 5:n.prev=5,n.t0=n.catch(0),console.error(n.t0),d(),r.current&&o("afterSubmit",(0,Z.Z)((0,Z.Z)({},n.t0),{},{message:n.t0.message}));case 10:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}();return(0,R.jsx)(L.RV,{methods:l,onSubmit:c(f),children:(0,R.jsxs)(k.Z,{spacing:3,children:[!!x.afterSubmit&&(0,R.jsx)(P.Z,{severity:"error",children:x.afterSubmit.message}),(0,R.jsxs)(k.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,R.jsx)(L.au,{name:"firstname",label:"First name"}),(0,R.jsx)(L.au,{name:"lastname",label:"Last name"})]}),(0,R.jsxs)(k.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,R.jsx)(L.au,{name:"email",label:"Email address"}),(0,R.jsx)(L.au,{name:"mobile",label:"Phone Number"})]}),(0,R.jsxs)(k.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,R.jsx)(L.au,{name:"username",label:"Username"}),(0,R.jsx)(L.au,{name:"password",label:"Password",type:t?"text":"password",InputProps:{endAdornment:(0,R.jsx)(E.Z,{position:"end",children:(0,R.jsx)(S.Z,{edge:"end",onClick:function(){return a(!t)},children:(0,R.jsx)(A.Z,{icon:t?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),(0,R.jsx)(C.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:h,children:"Register"})]})})}var B=(0,a.ZP)("div")((function(e){var r=e.theme;return(0,i.Z)({},r.breakpoints.up("md"),{display:"flex"})})),D=(0,a.ZP)("header")((function(e){var r=e.theme;return(0,i.Z)({top:0,zIndex:9,lineHeight:0,width:"100%",display:"flex",alignItems:"center",position:"absolute",padding:r.spacing(3),justifyContent:"space-between"},r.breakpoints.up("md"),{alignItems:"flex-start",padding:r.spacing(7,5,0,7)})})),F=(0,a.ZP)(s.Z)((function(e){return{width:"100%",maxWidth:464,display:"flex",flexDirection:"column",justifyContent:"center",margin:e.theme.spacing(2,0,2,2)}})),N=(0,a.ZP)("div")((function(e){return{maxWidth:480,margin:"auto",display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(12,0)}}));function W(){(0,m.Z)().method;var e=(0,u.Z)("up","sm"),r=(0,u.Z)("up","md");return(0,R.jsx)(h.Z,{title:"Register",children:(0,R.jsxs)(B,{children:[(0,R.jsxs)(D,{children:[(0,R.jsx)(f.Z,{}),e&&(0,R.jsxs)(l.Z,{variant:"body2",sx:{mt:{md:-2}},children:["Already have an account?"," ",(0,R.jsx)(d.Z,{variant:"subtitle2",component:t.rU,to:x.EE.login,children:"Login"})]})]}),r&&(0,R.jsxs)(F,{children:[(0,R.jsx)(l.Z,{variant:"h3",sx:{px:5,mt:10,mb:5},children:"Create a free account to start"}),(0,R.jsx)(p.Z,{visibleByDefault:!0,disabledEffect:!0,alt:"register",src:"/images/illustration_register.png"})]}),(0,R.jsx)(o.Z,{children:(0,R.jsxs)(N,{children:[(0,R.jsx)(c.Z,{sx:{mb:5,display:"flex",alignItems:"center"},children:(0,R.jsxs)(c.Z,{sx:{flexGrow:1},children:[(0,R.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:"Get started absolutely free."}),(0,R.jsx)(l.Z,{sx:{color:"text.secondary"},children:"Free forever. No credit card needed."})]})}),(0,R.jsx)(U,{}),(0,R.jsxs)(l.Z,{variant:"body2",align:"center",sx:{color:"text.secondary",mt:3},children:["By registering, I agree to our\xa0",(0,R.jsx)(d.Z,{underline:"always",color:"text.primary",href:"#",children:"Terms of Service"}),"\xa0 and\xa0",(0,R.jsx)(d.Z,{underline:"always",color:"text.primary",href:"#",children:"Privacy Policy"}),"."]}),!e&&(0,R.jsxs)(l.Z,{variant:"body2",sx:{mt:3,textAlign:"center"},children:["Already have an account?"," ",(0,R.jsx)(d.Z,{variant:"subtitle2",to:x.EE.login,component:t.rU,children:"Login"})]})]})})]})})}}}]);