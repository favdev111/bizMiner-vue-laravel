require('dotenv').config()
const markdownParser = require('./markdownParser');
const path = require('path');
const webpack = require('webpack')

module.exports = {
  extend: '@vuepress/default-theme',
  title: 'BizMiner',
  base: '/documentation/',
  markdown: {
    config: markdownParser
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../../src');

      return { plugins: [
        new webpack.EnvironmentPlugin({ ...process.env })
      ]}

  },
  head: [
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons` }],
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,300italic,400italic` }],
    ['link', { rel: 'stylesheet', href: `https://use.fontawesome.com/releases/v5.0.8/css/all.css` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon.png' }],
    ['link', { rel: 'canonical', href:'https://www.creative-tim.com/product/vue-material-dashboard-laravel-pro' }],
    ['meta ', { name: 'keywords', content:'bizminer, updivision, html dashboard, vue, vuejs, laravel, json:api, json, api, html css dashboard laravel, vue material dashboard laravel, vue material dashboard laravel pro, vue material dashboard, vue material dashboard pro, material vue admin, vue dashboard, vue dashboard pro, vue admin, web dashboard, bootstrap 4 dashboard laravel, bootstrap 4, css3 dashboard, bootstrap 4 admin laravel, material ui dashboard bootstrap 4 laravel, frontend, responsive bootstrap 4 dashboard, material design, material laravel bootstrap 4 dashboard' }],
    ['meta ', { name: 'description', content:'Vue Material Dashboard Laravel PRO is the ultimate fullstack resource. It comes with UI components, a Vue Material frontend and an API-powered Laravel backend' }],
    ['meta ', { itemprop: 'name', content:'BizMiner' }],
    ['meta ', { itemprop: 'description', content:'Vue Material Dashboard Laravel PRO is the ultimate fullstack resource. It comes with UI components, a Vue Material frontend and an API-powered Laravel backend' }],
    ['meta ', { itemprop: 'image', content:'https://s3.amazonaws.com/creativetim_bucket/products/332/original/opt_mdp_vuelaravel_thumbnail.jpg' }],
    ['meta ', { name: 'twitter:card', content:'product' }],
    ['meta ', { name: 'twitter:site', content:'@creativetim' }],
    ['meta ', { name: 'twitter:title', content:'BizMiner' }],
    ['meta ', { name: 'twitter:description', content:'Vue Material Dashboard Laravel PRO is the ultimate fullstack resource. It comes with UI components, a Vue Material frontend and an API-powered Laravel backend' }],
    ['meta ', { name: 'twitter:creator', content:'@creativetim' }],
    ['meta ', { name: 'twitter:image', content:'https://s3.amazonaws.com/creativetim_bucket/products/332/original/opt_mdp_vuelaravel_thumbnail.jpg' }],
    ['meta ', { name: 'twitter:data1', content:'BizMiner' }],
    ['meta ', { name: 'twitter:label1', content:'Product Type' }],
    ['meta ', { name: 'twitter:label2', content:'Price' }],
    ['meta ', { property: 'fb:app_id', content:'655968634437471' }],
    ['meta ', { property: 'og:titled', content:'BizMiner' }],
    ['meta ', { property: 'og:type', content:'article' }],
    ['meta ', { property: 'og:url', content:'https://www.creative-tim.com/live/vue-material-dashboard-laravel-pro' }],
    ['meta ', { property: 'og:image', content:'https://s3.amazonaws.com/creativetim_bucket/products/332/original/opt_mdp_vuelaravel_thumbnail.jpg' }],
    ['meta ', { property: 'og:description', content:'Vue Material Dashboard Laravel PRO is the ultimate fullstack resource. It comes with UI components, a Vue Material frontend and an API-powered Laravel backend' }],
    ['meta ', { property: 'og:site_name', content:'BizMiner' }],
    ['script', {}, `
       (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
       h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
       (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
       })(window,document.documentElement,'async-hide','dataLayer',4000,
       {'GTM-K9BGS8K':true});
    `],
    ['script', {}, `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-46172202-22', 'auto', {allowLinker: true});
        ga('set', 'anonymizeIp', true);
        ga('require', 'GTM-K9BGS8K');
        ga('require', 'displayfeatures');
        ga('require', 'linker');
        ga('linker:autoLink', ["2checkout.com","avangate.com"]);
      `],
    ['script', {}, `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NKDMSK6');
      `],
  ],
  themeConfig: {
    nav: [
      { text: 'v1.0.0', link: '/#' },
      { text: 'Documentation', link: '/#' },
      { text: 'Live Preview', link: 'https://material-dashboard-laravel-pro.creative-tim.com/' },
    ],
    repo: 'creativetimofficial/ct-vue-material-dashboard-laravel-pro',
    repoLabel: 'Help with a star',
    sidebar: [
      {
        title: 'General Information',
        collapsable: false,
        children: [
          '/laravel-example-pages/download',
          '/',
          '/laravel-example-pages/api-instalation',
          '/component-docs/license',
          '/component-docs/file-structure',
        ]
      },
      {
        title: 'Vue Laravel Examples',
        collapsable: false,
        children: [
          '/laravel-example-pages/login',
          '/laravel-example-pages/register',
          '/laravel-example-pages/profile',
          '/laravel-example-pages/role-management',
          '/laravel-example-pages/user-management',
          '/laravel-example-pages/tag-management',
          '/laravel-example-pages/category-management',
          '/laravel-example-pages/item-management',
        ]
      },
      {
        title: 'Vue Components',
        collapsable: false,
        children: [
          '/component-docs/buttons',
          '/component-docs/cards',
          '/component-docs/checkboxes',
          '/component-docs/radios',
          '/component-docs/dropdown',
          '/component-docs/inputs',
          '/component-docs/textarea',
          '/component-docs/maps',
          '/component-docs/notifications',
          '/component-docs/tables',
          '/component-docs/tabs',
          '/component-docs/switch',
          '/component-docs/select',
          '/component-docs/brand-colors',
          '/component-docs/tags',
          '/component-docs/collapsible-groups',
          '/component-docs/date-pickers',
          '/component-docs/modal',
          '/component-docs/pagination',
          '/component-docs/tooltips',
          '/component-docs/badge',
          '/component-docs/material-icons',
          '/component-docs/toolbar'
        ]
      }
    ]
  }
};
