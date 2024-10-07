import{j as e,a as r}from"./app-BhVfn1oG.js";import{a as d,d as c}from"./index-CHXlp1va.js";import{L as m}from"./TechnicianLayout-BBt9YwHF.js";import{m as a}from"./motion-DTNgah_Q.js";import"./NotificationList-D7J_jy85.js";import"./index-DQyQdIxH.js";import"./index-CoD__97l.js";import"./react-toastify.esm-CKf9o2XU.js";const h={animate:{backgroundPosition:["0% 50%","100% 50%"],transition:{duration:20,repeat:1/0,ease:"linear"}}},x=()=>{const t=["The best way to predict the future is to create it.","Success is not the key to happiness. Happiness is the key to success.","The only limit to our realization of tomorrow is our doubts of today.","Don't watch the clock; do what it does. Keep going.","The harder you work for something, the greater you'll feel when you achieve it."],i=Math.floor(Math.random()*t.length);return t[i]},y=({workOrders:t,assets:i,notifications:n,user:l})=>{const o={animate:{x:["100%","0%","-100%"],transition:{x:{duration:15,repeat:1/0,repeatDelay:2,ease:"linear",times:[0,.5,1]}}}};return e.jsx(m,{notifications:n,user:l,userId:l,children:e.jsxs("div",{className:"container mx-auto p-6 bg-gray-100 min-h-screen",children:[e.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Technician Dashboard"}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Assigned Work Orders"}),e.jsx(a.div,{variants:h,animate:"animate",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300",style:{backgroundSize:"200% 100%"},children:t.length>0?t.map(s=>e.jsxs(a.div,{whileHover:{scale:1.05},className:"p-4 bg-white shadow-md rounded-lg transition-transform",children:[e.jsx("h3",{className:"text-xl font-bold",children:s.title}),e.jsx("p",{className:"text-gray-700",children:s.description}),e.jsx("p",{className:"text-gray-600",children:s.scheduled_date}),e.jsx("p",{className:`text-sm font-semibold ${s.status==="pending"?"text-yellow-500":s.status==="in_progress"?"text-blue-500":"text-green-500"}`,children:s.status.replace("_"," ")}),e.jsx(r,{href:`/work-orders/${s.id}`,className:"mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition",children:"View Details"})]},s.id)):e.jsxs("div",{className:"p-4 bg-white shadow-md rounded-lg",children:[e.jsx("p",{className:"text-xl font-bold",children:"No work orders assigned."}),e.jsx("p",{className:"text-gray-700 mt-2",children:x()})]})})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Latest Assets"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map(s=>e.jsxs(a.div,{whileHover:{scale:1.05},className:"p-4 bg-white shadow-md rounded-lg transition-transform",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx(d,{className:"text-blue-500 mr-2"}),e.jsx("h3",{className:"text-xl font-bold",children:s.name})]}),e.jsxs("p",{className:"text-gray-700",children:["Quantity: ",s.quantity]}),e.jsx(r,{href:`/assets/${s.id}`,className:"mt-2 inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition",children:"View Details"})]},s.id))})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Notifications"}),e.jsx("div",{className:"relative overflow-hidden whitespace-nowrap",children:e.jsx(a.div,{variants:o,animate:"animate",className:"flex space-x-6",children:n.map(s=>e.jsxs("div",{className:"flex items-center p-2 bg-white shadow-md rounded-lg transition-transform",children:[e.jsx(c,{className:`mr-2 ${s.read?"text-yellow-500":"text-green-500"}`}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold",children:s.title}),e.jsx("p",{className:"text-gray-700",children:s.message})]})]},s.id))})})]})]})})};export{y as default};
