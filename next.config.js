const { SANITY_PROJECT_ID } = process.env

module.exports = {
  reactStrictMode: true,
  trailingSlash: false, // 뒤쪽 슬래시를 붙일 것인지..
  env: {
    SANITY_PROJECT_ID: SANITY_PROJECT_ID,
  }
}
