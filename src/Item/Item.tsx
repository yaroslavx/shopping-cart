import { Button } from "@material-ui/core"
import { CartItemInterface } from "../App"
import { Wrapper } from "./Item.styles"

interface Props {
    item: CartItemInterface;
    handleAddToCart: (clickedItem: CartItemInterface) => void
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
    return (
        <Wrapper>
            <img src={item.images[1]} alt={item.title}/>
            <div>
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
                <h3 className="price">${item.price}</h3>
            </div>
            <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
        </Wrapper>
    )
}

export default Item