import React from 'react';
import $ from 'jquery';

import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
import HomePage from '../components/HomePage.jsx';
import CircularProgressBg from '../components/CircularProgressBg.jsx';
import TopBar from '../components/TopBar.jsx';

class DashboardPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      // **本地token
      secretData: '',

      // **是否在加载页面
      loading: true,
    };
  }

  /**
   * 组件首次渲染完执行
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/topbar');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      // **取消加载状态
      this.setState({
        loading: false,
      });
      const resMessage = $.parseJSON(JSON.stringify(xhr.response));
      if (xhr.status === 200) {
        return this.setState({
          user: resMessage.user,
          secretData: resMessage.message,
        });
      }
    });
    xhr.send();
  }

  render() {
    if (this.state.loading) return (<CircularProgressBg color="#fff" />);
    // 存在token登录Dashboard 没有token登录HomePage
    if (this.state.secretData) return (
      <div>
        <TopBar user={this.state.user} />
        <Dashboard secretData={this.state.secretData} />
      </div>
    );
    return (
      <div>
        <TopBar />
        <HomePage />
      </div>
    );
  }

}

export default DashboardPage;
