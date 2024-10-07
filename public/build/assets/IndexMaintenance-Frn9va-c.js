import{j as e}from"./app-BhVfn1oG.js";import{d as s}from"./index-DQyQdIxH.js";import{L as h}from"./Layout-BLsYlLAs.js";import{B as l}from"./react-toastify.esm-CKf9o2XU.js";import"./NotificationList-D7J_jy85.js";import"./index-CHXlp1va.js";import"./index-CoD__97l.js";const f=({maintenances:o,notifications:i,user:a})=>{const c=r=>{confirm("Are you sure you want to delete this maintenance record?")&&s.Inertia.delete(route("maintenances.destroy",r),{onSuccess:()=>l.success("Maintenance deleted successfully!"),onError:()=>l.error("There was an error deleting the maintenance.")})},b=r=>{s.Inertia.get(route("maintenance.edit",r))},n=()=>{s.Inertia.get(route("maintenance.create"))};return e.jsx(h,{notifications:i,user:a,children:e.jsxs("div",{className:"max-w-full mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md rounded-md",children:[e.jsx("h2",{className:"text-xl font-semibold mb-6",children:"Maintenance List"}),e.jsx("div",{className:"mb-4",children:e.jsx("button",{onClick:n,className:"px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600",children:"Create Maintenance"})}),e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left py-2 border-b-2",children:"ID"}),e.jsx("th",{className:"text-left py-2 border-b-2",children:"Title"}),e.jsx("th",{className:"text-left py-2 border-b-2",children:"Description"}),e.jsx("th",{className:"text-left py-2 border-b-2",children:"Equipment"}),e.jsx("th",{className:"text-left py-2 border-b-2",children:"Frequency"}),e.jsx("th",{className:"text-left py-2 border-b-2",children:"Parts"}),e.jsx("th",{className:"text-left py-2 border-b-2",children:"Tools"}),e.jsx("th",{className:"text-left py-2 border-b-2",children:"Actions"})]})}),e.jsx("tbody",{children:o.map(r=>e.jsxs("tr",{children:[e.jsx("td",{className:"border-b py-2 text-center border-double border-white hover:border-blue-700",children:r.id}),e.jsx("td",{className:"border-b py-2 text-center border-double border-white hover:border-blue-700",children:r.title}),e.jsx("td",{className:"border-b py-2 text-center border-double border-white hover:border-blue-700",children:r.description}),e.jsx("td",{className:"border-b py-2 text-center border-double border-white hover:border-blue-700",children:r.equipment.name}),e.jsx("td",{className:"border-b py-2 text-center border-double border-white hover:border-blue-700",children:r.frequency}),e.jsx("td",{className:"border-b py-2 px-2 text-center border-double border-white hover:border-blue-700 capitalize",children:e.jsx("ol",{children:r.parts.map((t,d)=>e.jsx("li",{className:"list-decimal list-inside",children:t.name},d))})}),e.jsx("td",{className:"border-b py-2 px-2 text-center border-double border-white hover:border-blue-700 capitalize",children:e.jsx("ol",{children:r.tools.map((t,d)=>e.jsx("li",{className:"list-decimal list-inside",children:t.name},d))})}),e.jsx("td",{className:"border-b py-2 text-center border-double border-white hover:border-blue-700",children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>b(r.id),className:"px-2 py-1 bg-yellow-500 text-white font-semibold rounded-md shadow-sm hover:bg-yellow-600 mr-2",children:"Edit"}),e.jsx("button",{onClick:()=>c(r.id),className:"px-2 py-1 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600",children:"Delete"})]})})]},r.id))})]})]})})};export{f as default};
