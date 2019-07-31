const MenuConfig = [
  {
    title:'首页',
    key: '/admin/home',
  },{
    title: '应用程序',
    key: '/admin/application',
    children: [
      {
        title: '入职管理',
        key: '/admin/app/Recruit',
      },{
        title: '优客',
        key: '/admin/app/YouKeCRM',
      },{
        title: '图书管理系统',
        key: '/admin/app/BookManagerSys',
      }, {
        title: '工单系统',
        key: '/admin/app/ProjectManagementSys',
      },{
        title: '产品需求管理系统',
        key: '/admin/app/ProjectManagementSys',
      },

    ]
  },{
    title: '系统管理',
    key: '/admin/system',
    children: [
      {
        title: '平台基础',
        key: '/admin/system//platform/pfctlmain',
      },{
        title: '翻译工作台',
        key: '/admin/system/pftranslate',
      }
    ]
  }]
export default MenuConfig
