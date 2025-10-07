export type Role = 'superadmin' | 'admin' | 'staff' | 'vendor' | 'user';

export const rolePermissions = {
  superadmin: ['full_system_access', 'user_management', 'system_settings', 'financial_reports', 'data_export_import'],
  admin: ['event_management', 'contest_management', 'order_management', 'user_support', 'analytics_dashboard'],
  staff: ['ticket_check_in', 'customer_support', 'basic_reporting', 'contestant_management'],
  vendor: ['product_management', 'order_fulfillment', 'settlement_reports', 'customer_communications'],
  user: ['ticket_purchasing', 'contest_voting', 'profile_management', 'order_history'],
} as const;
