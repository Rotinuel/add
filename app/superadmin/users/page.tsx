'use client';

import { useEffect, useState } from 'react';

export default function SuperAdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');

  useEffect(() => {
    fetch('/api/admin/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.users || []));
  }, []);

  const updateRole = async (userId: string) => {
    if (!selectedRole) return alert("Please select a role");
    const res = await fetch('/api/admin/set-role', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, role: selectedRole }),
    });
    if (res.ok) alert("Role updated successfully");
    else alert("Error updating role");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">👑 Super Admin — User Management</h1>
      <table className="min-w-full border rounded-lg">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Change Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u: any) => (
            <tr key={u.id || u._id} className="border-b">
              <td className="p-3">{u.email}</td>
              <td className="p-3 font-semibold">{u.role}</td>
              <td className="p-3 flex gap-2 items-center">
                <select
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="border p-1 rounded"
                >
                  <option value="">Select</option>
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                  <option value="vendor">Vendor</option>
                  <option value="user">User</option>
                </select>
                <button
                  onClick={() => updateRole(u.id || u._id)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
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
