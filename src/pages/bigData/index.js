import React, { Component, Fragment } from 'react';
import { Card, Icon, Row, Col } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';
import defaultSettings from '../../../config/defaultSettings';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: defaultSettings.iconfontUrl,
});

class BigData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getNavigation = () => {
    const navigations = [
      { icon: 'icon-dengpao', title: '生死簿', url: '' },
      { icon: 'icon-chaxun_', title: '查询寿命', url: '' },
      { icon: 'icon-churujingdatingliebiaocopy', title: '入境管理', url: '' },
      { icon: 'icon-dengpao', title: '重新投胎', url: '' },
      { icon: 'icon-shezhi', title: '货币管理', url: '' },
      { icon: 'icon-rs-log', title: '操作日志', url: '' },
      { icon: 'icon-dici', title: '十八地狱', url: '' },
      { icon: 'icon-wodefadan', title: '发勾魂单', url: '' },
      { icon: 'icon-zichanxiangqing', title: '资产管理', url: '' },
      { icon: 'icon-yuangongguanli', title: '员工管理', url: '' },
    ];
    return navigations;
  };

  render() {
    const navigation = this.getNavigation();
    return (
      <Card className={styles.card} style={{ maxWidth: 1400, overflow: 'auto' }}>
        <div className={styles.container}>
          <Row gutter={16}>
            <Col span={6}>
              <div className={`${styles.topItem} ${styles.green}`}>
                <span>地府人数</span>
                <span className={styles.count}>1986</span>
              </div>
            </Col>
            <Col span={6}>
              <div className={`${styles.topItem} ${styles.blue}`}>
                <span>今日入境</span>
                <span className={styles.count}>10</span>
              </div>
            </Col>
            <Col span={6}>
              <div className={`${styles.topItem} ${styles.darkBlue}`}>
                <span>今日出境</span>
                <span className={styles.count}>16</span>
              </div>
            </Col>
            <Col span={6}>
              <div className={`${styles.topItem} ${styles.orange}`}>
                <span>管理员</span>
                <span className={styles.count}>100</span>
              </div>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: '1em', display: 'flex' }}>
            <Col span={16}>
              <div className={styles.navigationView}>
                <div className={styles.title}>
                  <span>常用功能导航</span>
                  <Icon type="more" />
                </div>
                <div className={styles.items}>
                  {navigation &&
                    navigation.length > 0 &&
                    navigation.map((item, index) => (
                      <div className={styles.navigationItem}>
                        <div className={styles.iconView}>
                          <IconFont type={item.icon} style={{ fontSize: 24 }} />
                        </div>
                        <span>{item.title}</span>
                      </div>
                    ))}
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className={styles.toDealt}>
                <div className={styles.title}>
                  <span>今日待办</span>
                  <Icon type="more" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    );
  }
}

export default BigData;
