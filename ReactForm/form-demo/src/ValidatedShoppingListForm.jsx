import { useState } from "react"

export default function ValidatedShoppingListForm({ addItem }) {
   const [formData, setFormData] = useState({
      product: "",
      quantity: 0
   })

   const [productIsValid, setProductIsValid] = useState(false);

   const validate = (product) => {
      if (product.length === 0) {
         setProductIsValid(false);
      } else {
         setProductIsValid(true);
      }
   }
   const handleChange = (evt) => {
      if (evt.target.name === "product") {
         validate(evt.target.value);
      }
      setFormData(prevData => {
         return {
            ...prevData,
            [evt.target.name]: evt.target.value
         }
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (productIsValid) {
         addItem(formData);
         setFormData({
            product: "",
            quantity: 0
         })
      }

   }

   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="productName">Product Name</label>
         <input type="text" name="product" id="productName" placeholder="Name" value={formData.product} onChange={handleChange} />
         {!productIsValid && < p style={{ color: "red" }}>Product cannot pe empty</p>}
         <label htmlFor="productQuantity">Quantity</label>
         <input type="number" name="quantity" id="productQuantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
         <button>Add to chart</button>
      </form >
   )
}