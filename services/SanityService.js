import sanityClient from '@sanity/client';

export default class SanityService {
  _client = sanityClient({
    dataset: 'production',
    projectId: 'ozi5ivc6',  // sanity.io에 접속하여 프로젝트의 ID를 확인한다.
    useCdn: process.env.NODE_ENV === 'production',  // production 모드일 경우 cdn 사용
  });

  // main post를 가져오는 요청
  async getHome() {    
    return await this._client.fetch(`
      *[_type =='home'][0]{'mainPostUrl': mainPost -> slug.current}
    `)
  }

  // main 이외의 포스트를 가져오는 요청
  async getPosts() {
    return await this._client.fetch(`
      *[_type=='post']{
        title, 
        subtitle, 
        createdAt, 
        'content': content[]{
          ..., 
          ...select(_type == 'imageGallery' => {'images': images[]{..., 'url': asset -> url }} )
        },
        'slug': slug.current,
        'thumbnail': {
          'alt': thumbnail.alt,
          'imageUrl': thumbnail.asset -> url
        },
        'author': author -> {
          name,
          role,
          'image': image.asset -> url
        },
        'tag': tag -> {
          title,
          'slug': slug.current
        }
      }
    `)
  }
}