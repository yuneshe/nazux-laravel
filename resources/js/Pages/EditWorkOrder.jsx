import React, { useState, useEffect } from 'react';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';

const EditWorkOrder = ({ workOrder }) => {
  const { data, setData, post, processing, errors } = useForm({
    title: workOrder.title,
    description: workOrder.description,
    priority: workOrder.priority,
    status: workOrder.status,
    assigned_to: workOrder.assigned_to,
    due_date: workOrder.due_date,
  });

  useEffect(() => {
    // Pre-fill form data on initial render
    setData(workOrder);
  }, [workOrder]);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('work-orders.update', workOrder.id));
  };

  return (
    <div>
      <h1>Edit Work Order - {workOrder.title}</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields for title, description, priority, status, assigned technician (optional), and due date */}
        <button type="submit" className="btn btn-primary" disabled={processing}>
          {processing ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
      {errors && <div className="text-red-500">{Object.values(errors)[0]}</div>}
      <InertiaLink href={route('work-orders.show', workOrder.id)} className="btn btn-secondary mt-4">
        Cancel
      </InertiaLink>
    </div>
  );
};

EditWorkOrder.props = {
  workOrder: Object,
};

export default EditWorkOrder;
