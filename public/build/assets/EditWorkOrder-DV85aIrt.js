import{r as d,j as s}from"./app-BhVfn1oG.js";import{u as c,I as u}from"./index-CoD__97l.js";import"./index-DQyQdIxH.js";const l=({workOrder:t})=>{const{data:p,setData:a,post:n,processing:e,errors:i}=c({title:t.title,description:t.description,priority:t.priority,status:t.status,assigned_to:t.assigned_to,due_date:t.due_date});d.useEffect(()=>{a(t)},[t]);const o=r=>{r.preventDefault(),n(route("work-orders.update",t.id))};return s.jsxs("div",{children:[s.jsxs("h1",{children:["Edit Work Order - ",t.title]}),s.jsx("form",{onSubmit:o,children:s.jsx("button",{type:"submit",className:"btn btn-primary",disabled:e,children:e?"Saving...":"Save Changes"})}),i&&s.jsx("div",{className:"text-red-500",children:Object.values(i)[0]}),s.jsx(u,{href:route("work-orders.show",t.id),className:"btn btn-secondary mt-4",children:"Cancel"})]})};l.props={workOrder:Object};export{l as default};
