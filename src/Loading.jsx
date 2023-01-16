import { ThreeDots } from 'react-loader-spinner';
import styled from '@emotion/styled';

const Loading = () => {
  return (
    <LoadingBox>
      <ThreeDots
        height='30'
        width='300'
        radius='9'
        color='grey'
        ariaLabel='three-dots-loading'
        wrapperStyle={{}}
        wrapperClassName=''
        visible={true}
      />
      <LoadingText>Loading!</LoadingText>
    </LoadingBox>
  );
};

export default Loading;

const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;
