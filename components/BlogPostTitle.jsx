import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import dayjs from 'dayjs';

export default function BlogPostTitle({slug, thumbnail, title, subtitle, author, createdAt}) {
  return (
    <Link href={`/post/${slug}`}>
      <a>
        <Title>
          <ThumbnailImage src={thumbnail.imageUrl} alt={thumbnail.alt} />
          <Subject>
            <h1>{title}</h1>
            <div className="subtitle">{subtitle}</div>
            <div className="etc">{author.name} · {dayjs(createdAt).format('MMMM D')}</div>
          </Subject>
        </Title>
        <Spacer />
      </a>      
    </Link>
  );
};

const Title = styled.div`
  width: 100%;
  display: flex;
`;
const ThumbnailImage = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${props => props.src});
  background-size: 120%;
  background-position: center;
`;
const Subject = styled.div`
  margin: 10px;
  width: 100%;
  display: inline;
  position: relative;
  h1 {
    margin: 0;
  }
  .subtitle {
    display: inline;
    font-size: 16px;
    margin-left: 0;
    width: 100%;
  }
  .etc {
    display: inline;
    font-size: 14px;
    position: absolute;
    right: 10px;
  }
`;
const Spacer = styled.div`
  height: 3rem;
  border-top: 1px solid #888;
`;