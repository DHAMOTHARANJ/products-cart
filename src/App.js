import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const data = [
  {
    productImage:
      "https://klan.dk/wp-content/uploads/2020/11/Acer-Aspire-7-15.6-3550H-512GB-GTX-1650-Ti-Windows-10-Home-64-bit-shop-shoppetur.jpg",
    productName: "Acer Aspire 7",
    productPrice: 54990,
    id: 100
  },
  {
    productImage:
      "https://th.bing.com/th/id/OIP.l5xITHN8cSpA9ymfM3MBMAHaHa?pid=ImgDet&rs=1",
    productName: "MSI Bravo 15",
    productPrice: 49990,
    id: 101
  },
  {
    productImage:
      "https://www.computerlounge.co.nz/data/media/images/catalogue/Products2/Peripherals/Monitors/Acer/37987_2.jpg?maxheight=1200&maxwidth=1200&404=default.jpg",
    productName: "Acer Nitro",
    productPrice: 14999,
    id: 102
  },
  {
    productImage:
      "https://ae01.alicdn.com/kf/HTB1FZTZvASWBuNjSszdq6zeSpXav/HXSJ-New-One-Handed-Mechanical-Keyboard-35-Key-Gaming-Keyboard-Colorful-Glowing-Mini-Keyboard-Suitable-for.jpg",
    productName: "HXSJ",
    productPrice: 3999,
    id: 103
  },
  {
    productImage:
      "https://altechelectronics.org/wp-content/uploads/2021/02/tp-link-ac5400-tri-band-wifi-gaming-routerarcher-c5400x-mu-mimo-wireless-2048x1667.jpg",
    productName: "TP-Link",
    productPrice: 4999,
    id: 104
  },
  {
    productImage:
      "https://asset.msi.com/resize/image/global/product/product_16667664500389b51f997f51e8e50fc1ac335fefca.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    productName: "MSI Trident",
    productPrice: 149999,
    id: 105
  }
];

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="App">
      <div className="header">
        <div id="logo">Gaming Shop</div>
        <ul id="navbar">
          <li>Home</li>
          <li>About</li>
          <li id="cart"><span className="material-symbols-rounded">
shopping_cart
</span>{cartCount}</li>
        </ul>
      
      </div>
      <div className="header2">
        <h2>Ultimate gaming shop</h2>
        <h3>With this shop hompeage template</h3>
      </div>
      <div className="products">
        {data.map((prod, idx) => (
          <ProductCard
            key={prod.id}
            productImage={prod.productImage}
            productName={prod.productName}
            productPrice={prod.productPrice}
            cartCount={cartCount}
            setCartCount={setCartCount}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
function ProductCard({
  productImage,
  productName,
  productPrice,
  cartCount,
  setCartCount
}) {
  const [show, setShow] = useState(true);
  const handleAddToCart = () => {
    setShow(!show);
    setCartCount(cartCount + 1);
  };

  const handleRemoveCart = () => {
    setShow(!show);
    setCartCount(cartCount - 1);
  };
  return (
    <div className="productarea">
      <div className="allcart">
    <div className="card">
      <div className="imgcard">
      <img src={productImage} alt="productimage" />
      </div>
      <div>
        <h3>{productName}</h3>
        <p>Rs.{productPrice}</p>
      </div>
      <div className="btns">
      {show ? (
        <button className="addbtn"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      ) : (
        <button className="removebtn"
          onClick={handleRemoveCart}
        >
          Remove from cart
        </button>
      )}
      </div>
    </div>
    </div>
    </div>
  );
}
