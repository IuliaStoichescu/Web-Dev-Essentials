import { useState } from "react"

export default function ShoppingListForm({ addItem }) {
   const [formData, setFormData] = useState({
      product: "",
      quantity: 0
   })

   const handleChange = (evt) => {
      setFormData(prevData => {
         return {
            ...prevData,
            [evt.target.name]: evt.target.value
         }
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      addItem(formData);
      setFormData({
         product: "",
         quantity: 0
      })
   }

   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="productName">Product Name</label>
         <input type="text" name="product" id="productName" placeholder="Name" value={formData.product} onChange={handleChange} />
         <label htmlFor="productQuantity">Quantity</label>
         <input type="number" name="quantity" id="productQuantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
         <button>Add to chart</button>
      </form>
   )
}