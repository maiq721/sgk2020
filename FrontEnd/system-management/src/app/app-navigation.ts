export const navigation = [
  {
    text: 'Trang chủ',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Quản trị',
    icon: 'folder',
    items: [
      {
        text: 'Người dùng',
        path: '/user',
        icon: 'user'
      }, 
      {
        text: 'Chương trình học',
        path: '/program',
        icon: 'bookmark'
      },
      {
        text: 'Lớp',
        path: '/class',
        icon: 'box'
      },
      {
        text: 'Topic',
        path: '/topic',
        icon: 'group'
      },
      {
        text: 'Môn học',
        path: '/subject',
        icon: 'doc'
      },{
        text: 'Bài học',
        path: '/lesson',
        icon: 'export'
      }
    ]
  }
];
