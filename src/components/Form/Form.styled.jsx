import styled from '@emotion/styled';

export const FormContacts = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;

`;

export const LabelForm = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;

    font-size: 18px;
    font-weight: 500;
    color: rgb(68, 38, 97);
`;

export const InputForm = styled.input`
    width: 300px;
    height: 30px;
    border-color: rgba(164, 91, 233, 0.404);
    box-shadow: 0 0 0 rgba(30, 9, 33, 0.473),
        0 2px 8px rgba(104, 48, 109, 0.274);
`;

export const BtnForm = styled.button`
    width: 150px;
    padding: 10px 15px;
    background-color: rgba(104, 48, 109, 0.274);
    border-color: rgba(164, 91, 233, 0.404);
    box-shadow: 0 0 0 rgba(30, 9, 33, 0.473),
        0 2px 8px rgba(104, 48, 109, 0.274);

        &:hover {
            background-color: rgba(68, 38, 97, 0.855);
        }
`;
