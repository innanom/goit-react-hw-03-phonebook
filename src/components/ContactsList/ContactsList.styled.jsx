import styled from '@emotion/styled';

export const List = styled.ul`
    list-style: none;
    padding: 20px;
    
    
`;
export const ListItem = styled.li`
    position: relative;
    display: flex;

    align-items:baseline;
    justify-content:space-between;

        &::before { 
            content: '';
            position: absolute;
            top: 45%;
            left: -20px;
            width: 8px;
            height: 8px;
            background-color:  rgba(104, 48, 109, 0.500);
            border-radius: 50%;
        }

`;

export const TextItem = styled.p`
    font-size: 16px;
    font-weight: 500;
    // color: rgb(68, 38, 97);
`;

export const BtnDelete = styled.button`
    font-size: 14px;
    font-weight: 500;
    background-color: rgba(104, 48, 109, 0.200);
    border: 0;
    border-radius: 5%;
    padding: 5px 15px;

        &:hover {
            background-color:rgba(68, 38, 97, 0.655);
            }
`;