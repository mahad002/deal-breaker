import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Featured from '@/components/Featured'
import { Product } from '@/models/product'
import { mongooseConnect } from '@/lib/mongoose'
import NewProducts from '@/components/NewProducts'
import BtnLink from '@/components/BtnLink'
import { useEffect, useState } from "react";
import styled from 'styled-components';
import PBtn from '@/components/PBtn'



export default function Home({ fProduct, nProducts}) {
  console.log('product:', fProduct);
  console.log('product:', nProducts);

  return (
    <div className='w-full'>
      <Header />
      <Featured product={fProduct} />
      <NewProducts products={nProducts}/>
    </div>
  );
}

export async function getServerSideProps() {
  const fProductId = '658b0248a8f8536c6453f763';
  await mongooseConnect();
  const fProduct = await Product.findById(fProductId);
  const nProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });

  return {
    props: {
      fProduct: JSON.parse(JSON.stringify(fProduct)),
      nProducts: JSON.parse(JSON.stringify(nProducts)),
      products: JSON.parse(JSON.stringify(nProducts)),
    },
  };
}
