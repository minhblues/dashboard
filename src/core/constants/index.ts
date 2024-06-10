export const PERMISSION_ROUTE = {
  Service: {
    path: '',
    root: 'service',
    action: 'router.service.title',
    subject: 'Service',
    permissions: 'Service',
    title: 'router.service.title'
  },
  WaitingReview: {
    path: '/apps/service/review',
    root: 'service/review',
    action: 'router.service.waitingReview',
    subject: 'WaitingReview',
    permissions: 'WaitingReview',
    title: 'router.service.waitingReview'
  },
  ServiceList: {
    path: '/apps/service/list',
    root: 'service/list',
    action: 'router.service.serviceList',
    subject: 'ServiceList',
    permissions: 'ServiceList',
    title: 'router.service.serviceList'
  },
  ServiceRecommendList: {
    path: '/apps/service/recommend',
    root: 'service/recommend',
    action: 'router.service.serviceRecommend',
    subject: 'ServiceRecommendList',
    permissions: 'ServiceRecommendList',
    title: 'router.service.serviceRecommend'
  },
  ServiceSingleList: {
    path: '/apps/service/single',
    root: 'service/single',
    action: 'router.service.optionalServiceList',
    subject: 'ServiceSingleList',
    permissions: 'ServiceSingleList',
    title: 'router.service.optionalServiceList'
  },
  ServiceDisableList: {
    path: '/apps/service/disable',
    root: 'service/disable',
    action: 'router.service.serviceDisableList',
    subject: 'ServiceDisableList',
    permissions: 'ServiceDisableList',
    title: 'router.service.serviceDisableList'
  },
  ServiceDetail: {
    path: '/apps/service/detail',
    root: 'service/detail',
    action: 'router.service.ServiceDetail',
    subject: 'ServiceDetail',
    permissions: 'ServiceDetail',
    title: 'router.service.ServiceDetail'
  },
  CategoryList: {
    path: '/apps/service/category',
    root: 'service/category',
    action: 'router.service.categoryList',
    subject: 'CategoryList',
    permissions: 'CategoryList',
    title: 'router.service.categoryList'
  },
  CategoryEdit: {
    path: '',
    root: 'service',
    action: 'router.service.categoryEdit',
    subject: 'CategoryEdit',
    permissions: 'CategoryEdit',
    title: 'router.service.categoryEdit'
  },
  ServiceOrderList: {
    path: '/apps/order/list',
    root: 'apps/order',
    action: 'router.order.serviceOrder',
    subject: 'ServiceOrderList',
    permissions: 'ServiceOrderList',
    title: 'router.order.serviceOrder'
  },
  ServiceOrderDetail: {
    path: '',
    root: 'apps/order',
    action: 'router.order.serviceOrderDetail',
    subject: 'ServiceOrderDetail',
    permissions: 'ServiceOrderDetail',
    title: 'router.order.serviceOrderDetail'
  },
  Mission: {
    path: '',
    root: 'mission',
    action: 'router.mission.title',
    subject: 'Mission',
    permissions: 'Mission',
    title: 'router.mission.title'
  },
  MissionList: {
    path: '/apps/mission/list',
    root: 'mission/list',
    action: 'router.mission.missionList',
    subject: 'MissionList',
    permissions: 'MissionList',
    title: 'router.mission.missionList'
  },
  MissionDetail: {
    path: '/apps/mission/detail',
    root: 'mission/detail',
    action: 'common.detail',
    subject: 'MissionDetail',
    permissions: 'MissionDetail',
    title: 'common.detail'
  },
  MissionEdit: {
    path: '/apps/mission/edit',
    root: 'mission/edit',
    action: 'MissionEdit',
    subject: 'MissionEdit',
    permissions: 'MissionEdit',
    title: 'router.mission.missionEdit'
  },
  MissionCreate: {
    path: '/apps/mission/create',
    root: 'mission/create',
    action: 'MissionEdit',
    subject: 'MissionEdit',
    permissions: 'MissionEdit',
    title: 'router.mission.missionEdit'
  },
  Supplier: {
    path: '',
    root: 'supplier',
    action: 'router.supplier.title',
    subject: 'Supplier',
    permissions: 'Supplier',
    title: 'router.supplier.title'
  },
  SupplierList: {
    path: '/apps/supplier/list',
    root: 'supplier/list',
    action: 'router.supplier.supplierList',
    subject: 'SupplierList',
    permissions: 'SupplierList',
    title: 'router.supplier.supplierList'
  },
  SupplierEdit: {
    path: '',
    root: 'supplier',
    action: 'router.supplier.supplierEdit',
    subject: 'SupplierEdit',
    permissions: 'SupplierEdit',
    title: 'router.supplier.supplierEdit'
  },
  SupplierReport: {
    path: '',
    root: 'supplier',
    action: 'supplier.report',
    subject: 'SupplierReport',
    permissions: 'SupplierReport',
    title: 'supplier.report'
  },
  SupplierInformationList: {
    root: 'supplier/information/list',
    path: '/apps/supplier/information/list',
    action: 'router.supplier.informationList',
    subject: 'SupplierInformationList',
    permissions: 'SupplierInformationList',
    title: 'router.supplier.informationList'
  },
  SupplierDepositList: {
    path: '/apps/supplier/deposit/list',
    root: 'supplier/deposit',
    action: 'router.supplier.depositList',
    subject: 'SupplierDepositList',
    permissions: 'SupplierDepositList',
    title: 'router.supplier.depositList'
  },
  SupplierDepositHistory: {
    path: '',
    root: 'supplier/deposit',
    action: 'router.supplier.depositHistory',
    subject: 'SupplierDepositHistory',
    permissions: 'SupplierDepositHistory',
    title: 'router.supplier.depositHistory'
  },
  SupplierDepositAdd: {
    path: '',
    root: 'supplier/deposit',
    action: 'common.edit',
    subject: 'SupplierDepositAdd',
    permissions: 'SupplierDepositAdd',
    title: 'common.edit'
  },
  Inventory: {
    path: '',
    root: 'inventory',
    action: 'router.inventory.title',
    subject: 'Inventory',
    permissions: 'Inventory',
    title: 'router.inventory.title'
  },
  HomeTopBanner: {
    path: '/apps/inventory/top-banner/list',
    root: 'inventory/list',
    action: 'router.inventory.homeTopBanner',
    subject: 'HomeTopBanner',
    permissions: 'HomeTopBanner',
    title: 'router.inventory.homeTopBanner'
  },
  BannerList: {
    path: '/apps/inventory/banner/list',
    root: 'inventory/list',
    action: 'router.inventory.bannerList',
    subject: 'BannerList',
    permissions: 'BannerList',
    title: 'router.inventory.bannerList'
  },
  BannerEdit: {
    path: '',
    root: 'inventory',
    action: 'common.edit',
    subject: 'BannerEdit',
    permissions: 'BannerEdit',
    title: 'common.edit'
  },
  FeaturedList: {
    path: '/apps/inventory/featured/list',
    root: 'inventory/list',
    action: 'router.inventory.featuredList',
    subject: 'FeaturedList',
    permissions: 'FeaturedList',
    title: 'router.inventory.featuredList'
  },
  FeaturedEdit: {
    path: '',
    root: 'inventory',
    action: 'common.edit',
    subject: 'FeaturedEdit',
    permissions: 'FeaturedEdit',
    title: 'common.edit'
  },
  User: {
    path: '',
    root: 'user',
    action: 'router.user.title',
    subject: 'User',
    permissions: 'User',
    title: 'router.user.title'
  },
  UserList: {
    path: '/apps/user/list',
    root: 'user/list',
    action: 'router.user.userList',
    subject: 'UserList',
    permissions: 'UserList',
    title: 'router.user.userList'
  },
  UserDetail: {
    path: '',
    root: 'user',
    action: 'common.detail',
    subject: 'UserDetail',
    permissions: 'UserDetail',
    title: 'common.detail'
  },
  UserMcoinLog: {
    root: 'user/mcoin-log',
    path: '/apps/user/mcoin-log',
    action: 'user.mcoinLog.title',
    subject: 'UserMcoinLog',
    permissions: 'UserMcoinLog',
    title: 'user.mcoinLog.title'
  },
  Config: {
    path: '',
    root: 'config',
    action: 'router.config.title',
    subject: 'Config',
    permissions: 'Config',
    title: 'router.config.title'
  },
  City: {
    path: '/apps/config/area',
    root: 'config/area',
    action: 'common.city',
    subject: 'City',
    permissions: 'City',
    title: 'common.city'
  },
  Mcoin: {
    path: '/apps/config/mcoin',
    root: 'config/mcoin',
    action: 'router.config.mcoin',
    subject: 'Mcoin',
    permissions: 'Mcoin',
    title: 'router.config.mcoin'
  },
  McoinPolicy: {
    path: '/apps/config/policy',
    root: 'config/policy',
    action: 'router.config.policy',
    subject: 'McoinPolicy',
    permissions: 'McoinPolicy',
    title: 'router.config.policy'
  },
  Notification: {
    path: '/apps/config/notification',
    root: 'config/notification',
    action: 'router.config.notification',
    subject: 'Notification',
    permissions: 'Notification',
    title: 'router.config.notification'
  },
  Authorization: {
    path: '',
    root: 'system',
    action: 'router.system.title',
    subject: 'Authorization',
    permissions: 'Authorization',
    title: 'router.system.title'
  },
  AdminUser: {
    path: '/apps/admin/account-management',
    root: 'system',
    action: 'router.system.adminUser',
    subject: 'AdminUser',
    permissions: 'AdminUser',
    title: 'router.system.adminUser'
  },
  Permissions: {
    path: '',
    root: 'system',
    action: 'adminUser.permissions',
    subject: 'Permissions',
    permissions: 'Permissions',
    title: 'adminUser.permissions'
  },
  OperationLog: {
    path: '/apps/admin/operation-log',
    root: 'system/operation-log',
    action: 'router.system.operationLog',
    subject: 'OperationLog',
    permissions: 'OperationLog',
    title: 'router.system.operationLog'
  },
  ServiceRecommend: {
    path: '',
    action: 'common.recommend',
    subject: 'ServiceRecommend',
    permissions: 'ServiceRecommend',
    title: 'common.recommend'
  },
  ServiceLaunch: {
    path: '',
    action: 'service.service.launch',
    subject: 'ServiceLaunch',
    permissions: 'ServiceLaunch',
    title: 'service.service.launch'
  },
  SingleServiceEdit: {
    path: '',
    action: 'common.edit',
    subject: 'SingleServiceEdit',
    permissions: 'SingleServiceEdit',
    title: 'common.edit'
  },
  ServiceEdit: {
    path: '',
    action: 'common.edit',
    subject: 'ServiceEdit',
    permissions: 'ServiceEdit',
    title: 'common.edit'
  },
  Technician: {
    path: '',
    root: 'technicians',
    action: 'router.technicians.title',
    subject: 'Technician',
    permissions: 'Technician',
    title: 'router.technicians.title'
  },
  TechnicianList: {
    path: '/apps/technicians/list',
    root: 'technicians/list',
    action: 'router.technicians.technicianList',
    subject: 'TechnicianList',
    permissions: 'TechnicianList',
    title: 'router.technicians.technicianList'
  },
  TechnicianDetail: {
    path: '/apps/technicians/detail',
    root: 'technicians/detail',
    action: 'common.detail',
    subject: 'TechnicianDetail',
    permissions: 'TechnicianDetail',
    title: 'common.detail'
  },
  TechnicianApprove: {
    path: '',
    action: 'common.approve',
    subject: 'TechnicianApprove',
    permissions: 'TechnicianApprove',
    title: 'common.approve'
  }
}

