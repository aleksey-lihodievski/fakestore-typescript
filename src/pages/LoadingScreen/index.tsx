import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import * as S from './style';

const LoadingScreen: React.FC = () => {
  return (
    <S.LoadingScreenWrapper>
      <PuffLoader color="#fff" loading size={100} />
    </S.LoadingScreenWrapper>
  );
};

export default LoadingScreen;
