/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import dayjs from 'dayjs';
import styled from 'styled-components';

export default function BlogMainPost({slug, thumbnail, title, subtitle, author, createdAt}) {
  return (    
        <Link href={`/post/${slug}`}>
          <a>
          <Wrapper>            
              <ImageBox src={thumbnail.imageUrl} alt={thumbnail.alt} />
              <TitleBox>
                <h1>{title}</h1>
                <div className="subtitle">
                  <h3>{subtitle}</h3>
                  <h4>{author.name} · {dayjs(createdAt).format('MMMM D')}</h4>
                </div>  
              </TitleBox>          
          </Wrapper> 
          <Spacer />   
          </a>
        </Link>   
  )
}

const Wrapper = styled.div`
  width: 800px; 
  margin: 0 auto;
`;
const ImageBox = styled.img`  
  width: 100%;  
  background-image: url(${props => props.src});  
  background-size: cover;
  background-position: center;
  position: relative;  
  display: block;
  margin: 0 auto;
`;

const TitleBox = styled.div`  
  width: 100%;
  margin-left: 10px;
  .subtitle{
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: relative;
    & h4 {
    margin-right: 30px;
  }
  }
`;
const Spacer = styled.div`
  height: 3rem;
  border-top: 1px solid #888;
`;