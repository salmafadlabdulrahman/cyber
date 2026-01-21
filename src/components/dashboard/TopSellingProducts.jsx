import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import productImg from "/assets/dashboard-product.png";
import startIcon from "/assets/star.png";

const TopSellingProducts = () => {
  return (
    <div className="overflow-y-scroll h-[300px]">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-2xl text-mid-black">
          Top Selling Products
        </h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <MoreHorizontalIcon />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-[2em] flex">
        <img src={productImg} alt="" width={80} />
        <div className="">
          <p className="text-[1.1em] font-semibold">Nike Shoes black pattern</p>
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((_, i) => (
              <img
                src={startIcon}
                alt="star icon"
                key={i}
                width={15}
                className="mt-[.5em]"
              />
            ))}
          </div>
          <span className="block  mt-[1em] font-medium">$987</span>
        </div>
      </div>

      <div className="mt-[2em] flex">
        <img src={productImg} alt="" width={80} />
        <div className="">
          <p className="text-[1.1em] font-semibold">Nike Shoes black pattern</p>
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((_, i) => (
              <img
                src={startIcon}
                alt="star icon"
                key={i}
                width={15}
                className="mt-[.5em]"
              />
            ))}
          </div>
          <span className="block  mt-[1em] font-medium">$987</span>
        </div>
      </div>

      <div className="mt-[2em] flex">
        <img src={productImg} alt="" width={80} />
        <div className="">
          <p className="text-[1.1em] font-semibold">Nike Shoes black pattern</p>
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((_, i) => (
              <img
                src={startIcon}
                alt="star icon"
                key={i}
                width={15}
                className="mt-[.5em]"
              />
            ))}
          </div>
          <span className="block  mt-[1em] font-medium">$987</span>
        </div>
      </div>


    </div>
  );
};

export default TopSellingProducts;
