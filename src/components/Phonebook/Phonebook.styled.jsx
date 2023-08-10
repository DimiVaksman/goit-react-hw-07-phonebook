import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
export const Form = styled(FormikForm)`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
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
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Button = styled.button`
  margin: 0 auto;
  display: block;
  border-radius: 50px;
  background-color: #fff;
  border-left: 30px solid green;
  width: 200px;
  height: 40px;
  cursor: pointer;
  &:hover {
    background-color: green;
    color: white;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
