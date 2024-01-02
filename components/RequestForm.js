import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 80%;
  background-color: #f7fafc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductDetails = styled.div`
  flex: 1;
  padding: 20px;
`;

const ProductImagesContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const ProductImage = styled.img`
  height: 200px;
  width: auto;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const DescriptionSpecsContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const DescriptionContainer = styled.div`
  margin-bottom: 20px;
`;

const SpecsContainer = styled.div``;

const SpecItem = styled.li`
  display: flex;
  margin-bottom: 8px;
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const StyledForm = styled.form`
  max-width: 400px;
  margin: auto;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #4a5568;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  resize: vertical;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #4a5568;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4299e1;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #2b6cb0;
  }
`;

const RequestForm = () => {
  const [product, setProduct] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [approved, setApproved] = useState(false);
  const router = useRouter();
  const {newRequest} = router.query;
  // console.log(newRequest[0]);
  
  useEffect(() => {
    // mongooseConnect();
    async function fetchData() {
      // await mongooseConnect();
      const prod = await axios.get(`/api/product?id=${newRequest[0]}`);
      setProduct(prod.data);
      console.log(prod.data);
      setTo(product.user);
      console.log(to);
    }
    fetchData();
  }, [product]);


  // const {data: session} = useSession();

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
  
      // You can perform validation here
  
      const request = { 
        title,
        description,
        quantity,
        to,
        product,
        from: "mahad112002@gmail.com",
        approved
      };
  
      try {
        // Handle success (e.g., show a success message, navigate to another page)
        console.log('Request submitted successfully:', request);

        const res = await axios.post('/api/request', request);
        console.log(res.data);
  
        // Reset the form fields
        setTitle('');
        setDescription('');
        setQuantity('');
      } catch (error) {
        // Handle errors (e.g., show an error message)
        console.error('Error submitting request:', error);
      }
    }
  };
  

  return (
    <>
      <Container>
        <ContentContainer>
          <ProductDetails>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <ProductImagesContainer>
              {product.images?.map((link, index) => (
                <ProductImage key={index} src={link} alt={product.title} />
              ))}
            </ProductImagesContainer>
          </ProductDetails>
          <DescriptionSpecsContainer>
            <DescriptionContainer>
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </DescriptionContainer>
            <SpecsContainer>
              <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
              <ul className="text-gray-600">
                {product.specs &&
                  Object.entries(product.specs).map(([key, value], index) => (
                    // Skip the first entry if it is [Object]
                    index !== 0 && (
                      <SpecItem key={key}>
                        <strong>{key}:</strong> {value}
                      </SpecItem>
                    )
                  ))}
              </ul>
            </SpecsContainer>
          </DescriptionSpecsContainer>
          <FormContainer>
            <StyledForm onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold mb-4">Request Order</h2>
              <StyledInput
                type="text"
                value={title}
                placeholder="Request title"
                onChange={(event) => setTitle(event.target.value)}
                required
              />
              <StyledTextarea
                type="text"
                value={description}
                placeholder="Description"
                onChange={(event) => setDescription(event.target.value)}
                required
              />
              <StyledInput
                type="number"
                value={quantity}
                placeholder="Quantity"
                onChange={(event) => setQuantity(event.target.value)}
                min="0"
                required
              />
              <StyledButton type="submit">Submit Request</StyledButton>
            </StyledForm>
          </FormContainer>
        </ContentContainer>
      </Container>
    </>
  );
};

export default RequestForm;
