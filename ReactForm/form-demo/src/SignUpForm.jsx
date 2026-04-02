import { useState } from "react";

export default function SignUpForm() {
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: ""
   })
   function handleChange(evt) {
      const fieldName = evt.target.name;
      const value = evt.target.value;
      setFormData(currData => {
         // currData[fieldName] = value;
         // return { ...currData };
         return {
            ...currData,
            [fieldName]: value
         }
      });
   }
   return (
      <div>
         <label htmlFor="firstname">Enter First Name</label>
         <input type="text" id="firstname" placeholder="firstname" name="firstName" value={formData.firstName} onChange={handleChange} />
         <label htmlFor="lastname">Enter Last Name</label>
         <input type="text" id="lastname" placeholder="lastname" name="lastName" value={formData.lastName} onChange={handleChange} />
         <button>Submit</button>
      </div>
   )
}