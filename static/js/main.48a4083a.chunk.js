(this.webpackJsonpcalculatorpractice=this.webpackJsonpcalculatorpractice||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),r=n(7),a=n.n(r),s=(n(12),n(2)),u=n(3),l=n(5),d=n(4),o=(n(13),n(0)),p=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(o.jsx)("div",{className:"button",onClick:function(){return t.props.handleClick(t.props.children)},children:this.props.children})}}]),n}(i.Component),h=(n(15),i.Component,n(16),function(t){return Object(o.jsx)("div",{className:"above",children:Object(o.jsxs)("p",{children:[" ",t.input," "]})})}),j=(n(17),function(t){return Object(o.jsx)("div",{className:"clear",onClick:function(){return t.handleClear(t.children)},children:t.children})}),b=(n(18),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).addToInput=function(t){i.setState({input:i.state.input+t})},i.clearInput=function(){i.setState({input:""})},i.multiply=function(){i.state.previousNumber=i.state.input,i.setState({input:""}),i.state.operator="multiply"},i.divide=function(){i.state.previousNumber=i.state.input,i.setState({input:""}),i.state.operator="divide"},i.add=function(){i.state.previousNumber=i.state.input,i.setState({input:""}),i.state.operator="add"},i.subtract=function(){i.state.previousNumber=i.state.input,i.setState({input:""}),i.state.operator="subtract"},i.evaluate=function(){i.state.currentNumber=i.state.input,"multiply"==i.state.operator?i.setState({input:parseInt(i.state.previousNumber)*parseInt(i.state.currentNumber)}):"divide"==i.state.operator?i.setState({input:parseInt(i.state.previousNumber)/parseInt(i.state.currentNumber)}):"add"==i.state.operator?i.setState({input:parseInt(i.state.previousNumber)+parseInt(i.state.currentNumber)}):"subtract"==i.state.operator&&i.setState({input:parseInt(i.previousNumber)-parseInt(i.currentNumber)})},i.state={input:"",previousNumber:"",currentNumber:"",operator:""},i}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"calc-wrapper",children:[Object(o.jsx)("div",{children:Object(o.jsxs)(h,{input:this.state.input,children:[" ",this.state.input]})}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(p,{handleClick:this.addToInput,children:" 7 "}),Object(o.jsx)(p,{handleClick:this.addToInput,children:" 8 "}),Object(o.jsx)(p,{handleClick:this.addToInput,children:" 9 "}),Object(o.jsx)(p,{handleClick:this.multiply,children:" * "})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(p,{handleClick:this.addToInput,children:" 4 "}),Object(o.jsx)(p,{handleClick:this.addToInput,children:" 5 "}),Object(o.jsx)(p,{handleClick:this.addToInput,children:" 6 "}),Object(o.jsx)(p,{handleClick:this.subtract,children:" - "})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(p,{handleClick:this.addToInput,children:" 1 "}),Object(o.jsx)(p,{handleClick:this.addToInput,children:" 2 "}),Object(o.jsx)(p,{handleClick:this.addToInput,children:" 3 "}),Object(o.jsx)(p,{handleClick:this.add,children:" + "})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(p,{handleClick:this.addToInput,children:" 0 "}),Object(o.jsx)(p,{handleClick:this.divide,children:" / "}),Object(o.jsx)(p,{handleClick:this.decimal,children:" . "}),Object(o.jsx)(p,{handleClick:this.evaluate,children:" = "})]}),Object(o.jsx)(j,{handleClear:this.clearInput,children:" Clear "})]})})}}]),n}(i.Component)),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),r(t),a(t)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),O()}],[[19,1,2]]]);
//# sourceMappingURL=main.48a4083a.chunk.js.map