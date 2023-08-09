import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;

  padding-left: 280px;

`;
export const Label = styled.label`
  margin-bottom: 15px;
`;

export const Text = styled.span`
  margin-right: 25px;
`;
export const Text2 = styled.span`
  margin-right: 10px;
`;

export const Title = styled.h2`
    padding-top: 30px;
padding-left: 280px;

`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;


export const Button = styled.button`
  margin: 0;
width: 40px;
margin-left: 250px;`