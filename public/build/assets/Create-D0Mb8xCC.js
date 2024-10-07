import{r as n,j as e}from"./app-BhVfn1oG.js";import{d as k}from"./index-DQyQdIxH.js";const F=({categories:b,errors:a})=>{const[l,r]=n.useState(1),[d,g]=n.useState(""),[c,f]=n.useState(null),[o,j]=n.useState(""),[u,N]=n.useState(""),[m,v]=n.useState(null),[p,y]=n.useState(null),[i,S]=n.useState(""),x=()=>r(l+1),h=()=>r(l-1),w=t=>{t.preventDefault();const s=new FormData;s.append("name",d),s.append("category_id",o),s.append("value",c),s.append("description",u),m&&s.append("attachment",m),p&&s.append("photo",p),s.append("manufacturer",i),k.Inertia.post("/assets",s,{onError:A=>{console.error("Form submission error:",A)}})},C=()=>{switch(l){case 1:return e.jsxs("div",{className:"max-w-md mx-auto p-4",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Add Asset - Step 1"}),e.jsx("input",{type:"text",placeholder:"Name",value:d,onChange:t=>g(t.target.value),className:"border rounded p-2 mb-2 w-full"}),a.name&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:a.name}),e.jsx("input",{type:"number",placeholder:"Value in XAF",value:c,onChange:t=>f(t.target.value),className:"border rounded p-2 mb-2 w-full"}),a.value&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:a.value}),e.jsxs("select",{value:o,onChange:t=>j(t.target.value),className:"border rounded p-2 mb-2 w-full",children:[e.jsx("option",{value:"",disabled:!0,children:"Select Category"}),b.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]}),a.category_id&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:a.category_id}),e.jsx("button",{onClick:x,className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",children:"Next"})]});case 2:return e.jsxs("div",{className:"max-w-md mx-auto p-4",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Add Asset - Step 2"}),e.jsx("textarea",{placeholder:"Description",value:u,onChange:t=>N(t.target.value),className:"border rounded p-2 mb-2 w-full"}),a.description&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:a.description}),e.jsx("input",{type:"file",onChange:t=>v(t.target.files[0]),className:"border rounded p-2 mb-2 w-full"}),a.attachment&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:a.attachment}),e.jsx("button",{onClick:h,className:"mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400",children:"Back"}),e.jsx("button",{onClick:x,className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",children:"Next"})]});case 3:return e.jsxs("div",{className:"max-w-md mx-auto p-4",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Add Asset - Step 3"}),e.jsx("input",{type:"file",onChange:t=>y(t.target.files[0]),className:"border rounded p-2 mb-2 w-full"}),a.photo&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:a.photo}),e.jsx("input",{type:"text",placeholder:"Manufacturer",value:i,onChange:t=>S(t.target.value),className:"border rounded p-2 mb-2 w-full"}),a.manufacturer&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:a.manufacturer}),e.jsx("button",{onClick:h,className:"mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400",children:"Back"}),e.jsx("button",{onClick:w,className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",children:"Submit"})]});default:return null}};return e.jsx("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:e.jsx("div",{className:"bg-white shadow-md rounded p-8 transition-transform transform-gpu",children:C()})})};export{F as default};
