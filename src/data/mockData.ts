export type Staff = { 
  id: number;
  name: string;
  role: string;
  email: string;
  status: "active" | "inactive";
  lastLogin: string;
  driveUsage: string;
  device: string;
};
// This is a data model.

export type Ticket = {
  id: number;
  type: string;
  status: "Open" | "In Progress" | "Resolved";
  created: string;
};

export type Task = {
  id: number;
  text: string;
  completed: boolean;
};


// -------------------------------------------------------------------------------------------------------------------


export const staffList: Staff[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Frontend Developer",
    email: "alice@brrmedia.com",
    status: "active",
    lastLogin: "2024-05-12",
    driveUsage: "2.5 GB",
    device: "MacBook Pro",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Backend Engineer",
    email: "bob@brrmedia.com",
    status: "inactive",
    lastLogin: "2024-04-28",
    driveUsage: "1.3 GB",
    device: "MacBook Air",
  },
  {
    id: 3,
    name: "Carol Danvers",
    role: "Product Manager",
    email: "carol@brrmedia.com",
    status: "active",
    lastLogin: "2024-05-10",
    driveUsage: "3.1 GB",
    device: "iMac",
  },
];

export const issueTypes = [
  "Hardware",
  "Software",
  "Access Request",
  "Network",
  "Other",
];

export const tickets: Ticket[] = [
  {
    id: 1,
    type: "Hardware",
    status: "Open",
    created: "2024-05-10",
  },
  {
    id: 2,
    type: "Access Request",
    status: "In Progress",
    created: "2024-05-08",
  },
  {
    id: 3,
    type: "Software",
    status: "Resolved",
    created: "2024-04-29",
  },
];


