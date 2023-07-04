import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { data, loading } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt="product1"
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt="product2"
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt="mainImg"
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <div className="prices">
              <span className="oldPrice">
                Rs.{data?.attributes?.price + 200}
              </span>
              <span className="newPrice">Rs.{data?.attributes?.price}</span>
            </div>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={(e) =>
                  quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)
                }
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={(e) => setQuantity(quantity + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="link">
              <div className="item">
                <FavoriteBorderIcon /> Add to wishlist
              </div>
              <div className="item">
                <BalanceIcon /> Add to compare
              </div>
            </div>
            <div className="info">
              <span>Vendor: Cootpex</span>
              <span>Product Type: {data?.attributes?.title}</span>
              <span>Tag: {data?.attributes?.title}</span>
            </div>
            <hr />

            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
