import Header from "@/components/Header";
import RequestForm from "@/components/RequestForm";
import styled from 'styled-components';

export default function NewRequests() {
    // const StyledH1 = styled.h1`
    //     @apply text-blue-900 m-2 text-xl;
    // `;


    return(
        <>
            <Header/>
            <button className="text-gray-900 mt-4 ml-12 text-xl font-bold">Product Request</button>
            <RequestForm />
        </>
    );
}
