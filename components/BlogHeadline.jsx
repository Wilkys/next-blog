/* eslint-disable react/no-unescaped-entities */
import { Row, Col } from 'antd';

export default function BlogHeadline() {
  return (
    <Row 
      align="middle"
      style={{
        height: 400,
        textAlign: 'center',
      }}>
        <Col span={24}>
          <h1 style={{
              fontSize: 70,
              fontWeight: 'bold',
            }}>Willy's Blog</h1>
          <p style={{
            fontSize: 24,
          }}>
            TypeScript와 Electron을 이용하여 ,디자이너를 위한 인터랙션 프로토타이핑 툴인 프로토파이를 만들고 있습
        니다. 대규모 자바스크립트 어플리케이션 개발에 대한 더 나은 방향을 고민하고 ,적용하기 위해 노력하고 있습니다.
          </p>
        </Col>
    </Row>
  )
}