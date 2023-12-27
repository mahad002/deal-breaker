import styled from "styled-components"

const SDiv = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
`

export default function Center({children}) {
    return (
        <SDiv className="center">
            {children}
        </SDiv>
    )
}