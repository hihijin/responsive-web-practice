import '../App.css';

import styled from 'styled-components';

const MainArea = styled.div`
display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;

const Character = styled.div`
  font-size:70px;
  margin-top:100px;
`
const Container = styled.div`
  width:100%;
  height:auto;
  margin-top:50px;
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-gap:50px;
  @media screen and (max-width: 1100px) {
    grid-template-columns:1fr 1fr;
}
`;

const Card = styled.div`
background-color:white;
width:250px;
height:300px;
border-radius:20px;
cursor: pointer;
display:flex;
flex-direction:column;
align-items:center;
font-size:15px;
font-weight:bold;
color:rgba(0,0,0,0.5);
border:3px solid #8ED9F9;
box-shadow:0px 20px 50px 0px rgba(0, 127, 181, 0.5);

  img{
    width:200px;
    height:200px;
    border-radius:50%;
    margin:25px 0;
  }
`;

const Reverse = styled.div`
  perspective: 300px;
  backface-visibility: hidden;
  transition: 1s;
  width:250px;
height:300px;
position:relative;
z-index:0; /*-1로 줘면 애니메이션은 안보이는 대신 모달창을 가리지 않음 */
.item {
      /*카드의 뒷면을 안보이게 처리-카드가 뒤집히면 뒷면이 안보임*/
      backface-visibility: hidden;
      transition: 1s;
    }

    .item.front {
      /* 앞면 카드가 부유하게 되어, 뒷면 카드가 아래에서 위로 올라감 -> 요소 두개가 겹치게 됨*/
      position: absolute;
      /* 명시적으로 기본값 설정, 없어도 됨*/
      transform: rotateY(0deg);
    }

    &:hover .item.front {
      transform: rotateY(180deg);
      z-index:2;
    }

   .item.back {
      /*y축을 중심으로 -180도 회전*/
      transform: rotateY(-180deg);
    }

    &:hover .item.back {
      transform: rotateY(0deg);
    }
`;

const Cloud1 = styled.div`
  position:fixed;
  top:100px;
  left:100px;
  animation:clouds1 40s ease-in-out infinite;
  z-index: -1;
  img{
    width:130px;
  }
`;

const Cloud2 = styled.div`
  position:fixed;
  top:500px;
  right:100px;
  animation:clouds2 40s ease-in-out infinite;
  z-index: -1;
  img{
    width:200px;
  }
`;

const Render = () => {
  return (
    <>
      <MainArea>
        <Character>CHARACTER</Character>
        <Cloud1 className="cloud1"><img src="/img/구름.png"/></Cloud1>
        <Cloud2 className='cloud2'><img src="/img/구름2.png"/></Cloud2>
        <Container className='container-box'>
          <Reverse>
          <Card className="item front"><img src="https://mblogthumb-phinf.pstatic.net/MjAyMTA3MDJfMjg0/MDAxNjI1MjM3MDEwMDEx.16ZkPZkXZmj6MQyJIpZlTidJmYGFnehv2QoiaIWVHAsg.louS2WVp9f5dzxMHdh1MdS-3bZgOIm68sJhcToobTPAg.JPEG.yyabbj/IMG_3332.JPG?type=w800"/>마이멜로디</Card>
          <Card className="item back"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DJdzcB8-toRp4tSg-v14YkL0t1INu-kdcA-UYE3lz6D_cZaprYKm26E9FDTk2ADPRjo&usqp=CAU"/>MY MELODY</Card>
          </Reverse>

          <Reverse>
          <Card className="item front"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgSAa1s7l94c46mhuXcZRj8K292LIINfRQj8Ja5FDx7Bwt3nME3MwEEErnVN8GsjtpLo&usqp=CAU"/>쿠로미</Card>
          <Card  className="item back"><img src="https://i.pinimg.com/474x/dc/88/77/dc8877e29f1804d55d0c12242d2aec0b.jpg"/>KUROMI</Card>
          </Reverse>
          
          <Reverse>
          <Card className="item front"><img src="https://image.kmib.co.kr/online_image/2014/1103/201411030916_61130008820668_1.jpg"/>헬로키티</Card>
          <Card className="item back"><img src="https://item.kakaocdn.net/do/949e4b91f9933ef7a878ca18ec6fa1be15b3f4e3c2033bfd702a321ec6eda72c"/>HELLO KITTY</Card>
          </Reverse>
          
          <Card><img src="https://mblogthumb-phinf.pstatic.net/MjAyMDA5MjlfMTMz/MDAxNjAxMzMwNjIxNjc0.nctqqFPlnSxArLMyovMJBZj1CDtGg3ctkC2jyvi0gSQg.E6jQXexNzN7yK-treO-OYcC0EzWx0iQEMvQI_WUwJkQg.PNG.connoharu/IMG_1672.PNG?type=w800"/>시나모롤</Card>
          <Card><img src="https://m.c-star.co.kr/web/product/big/202111/191474ecf9de0424697fd0b08f7c638f.jpg"/>포차코</Card>
          <Card><img src="https://pbs.twimg.com/profile_images/1096742447302959104/9u_surBb_400x400.jpg"/>폼폼푸린</Card>
        </Container>
      </MainArea>
    </>
  );
};

export default Render;
