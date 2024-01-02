import styled from 'styled-components';
import { CartContext } from './CartContext';
import {useContext} from 'react';
import Link from 'next/link';

const PWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
`;

const Card = styled.div`
  width: 230px;
  margin: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  background-color: #fff;
  padding-bottom: 1rem;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-bottom: 1px solid #e2e8f0;
  }

  h1 {
    padding: 1rem;
    text-align: center;
    font-size: 1.6em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .button {
    // width: 48%; /* Adjust width as needed */
    // padding: 0.5rem;
    // border: 1px solid #3182ce;
    // border-radius: 4px;
    // background-color: #3182ce;
    // color: #fff;
    // text-align: center;
    // cursor: pointer;
    // transition: background-color 0.3s ease-in-out;

    // &:hover {
    //   background-color: #111827;
    // }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 70%;
    margin: 0.7rem;
    border: 1px solid #e2e8f0;
    border-radius: 0px;
    padding: 1rem;
    img {
      width: 100%;
      height: 100px;
      object-fit: cover;
      border-bottom: 1px solid #e2e8f0;
    }

    h1 {
      padding: 0.1rem;
      text-align: center;
    }
  }
`;

const StyledButton = styled(Link)`
  background-color: #E5E7EB;
  color: #111827;
  border-radius: 0.2rem; /* Equivalent to rounded-lg in Tailwind */
  padding: 0.25rem 0.5rem; /* Equivalent to py-1 px-2 in Tailwind */
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.25rem; /* Equivalent to gap-1 in Tailwind */
//   margin-right: 0.5rem; 
//   margin-left: 0.5rem; 
  margin-top: 0.5rem; 
  border: 1px solid rgb(95, 92, 92); /* Equivalent to border-gray-600 in Tailwind */
  outline: 1px solid rgb(95, 92, 92);
  text-color: #000;
  font-size: 13px;
  &:hover {
    transform: scale(1.05);
    background-color: #111827;
    color: #fff;
  }
`;

const PriceDiv = styled.div`
    // background-color: #E5E7EB;
    // color: #111827;
    // border-radius: 0.2rem; /* Equivalent to rounded-lg in Tailwind */
    // padding: 0.25rem 0.5rem; /* Equivalent to py-1 px-2 in Tailwind */
    // display: inline-flex;
    // flex-wrap: wrap;
    // gap: 0.25rem; /* Equivalent to gap-1 in Tailwind */
    // margin-right: 0.5rem; 
    // margin-left: 0.5rem; 
    // border: 1px solid rgb(95, 92, 92); /* Equivalent to border-gray-600 in Tailwind */
    // outline: 1px solid rgb(95, 92, 92);
    // text-color: #000;
    &:hover {
        transform: scale(1.45);
        background-color: #111827;
        color: #fff;
    }
`;

export default function ProductCard({
  _id,
  title,
  images,
  description,
  price,
  category,
  specs,
  properties,
  user,
}) {

  const  {addProduct} = useContext(CartContext);

  return (
    <PWrap>
      <Card>
        <div className="items-center mb-2 justify-center">
          {images && images.length > 0 ? ( 
            <img src={images[0]} alt={title} className="product-image" />
          ) : (
            <span className="w-8 h-8 bg-gray-200 grid place-items-center rounded-full mr-2">?</span>
          )}
          <h1>{title}</h1>
        </div>
        <PriceDiv>
            Rs.{price}/ Per Piece
        </PriceDiv>
        <div className="flex flex-wrap mt-5 justify-center gap-3">
          <StyledButton href={`/request/${_id}`} onClick={()=>addProduct()} className="">Send Request</StyledButton>
          <StyledButton href={''} className="">View Product</StyledButton>
        </div>
      </Card>
    </PWrap>
  );
}
