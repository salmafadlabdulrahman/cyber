import logo from "/assets/logo-white.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";


const Footer = () => {
  return (
    <footer className="bg-mid-black text-grayish-white text-center lg:text-left md:flex flex-col items-center justify-center py-5 ">
      <div className="lg:flex justify-center gap-[3em] xl:gap-[5em] lg:pt-[2em]">
        <div className="mt-[1em] lg:m-0 lg:w-[40%]  ">
          <img src={logo} alt="a white triangle" className="m-auto lg:m-0" />
          <p className="w-[60%] m-auto mt-[1em] lg:m-0 lg:mt-[1em]">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>

        <div className="mt-[2em] lg:mt-0 ">
          <h6 className="font-semibold text-white">Services</h6>
          <ul className="font-light flex flex-col gap-3 mt-[1em]">
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </div>

        <div className="mt-[2em] lg:mt-0 ">
          <h6 className="font-semibold text-white">Assistance to the buyer</h6>
          <ul className="font-light flex flex-col gap-3 mt-[1em]">
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </div>

      <div className="mt-[3em] flex items-center justify-center gap-[2em]">
        <TwitterIcon sx={{ color: "white" }} />
        <FacebookIcon sx={{ color: "white" }} />
        <InstagramIcon sx={{ color: "white" }} />
        <EmailIcon sx={{ color: "white" }} />
      </div>
    </footer>
  );
};

export default Footer;
