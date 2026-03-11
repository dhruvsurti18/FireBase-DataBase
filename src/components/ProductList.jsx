import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductItem from "./ProductItem"
import { fetchProducts } from "../features/products/productSlice"

import {
Table,
TableHead,
TableRow,
TableCell,
TableBody,
Paper
} from "@mui/material"

export default function ProductList(){

const dispatch = useDispatch()

const products = useSelector(state => state.products.items)

useEffect(()=>{
dispatch(fetchProducts())
},[dispatch])

return(

<Paper sx={{p:2}}>

<Table>

<TableHead>
<TableRow>
<TableCell>Name</TableCell>
<TableCell>Category</TableCell>
<TableCell>Price</TableCell>
<TableCell>Stock</TableCell>
<TableCell>Action</TableCell>
</TableRow>
</TableHead>

<TableBody>

{
products.map(p => (
<ProductItem key={p.id} product={p} />
))
}

</TableBody>

</Table>

</Paper>

)
}
