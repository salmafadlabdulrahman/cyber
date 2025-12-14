import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
} from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const filterTypes = [
  { title: "Brand", items: ["Apple", "Samsung", "OPPO"] },
  {
    title: "Battery Capacity",
    items: ["Under 3000 mAh", "3000 - 4000 mAh", "4000 - 5000 mAh"],
  },
  {
    title: "Screen Type",
    items: ["OLED", "AMOLED", "Dynamic AMOLED"],
  },
  {
    title: "Screen diagonal",
    items: [
      'Small (under 5.5")',
      'Medium (5.5" - 6.2")',
      'Large (6.2" - 6.7")',
    ],
  },
  {
    title: "Built in-memory",
    items: ["64 GB", "128 GB", "512 GB"],
  },
];

const Shop = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (i) => {
    setOpenMenuIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="p-4 lg:flex lg:mt-[2em]">
      <div className="hidden lg:block pl-[4em]">
        {filterTypes.map((type, i) => (
          <div key={i} onClick={() => toggleMenu(i)}>
            <div className="flex justify-between border-b border-[#B5B5B5] py-[1em] w-[200px] cursor-pointer">
              <p>{type.title}</p>
              <span className="block">
                <KeyboardArrowDownIcon className="cursor-pointer" />
              </span>
            </div>

            <div
              className={` ${
                openMenuIndex === i ? "block" : "hidden"
              } mt-[1em]`}
            >
              {filterTypes[i].items.map((item, i) => (
                <div className="block mt-[.2em]" key={i}>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value={item}
                    key={i}
                  />
                  <label htmlFor="vehicle1" className="pl-[.4em] font-medium">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between flex-wrap">
          {/*Filter */}
          <div className="lg:hidden">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-native-select">Filters</InputLabel>
              <Select
                native
                defaultValue=""
                id="grouped-native-select"
                label="Grouping"
              >
                <option aria-label="None" value="" />
                <optgroup label="Brand">
                  <option value={1}>Apple</option>
                  <option value={2}>Samsung</option>
                  <option value={2}>OPPO</option>
                </optgroup>
                <optgroup label="Battery Capacity">
                  <option value={3}>Under 3000 mAh</option>
                  <option value={4}>3000 - 4000 mAh</option>
                  <option value={4}>4000 - 5000 mAh</option>
                </optgroup>
                <optgroup label="Screen Type">
                  <option value={3}>OLED</option>
                  <option value={4}>AMOLED</option>
                  <option value={4}>Dynamic AMOLED</option>
                </optgroup>
                <optgroup label="Screen diagonal">
                  <option value={3}>Small (under 5.5\")</option>
                  <option value={4}>Medium (5.5\" - 6.2\")</option>
                  <option value={4}>Large (6.2\" - 6.7\")</option>
                </optgroup>
                <optgroup label="Built in-memory">
                  <option value={3}>64 GB</option>
                  <option value={4}>128 GB</option>
                  <option value={4}>512 GB</option>
                </optgroup>
              </Select>
            </FormControl>
          </div>

          {/*Rating Filter */}
          <div className="lg:hidden">
            <FormControl sx={{ m: 1, minWidth: 130 }}>
              <InputLabel id="demo-controlled-open-select-label">
                By Rating
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                label="rating"
              >
                <MenuItem value={10}>5 Stars</MenuItem>
                <MenuItem value={20}>4 Stars</MenuItem>
                <MenuItem value={30}>3 Stars</MenuItem>
                <MenuItem value={20}>2 Stars</MenuItem>
                <MenuItem value={30}>1 Star</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        {/*Will be handled later in the backend!! */}
        <div className="p-4 lg:p-0 lg:w-[80%] xl:w-[70%] lg:m-auto">
          <div className="lg:flex items-center justify-between">
            <h3>
              Products Result: <span className="font-semibold">85</span>
            </h3>

            <div className="hidden lg:block">
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-controlled-open-select-label">
                  By Rating
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  label="rating"
                >
                  <MenuItem value={10}>5 Stars</MenuItem>
                  <MenuItem value={20}>4 Stars</MenuItem>
                  <MenuItem value={30}>3 Stars</MenuItem>
                  <MenuItem value={20}>2 Stars</MenuItem>
                  <MenuItem value={30}>1 Star</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <section className="flex items-center justify-center flex-wrap gap-5 mt-[2em] lg:justify-start">
            <ProductCard />
            <ProductCard />

            <ProductCard />
            <ProductCard />

            <ProductCard />
            <ProductCard />
          </section>
        </div>

        <div className="flex justify-center mt-[5em]">
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default Shop;
