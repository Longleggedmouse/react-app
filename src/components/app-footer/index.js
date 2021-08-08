import React, { memo } from 'react'

import { footerLeftLink, footerRightLink } from 'common/local-data'
import { FooterWraper, LeftWraper, RightWraper } from './style'

export default memo(function ZHAppFooter () {
  const createFooterNav = function (value, index, arr) {
    if (index != arr.length - 1) {
      return (
        <>
          <a href={value.link}>{value.title}</a>
          <span>|</span>
        </>)
    } else {
      return <a href={value.link}>{value.title}</a>
    }
  }
  return (
    <FooterWraper>
      <div className="wrap-center">
        <LeftWraper>
          <div className="footer-nav">{footerLeftLink.map(createFooterNav)}</div>
          <p><span>网易公司版权所有©1997-2021 </span> 杭州乐读科技有限公司运营 <span>浙网文[2021] 1186-054号</span></p>
          <p><span>违法和不良信息举报电话：0571-89853516 &nbsp;&nbsp;</span><span>举报邮箱：</span><span><a href="mailto:ncm5990@163.com">ncm5990@163.com</a></span></p>
          <p><span>粤B2-20090191-18  工业和信息化部备案管理系统网站&nbsp;</span><span className="police-logo"></span><span>浙公网安备 33010902002564号</span></p>
        </LeftWraper>
        <RightWraper>
          <ul>
            {
              footerRightLink.map((value, index) => {
                return (
                  <li className="unit flex-center" key={value.title}>
                    <a href={value.link} target="_blank"></a>
                    <span>{value.title}</span>
                  </li>
                )
              })
            }
          </ul>
        </RightWraper>
      </div>

    </FooterWraper>
  )
})
