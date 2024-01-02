import styled from "styled-components"

const SDiv = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 0 50px;
`

export default function Center({children}) {
    return (
        <SDiv className="center">
            {children}
        </SDiv>
    )
}