import React from "react"
import { Outlet, Link } from "react-router-dom";

export const Nav = ()=>{
    return (
        <>
        <div class = "nav">
    <div class = "upnav">
        <div class = "upnav_select">
            <p>IN</p>
            <img src = "https://principlebusinessenterprises.com/wp-content/uploads/2018/10/angle_down_18635.png" />
            <p>EN</p>
            <img src = "https://principlebusinessenterprises.com/wp-content/uploads/2018/10/angle_down_18635.png" />
            <p>$USD</p>
            <img src = "https://principlebusinessenterprises.com/wp-content/uploads/2018/10/angle_down_18635.png" />
        </div>
        <div class = "upnav_h5">
             <h5>FREE express international delivery + EASY returns</h5>
        </div>
        <div  class = "upnav_sign">
            <ul>
                <a href="signin.html">Sign In / </a>
                <a href="signup.html">Register</a>
                <img src="https://sorted.app/images/icon_love_red.png" alt="" />
                <img src="https://webiconspng.com/wp-content/uploads/2016/11/bag_basket_buy_cart_luggage_shopping_suitcase_icon_1540167.png" alt="" />
            </ul>
        </div >
       
    </div>
    <div class = "main_logo">
        <img src="https://i.pinimg.com/originals/b4/4e/7f/b44e7f2ed7c437697dfe9aac4e60c52b.jpg" alt="" />
        
    </div>
  </div>
         <nav>
    <div className = "wrapper">
      <ul className = "nav-links">
        
        <li> <a href=""> WHAT'S NEW</a>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <img src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_01/sb_20220103_desktop_whatsnew_slot1_FashionForecast.jpg" alt="" />
              </div>
              <div className="row">
                <header>WHAT'S NEW</header>
                <ul className="mega-links">
                  <li><a href="#">New Today</a></li>
                  <li><a href="#">New This Week</a></li>
                  <li><a href="#">Top Sellers</a></li>
                  <li><a href="#">Designer Boutique</a></li>
                  <li><a href="#">All What's New</a></li>
                </ul>
              </div>
              <div className="row">
                <header>WHAT'S NEW BY CATEGORY</header>
                <ul className="mega-links">
                  <li> <Link to="/clothing">Clothing</Link></li>
                  <li><a href="#">Shoes</a></li>
                  <li><a href="#">Bags</a></li>
                  <li><a href="#">Jewelery & Accessories</a></li>
                  <li><a href="">Men</a></li>
                </ul>
              </div>
              <div className="row">
                <header>DISCOVER</header>
                <ul className="mega-links">
                  <li><a href="#">Soak Up The Sun With Xirena</a></li>
                  <li><a href="#">So Dreamy</a></li>
                  <li><a href="#">Take A Trip With Zimmermann</a></li>
                  <li><a href="#">Shopbop Moves: The Active Edit</a></li>
                  <li><a href="#">Just In:FARM Rio</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li> <a href="">OUR FAVORITES</a></li>
        <li> <a href="">DESIGNERS</a></li>
        <li> <a href="">CLOTHING</a></li>
        <li> <a href="">ACTIVE</a></li>
        <li> <a href="">SHOES</a></li>
        <li> <a href="">BAGS</a></li>
        <li> <a href="">ACCESSORIES</a></li>
        <li> <a href="">MEN</a></li>
        <li> <a href="">SALE</a></li>
  
  
      </ul>
    </div>
  </nav>
  
        </>
    )
     
        

   

}