import axios from 'axios';

export const getDusty = () => {
  const dustInfo = axios.get(
    'https://api.odcloud.kr/api/RltmArpltnInforInqireSvrc/v1/getCtprvnRltmMesureDnsty?numOfRows=1000&returnType=json&sidoName=%EC%84%9C%EC%9A%B8&ver=1.3&serviceKey=9mdiPsDEBUqRiqViaCz8WuKSWWD7Sy3XYG8mwZaPd7hinUY1Th0%2F0XtB3d82XwxwhWmLPv18VY2AIyjbl5WqDg%3D%3D'
  );
  return dustInfo;
};
