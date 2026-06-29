import db from "@/lib/db";

export async function getUserPermissions(userId: number) {
  const [rows]: any = await db.query(
    `
    SELECT p.slug
    FROM user_permissions up
    INNER JOIN permissions p
      ON p.id = up.permission_id
    WHERE up.user_id = ?
    `,
    [userId]
  );

  return rows.map((row: any) => row.slug);
}

export async function hasPermission(
  user: {
    id: number;
    role_id: number;
  },
  permission: string
) {
  // Super Admin -> Full Access
  if (user.role_id === 1) {
    return true;
  }

  const permissions = await getUserPermissions(user.id);

  return permissions.includes(permission);
}