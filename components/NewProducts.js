import styled from 'styled-components';
import Center from "./Center";
import ProductCard from "./ProductCard";


const ProductG = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
    // margin-bottom: 100px;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: normal;
    // margin-bottom: 400px;
    font-size: 2rem;
`; 

export default function NewProducts({products}) {
    console.log("products: ", products);
    
    return (
        <Center>
            <Title>New Arrivals</Title>
            <ProductG>
                {products?.length > 0 && products.map((product, index) => (
                    <ProductCard key={index} {...product}/>
                ))}
            </ProductG>
        </Center>
    )
}