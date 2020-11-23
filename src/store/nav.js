export default (
    [{
        name: '首页',
        path: '',
        children: [{
            name: '后台首页',
            path: '/aa/shouye',
            icon: 'el-icon-s-home'
          },
          {
            name: '相册管理',
            path: '',
            icon: 'el-icon-s-home'
          },
          {
            name: '商品列表',
            path: '',
            icon: 'el-icon-s-home'
          },
        ]
      },
      {
        name: '商品',
        path: '',
        children: [{
            name: '商品列表',
            path: '',
            icon: 'el-icon-help'
          },
          {
            name: '分类列表',
            path: '',
            icon: 'el-icon-help'
          },
          {
            name: '商品规格',
            path: '',
            icon: 'el-icon-help'
          },
          {
            name: '商品类型',
            path: '',
            icon: 'el-icon-help'
          },
          {
            name: '商品评论',
            path: '',
            icon: 'el-icon-help'
          },
        ]
      },
      {
        name: '订单',
        path: '',
        children: [{
            name: '订单管理',
            path: '',
            icon: 'el-icon-help'
          },
          {
            name: '发票管理',
            path: '',
            icon: 'el-icon-help'
          },
          {
              name: '售后服务',
              path: '',
              icon: 'el-icon-help'
            },
        ]
      },
      {
        name: '会员',
        path: '',
        children: [{
            name: '会员列表',
            path: '',
            icon: 'el-icon-help'
          },
          {
            name: '会员等级',
            path: '',
            icon: 'el-icon-help'
          },
        ]
      },
      {
          name: '设置',
          path: '',
          children: [{
              name: '基础设置',
              path: '',
              icon: 'el-icon-help'
            },
            {
              name: '物流设置',
              path: '',
              icon: 'el-icon-help'
            },
            {
              name: '管理员设置',
              path: '',
              icon: 'el-icon-help'
            },
            {
              name: '交易设置',
              path: '',
              icon: 'el-icon-help'
            },
          ]
        }
    ]
  )
  