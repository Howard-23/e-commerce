"use client";

import { useState } from "react";
import {
  ArrowUpDown,
  Download,
  Filter,
  MoreHorizontal,
  Search,
  Truck,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

const orders = [
  {
    id: "ORD001",
    customer: "Alice Johnson",
    email: "alice@example.com",
    products: ["Wireless Headphones", "Phone Case"],
    total: 329.98,
    status: "completed",
    payment: "paid",
    date: "2024-01-15",
    shipping: "delivered",
  },
  {
    id: "ORD002",
    customer: "Bob Smith",
    email: "bob@example.com",
    products: ["Smart Watch"],
    total: 199.99,
    status: "processing",
    payment: "paid",
    date: "2024-01-15",
    shipping: "shipped",
  },
  {
    id: "ORD003",
    customer: "Carol Williams",
    email: "carol@example.com",
    products: ["Running Shoes", "Sports Socks"],
    total: 149.98,
    status: "completed",
    payment: "paid",
    date: "2024-01-14",
    shipping: "delivered",
  },
  {
    id: "ORD004",
    customer: "David Brown",
    email: "david@example.com",
    products: ["Yoga Mat"],
    total: 45.99,
    status: "pending",
    payment: "pending",
    date: "2024-01-14",
    shipping: "pending",
  },
  {
    id: "ORD005",
    customer: "Emma Davis",
    email: "emma@example.com",
    products: ["Coffee Maker", "Coffee Beans"],
    total: 119.98,
    status: "completed",
    payment: "paid",
    date: "2024-01-13",
    shipping: "delivered",
  },
  {
    id: "ORD006",
    customer: "Frank Miller",
    email: "frank@example.com",
    products: ["Laptop Stand"],
    total: 79.99,
    status: "cancelled",
    payment: "refunded",
    date: "2024-01-13",
    shipping: "cancelled",
  },
  {
    id: "ORD007",
    customer: "Grace Wilson",
    email: "grace@example.com",
    products: ["Desk Lamp", "Notebook Set"],
    total: 89.98,
    status: "processing",
    payment: "paid",
    date: "2024-01-12",
    shipping: "processing",
  },
  {
    id: "ORD008",
    customer: "Henry Taylor",
    email: "henry@example.com",
    products: ["Gaming Mouse"],
    total: 59.99,
    status: "pending",
    payment: "pending",
    date: "2024-01-12",
    shipping: "pending",
  },
];

const statusConfig = {
  completed: { label: "Completed", variant: "default" as const, icon: CheckCircle },
  processing: { label: "Processing", variant: "secondary" as const, icon: Clock },
  pending: { label: "Pending", variant: "outline" as const, icon: Clock },
  cancelled: { label: "Cancelled", variant: "destructive" as const, icon: XCircle },
};

export default function OrdersPage() {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map((o) => o.id));
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedOrders.includes(id)) {
      setSelectedOrders(selectedOrders.filter((o) => o !== id));
    } else {
      setSelectedOrders([...selectedOrders, id]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">
            Manage and track all your orders
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">Create Order</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 flex-1 max-w-sm">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search orders..." />
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedOrders.length === orders.length}
                    onCheckedChange={toggleSelectAll}
                  />
                </TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedOrders.includes(order.id)}
                      onCheckedChange={() => toggleSelect(order.id)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                          {order.customer
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{order.customer}</p>
                        <p className="text-xs text-muted-foreground">
                          {order.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-[200px] truncate">
                      {order.products.join(", ")}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusConfig[order.status as keyof typeof statusConfig].variant}>
                      {statusConfig[order.status as keyof typeof statusConfig].label}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">
                    ${order.total.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {order.date}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Edit order</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Update status</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Cancel order
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
