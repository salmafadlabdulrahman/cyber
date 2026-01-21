import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MessageIcon from "@mui/icons-material/Message";
import blueLine from "/assets/blue-line.png";
import greenLine from "/assets/green-line.png";
import orangeLine from "/assets/orange-line.png";
import OrdersTable from "@/components/dashboard/OrdersTable";
import TopSellingProducts from "@/components/dashboard/TopSellingProducts";

const Dashboard = () => {
  return (
    <section className="p-2 bg-[#FAFAFB]">
      <div className="mt-[2em] flex gap-5">
        <aside
          className="w-[15%] flex flex-col gap-[2em] border border-light-gray shadow-md rounded-lg  
      relative cursor-pointer pt-[1em]"
        >
          <div
            className="sidebar-hover"
          >
            {" "}
            <PeopleAltIcon className="hover:text-white" />{" "}
            <span className="pl-2">Users</span>
          </div>
          <div className="sidebar-hover">
            <LocalAtmIcon /> <span className="pl-2">Products</span>
          </div>
          <div className="sidebar-hover">
            <LocalMallIcon />
            <span className="pl-2">Orders</span>
          </div>
          <div className="sidebar-hover">
            <MessageIcon />
            <span className="pl-2">Messages</span>
          </div>
        </aside>

        <div className="gap-2 flex-2">
          <h2 className="font-semibold text-3xl ">Hello Salma</h2>
          {/*Main cards */}
          <div className="flex items-center gap-[2em] flex-wrap mt-[.8em]">
            <div className="flex items-center gap-[5em] p-5 cards-style">
              <div>
                <p className="text-mid-gray font-semibold">Today's Sales</p>
                <span className="font-bold text-2xl mt-[.2em] block">
                  $20.4k
                </span>
                <p className="text-mid-gray mt-[.7em]">
                  We have sold 123 items
                </p>
              </div>
              <img src={blueLine} alt="a blue squiggly line" />
            </div>

            <div className="flex items-center gap-[5em] p-5 cards-style">
              <div>
                <p className="text-mid-gray font-semibold">Today's Revenue</p>
                <span className="font-bold text-2xl mt-[.2em] block">
                  $8.2k
                </span>
                <p className="text-mid-gray mt-[.7em]">Availabale to payout</p>
              </div>
              <img src={greenLine} alt="a blue squiggly line" />
            </div>

            <div className="flex items-center gap-[5em] p-5 cards-style">
              <div>
                <p className="text-mid-gray font-semibold">Total Orders</p>
                <span className="font-bold text-2xl mt-[.2em] block">1300</span>
                <p className="text-mid-gray mt-[.7em]">Availabale to payout</p>
              </div>
              <img src={orangeLine} alt="a blue squiggly line" />
            </div>
          </div>

          <div className="pr-[2em] flex  gap-[3em] mt-[6em]  ">
            <div className="flex-2 ">
              <h3 className="text-2xl font-semibold">Recent Orders</h3>
              <OrdersTable />
            </div>

            <div className="flex-1">
              <TopSellingProducts />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
