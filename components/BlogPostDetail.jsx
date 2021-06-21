/* eslint-disable react/display-name */
import {Col, Row } from 'antd'
import BlockContent from '@sanity/block-content-to-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Image from 'next/image'
import sanityImageUrl from '@sanity/image-url';
import sanityClient from '@sanity/client';


const serializers = {
  types: {
    code: ({node}) => {
      console.log(node);
      const { code } = node;
      return (
        <SyntaxHighlighter 
          language="javascript" 
          style={{"hljs": {color: 'red',}}}
        >{code}</SyntaxHighlighter>
      )
    },
    video: ({ node }) => {
      console.log(node);
      return <p>video</p>
    },
    link: ({ node }) => {
      console.log(node);
      return <p>link</p>
    },
    imageGallery: ({ node }) => {   
      console.log(node);   
      return <p>Image Gallery</p>
    },
  }
}

export default function BlogPostDetail({blocks}) {
  return (
    <>
      <Row>
        <Col span={24}>
          <BlockContent 
            blocks={blocks}
            projectId= {process.env.SANITY_PROJECT_ID}
            dataset="production"  
            imageOptions={{w: 640, h:480, fit: 'max'}}
            serializers={serializers}
          />
        </Col>
      </Row>
    </>
  )
}