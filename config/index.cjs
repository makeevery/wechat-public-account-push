/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx9aee39a8fff83b66',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '998f6bb1b3b00f6c5fb1cc37f9fbc704',

  PROVINCE: '广东',
  CITY: '佛山',

  USERS: [
    {
      // 想要发送的人的名字
      name: '依格臭宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZvIZ6oiW7EZAbV69E9LUAjQ99bE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'UrKxgNysSzwXZR5dMUVwp3zTcGFPAbsV8ukC8nQ9SmE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-01',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '臭宝', year: '1999', date: '09-04',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '臭宝', year: '1999', date: '11-01',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '02-11',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-02-11' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-02-11' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'UrKxgNysSzwXZR5dMUVwp3zTcGFPAbsV8ukC8nQ9SmE',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZvIZ6qXzf_3Ten8-gx7I7x0nYBE',
    }
  ],

}

module.exports = USER_CONFIG

