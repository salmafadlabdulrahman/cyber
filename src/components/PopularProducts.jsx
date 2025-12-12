import popularWatch from "/assets/popular-watch.png";
import popularIpad from "/assets/popular-ipad.png";
import popularGalaxy from "/assets/popular-galaxy.png";
import popularMacbook from "/assets/popular-macbook.png";

const PobularProducts = () => {
  return (
    <section className="flex items-center mt-[8em]">
      <div className="h-[500px] px-[1em] lg:text-center">
        <img
          src={popularWatch}
          alt="a white headphones and smart watch"
          className="h-[200px] w-full object-contain"
        />
        <div className="min-h-[200px]">
          <h4 className="text-2xl lg:text-[2.2em] ">Popular Products</h4>
          <p className="text-[14px] mt-[.5em] text-mid-gray font-medium lg:text-[1em]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
        </div>
        <button className="rounded-md cursor-pointer border-2 border-black px-[2em] py-[.5em] mt-[2em]">
          Shop Now
        </button>
      </div>

      <div className="bg-light-gray h-[500px] px-[1em] lg:text-center">
        <img
          src={popularIpad}
          alt="a white headphones and smart watch"
          className="h-[200px] w-full object-contain"
        />
        <div className="min-h-[200px]">
          <h4 className="text-2xl lg:text-[2.2em]">Ipad Pro</h4>
          <p className="text-[14px] mt-[.5em] text-mid-gray font-medium lg:text-[1em] ">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
        </div>
        <button className="rounded-md cursor-pointer border-2 border-black px-[2em] py-[.5em] mt-[2em]">
          Shop Now
        </button>
      </div>

      <div className="bg-primary-gray h-[500px] px-[1em] lg:text-center">
        <img
          src={popularGalaxy}
          alt="a white headphones and smart watch"
          className="h-[200px] w-full object-contain"
        />
        <div className="min-h-[200px]">
          <h4 className="text-2xl lg:text-[2.2em]">Samsung Galaxy</h4>
          <p className="text-[14px] mt-[.5em] text-mid-gray font-medium lg:text-[1em]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
        </div>
        <button className="rounded-md cursor-pointer border-2 border-black px-[2em] py-[.5em] mt-[2em]">
          Shop Now
        </button>
      </div>

      <div className="bg-darker-gray h-[500px] px-[1em] lg:text-center">
        <img
          src={popularMacbook}
          alt="a white headphones and smart watch"
          className="h-[200px] object-contain w-full "
        />
        <div className="min-h-[200px]">
          <h4 className="text-2xl font-light text-white lg:text-[2.2em]">
            Macbook Pro
          </h4>
          <p className="text-[14px] mt-[.5em] text-mid-gray font-medium lg:text-[1em]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
        </div>
        <button className="rounded-md cursor-pointer border-2 border-white px-[2em] py-[.5em] mt-[2em] text-white">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default PobularProducts;

{
  /* <svg viewBox="0 0 850 450" xmlns="http://www.w3.org/2000/svg">
  <!-- Concept 1: Circle with subtle receipt background -->
  <g id="concept1">
    <text x="100" y="25" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#230c47">Concept 1</text>
    <circle cx="100" cy="125" r="95" fill="#5c33f1" stroke="#230c47" stroke-width="3"/>
    <g opacity="0.25">
      <rect x="120" y="65" width="50" height="90" rx="3" fill="white"/>
      <line x1="125" y1="75" x2="165" y2="75" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="85" x2="165" y2="85" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="95" x2="155" y2="95" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="105" x2="160" y2="105" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="115" x2="150" y2="115" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="130" x2="165" y2="130" stroke="#230c47" stroke-width="2"/>
      <path d="M 120 155 L 125 160 L 130 155 L 135 160 L 140 155 L 145 160 L 150 155 L 155 160 L 160 155 L 165 160 L 170 155" 
            fill="none" stroke="#230c47" stroke-width="1.5"/>
    </g>
    <text x="100" y="150" font-family="Arial, sans-serif" font-size="85" font-weight="bold" 
          fill="white" text-anchor="middle" letter-spacing="-5">SR</text>
    <circle cx="155" cy="80" r="18" fill="white" stroke="#230c47" stroke-width="2"/>
    <text x="155" y="90" font-family="Arial, sans-serif" font-size="24" font-weight="bold" 
          fill="#5c33f1" text-anchor="middle">$</text>
  </g>

  <!-- Concept 2: Receipt-shaped icon -->
  <g id="concept2" transform="translate(210, 0)">
    <text x="100" y="25" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#230c47">Concept 2</text>
    <rect x="35" y="45" width="130" height="170" rx="8" fill="#5c33f1" stroke="#230c47" stroke-width="3"/>
    <path d="M 35 215 L 45 220 L 55 215 L 65 220 L 75 215 L 85 220 L 95 215 L 105 220 L 115 215 L 125 220 L 135 215 L 145 220 L 155 215 L 165 220" 
          fill="#5c33f1" stroke="#230c47" stroke-width="3"/>
    <line x1="50" y1="65" x2="150" y2="65" stroke="white" stroke-width="2" opacity="0.6"/>
    <line x1="50" y1="80" x2="150" y2="80" stroke="white" stroke-width="2" opacity="0.6"/>
    <line x1="50" y1="95" x2="120" y2="95" stroke="white" stroke-width="2" opacity="0.6"/>
    <text x="100" y="160" font-family="Arial, sans-serif" font-size="70" font-weight="bold" 
          fill="white" text-anchor="middle" letter-spacing="-3">SR</text>
    <line x1="50" y1="180" x2="150" y2="180" stroke="white" stroke-width="3"/>
    <text x="100" y="202" font-family="Arial, sans-serif" font-size="20" font-weight="bold" 
          fill="white" text-anchor="middle">$</text>
  </g>

  <!-- Concept 3: Split design -->
  <g id="concept3" transform="translate(420, 0)">
    <text x="100" y="25" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#230c47">Concept 3</text>
    <rect x="5" y="30" width="190" height="190" rx="20" fill="#230c47" stroke="#5c33f1" stroke-width="3"/>
    <rect x="100" y="50" width="75" height="150" rx="5" fill="white"/>
    <line x1="108" y1="65" x2="167" y2="65" stroke="#230c47" stroke-width="2"/>
    <line x1="108" y1="78" x2="167" y2="78" stroke="#230c47" stroke-width="2"/>
    <line x1="108" y1="91" x2="150" y2="91" stroke="#230c47" stroke-width="2"/>
    <line x1="108" y1="104" x2="160" y2="104" stroke="#230c47" stroke-width="2"/>
    <line x1="108" y1="117" x2="145" y2="117" stroke="#230c47" stroke-width="2"/>
    <line x1="108" y1="135" x2="167" y2="135" stroke="#230c47" stroke-width="3"/>
    <path d="M 100 200 L 107 206 L 114 200 L 121 206 L 128 200 L 135 206 L 142 200 L 149 206 L 156 200 L 163 206 L 170 200 L 175 206" 
          fill="none" stroke="#230c47" stroke-width="2"/>
    <text x="52" y="155" font-family="Arial, sans-serif" font-size="80" font-weight="bold" 
          fill="#5c33f1" text-anchor="middle" letter-spacing="-5">SR</text>
  </g>

  <!-- Concept 4: Minimalist with integrated receipt lines -->
  <g id="concept4" transform="translate(630, 0)">
    <text x="100" y="25" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#230c47">Concept 4</text>
    <rect x="5" y="30" width="190" height="190" rx="95" fill="#5c33f1" stroke="#230c47" stroke-width="3"/>
    <text x="100" y="155" font-family="Arial, sans-serif" font-size="90" font-weight="bold" 
          fill="white" text-anchor="middle" letter-spacing="-5">SR</text>
    <line x1="40" y1="70" x2="85" y2="70" stroke="white" stroke-width="3" stroke-linecap="round"/>
    <line x1="40" y1="85" x2="75" y2="85" stroke="white" stroke-width="3" stroke-linecap="round"/>
    <line x1="115" y1="70" x2="160" y2="70" stroke="white" stroke-width="3" stroke-linecap="round"/>
    <line x1="125" y1="85" x2="160" y2="85" stroke="white" stroke-width="3" stroke-linecap="round"/>
    <line x1="40" y1="180" x2="160" y2="180" stroke="white" stroke-width="4" stroke-linecap="round"/>
    <circle cx="100" cy="198" r="8" fill="white"/>
    <text x="100" y="204" font-family="Arial, sans-serif" font-size="12" font-weight="bold" 
          fill="#5c33f1" text-anchor="middle">$</text>
  </g>

  <!-- Labels at bottom -->
  <g transform="translate(0, 250)">
    <text x="100" y="20" font-family="Arial, sans-serif" font-size="11" fill="#230c47" text-anchor="middle">Subtle Receipt BG</text>
    <text x="310" y="20" font-family="Arial, sans-serif" font-size="11" fill="#230c47" text-anchor="middle">Receipt Shape</text>
    <text x="520" y="20" font-family="Arial, sans-serif" font-size="11" fill="#230c47" text-anchor="middle">Split Design</text>
    <text x="730" y="20" font-family="Arial, sans-serif" font-size="11" fill="#230c47" text-anchor="middle">Minimalist Lines</text>
  </g>

  <!-- Bonus: Rounded square version -->
  <g id="bonus" transform="translate(0, 280)">
    <text x="100" y="25" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#230c47">Bonus: App Icon</text>
    <rect x="25" y="45" width="150" height="150" rx="35" fill="#5c33f1" stroke="#230c47" stroke-width="3"/>
    <rect x="130" y="65" width="45" height="75" rx="3" fill="white" opacity="0.2"/>
    <line x1="135" y1="73" x2="170" y2="73" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <line x1="135" y1="82" x2="170" y2="82" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <line x1="135" y1="91" x2="160" y2="91" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <line x1="135" y1="100" x2="165" y2="100" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <line x1="135" y1="115" x2="170" y2="115" stroke="white" stroke-width="2" opacity="0.3"/>
    <text x="100" y="145" font-family="Arial, sans-serif" font-size="75" font-weight="bold" 
          fill="white" text-anchor="middle" letter-spacing="-4">SR</text>
    <circle cx="45" cy="70" r="12" fill="white"/>
    <text x="45" y="77" font-family="Arial, sans-serif" font-size="16" font-weight="bold" 
          fill="#5c33f1" text-anchor="middle">$</text>
  </g>
</svg> */
}

{
  /* <svg viewBox="0 0 900 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Import Poppins font -->
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&amp;display=swap');
      .poppins-text { font-family: 'Poppins', sans-serif; }
    </style>
  </defs>

  <!-- Concept 1 - Variation A: #5c33f1 base -->
  <g id="concept1a">
    <text x="100" y="25" class="poppins-text" font-size="16" font-weight="700" fill="#230c47">Concept 1A</text>
    <circle cx="100" cy="130" r="95" fill="#5c33f1" stroke="#230c47" stroke-width="3"/>
    <g opacity="0.25">
      <rect x="120" y="70" width="50" height="90" rx="3" fill="white"/>
      <line x1="125" y1="80" x2="165" y2="80" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="90" x2="165" y2="90" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="100" x2="155" y2="100" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="110" x2="160" y2="110" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="120" x2="150" y2="120" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="135" x2="165" y2="135" stroke="#230c47" stroke-width="2"/>
      <path d="M 120 160 L 125 165 L 130 160 L 135 165 L 140 160 L 145 165 L 150 160 L 155 165 L 160 160 L 165 165 L 170 160" 
            fill="none" stroke="#230c47" stroke-width="1.5"/>
    </g>
    <text x="100" y="158" class="poppins-text" font-size="80" font-weight="700" 
          fill="white" text-anchor="middle" letter-spacing="-5">SR</text>
    <circle cx="155" cy="85" r="18" fill="white" stroke="#230c47" stroke-width="2"/>
    <text x="155" y="95" class="poppins-text" font-size="24" font-weight="700" 
          fill="#5c33f1" text-anchor="middle">$</text>
    <text x="100" y="245" class="poppins-text" font-size="11" fill="#230c47" text-anchor="middle">#5c33f1</text>
  </g>

  <!-- Concept 1 - Variation B: #a09afd light purple -->
  <g id="concept1b" transform="translate(220, 0)">
    <text x="100" y="25" class="poppins-text" font-size="16" font-weight="700" fill="#230c47">Concept 1B</text>
    <circle cx="100" cy="130" r="95" fill="#a09afd" stroke="#5c33f1" stroke-width="3"/>
    <g opacity="0.3">
      <rect x="120" y="70" width="50" height="90" rx="3" fill="white"/>
      <line x1="125" y1="80" x2="165" y2="80" stroke="#5c33f1" stroke-width="1.5"/>
      <line x1="125" y1="90" x2="165" y2="90" stroke="#5c33f1" stroke-width="1.5"/>
      <line x1="125" y1="100" x2="155" y2="100" stroke="#5c33f1" stroke-width="1.5"/>
      <line x1="125" y1="110" x2="160" y2="110" stroke="#5c33f1" stroke-width="1.5"/>
      <line x1="125" y1="120" x2="150" y2="120" stroke="#5c33f1" stroke-width="1.5"/>
      <line x1="125" y1="135" x2="165" y2="135" stroke="#5c33f1" stroke-width="2"/>
      <path d="M 120 160 L 125 165 L 130 160 L 135 165 L 140 160 L 145 165 L 150 160 L 155 165 L 160 160 L 165 165 L 170 160" 
            fill="none" stroke="#5c33f1" stroke-width="1.5"/>
    </g>
    <text x="100" y="158" class="poppins-text" font-size="80" font-weight="700" 
          fill="white" text-anchor="middle" letter-spacing="-5">SR</text>
    <circle cx="155" cy="85" r="18" fill="white" stroke="#5c33f1" stroke-width="2"/>
    <text x="155" y="95" class="poppins-text" font-size="24" font-weight="700" 
          fill="#5c33f1" text-anchor="middle">$</text>
    <text x="100" y="245" class="poppins-text" font-size="11" fill="#230c47" text-anchor="middle">#a09afd</text>
  </g>

  <!-- Concept 1 - Variation C: #b26eea pink-purple -->
  <g id="concept1c" transform="translate(440, 0)">
    <text x="100" y="25" class="poppins-text" font-size="16" font-weight="700" fill="#230c47">Concept 1C</text>
    <circle cx="100" cy="130" r="95" fill="#b26eea" stroke="#230c47" stroke-width="3"/>
    <g opacity="0.25">
      <rect x="120" y="70" width="50" height="90" rx="3" fill="white"/>
      <line x1="125" y1="80" x2="165" y2="80" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="90" x2="165" y2="90" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="100" x2="155" y2="100" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="110" x2="160" y2="110" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="120" x2="150" y2="120" stroke="#230c47" stroke-width="1.5"/>
      <line x1="125" y1="135" x2="165" y2="135" stroke="#230c47" stroke-width="2"/>
      <path d="M 120 160 L 125 165 L 130 160 L 135 165 L 140 160 L 145 165 L 150 160 L 155 165 L 160 160 L 165 165 L 170 160" 
            fill="none" stroke="#230c47" stroke-width="1.5"/>
    </g>
    <text x="100" y="158" class="poppins-text" font-size="80" font-weight="700" 
          fill="white" text-anchor="middle" letter-spacing="-5">SR</text>
    <circle cx="155" cy="85" r="18" fill="white" stroke="#230c47" stroke-width="2"/>
    <text x="155" y="95" class="poppins-text" font-size="24" font-weight="700" 
          fill="#b26eea" text-anchor="middle">$</text>
    <text x="100" y="245" class="poppins-text" font-size="11" fill="#230c47" text-anchor="middle">#b26eea</text>
  </g>

  <!-- Concept 1 - Variation D: #eaafff light pink -->
  <g id="concept1d" transform="translate(660, 0)">
    <text x="100" y="25" class="poppins-text" font-size="16" font-weight="700" fill="#230c47">Concept 1D</text>
    <circle cx="100" cy="130" r="95" fill="#eaafff" stroke="#b26eea" stroke-width="3"/>
    <g opacity="0.4">
      <rect x="120" y="70" width="50" height="90" rx="3" fill="white"/>
      <line x1="125" y1="80" x2="165" y2="80" stroke="#5c33f1" stroke-width="1.5"/>
      <line x1="125" y1="90" x2="165" y2="90" stroke="#5c33f1" stroke-width="1.5"/>
      <line x1="125" y1="100" x2="155" y2="100" stroke="#5c33f1" stroke-width="1.5"/>
      <line x1="125" y1="110" x2="160" y2="110" stroke="#5c33f1" stroke-width="1.5"/>
      <line x1="125" y1="120" x2="150" y2="120" stroke="#5c33f1" stroke-width="1.5"/>
      <line x1="125" y1="135" x2="165" y2="135" stroke="#5c33f1" stroke-width="2"/>
      <path d="M 120 160 L 125 165 L 130 160 L 135 165 L 140 160 L 145 165 L 150 160 L 155 165 L 160 160 L 165 165 L 170 160" 
            fill="none" stroke="#5c33f1" stroke-width="1.5"/>
    </g>
    <text x="100" y="158" class="poppins-text" font-size="80" font-weight="700" 
          fill="#5c33f1" text-anchor="middle" letter-spacing="-5">SR</text>
    <circle cx="155" cy="85" r="18" fill="white" stroke="#b26eea" stroke-width="2"/>
    <text x="155" y="95" class="poppins-text" font-size="24" font-weight="700" 
          fill="#b26eea" text-anchor="middle">$</text>
    <text x="100" y="245" class="poppins-text" font-size="11" fill="#230c47" text-anchor="middle">#eaafff</text>
  </g>

  <!-- CONCEPT 2 - Receipt Shape Variations -->
  <!-- Concept 2A -->
  <g id="concept2a" transform="translate(0, 280)">
    <text x="100" y="25" class="poppins-text" font-size="16" font-weight="700" fill="#230c47">Concept 2A</text>
    <rect x="35" y="50" width="130" height="170" rx="8" fill="#5c33f1" stroke="#230c47" stroke-width="3"/>
    <path d="M 35 220 L 45 225 L 55 220 L 65 225 L 75 220 L 85 225 L 95 220 L 105 225 L 115 220 L 125 225 L 135 220 L 145 225 L 155 220 L 165 225" 
          fill="#5c33f1" stroke="#230c47" stroke-width="3"/>
    <line x1="50" y1="70" x2="150" y2="70" stroke="white" stroke-width="2" opacity="0.6"/>
    <line x1="50" y1="85" x2="150" y2="85" stroke="white" stroke-width="2" opacity="0.6"/>
    <line x1="50" y1="100" x2="120" y2="100" stroke="white" stroke-width="2" opacity="0.6"/>
    <text x="100" y="165" class="poppins-text" font-size="65" font-weight="700" 
          fill="white" text-anchor="middle" letter-spacing="-3">SR</text>
    <line x1="50" y1="185" x2="150" y2="185" stroke="white" stroke-width="3"/>
    <text x="100" y="207" class="poppins-text" font-size="20" font-weight="700" 
          fill="white" text-anchor="middle">$</text>
    <text x="100" y="245" class="poppins-text" font-size="11" fill="#230c47" text-anchor="middle">#5c33f1</text>
  </g>

  <!-- Concept 2B -->
  <g id="concept2b" transform="translate(220, 280)">
    <text x="100" y="25" class="poppins-text" font-size="16" font-weight="700" fill="#230c47">Concept 2B</text>
    <rect x="35" y="50" width="130" height="170" rx="8" fill="#a09afd" stroke="#5c33f1" stroke-width="3"/>
    <path d="M 35 220 L 45 225 L 55 220 L 65 225 L 75 220 L 85 225 L 95 220 L 105 225 L 115 220 L 125 225 L 135 220 L 145 225 L 155 220 L 165 225" 
          fill="#a09afd" stroke="#5c33f1" stroke-width="3"/>
    <line x1="50" y1="70" x2="150" y2="70" stroke="white" stroke-width="2" opacity="0.7"/>
    <line x1="50" y1="85" x2="150" y2="85" stroke="white" stroke-width="2" opacity="0.7"/>
    <line x1="50" y1="100" x2="120" y2="100" stroke="white" stroke-width="2" opacity="0.7"/>
    <text x="100" y="165" class="poppins-text" font-size="65" font-weight="700" 
          fill="white" text-anchor="middle" letter-spacing="-3">SR</text>
    <line x1="50" y1="185" x2="150" y2="185" stroke="white" stroke-width="3"/>
    <text x="100" y="207" class="poppins-text" font-size="20" font-weight="700" 
          fill="white" text-anchor="middle">$</text>
    <text x="100" y="245" class="poppins-text" font-size="11" fill="#230c47" text-anchor="middle">#a09afd</text>
  </g>

  <!-- Concept 2C -->
  <g id="concept2c" transform="translate(440, 280)">
    <text x="100" y="25" class="poppins-text" font-size="16" font-weight="700" fill="#230c47">Concept 2C</text>
    <rect x="35" y="50" width="130" height="170" rx="8" fill="#b26eea" stroke="#230c47" stroke-width="3"/>
    <path d="M 35 220 L 45 225 L 55 220 L 65 225 L 75 220 L 85 225 L 95 220 L 105 225 L 115 220 L 125 225 L 135 220 L 145 225 L 155 220 L 165 225" 
          fill="#b26eea" stroke="#230c47" stroke-width="3"/>
    <line x1="50" y1="70" x2="150" y2="70" stroke="white" stroke-width="2" opacity="0.6"/>
    <line x1="50" y1="85" x2="150" y2="85" stroke="white" stroke-width="2" opacity="0.6"/>
    <line x1="50" y1="100" x2="120" y2="100" stroke="white" stroke-width="2" opacity="0.6"/>
    <text x="100" y="165" class="poppins-text" font-size="65" font-weight="700" 
          fill="white" text-anchor="middle" letter-spacing="-3">SR</text>
    <line x1="50" y1="185" x2="150" y2="185" stroke="white" stroke-width="3"/>
    <text x="100" y="207" class="poppins-text" font-size="20" font-weight="700" 
          fill="white" text-anchor="middle">$</text>
    <text x="100" y="245" class="poppins-text" font-size="11" fill="#230c47" text-anchor="middle">#b26eea</text>
  </g>

  <!-- Concept 2D -->
  <g id="concept2d" transform="translate(660, 280)">
    <text x="100" y="25" class="poppins-text" font-size="16" font-weight="700" fill="#230c47">Concept 2D</text>
    <rect x="35" y="50" width="130" height="170" rx="8" fill="#eaafff" stroke="#b26eea" stroke-width="3"/>
    <path d="M 35 220 L 45 225 L 55 220 L 65 225 L 75 220 L 85 225 L 95 220 L 105 225 L 115 220 L 125 225 L 135 220 L 145 225 L 155 220 L 165 225" 
          fill="#eaafff" stroke="#b26eea" stroke-width="3"/>
    <line x1="50" y1="70" x2="150" y2="70" stroke="#5c33f1" stroke-width="2" opacity="0.5"/>
    <line x1="50" y1="85" x2="150" y2="85" stroke="#5c33f1" stroke-width="2" opacity="0.5"/>
    <line x1="50" y1="100" x2="120" y2="100" stroke="#5c33f1" stroke-width="2" opacity="0.5"/>
    <text x="100" y="165" class="poppins-text" font-size="65" font-weight="700" 
          fill="#5c33f1" text-anchor="middle" letter-spacing="-3">SR</text>
    <line x1="50" y1="185" x2="150" y2="185" stroke="#5c33f1" stroke-width="3"/>
    <text x="100" y="207" class="poppins-text" font-size="20" font-weight="700" 
          fill="#5c33f1" text-anchor="middle">$</text>
    <text x="100" y="245" class="poppins-text" font-size="11" fill="#230c47" text-anchor="middle">#eaafff</text>
  </g>

  <!-- BONUS - App Icon Variations -->
  <!-- Bonus A -->
  <g id="bonusa" transform="translate(0, 560)">
    <text x="100" y="25" class="poppins-text" font-size="16" font-weight="700" fill="#230c47">Bonus A</text>
    <rect x="25" y="50" width="150" height="150" rx="35" fill="#5c33f1" stroke="#230c47" stroke-width="3"/>
    <rect x="130" y="70" width="45" height="75" rx="3" fill="white" opacity="0.2"/>
    <line x1="135" y1="78" x2="170" y2="78" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <line x1="135" y1="87" x2="170" y2="87" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <line x1="135" y1="96" x2="160" y2="96" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <line x1="135" y1="105" x2="165" y2="105" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <line x1="135" y1="120" x2="170" y2="120" stroke="white" stroke-width="2" opacity="0.3"/>
    <text x="100" y="150" class="poppins-text" font-size="70" font-weight="700" 
          fill="white" text-anchor="middle" letter-spacing="-4">SR</text>
    <circle cx="45" cy="75" r="12" fill="white"/>
    <text x="45" y="82" class="poppins-text" font-size="16" font-weight="700" 
          fill="#5c33f1" text-anchor="middle">$</text>
    <text x="100" y="220" class="poppins-text" font-size="11" fill="#230c47" text-anchor="middle">#5c33f1</text>
  </g>

  <!-- Bonus B -->
  <g id="bonusb" transform="translate(220, 560)">
    <text x="100" y="25" class="poppins-text" font-size="16" font-weight="700" fill="#230c47">Bonus B</text>
    <rect x="25" y="50" width="150" height="150" rx="35" fill="#a09afd" stroke="#5c33f1" stroke-width="3"/>
    <rect x="130" y="70" width="45" height="75" rx="3" fill="white" opacity="0.25"/>
    <line x1="135" y1="78" x2="170" y2="78" stroke="white" stroke-width="1.5" opacity="0.4"/>
    <line x1="135" y1="87" x2="170" y2="87" stroke="white" stroke-width="1.5" opacity="0.4"/>
    <line x1="135" y1="96" x2="160" y2="96" stroke="white" stroke-width="1.5" opacity="0.4"/>
    <line x1="135" y1="105" x2="165" y2="105" stroke="white" stroke-width="1.5" opacity="0.4"/>
    <line x1="135" y1="120" x2="170" y2="120" stroke="white" stroke-width="2" opacity="0.4"/>
    <text x="100" y="150" class="poppins-text" font-size="70" font-weight="700" 
          fill="white" text-anchor="middle" letter-spacing="-4">SR</text>
    <circle cx="45" cy="75" r="12" fill="white"/>
    <text x="45" y="82" class="poppins-text" font-size="16" font-weight="700" 
          fill="#a09afd" text-anchor="middle">$</text>
    <text x="100" y="220" class="poppins-text" font-size="11" fill="#230c47" text-anchor="middle">#a09afd</text>
  </g>

  <!-- Bonus C -->
  <g id="bonusc" transform="translate(440, 560)">
    <text x="100" y="25" class="poppins-text" font-size="16" font-weight="700" fill="#230c47">Bonus C</text>
    <rect x="25" y="50" width="150" height="150" rx="35" fill="#b26eea" stroke="#230c47" stroke-width="3"/>
    <rect x="130" y="70" width="45" height="75" rx="3" fill="white" opacity="0.2"/>
    <line x1="135" y1="78" x2="170" y2="78" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <line x1="135" y1="87" x2="170" y2="87" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <line x1="135" y1="96" x2="160" y2="96" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <line x1="135" y1="105" x2="165" y2="105" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <line x1="135" y1="120" x2="170" y2="120" stroke="white" stroke-width="2" opacity="0.3"/>
    <text x="100" y="150" class="poppins-text" font-size="70" font-weight="700" 
          fill="white" text-anchor="middle" letter-spacing="-4">SR</text>
    <circle cx="45" cy="75" r="12" fill="white"/>
    <text x="45" y="82" class="poppins-text" font-size="16" font-weight="700" 
          fill="#b26eea" text-anchor="middle">$</text>
    <text x="100" y="220" class="poppins-text" font-size="11" fill="#230c47" text-anchor="middle">#b26eea</text>
  </g>

  <!-- Bonus D -->
  <g id="bonusd" transform="translate(660, 560)">
    <text x="100" y="25" class="poppins-text" font-size="16" font-weight="700" fill="#230c47">Bonus D</text>
    <rect x="25" y="50" width="150" height="150" rx="35" fill="#eaafff" stroke="#b26eea" stroke-width="3"/>
    <rect x="130" y="70" width="45" height="75" rx="3" fill="white" opacity="0.3"/>
    <line x1="135" y1="78" x2="170" y2="78" stroke="#5c33f1" stroke-width="1.5" opacity="0.4"/>
    <line x1="135" y1="87" x2="170" y2="87" stroke="#5c33f1" stroke-width="1.5" opacity="0.4"/>
    <line x1="135" y1="96" x2="160" y2="96" stroke="#5c33f1" stroke-width="1.5" opacity="0.4"/>
    <line x1="135" y1="105" x2="165" y2="105" stroke="#5c33f1" stroke-width="1.5" opacity="0.4"/>
    <line x1="135" y1="120" x2="170" y2="120" stroke="#5c33f1" stroke-width="2" opacity="0.4"/>
    <text x="100" y="150" class="poppins-text" font-size="70" font-weight="700" 
          fill="#5c33f1" text-anchor="middle" letter-spacing="-4">SR</text>
    <circle cx="45" cy="75" r="12" fill="white"/>
    <text x="45" y="82" class="poppins-text" font-size="16" font-weight="700" 
          fill="#b26eea" text-anchor="middle">$</text>
    <text x="100" y="220" class="poppins-text" font-size="11" fill="#230c47" text-anchor="middle">#eaafff</text>
  </g>
</svg> */
}
