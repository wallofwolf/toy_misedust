import styled from '@emotion/styled';
import { getDusty } from './api';
import { useQuery } from 'react-query';
import Loading from './Loading';

const Dust = () => {
  const { data, isLoading } = useQuery('dustData', getDusty);
  const dustData = data?.data.response.body.items[5];
  console.log(isLoading);

  if (isLoading === true) {
    return <Loading />;
  }

  return (
    <DustyCard>
      <LocalName>{dustData?.stationName}</LocalName>
      <DustyBox>
        <MiseRate>😷 미세먼지 {dustData?.pm10Value}</MiseRate>
        <MiseRate>😷 초미세먼지 {dustData?.pm25Value}</MiseRate>
      </DustyBox>
    </DustyCard>
  );
};

export default Dust;

const DustyCard = styled.div`
  background-color: #ff68b4;
  border-radius: 15px;
  width: 300px;
  height: 150px;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LocalName = styled.div`
  font-weight: 700;
  font-size: 45px;
  margin-bottom: 15px;
`;

const DustyBox = styled.div``;

const MiseRate = styled.div`
  font-size: 20px;
  margin-bottom: 8px;
`;
