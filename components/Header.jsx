/* eslint-disable react/no-unescaped-entities */
import { Row, Col } from 'antd';
import { CodeOutlined } from '@ant-design/icons'
import Link from 'next/link'


 const Header = () => {
  return (
      <Row
        align="middle"
        style={{
          height: 64,
        }}
      >
        <Col span={24}>
          <Link href="/">
            <a>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                <CodeOutlined />Willy's Blog
              </div>
            </a>
          </Link>
        </Col>
      </Row>
  );
};

export default Header;