import{r as d,j as e}from"./app-BhVfn1oG.js";import{d as x}from"./index-DQyQdIxH.js";const b=({user:l,roles:m})=>{const[s,n]=d.useState({name:l.name,email:l.email,role:l.roles[0]?l.roles[0].name:""}),t=a=>{const c=a.target.id,o=a.target.value;n(r=>({...r,[c]:o}))},i=a=>{a.preventDefault(),x.Inertia.put(`/users/${l.id}`,s)};return e.jsxs("div",{className:"container mx-auto p-4",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Edit User"}),e.jsxs("form",{onSubmit:i,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"name",className:"block text-gray-700",children:"Name"}),e.jsx("input",{id:"name",type:"text",value:s.name,onChange:t,className:"mt-1 block w-full"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"email",className:"block text-gray-700",children:"Email"}),e.jsx("input",{id:"email",type:"email",value:s.email,onChange:t,className:"mt-1 block w-full"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"role",className:"block text-gray-700",children:"Role"}),e.jsx("select",{id:"role",value:s.role,onChange:t,className:"mt-1 block w-full",children:m.map(a=>e.jsx("option",{value:a.name,children:a.name},a.id))})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded",children:"Save"})})]})]})};export{b as default};
