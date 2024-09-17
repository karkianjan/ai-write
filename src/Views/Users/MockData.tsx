export type Payment = {
  id: string;
  name: string;
  serialNumber: number;
  email: string;
  monthlyFee: string | number;
  expiryDate: string;
  status: "All" | "Paid" | "Pending" | "Lock";
};

export const mockData: Payment[] = [
  {
    id: "0",
    name: "Tshiring Dorje Sherpa",
    serialNumber: 1,
    email: "Tshiring@gmail.com",
    monthlyFee: "15",
    expiryDate: "2024-12-01",
    status: "Paid",
  },
  {
    id: "1",
    name: "Dip Roshan Rai",
    serialNumber: 2,
    email: "dip@gmail.com",
    monthlyFee: "20",
    expiryDate: "2024-11-15",
    status: "Pending",
  },
  {
    id: "2",
    name: "Ashmita Chimoriya",
    serialNumber: 3,
    email: "Ahmita44@gmail.com",
    monthlyFee: "20",
    expiryDate: "2024-10-01",
    status: "Lock",
  },
  {
    id: "3",
    name: "Nelson Katwal",
    serialNumber: 4,
    email: "Nelson@gmail.com",
    monthlyFee: "20",
    expiryDate: "2024-09-30",
    status: "Paid",
  },
  {
    id: "4",
    name: "Rabin Gurung",
    serialNumber: 5,
    email: "Rabin@hotmail.com",
    monthlyFee: "20",
    expiryDate: "2024-08-20",
    status: "Pending",
  },
];
