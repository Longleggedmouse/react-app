import styled from 'styled-components'

import footer from 'assets/image/foot_enter_new.png'
import police from 'assets/image/police.png'

export const FooterWraper = styled.div`
  width: 1662px;
  height: 173px;
  background-color: var(--side-bg-color);
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  a{
    font-size: 13px;
  }
  .wrap-center{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const LeftWraper = styled.div`
  width: 520px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 15px;
  color: #666;
  a{
    color: #666;
  }
  .footer-nav{
    color: #999;
    margin-bottom: 10px;
    a{
      color: #999;
    }
    span{
      margin: 0 10px;
    }
  }
  .police-logo{
    width: 14px;
    height: 14px;
    background: url(${police}) no-repeat ;
    background-size: cover;
    display: inline-block;
    margin-right: 2px;
    vertical-align: -2px;
  }
`

export const RightWraper = styled.div`
  width: 420px;
  ul{
    display: flex;
    width: 100%;
    padding: 0;
  }
  .unit{
    flex: 1;
    flex-direction: column;
    color: #999;
    a{
      display: block;
      width: 50px;
      height: 45px;
      background: url(${footer}) no-repeat ;
      background-size: 110px 552px;
      margin-bottom: 10px;
    }
    &:nth-child(1) a{
        background-position: -63px -456.5px;
    }
    &:nth-child(2) a{
        background-position: -63px -101px;
    }
    &:nth-child(4) a{
        background-position: -60px -50px;
    }
    &:nth-child(5) a{
        background-position: 0 -101px;
    }
  }
  
`