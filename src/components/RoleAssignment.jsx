import React, { useState } from 'react';

const RoleAssignment = () => {
  const defaultRoles = ['Project Lead', 'Developer', 'Designer', 'Tester'];
  const [roles, setRoles] = useState(defaultRoles.map((role) => ({ name: role, assignedTo: null })));
  const [customRole, setCustomRole] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleAssign = (role) => {
    if (!role) return;
    setRoles((prev) => prev.map((r) => (r.name === role && !r.assignedTo ? { ...r, assignedTo: 'You' } : r)));
    setSelectedRole('');
    setCustomRole('');
  };

  const handleAddCustomRole = () => {
    if (!customRole.trim()) return;
    setRoles((prev) => [...prev, { name: customRole, assignedTo: 'You' }]);
    setCustomRole('');
    setSelectedRole('');
  };

  return (
    <div className="rounded-lg bg-gray-700 p-6 shadow-md">
      <h2 className="mb-4 text-lg font-bold">👥 Role Assignment</h2>

      {/* If no role assigned yet */}
      {roles.every((r) => !r.assignedTo) && <p className="mb-4 text-gray-500">No roles have been assigned yet.</p>}

      <div className="space-y-3">
        {roles.map((role, index) => (
          <div key={index} className="flex items-center justify-between rounded-md border border-[#09233a] p-3">
            <span className="font-medium">{role.name}</span>
            {role.assignedTo ? (
              <span className="font-semibold text-green-600">Assigned to {role.assignedTo}</span>
            ) : (
              <button
                className="rounded bg-[#09233a] p-8 py-3 text-sm text-white hover:bg-gray-900"
                onClick={() => handleAssign(role.name)}
              >
                Assign to Me
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Other Role Option */}
      <div className="mt-6 border-t pt-4">
        <h3 className="mb-2 font-semibold">Add Custom Role</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={customRole}
            onChange={(e) => setCustomRole(e.target.value)}
            placeholder="Enter custom role"
            className="flex-1 rounded border px-3 py-2"
          />
          <button onClick={handleAddCustomRole} className="rounded bg-[#09233a] px-3 py-2 text-white hover:bg-gray-900">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleAssignment;
