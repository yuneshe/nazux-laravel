import React from 'react';
import { Link } from '@inertiajs/react';

const Logs = ({ logs }) => {
  return (
    <div className="container">
      <h1>Laravel 11 Custom User Logs Activity Example - Techsolutionstuff</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Subject</th>
            <th>URL</th>
            <th>Method</th>
            <th>Ip</th>
            <th width="300px">User Agent</th>
            <th>User Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {logs.length ? (
            logs.map((log, index) => (
              <tr key={log.id}>
                <td>{index + 1}</td>
                <td>{log.subject}</td>
                <td className="text-success">{log.url}</td>
                <td><span className="label label-info">{log.method}</span></td>
                <td className="text-warning">{log.ip}</td>
                <td className="text-danger">{log.agent}</td>
                <td>{log.user_id}</td>
                <td><button className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No logs available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Logs;
