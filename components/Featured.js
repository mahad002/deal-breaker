import styled from "styled-components";
import Center from "./Center";
import PBtn from "./PBtn";
import BtnLink from "./BtnLink";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`; 

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
`;

const Des = styled.p`
    color: #aaa;
    font-size: 0.8rem;
`;

const Wrap = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
    div{

    }
`;

const Col = styled.div`
    display: flex;
    align-items: center;
`;

const BtnWrap = styled.div`
    display: flex;
    gap: 5px;
`;

export default function Featured({product}) {
    return (
        <Bg>
            <Center>
                <Wrap>
                    <Col>
                        <div>
                            <Title>{product.title}</Title>
                            <Des>
                                    {product.description} 
                            </Des>
                            <BtnWrap>
                                <BtnLink href={'/products/' + product._id} outline='true' white='true' size="l">Read More</BtnLink>
                                <PBtn size='l'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                    Send Request
                                </PBtn>
                            </BtnWrap>
                        </div>
                    </Col>
                    <Col>
                        <img src={product.images[0]} alt="Image" className=""/>
                    </Col>
                </Wrap>
            </Center>
        </Bg>
    )
}