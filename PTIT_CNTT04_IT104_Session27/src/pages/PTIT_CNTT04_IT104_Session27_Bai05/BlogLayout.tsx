import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div style={{
        display:"flex"
    }}>
      <div
        className="left"
        style={{
          height: "100vh",
          width: "15vw",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgb(69, 54, 221)",
          paddingLeft: "20px",
        }}
      >
        {/*header */}
        <div
          className="header"
          style={{
            color: "white",
            height: "15vh",
          }}
        >
          {" "}
          <h1>My Blog</h1>{" "}
        </div>
        <div
          className="siderba"
          style={{
            height: "75vh",
             width:"90%",
            borderBottom: "1px solid gray"
          }}
        >
          <button style={{
            width:"100%",
            height:"30px",
            backgroundColor:"rgb(109, 96, 236)",
            border:"none",
            borderRadius:"10px",
          }}>
            <NavLink
              to={"/blog/posts"}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Posts
            </NavLink>
          </button>
        </div>
        <div className="footer" style={{
            lineHeight:"10vh",
            color:"white"
        }}>&copy; 2025 My Blog</div>
      </div>
      <div className="right" style={{
        width:"85vw",
        paddingLeft:"20px"
      }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
