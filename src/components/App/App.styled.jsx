import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;
  margin: 50px auto;
  padding: 30px;

  border: 2px solid grey;
  border-radius: 5%;
  box-shadow: 0 2px 0 rgba(30, 9, 33, 0.473),
        0 8px 24px rgba(64, 25, 70, 0.233),
        0 16px 48px rgba(104, 48, 109, 0.274);
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: rgb(59, 16, 99);
`;

export const TitleContacts = styled.h2`
    font-size: 28px;
    font-weight: 700;
    font-style: oblique;
    color: rgb(59, 16, 99);
`;