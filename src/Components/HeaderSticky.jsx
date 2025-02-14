import { StickyLogoBox, StickyOuterBox } from "./Header/index";

export default function HeaderSticky() {
  return (
    <>
      <div className="sticky-header">
        <div className="auto-container">
          <div className="inner-container d-flex justify-content-between align-items-center flex-wrap">
            {/* Logo */}
            <StickyLogoBox />

            {/* Right Box */}
            <div className="right-box">
              {/* Main Menu */}
              <nav className="main-menu">
                {/* Keep This Empty / Menu will come through Javascript */}
              </nav>
              {/* Main Menu End */}
            </div>

            {/* Main Menu End */}
            <StickyOuterBox />
          </div>
        </div>
        {/* End Sticky Menu */}
      </div>
    </>
  );
}
