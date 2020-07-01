import React from 'react';
import './App.css';
import AllUsers from './components/alluser';
import ShowDetails from './components/showdetails';
import AddUser from './components/adduser';
import {connect} from 'react-redux';
import {showAddUser} from './actions/actions';
import Flyout from './components/flyout';
import BannerMsg from './components/banner-msg';

function App({props,showAddUser}) {
  return (
    <div className="App">
      {props.isShowbanner? <BannerMsg msg={props.bannerMsg}/>:''}
      <h1 className="main-heading">Users</h1>
      <button className="button-primary" onClick={()=>{showAddUser() }}>Add User</button>
     <div className="search-bar"><input type="text" value="" placeholder="Search User name"/><button className="search-btn">Search</button></div> 
      <AllUsers/>
       {props.showFlyout? <Flyout>{props.isShowAddUser? <AddUser />:<ShowDetails/>}</Flyout>:''}
    </div>
  );
}
function mapStateToProps(state){
  return  {props:{isShowAddUser:state.isShowAddUser,showFlyout:state.showFlyout,isShowbanner:state.isShowbanner, bannerMsg:state.bannerMsg}
  }
}
function mapDispatchToProps(dispatch){
  return {
      showAddUser:()=> dispatch(showAddUser())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
