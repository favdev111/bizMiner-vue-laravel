import DashboardLayout from '@/pages/Dashboard/Layout/DashboardLayout.vue';
import AuthLayout from '@/pages/Dashboard/Layout/AuthLayout.vue';
import ProfileLayout from '@/pages/Dashboard/Layout/ProfileLayout.vue';

// Dashboard pages
import Dashboard from '@/pages/Dashboard/Dashboard.vue';
import Search from '@/pages/Dashboard/Pages/Search/Search.vue';
import MyProfiles from '@/pages/Dashboard/Pages/Profiles/MyProfiles.vue';
import NewProfiles from '@/pages/Dashboard/Pages/Profiles/NewProfiles.vue';
import NewProfile from '@/pages/Dashboard/Pages/Profiles/NewProfile.vue';

// IF Profile
import IFIntro from '@/pages/Dashboard/Pages/Profiles/IFProfile/IFIntro.vue';
import IFProfitAndLoss from '@/pages/Dashboard/Pages/Profiles/IFProfile/IFProfitAndLoss.vue';
import IFBalanceSheet from '@/pages/Dashboard/Pages/Profiles/IFProfile/IFBalanceSheet.vue';
import IFRatios from '@/pages/Dashboard/Pages/Profiles/IFProfile/IFRatios.vue';
import IFSourcesUsers from '@/pages/Dashboard/Pages/Profiles/IFProfile/IFSourcesUsers.vue';
import IFValuationMultiples from '@/pages/Dashboard/Pages/Profiles/IFProfile/IFValuationMultiples.vue';
import IFAbout from '@/pages/Dashboard/Pages/Profiles/IFProfile/IFAbout.vue';

import MyFavorites from '@/pages/Dashboard/Pages/Favorites/MyFavorites.vue';
import MyReports from '@/pages/Dashboard/Pages/Reports/MyReports.vue';
import NewReport from '@/pages/Dashboard/Pages/Reports/NewReport.vue';
import CreateNewReport from '@/pages/Dashboard/Pages/Reports/CreateNewReport.vue';
import MyInputs from '@/pages/Dashboard/Pages/Inputs/MyInputs.vue';
import InputDetails from '@/pages/Dashboard/Pages/Inputs/InputDetails.vue';
import EditInput from '@/pages/Dashboard/Pages/Inputs/EditInput.vue';
import BillingAndInvoices from '@/pages/Dashboard/Pages/UserProfile/BillingAndInvoices.vue';
import TransactionDetails from '@/pages/Dashboard/Pages/UserProfile/TransactionDetails.vue';
import Subscriptions from '@/pages/Dashboard/Pages/UserProfile/Subscriptions/Subscriptions.vue';
import Cart from '@/pages/Dashboard/Pages/Cart.vue';

// Example pages
import UserProfile from '@/pages/Dashboard/Examples/UserProfile.vue';
// Role Management
import ListRolePage from '@/pages/Dashboard/Examples/RoleManagement/ListRolePage.vue';
import AddRolePage from '@/pages/Dashboard/Examples/RoleManagement/AddRolePage.vue';
import EditRolePage from '@/pages/Dashboard/Examples/RoleManagement/EditRolePage.vue';
// User Management
import ListUserPage from '@/pages/Dashboard/Examples/UserManagement/ListUserPage.vue';
import AddUserPage from '@/pages/Dashboard/Examples/UserManagement/AddUserPage.vue';
import EditUserPage from '@/pages/Dashboard/Examples/UserManagement/EditUserPage.vue';
// Category Management
import ListCategoryPage from '@/pages/Dashboard/Examples/CategoryManagement/ListCategoryPage.vue';
import AddCategoryPage from '@/pages/Dashboard/Examples/CategoryManagement/AddCategoryPage.vue';
import EditCategoryPage from '@/pages/Dashboard/Examples/CategoryManagement/EditCategoryPage.vue';
// Tag Management
import ListTagPage from '@/pages/Dashboard/Examples/TagManagement/ListTagPage.vue';
import AddTagPage from '@/pages/Dashboard/Examples/TagManagement/AddTagPage.vue';
import EditTagPage from '@/pages/Dashboard/Examples/TagManagement/EditTagPage';
// Item Management
import ListItemPage from '@/pages/Dashboard/Examples/ItemManagement/ListItemPage.vue';
import AddItemPage from '@/pages/Dashboard/Examples/ItemManagement/AddItemPage.vue';
import EditItemPage from '@/pages/Dashboard/Examples/ItemManagement/EditItemPage';

