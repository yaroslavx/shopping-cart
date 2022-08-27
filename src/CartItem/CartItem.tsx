import { Button } from "@material-ui/core";
import { Wrapper } from "./CartItem.styles";
import { CartItemInterface } from "../App";

interface Props {
    item: CartItemInterface
    addToCart: (clickedItem: CartItemInterface) => void;
    removeFromCart: (id: number) => void
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
    return (
        <Wrapper>
            <div>
                <h3>{item.title}</h3>
                <div className="information">
                    <p>Price: ${item.price}</p>
                    <p>Total: {(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div className="buttons">
                    <Button className="button" size="small" disableElevation variant="contained" onClick={() => removeFromCart(item.id)}>
                        -
                    </Button>
                    <p>{item.amount}</p>
                    <Button className="button" size="small" disableElevation variant="contained" onClick={() => addToCart(item)}>
                        +
                    </Button>
                </div>
            </div>
            <img src={item.images[1]}/>
        </Wrapper>
    )
}

export default CartItem