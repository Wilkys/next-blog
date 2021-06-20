/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
// import { Card, Row, Col } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import styled from 'styled-components';

function CardEl({post}) {
  return (
    <Card>
      <Link href={`/post/${post.slug}`}>
        <ImageBox src={post.thumbnail.imageUrl}/>
      </Link>
        <h3>{post.title}</h3>                    
        <h4>{post.author.name} · {dayjs(post.createdAt).format('MMMM D')}</h4>      
    </Card>      
  )
}


export default function BlogList({posts}) {
  return (
    <Wrapper>
      {posts.map(post =>{
        return (          
            <div>
              <CardEl post={post} />
              {/* <h3>{post.title}</h3>                    
              <h4>{post.author.name} · {dayjs(post.createdAt).format('MMMM D')}</h4> */}
            </div>          
        )
      })}
    </Wrapper>
  )
}

const ImageBox = styled.div`
  width: 250px;
  height: 150px;
  background-size: cover;
  background-image: url(${props => props.src});
`;
const Card = styled.div`
  margin: 5px;
`;
const Wrapper = styled.div`
  display: flex;  
  flex-wrap: wrap;
`;