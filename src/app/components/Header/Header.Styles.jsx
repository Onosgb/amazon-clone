import { makeStyles } from "@mui/styles";
import styled from "styled-components";

export const useStyles = makeStyles({
  header_seachIcon: {
    padding: 5,
    height: 22,
    backgroundColor: "#cd9042",
  },
  badge: {
    color: "gold",
    fontSize: "bold",
  },
  shoppingCart: {
    color: "#fff",
  },
});

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 20px;
`;

export const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 30px;

  margin-bottom: 18px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
`;

export const InputSeach = styled.input`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: #fff;
`;

export const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

export const OptionOne = styled.span`
  font-size: 10px;
`;

export const OptionTwo = styled.span`
  font-size: 13px;
  font-weight: 800;
`;

export const HeaderBasket = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BasketTitle = styled.span`
  color: #fff;
`;
