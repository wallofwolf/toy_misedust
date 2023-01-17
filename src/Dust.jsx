import styled from '@emotion/styled';
import { getDusty } from './api';
import { useQuery } from 'react-query';
import Loading from './Loading';

//stationName

const Dust = ({ addresses }) => {
  const { data, isLoading } = useQuery('dustData', getDusty);
  // const dustData = data?.data.response.body.items[5];
  const dustData = data?.data.response.body.items;
  console.log(dustData);
  console.log(addresses);

  if (isLoading === true) {
    return <Loading />;
  }

  return (
    <div>
      {dustData
        .filter((local) => local.stationName === addresses)
        .map((item) => (
          <DustyCard key={item.stationName}>
            <LocalName>{item?.stationName}</LocalName>
            <DustyBox>
              <MiseRate>😷 미세먼지 {item?.pm10Value}</MiseRate>
              <MiseRate>😷 초미세먼지 {item?.pm25Value}</MiseRate>
            </DustyBox>
          </DustyCard>
        ))}
    </div>
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
