import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components"
import '@/styles/globals.css'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body{
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding:0;
    box-sizing: border-box;
    color:#363537;
    background-color:#f0f0f0;
    // width: 100%;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles/>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
      
    </>
)}
