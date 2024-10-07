import{j as s,a as t}from"./app-BhVfn1oG.js";import{a as n}from"./index-CHXlp1va.js";import{m as c}from"./motion-DTNgah_Q.js";const o=({technicians:a,assets:l,maintenances:i,workOrders:d})=>s.jsxs("div",{className:"container mx-auto p-6 bg-gray-100 min-h-screen",children:[s.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Manager Dashboard"}),s.jsxs("section",{className:"mb-12",children:[s.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Technicians"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:a.map(e=>s.jsxs("div",{className:"p-4 bg-white shadow-md rounded-lg",children:[s.jsx("h3",{className:"text-xl font-bold",children:e.name}),s.jsx("p",{className:"text-gray-700",children:e.email})]},e.id))})]}),s.jsxs("section",{className:"mb-12",children:[s.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Assets"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:l.map(e=>s.jsxs("div",{className:"p-4 bg-white shadow-md rounded-lg",children:[s.jsxs("div",{className:"flex items-center mb-2",children:[s.jsx(n,{className:"text-blue-500 mr-2"}),s.jsx("h3",{className:"text-xl font-bold",children:e.name})]}),s.jsxs("p",{className:"text-gray-700",children:["Quantity: ",e.quantity]})]},e.id))})]}),s.jsxs("section",{className:"mb-12",children:[s.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Maintenances"}),s.jsx("div",{className:"overflow-hidden",children:s.jsx(c.div,{initial:{y:"100%"},animate:{y:0},transition:{duration:10,delay:2,repeat:1/0},className:"p-4 bg-white shadow-md rounded-lg",children:s.jsx("p",{children:i})})})]}),s.jsxs("section",{children:[s.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Work Orders"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:d.map(e=>s.jsxs("div",{className:"p-4 bg-white shadow-md rounded-lg",children:[s.jsx("h3",{className:"text-xl font-bold",children:e.title}),s.jsx("p",{className:"text-gray-700",children:e.description}),s.jsx("p",{className:"text-gray-600",children:e.scheduled_date}),s.jsx("p",{className:`text-sm font-semibold ${e.status==="pending"?"text-yellow-500":e.status==="in_progress"?"text-blue-500":"text-green-500"}`,children:e.status.replace("_"," ")}),s.jsx(t,{href:`/work-orders/${e.id}`,className:"mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition",children:"View Details"})]},e.id))})]})]});export{o as default};
