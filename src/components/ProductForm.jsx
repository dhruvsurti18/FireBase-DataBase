import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, fetchProducts } from "../features/products/productSlice";

import { TextField, Button, Stack, Paper } from "@mui/material";

export default function ProductForm() {

const [name,setName] = useState("")
const [category,setCategory] = useState("")
const [price,setPrice] = useState("")
const [stock,setStock] = useState("")

const dispatch = useDispatch()

const handleSubmit = async (e) => {

e.preventDefault()

await dispatch(addProduct({
name,
category,
price,
stock
}))

dispatch(fetchProducts())   // ⭐ important

setName("")
setCategory("")
setPrice("")
setStock("")
}

return (

<Paper sx={{p:3, mb:3}}>

<form onSubmit={handleSubmit}>

<Stack spacing={2}>

<TextField
label="Product Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<TextField
label="Category"
value={category}
onChange={(e)=>setCategory(e.target.value)}
/>

<TextField
label="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<TextField
label="Stock"
value={stock}
onChange={(e)=>setStock(e.target.value)}
/>

<Button variant="contained" type="submit">
Add Product
</Button>

</Stack>

</form>

</Paper>

)
}
