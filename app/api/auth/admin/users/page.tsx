'use client';
import { useState, useEffect } from 'react';

export default function ManageUsersPage() {
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');

  useEffect(() => {
    fetch('/api/admin/users').then(r => r.json()).then(data => setUsers(data.users));
  }, []);

  const changeRole = async (userId: string) => {
    await fetch('/api/admin/set-role', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, role: selectedRole }),
    });
    alert('Role updated');
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">User Role Management</h1>
      <table className="min-w-full border">
        <thead>
          <tr className="border-b">
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u: any) => (
            <tr key={u.id} className="border-b">
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.role}</td>
              <td className="p-2">
                <select onChange={(e) => setSelectedRole(e.target.value)} className="border p-1">
                  <option value="">Select role</option>
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                  <option value="vendor">Vendor</option>
                  <option value="user">User</option>
                </select>
                <button
                  onClick={() => changeRole(u.id)}
                  className="ml-2 bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
