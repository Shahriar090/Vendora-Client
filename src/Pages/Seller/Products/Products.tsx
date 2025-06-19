import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { PlusIcon, SearchIcon, SquarePen, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    image: "https://via.placeholder.com/50",
    sku: "WM1234",
    price: "$25.00",
    stock: 10,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    image: "https://via.placeholder.com/50",
    sku: "GK5678",
    price: "$55.00",
    stock: 0,
    status: "Out of Stock",
  },
];
const Products = () => {
  const [category, setCategory] = useState("");
  const [stockStatus, setStockStatus] = useState("");
  console.log(category);
  console.log(stockStatus);
  return (
    <div className="bg-[var(--color-gray-bg)] h-full">
      <div className="space-y-6 max-w-screen-xl mx-auto pt-5 bg-[var(--color-gray-bg)] h-full px-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Products</h2>
          <Link to={"/seller/add-product"}>
            <Button className="flex items-center gap-2 bg-[var(--color-red)] text-[var(--color-white)] rounded-sm">
              <PlusIcon className="w-4 h-4" /> Add Product
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="relative w-full border sm:max-w-3xl">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10 bg-[var(--color-white)]"
            />
          </div>

          <Select onValueChange={setCategory}>
            <SelectTrigger className="w-full sm:w-60 bg-[var(--color-white)]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="books">Books</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={setStockStatus}>
            <SelectTrigger className="w-full sm:w-60 bg-[var(--color-white)]">
              <SelectValue placeholder="Stock Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="in">In Stock</SelectItem>
              <SelectItem value="out">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Table */}
        <div className="border rounded-md overflow-auto">
          <Table>
            <TableHeader className="bg-[var(--color-white)]">
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-[var(--color-white)]">
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded object-cover"
                    />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.sku}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.status}</TableCell>
                  <TableCell>
                    <div className="flex gap-4">
                      <Link to="/seller/edit-product">
                        <Button size="sm" variant="outline">
                          <SquarePen className="w-4 h-4" />
                          <span>Edit</span>
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-[var(--color-red)] border-[var(--color-red)]"
                      >
                        <Trash2Icon className="w-4 h-4" />
                        <span>Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Products;
