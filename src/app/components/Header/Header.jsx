import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import {
  useStyles,
  Container,
  Logo,
  SearchContainer,
  InputSeach,
  HeaderNav,
  HeaderOption,
  OptionOne,
  OptionTwo,
  HeaderBasket,
  BasketTitle,
} from "./Header.Styles";

const Header = () => {
  const classes = useStyles();
  return (
    <Container>
      <Logo
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon"
      />

      <SearchContainer>
        <InputSeach />
        <Search className={classes.header_seachIcon} />
      </SearchContainer>
      <HeaderNav>
        <HeaderOption>
          <OptionOne>Hello Guest</OptionOne>
          <OptionTwo>Sign In</OptionTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionOne>Returns</OptionOne>
          <OptionTwo> & Orders</OptionTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionOne>Your</OptionOne>
          <OptionTwo>Prime</OptionTwo>
        </HeaderOption>
      </HeaderNav>
      <HeaderBasket>
        <Badge badgeContent={4} className={classes.badge}>
          <ShoppingCartOutlined className={classes.shoppingCart} />
        </Badge>
      </HeaderBasket>
      <BasketTitle> Cart</BasketTitle>
    </Container>
  );
};

export default Header;
