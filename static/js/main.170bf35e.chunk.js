(this["webpackJsonpmortgage-calculator"]=this["webpackJsonpmortgage-calculator"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(6),i=n(10),c=n.n(i),l=n(14),r=n(11),o=n(12),m=n(15),b=n(13),j=n(2),u=(n(20),n(0)),d=function(){var e="app-header-active";return Object(u.jsxs)("div",{className:"app-header d-flex",children:[Object(u.jsx)("h1",{children:"Mortgage Calculator"}),Object(u.jsxs)("nav",{children:[Object(u.jsx)(s.b,{className:function(t){return t.isActive?e:void 0},to:"/",children:"Banks"}),Object(u.jsx)(s.b,{className:function(t){return t.isActive?e:void 0},to:"/calculate",children:"Calculate mortgage"})]}),Object(u.jsx)("div",{className:"top-panel d-flex"})]})},x=n(7),O=n(4),h=(n(22),n(23),function(e){var t=e.id,n=e.bankName,a=e.onEdit,s=e.isEditingEnabled,i=e.toggleEditBlock,c=function(e){return{bankName:n,id:t,interestsRate:+e.interests.value,maximumLoan:+e.maximumLoan.value,minDownPayment:+e.minDownPayment.value,loanTerm:+e.loanTerm.value}};return Object(u.jsxs)("form",{className:"edit-bank-list-item",onSubmit:function(e){e.preventDefault();var t=c(e.target);a(t),i(!s)},children:[Object(u.jsx)("div",{children:Object(u.jsx)("h4",{className:"edit-bank-list-item-label",children:"Edit bank data"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("label",{children:["Update InterestsRate *:",Object(u.jsx)("input",{required:!0,name:"interests",className:"form-control",type:"number"})]})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("label",{children:["Update Maximum loan *:",Object(u.jsx)("input",{required:!0,name:"maximumLoan",className:"form-control",type:"number"})]})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("label",{children:["Update Minimum down payment *:",Object(u.jsx)("input",{required:!0,name:"minDownPayment",className:"form-control",type:"number"})]})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("label",{children:["Update Loan term in months *:",Object(u.jsx)("input",{required:!0,name:"loanTerm",className:"form-control",type:"number"})]})})]}),Object(u.jsxs)("div",{className:"edit-bank-list-buttons",children:[Object(u.jsx)("button",{type:"submit",className:"btn btn-outline-success btn float-right",children:"Save"}),Object(u.jsx)("button",{type:"button",className:"btn btn-outline-danger btn float-right",onClick:function(){return i(!s)},children:"Cancel"})]})]})}),f=function(e){var t=Object(a.useState)(!1),n=Object(O.a)(t,2),s=n[0],i=n[1],c=e.bankName,l=e.interestsRate,r=e.maximumLoan,o=e.minDownPayment,m=e.loanTerm,b=e.onDeleted;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"bank-list-item",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{className:"bank-list-item-label",children:c}),Object(u.jsxs)("ul",{className:"bank-list-options",children:[Object(u.jsxs)("li",{className:"bank-list-options-item",children:["Interests Rate: %",l]}),Object(u.jsxs)("li",{className:"bank-list-options-item",children:["Maximum loan: $",r]}),Object(u.jsxs)("li",{className:"bank-list-options-item",children:["Minimum down payment: $",o]}),Object(u.jsxs)("li",{className:"bank-list-options-item",children:["Loan term: ",m," moth"]})]})]}),Object(u.jsxs)("div",{className:"bank-list-buttons",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-outline-warning btn-lg float-right",onClick:function(){return i(!s)},children:Object(u.jsx)("i",{className:"fa fa-edit"})}),Object(u.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-lg float-right",onClick:function(){return b()},children:Object(u.jsx)("i",{className:"fa fa-trash-o"})})]})]}),s&&Object(u.jsx)(h,Object(x.a)(Object(x.a)({},e),{},{isEditingEnabled:s,toggleEditBlock:i}))]})},p=(n(24),function(e){var t=e.banks,n=e.onDeleted,a=e.onEdit,s=t.map((function(e){return Object(u.jsx)("li",{className:"list-group-item",children:Object(u.jsx)(f,Object(x.a)(Object(x.a)({},e),{},{onDeleted:function(){return n(e.id)},onEdit:a}))},e.id)}));return Object(u.jsx)("ul",{className:"list-group bank-list",children:s})}),v=(n(25),function(e){var t=e.id,n=e.onAddItem,s=Object(a.useState)(!1),i=Object(O.a)(s,2),c=i[0],l=i[1],r=function(e){return{bankName:e.bankName.value,id:t,interestsRate:+e.interests.value,maximumLoan:+e.maximumLoan.value,minDownPayment:+e.minDownPayment.value,loanTerm:+e.loanTerm.value}};return Object(u.jsxs)("div",{className:"add-item-wrap",children:[Object(u.jsx)("button",{type:"submit",className:"btn btn-success add-item",onClick:function(){return l(!c)},children:"Add item"}),c&&Object(u.jsxs)("form",{className:"edit-bank-list-item",onSubmit:function(e){e.preventDefault();var t=r(e.target);n(t),l(!c)},children:[Object(u.jsx)("div",{children:Object(u.jsx)("h4",{className:"edit-bank-list-item-label",children:"Add new bank"})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("label",{children:["Bank Name *:",Object(u.jsx)("input",{required:!0,name:"bankName",className:"form-control",type:"text"})]})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("label",{children:["InterestsRate *:",Object(u.jsx)("input",{required:!0,name:"interests",className:"form-control",type:"number"})]})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("label",{children:["Maximum loan *:",Object(u.jsx)("input",{required:!0,name:"maximumLoan",className:"form-control",type:"number"})]})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("label",{children:["Minimum down payment *:",Object(u.jsx)("input",{required:!0,name:"minDownPayment",className:"form-control",type:"number"})]})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("label",{children:["Loan term in months *:",Object(u.jsx)("input",{required:!0,name:"loanTerm",className:"form-control",type:"number"})]})}),Object(u.jsxs)("div",{className:"edit-bank-list-buttons",children:[Object(u.jsx)("button",{type:"submit",className:"btn btn-outline-success btn float-right",children:"Save"}),Object(u.jsx)("button",{type:"button",className:"btn btn-outline-danger btn float-right",onClick:function(){return l(!c)},children:"Cancel"})]})]})]})}),N=(n(26),function(e){var t=e.banks,n=Object(a.useState)(!1),s=Object(O.a)(n,2),i=s[0],c=s[1],l=t.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.bankName},e.id)})),r=function(e,t,n){return e*n*Math.pow(1+n,t)/(Math.pow(1+n,t)-1)};return Object(u.jsx)("div",{className:"mortgage-calculator",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.downPayment.value,n=e.target.initLoan.value-t,a=+i.interestsRate/100/12;console.log(r(+n,i.loanTerm,a))},children:[Object(u.jsx)("div",{children:Object(u.jsx)("h4",{className:"edit-bank-list-item-label",children:"Calculate your mortgage"})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("label",{children:["Select your bank *",Object(u.jsxs)("select",{required:!0,onChange:function(e){var n=+e.target.options[e.target.selectedIndex].value,a=t.find((function(e){return e.id===n}));c(a)},className:"custom-select",children:[Object(u.jsx)("option",{value:"",children:"Select bank"}),l]})]})}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsxs)("label",{children:["Initial loan *:",Object(u.jsx)("input",{required:!0,name:"initLoan",className:"form-control",type:"number",max:i.maximumLoan})]}),i&&Object(u.jsxs)("span",{className:"mortgage-calculator__info",children:["(max loan is ",i.maximumLoan,")"]})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsxs)("label",{children:["Down payment *:",Object(u.jsx)("input",{required:!0,name:"downPayment",className:"form-control",type:"number",min:i.minDownPayment})]}),i&&Object(u.jsxs)("span",{className:"mortgage-calculator__info",children:["(min down payment is ",i.minDownPayment,")"]})]}),i&&Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{children:["Interests Rate: ",i.interestsRate,"%"]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["Loan term: ",i.loanTerm," months"]})]}),Object(u.jsx)("div",{className:"edit-bank-list-buttons",children:Object(u.jsx)("button",{type:"submit",className:"btn btn-outline-success btn float-right",children:"Calculate"})})]})})}),g=(n(27),function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).deleteItem=function(t){e.setState((function(e){return{banksData:e.banksData.filter((function(e){return e.id!==t}))}}))},e.addItem=function(t){e.setState((function(e){var n=e.banksData;return{banksData:[].concat(Object(l.a)(n),[t])}}))},e.onEdit=function(t){console.log(t),console.log(e.toggleProp(e.state.banksData,t)),e.setState((function(n){var a=n.banksData;return{banksData:e.toggleProp(a,t)}}))},e.toggleProp=function(e,t){return e.map((function(e){return e.id===t.id&&(e=t),e}))},e.minId=1,e.state={banksData:[{bankName:"First Bank",interestsRate:10,maximumLoan:1e5,minDownPayment:1e4,loanTerm:120,id:e.minId++},{bankName:"Best Bank",interestsRate:1e-6,maximumLoan:1e8,minDownPayment:1e3,loanTerm:120,id:e.minId++},{bankName:"Evil Bank",interestsRate:24.6,maximumLoan:13e6,minDownPayment:666,loanTerm:666,id:e.minId++}]},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"*",element:Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{}),Object(u.jsxs)("div",{className:"banks",children:[Object(u.jsx)(p,{banks:this.state.banksData,onDeleted:this.deleteItem,onEdit:this.onEdit}),Object(u.jsx)(v,{onAddItem:this.addItem,id:this.minId++})]})]})}),Object(u.jsx)(j.a,{path:"calculate",element:Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{}),Object(u.jsx)(N,{banks:this.state.banksData})]})})]})}}]),n}(a.Component));n(28);c.a.render(Object(u.jsx)(s.a,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.170bf35e.chunk.js.map