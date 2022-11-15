export const init = () => {
  return Promise.resolve({ name: 'init' })
}

/**
 * 人类行为验证
 */
export const getCaptcha = () => {
  return Promise.resolve({ success: true })
}

export const loginUser = () => {
  return Promise.resolve({
    token: '507ea7f1-2dd8-46b8-a22c-8860dc7dbf66'
  })
}

export const getProfile = () => {
  return Promise.resolve({
    qqOpenId: '',
    wxOpenId: '',
    nickname: '小慕同学2879',
    title: '',
    company: '',
    homePage: '',
    introduction: '',
    vipLevel: 0,
    regTime: '2022-10-06T07:03:02.177Z',
    avatar:
      'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png',
    outTradeNo: 'c54021ce-60e0-4d77-ab72-2d3e887d988b',
    payResult: false,
    _id: '636f16594e08b04d07d355cb',
    username: 'brycewww',
    __v: 0
  })
}

export const putProfile = () => {
  return Promise.resolve({
    qqOpenId: '',
    wxOpenId: '',
    nickname: '小慕同学2879',
    title: '',
    company: '',
    homePage: '',
    introduction: '',
    vipLevel: 0,
    regTime: '2022-10-06T07:03:02.177Z',
    avatar:
      'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png',
    outTradeNo: 'c54021ce-60e0-4d77-ab72-2d3e887d988b',
    payResult: false,
    _id: '636f16594e08b04d07d355cb',
    username: 'brycewww',
    __v: 0
  })
}

export const registerUser = () => {
  return Promise.resolve({ success: true })
}
/**
 * 获取 OSS 上传凭证
 */
export const getSts = () => {
  return Promise.resolve({ success: true })
}

/**
 * 微信登录前置数据获取
 */
export const getWXLoginData = () => {
  return Promise.resolve({ success: true })
}

/**
 * 获取微信登录的 access_token
 */
export const getWXLoginToken = (appid, secret, code) => {
  return Promise.resolve({ success: true })
}

/**
 * 获取微信登录的 用户数据
 */
export const getWXLoginUserInfo = (accessToken, openid) => {
  return Promise.resolve({ success: true })
}
