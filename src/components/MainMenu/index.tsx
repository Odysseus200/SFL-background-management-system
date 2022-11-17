import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import type { MenuProps } from 'antd';
import {  Menu } from 'antd';
import { useNavigate, useLocation} from "react-router-dom"
type MenuItem = Required<MenuProps>['items'][number];
// 登录请求到数据之后，就可以跟items这个数组进行匹配
const items: MenuItem[] = [
  {
    label: '园区大数据看板',
    key: '/page1',
    icon: <PieChartOutlined />,
    children:[
      {
        label: '汇总看板',
        key: '/page3/page301',
      },
      {
        label: '财务数据',
        key: '/page3/page302',
      },
      {
        label: '物业数据',
        key: '/page3/page303',
      },
      {
        label: '政策信息',
        key: '/page3/page303',
      }
    ]
  },
  {
    label: '合作营销管理',
    key: '/page2',
    icon: <DesktopOutlined />,
    children:[
      {
        label: '中介推介管理',
        key: '/page3/page301',
      },
      {
        label: '个人推介管理',
        key: '/page3/page302',
      },
      {
        label: '广告方管理',
        key: '/page3/page303',
      }
    ]
  },
  {
    label: '租赁管理',
    key: 'page3',
    icon: <UserOutlined />,
    children:[
      {
        label: '客户信息',
        key: '/page3/page301',
      },
      {
        label: '租赁合同',
        key: '/page3/page302',
      },
      {
        label: '缴费通知',
        key: '/page3/page303',
      },
      {
        label: '转租协议',
        key: '/page3/page303',
      },
      {
        label: '水电统计',
        key: '/page3/page303',
      },
      {
        label: '终止协议',
        key: '/page3/page303',
      },
      {
        label: '租户迁出费用结算',
        key: '/page3/page303',
      },
      {
        label: '出租信息统计',
        key: '/page3/page303',
      },
    ]
  },
  {
    label: '物业管理',
    key: 'page4',
    icon: <TeamOutlined />,
    children:[
      {
        label: '租赁地图',
        key: '/page5',
      },
      {
        label: '报修/维修记录',
        key: '/page5',
      },
      {
        label: '水电统计',
        key: '/page5',
      },
      {
        label: '值班信息查看',
        key: '/page5',
      },
    ]
  },
  {
    label: '财务管理',
    key: '/page5',
    icon: <FileOutlined />,
    children:[
      {
        label: '缴款催缴',
        key: '/page5',
      },
      {
        label: '打印缴款通知单',
        key: '/page5',
      },
      {
        label: '推送至租户手机和邮箱',
        key: '/page5',
      },
      {
        label: '收款',
        key: '/page5',
      },
      {
        label: '缴款记录',
        key: '/page5',
      },
      {
        label: '发票管理',
        key: '/page5',
      },
      {
        label: '佣金管理',
        key: '/page5',
      },
    ]
  },
  {
    label: 'OA系统',
    key: '/page5',
    icon: <FileOutlined />,
    children:[
      {
        label: '我的工作台',
        key: '/page5',
      },
      {
        label: '我的考勤',
        key: '/page5',
      },
      {
        label: '我的申请',
        key: '/page5',
      },
      {
        label: '公司信息',
        key: '/page5',
      }
    ]
  },
  {
    label: '官网及小程序管理',
    key: '/page5',
    icon: <FileOutlined />,
    children:[
      {
        label: '官网查看',
        key: '/page5',
      },
      {
        label: '小程序管理',
        key: '/page5',
      }
    ]
  },
  {
    label: '本系统设置',
    key: '/page5',
    icon: <FileOutlined />,
    children:[
      {
        label: '用户管理',
        key: '/page5',
      },
      {
        label: '用户系统权限分配管理',
        key: '/page5',
      },
      {
        label: '用户增删改查管理',
        key: '/page5',
      },
    ]
  },
  {
    label: '菜单管理',
    key: '/page5',
    icon: <FileOutlined />,
    children:[
      {
        label: '修改菜单顺序',
        key: '/page5',
      },
      {
        label: '修改菜单文字大小',
        key: '/page5',
      }
    ]
  },
  {
    label: '系统主题管理',
    key: '/page5',
    icon: <FileOutlined />,
    children:[
      {
        label: 'Dark主题',
        key: '/page5',
      },
      {
        label: 'light主题',
        key: '/page5',
      }
    ]
  },
  {
    label: '本系统信息',
    key: '/page5',
    icon: <FileOutlined />,
    children:[
      {
        label: '系统信息',
        key: '/page5',
      },
      {
        label: '防火墙信息',
        key: '/page5',
      },
      {
        label: '访问日志',
        key: '/page5',
      },
      {
        label: '数据库日志',
        key: '/page5',
      },
    ]
  },
  {
    label: '请求帮助',
    key: '/page5',
    icon: <FileOutlined />,
    children:[
      {
        label: '管理系统使用说明书',
        key: '/page5',
      },
      {
        label: '远程协助',
        key: '/page5',
      },
      {
        label: '报告系统管理员',
        key: '/page5',
      },
      {
        label: '预约技术前来处理',
        key: '/page5',
      },
    ]
  },
]


const Comp: React.FC = () => {
  const navigateTo = useNavigate()
  const currentRoute = useLocation();
  
  console.log("----------",currentRoute.pathname); // currentRoute.pathname:   "/page3/page301"
  
  const menuClick = (e:{key:string})=>{
    // console.log("点击了菜单", e.key);
    
    // 点击跳转到对应的路由   编程式导航跳转， 利用到一个hook
    navigateTo(e.key);
  }

  // 拿着currentRoute.pathname跟items数组的每一项的children的key值进行对比，如果找到了相等了，就要他上一级的key
  // 这个key给到openKeys数组的元素，作为初始值

  let firstOpenKey:string = "";
  // 在这里进行对比   find
  function findKey(obj:{key:string}){
    return obj.key === currentRoute.pathname
  }
  // 多对比的是多个children
  for(let i=0;i<items.length;i++){
    // 判断找到不到
    if(items[i]!['children'] && items[i]!['children'].length>0 && items[i]!['children'].find(findKey)){
      firstOpenKey = items[i]!.key as string;
      break;
    }
  }
  //items[???]['children'].find(findKey)   // 这结果如果找到拿到的，就是找到的这个对象，转布尔值就是true。如果找不到转布尔值就是false

  // 设置展开项的初始值
  const [openKeys, setOpenKeys] = useState([firstOpenKey]);
  const handleOpenChange = (keys:string[])=>{
    // 什么时候执行这个函数里面的代码？展开和回收某项菜单的时候执行这里的代码
    // console.log(keys);  // keys是一个数组，记录了当前哪一项是展开的(用key开记录)
    // 把这个数组修改成最后一项，因为只要一项是展开的，就是我刚刚点击的这一项
    setOpenKeys([keys[keys.length-1]]);
    // console.log(keys); 
  }
  return (
    <Menu 
        theme="dark" 
        // defaultSelectedKeys 表示当前样式所在的选中项的key
        defaultSelectedKeys={[currentRoute.pathname]} 
        mode="inline" 
        // 菜单项的数据
        items={items} 
        onClick={menuClick}
        // 某项菜单展开和回收的事件
        onOpenChange={handleOpenChange}
        // 当前菜单展开项的key数组
        openKeys={openKeys}
      />
  )
}
export default Comp;