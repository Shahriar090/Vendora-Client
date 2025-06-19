import { Button } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";
import { ArrowLeft, Plus, Trash2, Upload } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const AddProduct = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <section className="bg-[var(--color-gray-bg)]">
      <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <ArrowLeft className="w-5 h-5" />
            <h1 className="text-2xl font-bold">Add New Product</h1>
          </div>
          <p className="text-sm text-[var(--color-gray)] ml-8">
            Fill in the details to list your product for sale
          </p>
        </div>

        {/* General Information */}
        <section className="space-y-4 bg-[var(--color-white)] p-4 border-2">
          <h2 className="text-xl font-semibold">General Information</h2>
          <div className="space-y-2">
            <Label>Product Title</Label>
            <Input placeholder="Enter product title" />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea placeholder="Write a detailed description..." />
          </div>

          {/* Dropzone */}
          <div
            {...getRootProps()}
            className="border-2 border-dashed p-8 text-center rounded-md cursor-pointer space-y-2 bg-[var(--color-white)]"
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-8 w-8 text-[var(--color-black)]" />
            <h3 className="font-semibold">Drag and drop product images</h3>
            <p className="text-sm text-muted-foreground">
              or click to browse files (PNG, JPG, WEBP, up to 5MB each)
            </p>
            <Button
              className="mt-2 px-6 py-3 rounded-none border-2 text-[var(--color-black)]"
              variant="outline"
            >
              Select Files
            </Button>
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <Select>
              <SelectTrigger className="w-full">Select category</SelectTrigger>
              <SelectContent>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <section className="bg-[var(--color-white)] p-4 border-2">
          {/* Specifications */}
          <section className="space-y-4 b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Specifications</h2>
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-0 shadow-none text-[var(--color-blue)]"
              >
                <Plus /> Add another specification
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Label>Brand</Label>
                <Select>
                  <SelectTrigger className="w-full">Select brand</SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="samsung">Samsung</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Model</Label>
                <Input placeholder="Enter model" />
              </div>
              <div>
                <Label>Storage</Label>
                <Input placeholder="e.g. 128GB" />
              </div>
              <div>
                <Label>RAM</Label>
                <Input placeholder="e.g. 8GB" />
              </div>
              <div>
                <Label>Color</Label>
                <Input placeholder="e.g. Midnight Black" />
              </div>
            </div>
          </section>

          {/* Condition & Features */}
          <section className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Condition</h2>
              <RadioGroup defaultValue="new">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="new" id="new" />
                  <Label htmlFor="new">New</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="openbox" id="openbox" />
                  <Label htmlFor="openbox">Open Box</Label>
                </div>
              </RadioGroup>

              <Button
                variant="outline"
                size="sm"
                className="text-xs border-0 shadow-none text-[var(--color-blue)]"
              >
                <Plus /> Add Condition
              </Button>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Features</h2>
              <RadioGroup>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5g" id="5g" />
                  <Label htmlFor="5g">5G</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="wireless" id="wireless" />
                  <Label htmlFor="wireless">Wireless Charging</Label>
                </div>
              </RadioGroup>

              <Button
                variant="outline"
                size="sm"
                className="text-xs border-0 shadow-none text-[var(--color-blue)]"
              >
                <Plus /> Add Another Feature
              </Button>
            </div>
          </section>
        </section>

        {/* Pricing & Inventory */}
        <section className="space-y-4 bg-[var(--color-white)] p-4 border-2">
          <h2 className="text-xl font-semibold">Pricing & Inventory</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Price</Label>
              <Input placeholder="e.g. $999" />
            </div>
            <div>
              <Label>Sale Price</Label>
              <Input placeholder="e.g. $899" />
            </div>
            <div>
              <Label>Quantity</Label>
              <Input placeholder="e.g. 10" />
            </div>
            <div>
              <Label>SKU</Label>
              <Input placeholder="e.g. ABC123" />
            </div>
          </div>
        </section>
        <div className="flex items-center space-x-2 bg-[var(--color-white)] p-4 border-2">
          <Checkbox id="negotiation" />
          <Label htmlFor="negotiation">Enable Negotiation</Label>
        </div>

        {/* Additional Info */}
        <section className="space-y-4 bg-[var(--color-white)] p-4 border-2">
          <h2 className="text-xl font-semibold">Additional Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-1">
              <Label>Tags</Label>
              <Input placeholder="e.g. smartphone, tech, android" />
            </div>
            <div className="space-y-1">
              <Label>SEO Title</Label>
              <Input placeholder="SEO friendly title" />
            </div>
            <div className="space-y-1">
              <Label>SEO Description</Label>
              <Textarea placeholder="Write SEO optimized description" />
            </div>
          </div>
        </section>

        {/* Footer Actions */}
        <div className="flex justify-between pt-2">
          <Button variant="outline" className="text-[var(--color-red)]">
            <Trash2 /> Discard
          </Button>
          <div className="space-x-2">
            <Button
              variant="secondary"
              className="bg-[var(--color-white)] text-[var(--color-black)] border"
            >
              Save Draft
            </Button>
            <Button className="bg-[var(--color-red)] text-[var(--color-white)] rounded-sm">
              Send For Review
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
