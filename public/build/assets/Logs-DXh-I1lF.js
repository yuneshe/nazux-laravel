import{j as e}from"./app-BhVfn1oG.js";const r=({logs:t})=>e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"Laravel 11 Custom User Logs Activity Example - Techsolutionstuff"}),e.jsxs("table",{className:"table table-bordered",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"No"}),e.jsx("th",{children:"Subject"}),e.jsx("th",{children:"URL"}),e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Ip"}),e.jsx("th",{width:"300px",children:"User Agent"}),e.jsx("th",{children:"User Id"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:t.length?t.map((s,d)=>e.jsxs("tr",{children:[e.jsx("td",{children:d+1}),e.jsx("td",{children:s.subject}),e.jsx("td",{className:"text-success",children:s.url}),e.jsx("td",{children:e.jsx("span",{className:"label label-info",children:s.method})}),e.jsx("td",{className:"text-warning",children:s.ip}),e.jsx("td",{className:"text-danger",children:s.agent}),e.jsx("td",{children:s.user_id}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-danger btn-sm",children:"Delete"})})]},s.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"8",children:"No logs available"})})})]})]});export{r as default};
