import '../App.css';

import { useState } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
position:absolute;
top:0px;
background-color:white;
  width: 100%;
  height: 70px;
  padding: 0 8px;
  margin: auto;
  display:flex;
  justify-content:space-between;
  .sanrio{
    cursor: pointer;
    width:130px;
    margin:15px 0 0 10px;
  }
  #canvas{
    background-color:white;
    border: 3px solid black;
  border-radius: 10px;
  padding: 20px;
  }
  #color{
    width:40px;
    height:50px;
    border:none;
}
`;

const Menu = styled.div`
  display:flex;
  span{
    padding:20px 40px;
    cursor: pointer;
  }
`;


export const ModalBackdrop = styled.div`
  position : fixed;
  width:100%;
  height:100%;
  border-radius:10px;
  background-color :rgba(0,0,0,0.3);
  display : flex;
  justify-content : center;
  align-items : center;
`;

export const ModalBtn = styled.button`
  cursor: grab;
  color:white;
    font-weight: bold;
    background-color: rgb(255,174,197);
    border-radius: 5px;
    width:40px;
    padding: 2px;
    text-align: center;
    font-size: 11px;
    margin-top: 10px;
    border:none;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  z-index:99;
  position:fixed;
  top:10%;
  left:27%;
  z-index:100;
  border-radius : 10px;
  background-color : white;
  display : flex;
  flex-direction:column;
  align-items : center;
  width:800px;
  height:800px;
  background-color:#F4FCFF;
 input{
    border:2px solid black;
    border-radius:5px;
   margin-bottom:15px;
   padding:4px 0;
  }
  .exitBtnno{
    font-size : 40px;
    cursor: pointer;
    color:rgba(0,0,0,0.5);
    position: absolute;
    top:10px;
    right:20px;
  }
  .helloModal{
    font-size : 30px;
    font-weight: bold;
    margin-top:50px;
    margin-bottom:40px;
    color:#005377;
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  

  return (
      <Wrapper>
          <div className="logo">
            <a href='http://sanriokorea.co.kr/character/'>
            <img className="sanrio" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCyfEDiz6cP9FNO5wx4KxIf6IPjpYLYpyQub2qBq3udG-oDIEFZpsf9QqDwCYXEfKGg&usqp=CAU"/>
          </a></div>
          <Menu>
            <span className="ProfileNameChange"  onClick={openModalHandler}>Go Canvas</span>
            <span>Company</span>
            <span>Character</span>
            <span>Place</span>
            </Menu>
            {isOpen === true ? 
            <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
            <div className='helloModal'>💙산리오 캐릭터 그려보기💙</div>
            <canvas id="canvas" width="500px" height="500px"></canvas>
            <input id="line-width" type="range" min="1" max="20" value="10"/>

            <div className="btn-box">
            <input type="color" id="color"/>
            
            <button id="mode-btn">🎨채우기 모드</button>
            <button id="destroy-btn" >🪣초기화</button>
            <button id="eraser-btn" >🪄지우개</button>
            <label htmlFor="file"
              >📷이미지 <br/> 업로드 하기<input type="file" accept="image/*" id="file"
            /></label>
            <button id="save">💾이미지 저장</button>
          </div>

            <span className='exitBtnno' onClick={openModalHandler}>&times;</span>
            </ModalView>
            </ModalBackdrop>
            :null}
        </Wrapper>
  );
};

export default Nav;