// Pages
import User from '@/pages/Dashboard/Pages/UserProfile.vue';
import Pricing from '@/pages/Dashboard/Pages/Pricing.vue';
import TimeLine from '@/pages/Dashboard/Pages/TimeLinePage.vue';
import RtlSupport from '@/pages/Dashboard/Pages/RtlSupport.vue';
import Login from '@/pages/Dashboard/Pages/Login.vue';
import Register from '@/pages/Dashboard/Pages/Register.vue';
import ForgotPassword from '@/pages/Dashboard/Pages/ForgotPassword.vue';
import RecoverPassword from '@/pages/Dashboard/Pages/RecoverPassword.vue';
import Lock from '@/pages/Dashboard/Pages/Lock.vue';

// Components pages
import Buttons from '@/pages/Dashboard/Components/Buttons.vue';
import GridSystem from '@/pages/Dashboard/Components/GridSystem.vue';
import Panels from '@/pages/Dashboard/Components/Panels.vue';
import SweetAlert from '@/pages/Dashboard/Components/SweetAlert.vue';
import Notifications from '@/pages/Dashboard/Components/Notifications.vue';
import Icons from '@/pages/Dashboard/Components/Icons.vue';
import Typography from '@/pages/Dashboard/Components/Typography.vue';

// Forms pages
import RegularForms from '@/pages/Dashboard/Forms/RegularForms.vue';
import ExtendedForms from '@/pages/Dashboard/Forms/ExtendedForms.vue';
import ValidationForms from '@/pages/Dashboard/Forms/ValidationForms.vue';
import Wizard from '@/pages/Dashboard/Forms/Wizard.vue';

// TableList pages
import RegularTables from '@/pages/Dashboard/Tables/RegularTables.vue';
import ExtendedTables from '@/pages/Dashboard/Tables/ExtendedTables.vue';
import PaginatedTables from '@/pages/Dashboard/Tables/PaginatedTables.vue';

// Maps pages
import GoogleMaps from '@/pages/Dashboard/Maps/GoogleMaps.vue';
import FullScreenMap from '@/pages/Dashboard/Maps/FullScreenMap.vue';
import VectorMaps from '@/pages/Dashboard/Maps/VectorMaps.vue';

// Calendar
import Calendar from '@/pages/Dashboard/Calendar.vue';
// Charts
import Charts from '@/pages/Dashboard/Charts.vue';
import Widgets from '@/pages/Dashboard/Widgets.vue';

//import middleware
import auth from '@/middleware/auth';
import guest from '@/middleware/guest';

import ContactUs from '@/pages/Dashboard/Pages/ContactUs.vue';
import Privacy from '@/pages/Dashboard/Pages/Privacy.vue';
import Terms from '@/pages/Dashboard/Pages/Terms.vue';

let componentsMenu = {
  path: '/components',
  component: DashboardLayout,
  redirect: '/components/buttons',
  name: 'Components',
  children: [
    {
      path: 'buttons',
      name: 'Buttons',
      components: { default: Buttons },
      meta: { middleware: auth },
    },
    {
      path: 'grid-system',
      name: 'Grid System',
      components: { default: GridSystem },
      meta: { middleware: auth },
    },
    {
      path: 'panels',
      name: 'Panels',
      components: { default: Panels },
      meta: { middleware: auth },
    },
    {
      path: 'sweet-alert',
      name: 'Sweet Alert',
      components: { default: SweetAlert },
      meta: { middleware: auth },
    },
    {
      path: 'notifications',
      name: 'Notifications',
      components: { default: Notifications },
      meta: { middleware: auth },
    },
    {
      path: 'icons',
      name: 'Icons',
      components: { default: Icons },
      meta: { middleware: auth },
    },
    {
      path: 'typography',
      name: 'Typography',
      components: { default: Typography },
      meta: { middleware: auth },
    },
  ],
};

