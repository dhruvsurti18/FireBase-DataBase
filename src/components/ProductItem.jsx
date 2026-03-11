import { useDispatch } from "react-redux"
import { deleteProduct, updateProduct, fetchProducts } from "../features/products/productSlice"

import { TableRow, TableCell, Button } from "@mui/material"
import { useState } from "react"

export default function ProductItem({product}) {

const dispatch = useDispatch()

const [editing,setEditing] = useState(false)
const [name,setName] = useState(product.name)
const [category,setCategory] = useState(product.category)
const [price,setPrice] = useState(product.price)
const [stock,setStock] = useState(product.stock)

const handleUpdate = async () => {

await dispatch(updateProduct({
id: product.id,
product:{
name,
category,
price,
stock
}
}))

dispatch(fetchProducts())   // ⭐ important
setEditing(false)
}

const handleDelete = async () => {

await dispatch(deleteProduct(product.id))

dispatch(fetchProducts())   // ⭐ important
}

return (

<TableRow>

<TableCell>
{editing ? <input value={name} onChange={(e)=>setName(e.target.value)} /> : product.name}
</TableCell>

<TableCell>
{editing ? <input value={category} onChange={(e)=>setCategory(e.target.value)} /> : product.category}
</TableCell>

<TableCell>
{editing ? <input value={price} onChange={(e)=>setPrice(e.target.value)} /> : product.price}
</TableCell>

<TableCell>
{editing ? <input value={stock} onChange={(e)=>setStock(e.target.value)} /> : product.stock}
</TableCell>

<TableCell>

{editing ? (

<Button
variant="contained"
color="success"
onClick={handleUpdate}
>
Save
</Button>

) : (

<Button
variant="contained"
sx={{backgroundColor:"gold",color:"black",mr:1}}
onClick={()=>setEditing(true)}
>
Edit
</Button>

)}

<Button
variant="contained"
color="error"
onClick={handleDelete}
>
Delete
</Button>

</TableCell>

</TableRow>

)
}
