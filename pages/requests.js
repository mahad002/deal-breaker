import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '@/components/Header';

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

const RequestContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const RequestItem = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const RequestTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const RequestDescription = styled.p`
  color: #4a5568;
  margin-bottom: 8px;
`;

const RequestStatus = styled.p`
  font-weight: bold;
  color: ${(props) => (props.approved ? '#38a169' : props.rejected ? '#e53e3e' : '#4299e1')};
`;

const session = {
    user: {
      email: 'mahad112002@gmail.com',
    },
  };

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);

  useEffect(() => {
    // Fetch user requests based on email
    axios
      .get(`/api/request?userFrom=${session.user.email}`)
      .then((response) => setRequests(response.data))
      .catch((error) => console.error('Error fetching requests:', error));
  }, [session]);

  const handleAction = async (_id, action) => {
    if (action === 'accept') {
      setApproved(true);
    } else if (action === 'reject') {
      setRejected(true);
    }
    try {
      const data = {
        approved,
        rejected,
        _id,
      };
      // Update request status based on the action (accept/reject)
      await axios.put(`/api/requests`, data);
      // Refresh requests after the update
      await axios
        .get(`/api/requests?userFrom=${session.user.email}`)
        .then((response) => setRequests(response.data))
        .catch((error) => console.error('Error fetching requests:', error));
    } catch (error) {
      console.error('Error updating request:', error);
    }
  };

  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold mb-4">Requests</h1>
      <Container>
        <ContentContainer>
          <RequestContainer>
            {requests.map((request) => (
              <RequestItem key={request._id}>
                <RequestTitle>{request.title}</RequestTitle>
                <RequestDescription>{request.description}</RequestDescription>
                <RequestStatus approved={request.approved} rejected={request.rejected}>
                  {request.approved ? 'Approved' : request.rejected ? 'Rejected' : 'Not Approved'}
                </RequestStatus>
              </RequestItem>
            ))}
          </RequestContainer>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Requests;
