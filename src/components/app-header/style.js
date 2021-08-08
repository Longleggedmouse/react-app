import styled from 'styled-components'

import topbar from 'assets/image/topbar.png'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: var(--header-bg-color);
  color: #fff;
  .content{
    height: 70px;
    width: 1100px;
    margin: 0 auto;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    a{
      color: #fff;
    }
  }
  .divider{
    height: 5px;
    width: 100%;
    background-color: var(--nav-bg-color);
  }
`

export const HeaderLeft = styled.div`
  .logo{
    background:url(${topbar}) no-repeat 0 9999px;
    background-position: 0 0;
    width: 176px;
    height: 69px;
    margin: 0;
    a{
      text-indent: -9999px;
      width: 157px;
      height: 100%;
      display: block;
    }
  }

`

export const HeaderNav = styled.div`
  display: flex;
  height: 100%;
  a{
    font-size: 14px;
    width: 94px;
    height: 100%;
    line-height: 70px;
    display: block;
    text-align: center;
    height: 100%;
    &:hover,.active{
      background-color: var(--nav-hover);
    }
    &.active{
      position: relative;
    }
    &.active .icon{
      background-image: url(${topbar});
      position: absolute;
      display: inline-block;
      width: 12px;
      height: 7px;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      background-position: -226px 0;
    }
    :last-child{
      position: relative;
      ::after{
        position: absolute;
        content: "";
        width: 28px;
        height: 19px;
        background-image: url(${topbar});
        background-position: -190px 0;
        top: 20px;
        right: -20px;
      }
    }
  }

`

export const HeaderRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-left: 60px;
  font-size: 12px;
  .search{
    width: 158px;
    height: 32px;
    border-radius: 32px;
    font-size: 12px;
  }
  button{
    font-size: 12px;
    width: 88px;
    background:none;
    color: #ccc;
    border: 1px solid #4F4F4F;
    padding: 5px 8px;
    border-radius: 20px;
    cursor: pointer;
  }
  span{
   
    color: #787878;
    cursor: pointer;
  }
`