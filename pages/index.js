import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Featured from '@/components/Featured'
import { Product } from '@/models/product'
import { mongooseConnect } from '@/lib/mongoose'
import NewProducts from '@/components/NewProducts'

const inter = Inter({ subsets: ['latin'] })

export default function Home({product}) {
  console.log("product:", product);
  return (
    <div>
      <Header/>
      <Featured product={product}/>
      <NewProducts/>
    </div>
  )
}

export async function getServerSideProps() {

   const featuredProduct = '658b0248a8f8536c6453f763';
   await mongooseConnect();
   const product = await Product.findById(featuredProduct);

  return {
    props: {
      // font: inter.toStyle()
      product: JSON.parse(JSON.stringify(product))
    },
  };
}