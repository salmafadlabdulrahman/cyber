import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
} from "@mui/material";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  return (
    <section className="p-4">
      <div className="flex items-center justify-between">
        {/*Filter */}
        <div>
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
        <div>
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
      <div className="p-4">
        <h3>
          Products Result: <span className="font-semibold">85</span>
        </h3>

        <section className="flex items-center justify-center flex-wrap gap-5 mt-[2em]">
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
    </section>
  );
};

export default Shop;
