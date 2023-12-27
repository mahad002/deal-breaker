import Link from "next/link";
import styled from "styled-components";
import { BStyle } from "./PBtn";

const SLink = styled(Link)`
    ${BStyle}
`;

export default function BtnLink(props) {
    return (
        <SLink {...props}/>
    );
}