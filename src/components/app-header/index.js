import React, { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'


import { Input, Modal } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { HeaderWrapper, HeaderLeft, HeaderNav, HeaderRight } from './style'
import { navList } from 'common/local-data'

export default memo(function ZHAppHeader () {
  const [search, setSearch] = useState("")
  const [isModalVisible, setIsModalVisible] = useState(false);

  const createNavItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink key={item.title} to={item.link} exact>
          {item.title}
          <i className="icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link} target="_blank" key={item.title}>{item.title}</a>
    }
  }
  const SearchIcon = (
    <SearchOutlined onClick={handleSearch} />
  )


  function handleSearch () {
    alert(`搜索功能带开发你当前想要搜索的是:${search}`)
  }

  function goCreator () {
    window.open("https://music.163.com/#/login?targetUrl=%2Fcreatorcenter")
  }
  return (
    <HeaderWrapper>
      <div className="content">

        <HeaderLeft>
          <h1 className="logo">
            <a hidefocus="false" href="#/">网易云音乐</a>
          </h1>
        </HeaderLeft>

        <HeaderNav>
          {
            navList.map(createNavItem)
          }
        </HeaderNav>

        <HeaderRight>
          <Input
            className="search"
            value={search}
            onChange={e => { setSearch(e.target.value) }}
            placeholder="音乐/视频/电台"
            prefix={SearchIcon} />
          <button onClick={goCreator}>创作者中心</button>
          <span onClick={e => { setIsModalVisible(true) }}>登陆</span>
          {/* 这个modal如果完全实现，需要单独抽离 */}
          <Modal
            title="登陆"
            footer={null}
            visible={isModalVisible}
            style={{ top: "40%", }}
            onCancel={e => { setIsModalVisible(false) }} >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </HeaderRight>

      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
