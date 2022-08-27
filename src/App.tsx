import { Drawer } from "@material-ui/core/";
import { QueryKey, useQuery } from "react-query";
import { LinearProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Badge } from "@material-ui/core";
import { StyledButton, Wrapper } from "./App.styles";
import Item from "./Item/Item";
import { Fragment, useState } from "react";
import Cart from "./Cart/Cart";
import GlobalStyle from './globalStyle';

export interface CartItemInterface {
  id: number;
  category: string;
  description: string;
  images: string[];
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemInterface[]> =>
  await (await fetch("https://api.escuelajs.co/api/v1/products")).json();


const App = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemInterface[])

  const { data, isLoading, error } = useQuery<CartItemInterface[]>("products", getProducts)
  console.log(data)

  const getTotalItems = (items: CartItemInterface[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0)
    ;

  const handleAddTocart = (clickedItem: CartItemInterface) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if (isItemInCart) {
        return prev.map(item => (
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ))
      }
      return [...prev, { ...clickedItem, amount: 1 }]
    })
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc
          return [...acc, { ...item, amount: item.amount - 1 }]
        } else return [...acc, item]
      }, [] as CartItemInterface[])
    ))
  };

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong ...</div>

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <p className="mainTitle">Shop with random items</p>
        <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart cartItems={cartItems} addToCart={handleAddTocart} removeFromCart={handleRemoveFromCart} />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
        <Grid container spacing={5}>
          {data?.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddTocart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </Fragment>

  );
}

export default App;