export const BANNER_OPT_TYPE = [
  { label: 'Mission page', type: 'success', value: 0 },
  { label: 'Service page', type: 'success', value: 1 },
  { label: 'Shop page', type: 'success', value: 2 },
  { label: 'Service details', type: 'success', value: 3 }
]
export const BANNER_VALID = [
  { label: 'Disabled', type: 'warning', color: 'warning', value: 0 },
  { label: 'Published', type: 'success', color: 'success', value: 1 },
  { label: 'Expired', type: 'info', color: 'secondary', value: 2 }
]

export const ORDER_STATUS = [
  { label: 'Unpaid', type: 'info', color: 'secondary', value: 0 },
  { label: 'Timeout', type: 'info', color: 'secondary', value: 1 },
  { label: 'Unused', type: 'success', color: 'success', value: 2 },
  { label: 'Used', type: 'info', color: 'info', value: 3 },
  { label: 'Gifted', type: 'warning', color: 'warning', value: 4 },
  { label: 'Timeout', type: 'warning', color: 'warning', value: 5 },
  { label: 'Under refund', type: 'info', color: 'secondary', value: 6 },
  { label: 'Cancelled', type: 'info', color: 'secondary', value: 7 }
]
export const PAYMENT_MODE = [
  { label: 'Cash', type: 'success', color: 'info', value: 1 },
  { label: 'Vn Pay', type: 'success', color: 'info', value: 2 },
  { label: 'MoMo Pay', type: 'success', color: 'info', value: 3 },
  { label: 'Online Transfer', type: 'success', color: 'info', value: 4 },
  { label: 'Visa/Master Card', type: 'success', color: 'info', value: 5 }
]