let examplesMenu = {
  path: '/examples',
  component: DashboardLayout,
  name: 'Examples',
  children: [
    {
      path: 'user-profile',
      name: 'UserProfile',
      components: { default: UserProfile },
      meta: { middleware: auth },
    },
    {
      path: 'role-management/list-roles',
      name: 'List Roles',
      components: { default: ListRolePage },
      meta: { middleware: auth },
    },
    {
      path: 'role-management/add-role',
      name: 'Add Role',
      components: { default: AddRolePage },
      meta: { middleware: auth },
    },
    {
      path: 'role-management/edit-role/:id',
      name: 'Edit Role',
      components: { default: EditRolePage },
      meta: { middleware: auth },
    },
    {
      path: 'user-management/list-users',
      name: 'List Users',
      components: { default: ListUserPage },
      meta: { middleware: auth },
    },
    {
      path: 'user-management/add-user',
      name: 'Add User',
      components: { default: AddUserPage },
      meta: { middleware: auth },
    },
    {
      path: 'user-management/edit-user/:id',
      name: 'Edit User',
      components: { default: EditUserPage },
      meta: { middleware: auth },
    },
    {
      path: 'category-management/list-categories',
      name: 'List Categories',
      components: { default: ListCategoryPage },
      meta: { middleware: auth },
    },
    {
      path: 'category-management/add-category',
      name: 'Add Category',
      components: { default: AddCategoryPage },
      meta: { middleware: auth },
    },
    {
      path: 'category-management/edit-category/:id',
      name: 'Edit Category',
      components: { default: EditCategoryPage },
      meta: { middleware: auth },
    },
    {
      path: 'tag-management/list-tags',
      name: 'List Tags',
      components: { default: ListTagPage },
      meta: { middleware: auth },
    },
    {
      path: 'tag-management/add-tag',
      name: 'Add Tag',
      components: { default: AddTagPage },
      meta: { middleware: auth },
    },
    {
      path: 'tag-management/edit-tag/:id',
      name: 'Edit Tag',
      components: { default: EditTagPage },
      meta: { middleware: auth },
    },
    {
      path: 'item-management/list-items',
      name: 'List Items',
      components: { default: ListItemPage },
      meta: { middleware: auth },
    },
    {
      path: 'item-management/add-item',
      name: 'Add Item',
      components: { default: AddItemPage },
      meta: { middleware: auth },
    },
    {
      path: 'item-management/edit-item/:id',
      name: 'Edit Item',
      components: { default: EditItemPage },
      meta: { middleware: auth },
    },
  ],
};

let formsMenu = {
  path: '/forms',
  component: DashboardLayout,
  redirect: '/forms/regular',
  name: 'Forms',
  children: [
    {
      path: 'regular',
      name: 'Regular Forms',
      components: { default: RegularForms },
      meta: { middleware: auth },
    },
    {
      path: 'extended',
      name: 'Extended Forms',
      components: { default: ExtendedForms },
      meta: { middleware: auth },
    },
    {
      path: 'validation',
      name: 'Validation Forms',
      components: { default: ValidationForms },
      meta: { middleware: auth },
    },
    {
      path: 'wizard',
      name: 'Wizard',
      components: { default: Wizard },
      meta: { middleware: auth },
    },
  ],
};

let tablesMenu = {
  path: '/table-list',
  component: DashboardLayout,
  redirect: '/table-list/regular',
  name: 'Tables',
  children: [
    {
      path: 'regular',
      name: 'Regular Tables',
      components: { default: RegularTables },
      meta: { middleware: auth },
    },
    {
      path: 'extended',
      name: 'Extended Tables',
      components: { default: ExtendedTables },
      meta: { middleware: auth },
    },
    {
      path: 'paginated',
      name: 'Paginated Tables',
      components: { default: PaginatedTables },
      meta: { middleware: auth },
    },
  ],
};

let mapsMenu = {
  path: '/maps',
  component: DashboardLayout,
  name: 'Maps',
  redirect: '/maps/google',
  children: [
    {
      path: 'google',
      name: 'Google Maps',
      components: { default: GoogleMaps },
      meta: { middleware: auth },
    },
    {
      path: 'full-screen',
      name: 'Full Screen Map',
      meta: {
        hideContent: true,
        hideFooter: true,
        navbarAbsolute: true,
        middleware: auth,
      },
      components: { default: FullScreenMap },
    },
    {
      path: 'vector-map',
      name: 'Vector Map',
      components: { default: VectorMaps },
      meta: { middleware: auth },
    },
  ],
};

let pagesMenu = {
  path: '/pages',
  component: DashboardLayout,
  name: 'Pages',
  redirect: '/pages/user',
  children: [
    {
      path: 'timeline',
      name: 'Timeline Page',
      components: { default: TimeLine },
      meta: { middleware: auth },
    },
    {
      path: 'rtl',
      name: 'وحة القيادة',
      meta: {
        rtlActive: true,
        middleware: auth,
      },
      components: { default: RtlSupport },
    },
  ],
};

let authPages = {
  path: '/',
  component: AuthLayout,
  name: 'Authentication',
  children: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { middleware: guest },
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: { middleware: guest },
    },
    {
      path: '/password-reminder',
      name: 'ForgotPassword',
      component: ForgotPassword,
      meta: { middleware: guest },
    },
    {
      path: '/password-recover',
      name: 'RecoverPassword',
      component: RecoverPassword,
      meta: { middleware: guest },
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing,
    },
    {
      path: '/lock',
      name: 'Lock',
      component: Lock,
    },
  ],
};

