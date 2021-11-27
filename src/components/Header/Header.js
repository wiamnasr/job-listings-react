import { Wrapper } from "./Header.styles";
import mobileHeader from "../JobListingCard/images/bg-header-mobile.svg";

const Header = () => {
  return (
    <Wrapper>
      <img src={mobileHeader} alt='header-img' />
    </Wrapper>
  );
};

export default Header;
