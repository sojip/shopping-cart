(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},30:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(20),r=n.n(a),s=(n(27),n(11)),j=n(9),d=n(7),u=(n(28),n(17)),o=n.n(u),b=n(21),l=(n(30),n(0)),O=function(t){return Object(l.jsxs)("div",{className:"items",id:t.id,children:[Object(l.jsx)("div",{className:"imgContainer",children:Object(l.jsx)("img",{src:t.data.image,alt:""})}),Object(l.jsx)("p",{children:t.data.title}),Object(l.jsxs)("span",{children:["$",t.data.price]}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:t.addToCart,children:"Add To Cart"})]})};n(32);var h=function(t){var e=Object(c.useState)([]),n=Object(d.a)(e,2),i=n[0],a=n[1],r=Object(c.useState)(!1),s=Object(d.a)(r,2),u=s[0],h=s[1];Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fakestoreapi.com/products");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}h(!0);var n=t.transferDatas;(function(){return e.apply(this,arguments)})().then((function(t){a(Object(j.a)(t)),h(!1),n(t)}))}),[]);var x=i.map((function(e){return Object(l.jsx)(O,{id:e.id,data:e,addToCart:t.addToCart},e.id)}));return u?Object(l.jsx)("div",{style:{textAlign:"center",position:"absolute",top:"0",width:"100%",height:"100vh",display:"flex",alignItems:"center"},children:Object(l.jsx)("div",{className:"loader"})}):Object(l.jsx)("div",{className:"itemsContainer",children:x})},x=(n(33),function(t){var e=t.item.price*t.item.quantity;return Object(l.jsxs)("div",{className:"cartItems",id:t.id,children:[Object(l.jsx)("img",{src:t.item.image,alt:""}),Object(l.jsxs)("div",{className:"details","data-id":t.id,children:[Object(l.jsx)("div",{children:t.item.title}),Object(l.jsx)("button",{onClick:t.decreaseQuantity,children:"-"}),Object(l.jsx)("span",{id:"quantity",children:t.item.quantity}),Object(l.jsx)("button",{onClick:t.increaseQuantity,children:"+"}),Object(l.jsx)("br",{}),Object(l.jsxs)("span",{children:["$ ",e]})]})]})});n(34);var f=function(t){var e=Object(c.useState)([]),n=Object(d.a)(e,2),i=n[0],a=n[1],r=Object(c.useState)(0),s=Object(d.a)(r,2),u=s[0],o=s[1];Object(c.useEffect)((function(){var e=t.cart;a(Object(j.a)(e)),o(e.reduce((function(t,e){return t+e.quantity*e.price}),0))}),[t.cart]);var b=i.map((function(e){return Object(l.jsx)(x,{id:e.id,item:e,increaseQuantity:t.increaseQuantity,decreaseQuantity:t.decreaseQuantity},e.id)}));return Object(l.jsxs)("div",{className:"cart",children:[Object(l.jsx)("div",{className:"cartContent",children:b}),Object(l.jsxs)("div",{className:"total",children:[Object(l.jsxs)("h1",{children:["Total:",Object(l.jsxs)("span",{children:[" $ ",u.toFixed(2)]})]}),Object(l.jsx)("button",{children:"Checkout"})]})]})},p=(n(35),n(8)),m={color:"black",textDecoration:"none",margin:"0",padding:"0"};function v(t){return Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(p.b,{style:m,to:"/",children:Object(l.jsx)("h1",{children:"FakeStore"})})})})}function y(t){return Object(l.jsx)("div",{className:"container sticky",children:Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)(p.b,{style:m,to:"/shop",children:Object(l.jsx)("li",{children:"Shop"})}),Object(l.jsx)(p.b,{style:m,to:"/cart",children:Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{src:"https://img.icons8.com/glyph-neue/64/000000/shopping-cart.png",alt:"cart"}),t.itemsNum>0&&Object(l.jsx)("span",{id:"itemsNum",children:t.itemsNum})]})})]})})})}var g=n(2),N=(n(44),n.p+"static/media/shoppingcart.23323ec7.png"),C=function(){return Object(c.useEffect)((function(){var t=document.querySelector(".App");return t.classList.add("fixedHeight"),function(){t.classList.remove("fixedHeight")}}),[]),Object(l.jsx)("div",{className:"home",children:Object(l.jsx)("div",{className:"homeContent",style:{backgroundImage:" url(".concat(N,")")},children:Object(l.jsxs)("div",{className:"homeText",children:[Object(l.jsx)("span",{children:"Best fake online store"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"Choose what you want now !!!"}),Object(l.jsx)(p.b,{to:"/shop",children:Object(l.jsx)("button",{children:"Start shopping"})})]})})})};var k=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(0),r=Object(d.a)(a,2),u=r[0],o=r[1],b=Object(c.useState)([]),O=Object(d.a)(b,2),x=O[0],m=O[1];function N(t){m(Object(j.a)(t))}function k(t){var e=Number(t.target.parentNode.getAttribute("id")),c=n.find((function(t){return t.id===e}));if(c)i(n.map((function(t){return t.id===c.id&&t.quantity++,t})));else{var a=x.find((function(t){return t.id===e})),r=Object(s.a)(Object(s.a)({},a),{},{quantity:1});i([].concat(Object(j.a)(n),[r]))}}function S(t){var e=Number(t.target.parentNode.dataset.id),c=n.find((function(t){return t.id===e}));1!==c.quantity?i(n.map((function(t){return t.id===c.id&&t.quantity--,t}))):i(n.filter((function(t){return t.id!==e})))}function q(t){var e=Number(t.target.parentNode.dataset.id),c=n.find((function(t){return t.id===e}));i(n.map((function(t){return t.id===c.id&&t.quantity++,t})))}return Object(c.useEffect)((function(){o(n.reduce((function(t,e){return t+e.quantity}),0))}),[n]),Object(l.jsx)(p.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(v,{}),Object(l.jsx)(y,{itemsNum:u}),Object(l.jsxs)(g.c,{children:[Object(l.jsx)(g.a,{exact:!0,path:"/shop",render:function(t){return Object(l.jsx)(h,Object(s.a)(Object(s.a)({},t),{},{transferDatas:N,addToCart:k}))}}),Object(l.jsx)(g.a,{exact:!0,path:"/cart",render:function(t){return Object(l.jsx)(f,Object(s.a)(Object(s.a)({},t),{},{cart:n,increaseQuantity:q,decreaseQuantity:S}))}}),Object(l.jsx)(g.a,{path:"/",component:C})]})]})})};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.231e2c12.chunk.js.map