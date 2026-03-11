import ProductForm from "./components/ProductForm"
import ProductList from "./components/ProductList"
import { Container, Typography } from "@mui/material"

function App() {

    return (

        <Container sx={{ mt: 4 }}>

            <Typography variant="h4" gutterBottom>
                Inventory Tracker
            </Typography>

            <ProductForm />

            <ProductList />

        </Container>

    )

}

export default App
