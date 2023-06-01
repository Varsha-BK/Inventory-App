import React, { useState } from 'react'
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
 
// const Nav = styled.div`
//   background: #15171c;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   overflow: hidden;
//   position: sticky;
//   top: 0;
//   left: 0;
//   right: 0;
//   `;
 
// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 4rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;
 
const SidebarNav = styled.nav`
  background: #15171c;
  width: 230px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  padding-top:30px
`;
 
const SidebarWrap = styled.div`
  width: 100vh;
`;

const Sidebar = () => {

    const sidebar= useState(true);
 
    // const showSidebar = () => setSidebar(!sidebar);
  

  return (
<>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1
            style={{ textAlign: "center",
                     marginLeft: "200px",
                     color: "green" }}
          >
            Inventory Management
          </h1>
        </Nav> */}
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {/* <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
export default Sidebar