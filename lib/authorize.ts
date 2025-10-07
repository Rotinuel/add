import { rolePermissions, Role } from './roles';

export function hasPermission(role: Role, permission: string) {
  const perms = rolePermissions[role] || [];
  return perms.includes(permission as any);
}