export const GENDER_TYPE = [
  { label: 'Male', type: 'info', value: 1 },
  { label: 'Female', type: 'success', value: 0 },
  { label: 'X', type: 'primary', value: 2 }
]

export const SERVICE_STATUS = [
  { label: '-', type: 'info', color: 'info', value: 0 },
  { label: 'Launch', type: 'success', color: 'success', value: 1 },
  { label: 'Disable', type: 'warning', color: 'warning', value: 2 },
  { label: 'Remove', type: 'info', color: 'secondary', value: 3 }
]

export const USER_MISSION_STATUS = [
  { label: 'Ongoing', type: 'success', value: 1 },
  { label: 'Timeout', type: 'info', value: 2 },
  { label: 'Complete', type: 'primary', value: 3 }
]

export const get = (field: string, val: number, key: 'value') => {
  let data: { label: string; type: string; color?: string; value: number }[] = []
  switch (field) {
    case 'SERVICE_STATUS':
      data = SERVICE_STATUS
      break
    case 'USER_MISSION_STATUS':
      data = USER_MISSION_STATUS
      break
    case 'BANNER_OPT_TYPE':
      data = BANNER_OPT_TYPE
      break
    case 'ORDER_STATUS':
      data = ORDER_STATUS
      break
    case 'GENDER_TYPE':
      data = GENDER_TYPE
      break
    case 'BANNER_VALID':
      data = BANNER_VALID
      break
    case 'PAYMENT_MODE':
      data = PAYMENT_MODE
      break
  }

  return data.find(item => String(val) === String(item[key]))
}

export const enumFormat = <T>(
  val: number,
  field:
    | 'SERVICE_STATUS'
    | 'USER_MISSION_STATUS'
    | 'BANNER_OPT_TYPE'
    | 'ORDER_STATUS'
    | 'GENDER_TYPE'
    | 'BANNER_VALID'
    | 'PAYMENT_MODE',
  type: 'label' | 'type' | 'color' | 'value'
): T => {
  const item = get(field, val, 'value')

  return (item?.[type]?.toString() || '-') as T
}

export const IMAGE_BASE_URL = 'https://hcm03.vstorage.vngcloud.vn/v1/AUTH_b081f46d5d9145ef9fbec09ce72683cb/thammy'

export const DayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
