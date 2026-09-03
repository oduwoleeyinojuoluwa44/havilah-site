export interface Role {
  id: string;
  title: string;
  /** e.g. "Full-time", "Contract" */
  type?: string;
  /** e.g. "Lagos" */
  location?: string;
  summary?: string;
}

/* Job openings.
   This is the single place the careers page reads from, so it is also the
   seam the admin panel will replace: swap this array for a database query
   and the page needs no other change. Empty means the page shows the "no
   roles listed" message rather than an empty list. */
export const openRoles: Role[] = [];