const routes = [
  {
    path: '/',
    redirect: '/search',
    name: 'Home',
  },
  componentsMenu,
  examplesMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  authPages,
  {
    path: '/',
    component: DashboardLayout,
    meta: { middleware: auth },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        components: { default: Dashboard },
        meta: { middleware: auth },
      },
      {
        path: 'search',
        name: 'Search',
        components: { default: Search },
        meta: { middleware: auth },
      },
      {
        path: 'my-profiles',
        name: 'MyProfiles',
        components: { default: MyProfiles },
        meta: { middleware: auth },
      },
      {
        path: 'new-profile',
        name: 'NewProfiles',
        components: { default: NewProfiles },
        meta: { middleware: auth },
      },
      {
        path: 'new-profile/:id',
        name: 'NewProfile',
        components: { default: NewProfile },
        meta: { middleware: auth },
      },
      {
        path: 'my-reports',
        name: 'MyReports',
        components: { default: MyReports },
        meta: { middleware: auth },
      },
      {
        path: 'new-report',
        name: 'NewReport',
        components: { default: NewReport },
        meta: { middleware: auth },
      },
      {
        path: 'create-new-reporte',
        name: 'CreateNewReport',
        components: { default: CreateNewReport },
        meta: { middleware: auth },
      },
      {
        path: 'my-favorites',
        name: 'MyFavorites',
        components: { default: MyFavorites },
        meta: { middleware: auth },
      },
      {
        path: 'my-inputs',
        name: 'MyInputs',
        components: { default: MyInputs },
        meta: { middleware: auth },
      },
      {
        path: 'input',
        name: 'InputDetails',
        components: { default: InputDetails },
        meta: { middleware: auth },
      },
      {
        path: 'edit-input',
        name: 'EditInput',
        components: { default: EditInput },
        meta: { middleware: auth },
      },
      {
        path: 'my-account',
        name: 'UserPage',
        components: { default: User },
        meta: { middleware: auth },
      },
      {
        path: 'billing-and-invoices',
        name: 'BillingAndInvoices',
        components: { default: BillingAndInvoices },
        meta: { middleware: auth },
      },
      {
        path: 'cart',
        name: 'Cart',
        components: { default: Cart },
        meta: { middleware: auth },
      },
      {
        path: 'transaction',
        name: 'TransactionDetails',
        components: { default: TransactionDetails },
        meta: { middleware: auth },
      },
      {
        path: 'subscriptions',
        name: 'Subscriptions',
        components: { default: Subscriptions },
        meta: { middleware: auth },
      },
      {
        path: 'calendar',
        name: 'Calendar',
        components: { default: Calendar },
        meta: { middleware: auth },
      },
      {
        path: 'charts',
        name: 'Charts',
        components: { default: Charts },
        meta: { middleware: auth },
      },
      {
        path: 'widgets',
        name: 'Widgets',
        components: { default: Widgets },
        meta: { middleware: auth },
      },
      
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy,
      meta: { middleware: auth },
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms,
      meta: { middleware: auth },
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs,
      meta: { middleware: auth },
    },
    ],
  },
  {
    path: '/',
    component: ProfileLayout,
    meta: { middleware: auth },
    children: [
      {
        path: 'if/:id/introduction',
        name: 'IFIntro',
        components: { default: IFIntro },
        meta: { middleware: auth },
      },
      {
        path: 'if/:id/profit-and-loss',
        name: 'IFProfitAndLoss',
        components: { default: IFProfitAndLoss },
        meta: { middleware: auth },
      },
      {
        path: 'if/:id/balance-sheet',
        name: 'IFBalanceSheet',
        components: { default: IFBalanceSheet },
        meta: { middleware: auth },
      },
      {
        path: 'if/:id/ratios',
        name: 'IFRatios',
        components: { default: IFRatios },
        meta: { middleware: auth },
      },
      {
        path: 'if/:id/sources-users',
        name: 'IFSourcesUsers',
        components: { default: IFSourcesUsers },
        meta: { middleware: auth },
      },
      {
        path: 'if/:id/valuation-multiples',
        name: 'IFValuationMultiples',
        components: { default: IFValuationMultiples },
        meta: { middleware: auth },
      },
      {
        path: 'if/:id/about',
        name: 'IFAbout',
        components: { default: IFAbout },
        meta: { middleware: auth },
      },
    ],
  },
];

export default routes;
