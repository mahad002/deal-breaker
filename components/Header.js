import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { CartContext } from "./CartContext";
import {useContext} from "react";

// const SHeader = styled.header`
//     // display: flex;
//     // justify-content: space-between;
//     // align-items: center;
//     // padding: 1rem;
//     background-color: #222;
//     // color: #fff;
//     // nav {
//     //     display: flex;
//     //     gap: 1rem;
//     // }
//     // a {
//     //     color: #fff;
//     // }
// `;

// const SLogo = styled(Link)`
//     color: #fff;
//     text-decoration: none;
// `;

// const Wrap = styled.div`
//     display: flex;
//     justify-content: space-between;
// `;

const SHeader = styled.header`
  background-color: #222;
`;
const SLogo = styled(Link)`
  color:#fff;
  text-decoration:none;
  position: relative;
//   z-index: 3;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const NLink = styled(Link)`
    color: #aaa;
    text-decoration: none;
    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 800px) {
        
    }
`;

const SNav = styled.nav`
    display: flex;
    gap: 16px;
    align-items: center;
    @media screen and (max-width: 800px) {
        
    }
`;

export default function Header() {
    const {cartProducts} = useContext(CartContext)

    return (
        <SHeader>
            <Center>
                <Wrap>
                    <SLogo href={'/'}>
                        Deal Breaker
                    </SLogo>
                    <SNav>
                        <NLink href={'/'}>
                            Home
                        </NLink>
                        <NLink href={'/products'}>
                            All Products
                        </NLink>
                        <NLink href={'/categories'}>
                            Categories
                        </NLink>
                        <NLink href={'/account'}>
                            Account
                        </NLink>
                        <NLink href={'/orders'}>
                            Active Orders
                        </NLink>
                        <NLink href={'/requests'}>
                            Requests
                        </NLink>
                        <NLink href={'/requests'}>
                            Cart ({cartProducts.length})
                        </NLink>
                    </SNav>
                </Wrap>
            </Center>
        </SHeader>
    )
}