/* eslint-disable @next/next/no-img-element */
import { Card, Col, Row } from 'antd';
import Link from 'next/link';
import dayjs from 'dayjs';
import styled from 'styled-components';

export default function BlogMainPost({slug, thumbnail, title, subtitle, author, createdAt}) {
  return (
    <Row
      align="middle"
      style={{
        height: 'auto',
      }}
    >
      <Col span={24}>
        <Link href={`/post/${slug}`}>
          <a>
          <TitleDiv>
            <Card 
              style={{border: 'none',  width:'80px'}}
              cover={<img alt={thumbnail.alt} src={thumbnail.imageUrl}></img>}
            >
            </Card>

            <SubDiv>
              <h1>{title}</h1>
              <DateDiv>
                <h3>{subtitle}</h3>
                <h4>{author.name} · {dayjs(createdAt).format('MMMM D')}</h4>
              </DateDiv>
            </SubDiv>
          </TitleDiv>    

          <Spacer />    

          </a>
        </Link>
      </Col>
    </Row>
  )
}

const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const SubDiv = styled.div`  
  width: 100%;
  margin-left: 10px;
`;
const DateDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
    
  & h4 {
    margin-right: 30px;
  }
`;
const Spacer = styled.div`
  height: 3rem;
  border-top: 1px solid #888;
`;