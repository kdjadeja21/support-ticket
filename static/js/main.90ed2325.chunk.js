(this.webpackJsonptickets=this.webpackJsonptickets||[]).push([[0],{59:function(e,t,a){e.exports=a(71)},64:function(e,t,a){},66:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),l=a.n(s),i=(a(64),a(11)),c=a(29),u=a.n(c),o=a(38),d=a(31),m=a(18),E=a(43),g=a(44),h=a(50),p=(a(66),a(67),a(102)),b=a(106),f=a(107),v=a(108),y=a(122),D=a(111),w=a(124),S=a(120),j=a(125),k=a(112),x=a(113),C=a(114),_=a(115),I=a(116),O=a(117),N=a(118),A=a(119),J=a(121),P=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={addData:!0,editData:!1,showData:!1,unique_id:0,id:0,subject:"",priority:"3",status:1,user:"",assigned_user:"",data:[]},a.toggleData=function(){a.setState({showData:!a.state.showData,addData:!a.state.addData})},a.editData=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.data.filter((function(e){return e.id===t})),e.next=3,a.setState({addData:!1,editData:!0,showData:!1,id:t,unique_id:a.state.id,subject:n[0].subject,priority:n[0].priority,status:n[0].status,user:n[0].user,assigned_user:n[0].assigned_user});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.deleteData=function(e){var t=a.state.data.filter((function(t){return t.id!==e}));a.setState({data:t}),localStorage.setItem("data",JSON.stringify(t))},a.handleChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.submitHandler=function(){var e=Object(o.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],a.state.subject||a.state.priority||a.state.status||a.state.user||a.state.assigned_user){e.next=5;break}alert("Please Fill all the fields."),e.next=10;break;case 5:return a.state.addData?(r={id:a.state.id+1,subject:a.state.subject,priority:a.state.priority,status:a.state.status,user:a.state.user,assigned_user:a.state.assigned_user},(n=a.state.data?a.state.data:[]).push(r)):a.state.editData&&(n=a.state.data).map((function(e){e.id===a.state.id&&(e.subject=a.state.subject,e.priority=a.state.priority,e.status=a.state.status,e.user=a.state.user,e.assigned_user=a.state.assigned_user)})),e.next=8,a.setState({data:n,subject:"",priority:"3",status:"1",user:"",assigned_user:"",id:a.state.editData?a.state.unique_id:a.state.id+1,addData:!1,editData:!1,showData:!0});case 8:localStorage.setItem("data",JSON.stringify(n)),localStorage.setItem("id",a.state.editData?a.state.unique_id:a.state.id);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[],id:localStorage.getItem("id")?parseInt(localStorage.getItem("id")):0})}},{key:"render",value:function(){var e=this,t=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(p.a,{position:"static",style:{backgroundColor:"#006A69"}},r.a.createElement(b.a,null,r.a.createElement("span",{style:{"font-size":"21px"}},r.a.createElement("i",{className:"fa fa-ticket"})," Support Tickets"),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("div",{onClick:this.toggleData},r.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"},this.state.showData?"Create Tickets":"Show Tickets"))))),r.a.createElement("center",null,r.a.createElement("div",{className:this.state.showData?"showData":"addDataForm",style:{"box-shadow":"2px 5px 13px 0px #ccc",border:"1px solid #fff","border-radius":"10px"}},this.state.showData?r.a.createElement(k.a,{style:{"border-radius":"10px"}},r.a.createElement(x.a,{"aria-label":"simple table"},r.a.createElement(C.a,null,r.a.createElement(_.a,null,r.a.createElement(I.a,{align:"center"},"Id"),r.a.createElement(I.a,{align:"center"},"Subject"),r.a.createElement(I.a,{align:"center"},"Priority"),r.a.createElement(I.a,{align:"center"},"Status"),r.a.createElement(I.a,{align:"center"},"User"),r.a.createElement(I.a,{align:"center"},"Assigned User"),r.a.createElement(I.a,{align:"center"},"Action"))),r.a.createElement(O.a,null,t.map((function(t){return r.a.createElement(_.a,{hover:!0,key:t.id},r.a.createElement(I.a,{align:"center"},t.id),r.a.createElement(I.a,{align:"center"},t.subject),r.a.createElement(I.a,{align:"center"},r.a.createElement(J.a,{name:"priority_value",value:t.priority,max:3,readOnly:!0})),r.a.createElement(I.a,{align:"center"},r.a.createElement(D.a,{style:{"min-width":"100px"},disabled:!0},r.a.createElement(S.a,{name:"statusShow",value:t.status},r.a.createElement(j.a,{value:1},"Open"),r.a.createElement(j.a,{value:2},"In Progress"),r.a.createElement(j.a,{value:3},"Close")))),r.a.createElement(I.a,{align:"center"},t.user),r.a.createElement(I.a,{align:"center"},t.assigned_user),r.a.createElement(I.a,{align:"center"},r.a.createElement("span",{onClick:function(){return e.editData(t.id)}},r.a.createElement(f.a,null,r.a.createElement(N.a,null))),r.a.createElement("span",{onClick:function(){return e.deleteData(t.id)}},r.a.createElement(f.a,{color:"secondary"},r.a.createElement(A.a,null)))))}))))):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){return e.submitHandler(t)}},r.a.createElement("center",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,null,"Priority"),r.a.createElement(J.a,{name:"priority",value:this.state.priority,max:3,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{multiline:!0,label:"Subject",value:this.state.subject,name:"subject",onChange:function(t){return e.handleChange(t)}})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(D.a,{style:{"min-width":"200px"},disabled:this.state.addData},r.a.createElement(w.a,null,"Status"),r.a.createElement(S.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"status",onChange:function(t){return e.handleChange(t)},value:this.state.status},r.a.createElement(j.a,{value:1},"Open"),r.a.createElement(j.a,{value:2},"In Progress"),r.a.createElement(j.a,{value:3},"Close"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{label:"User",value:this.state.user,name:"user",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{label:"Assigned User",value:this.state.assigned_user,name:"assigned_user",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn"},this.state.addData?"Add":"Update"),r.a.createElement("br",null),r.a.createElement("br",null)))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.90ed2325.chunk.js.map