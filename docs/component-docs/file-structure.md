# File Structure
```
|   .browserslistrc
|   .env
|   .eslintrc.js
|   .gitignore
|   .jshintrc
|   babel.config.js
|   CHANGELOG.md
|   package.json
|   postcss.config.js
|   README.md
|   yarn.lock
|
+---public
|   |   .DS_Store
|   |   favicon.png
|   |   index.html
|   |
|   \---img
|       |   apple-icon.png
|       |   bg-pricing.jpg
|       |   bg3.jpg
|       |   bg9.jpg
|       |   card-1.jpg
|       |   card-2.jpg
|       |   card-3.jpg
|       |   default-avatar.png
|       |   favicon.png
|       |   image_placeholder.jpg
|       |   lock.jpg
|       |   login.jpg
|       |   mask.png
|       |   new_logo.png
|       |   placeholder.jpg
|       |   product1.jpg
|       |   product2.jpg
|       |   product3.jpg
|       |   register.jpg
|       |   sidebar-1.jpg
|       |   sidebar-2.jpg
|       |   sidebar-3.jpg
|       |   sidebar-4.jpg
|       |   vue-logo.png
|       |
|       +---faces
|       |       avatar.jpg
|       |       card-profile1-square.jpg
|       |       card-profile2-square.jpg
|       |       marc.jpg
|       |
|       \---flags
|               AU.png
|               BR.png
|               DE.png
|               GB.png
|               RO.png
|               US.png
|
\---src
    |   .DS_Store
    |   App.vue
    |   globalComponents.js
    |   globalDirectives.js
    |   main.js
    |   material-dashboard.js
    |
    +---assets
    |   |   .DS_Store
    |   |
    |   +---css
    |   |       demo.css
    |   |
    |   \---scss
    |       |   .DS_Store
    |       |   material-dashboard.scss
    |       |
    |       \---md
    |           |   .DS_Store
    |           |   _alerts.scss
    |           |   _autocomplete.scss
    |           |   _badges.scss
    |           |   _buttons.scss
    |           |   _cards.scss
    |           |   _chartist.scss
    |           |   _checkboxes.scss
    |           |   _collapse.scss
    |           |   _colors.scss
    |           |   _dialogs.scss
    |           |   _dropdown.scss
    |           |   _fileinput.scss
    |           |   _fixed-plugin.scss
    |           |   _footers.scss
    |           |   _forms.scss
    |           |   _headers.scss
    |           |   _info-areas.scss
    |           |   _inputs-size.scss
    |           |   _inputs.scss
    |           |   _layout.scss
    |           |   _misc.scss
    |           |   _mixins.scss
    |           |   _navbars.scss
    |           |   _pages.scss
    |           |   _pagination.scss
    |           |   _pills.scss
    |           |   _popups.scss
    |           |   _progress.scss
    |           |   _radios.scss
    |           |   _responsive.scss
    |           |   _rtl.scss
    |           |   _select.scss
    |           |   _shadows.scss
    |           |   _sidebar-and-main-panel.scss
    |           |   _tables.scss
    |           |   _tabs.scss
    |           |   _tags.scss
    |           |   _timeline.scss
    |           |   _togglebutton.scss
    |           |   _typography.scss
    |           |   _variables.scss
    |           |
    |           +---cards
    |           |       _card-global-sales.scss
    |           |       _card-login.scss
    |           |       _card-pricing.scss
    |           |       _card-product.scss
    |           |       _card-profile.scss
    |           |       _card-signup.scss
    |           |       _card-tabs.scss
    |           |       _card-testimonials.scss
    |           |
    |           +---mixins
    |           |       _chartist.scss
    |           |       _sidebar.scss
    |           |       _transparency.scss
    |           |       _vendor-prefixes.scss
    |           |
    |           \---plugins
    |                   _animate.scss
    |                   _fullcalendar.scss
    |                   _md-datepicker.scss
    |                   _perfect-scrollbar.scss
    |                   _plugin-jquery.jvectormap.scss
    |                   _plugin-nouislider.scss
    |                   _sweetalert2.scss
    |                   _wizard-card.scss
    |
    +---components
    |   |   .DS_Store
    |   |   AnimatedNumber.vue
    |   |   Badge.vue
    |   |   Collapse.vue
    |   |   Dropdown.vue
    |   |   index.js
    |   |   Logout.vue
    |   |   Modal.vue
    |   |   Pagination.vue
    |   |   Slider.vue
    |   |   Tabs.vue
    |   |
    |   +---Cards
    |   |       ChartCard.vue
    |   |       GlobalSalesCard.vue
    |   |       LockCard.vue
    |   |       LoginCard.vue
    |   |       NavTabsCard.vue
    |   |       PricingCard.vue
    |   |       ProductCard.vue
    |   |       SignupCard.vue
    |   |       StatsCard.vue
    |   |       TestimonialCard.vue
    |   |
    |   +---Inputs
    |   |       IconCheckbox.vue
    |   |
    |   +---NotificationPlugin
    |   |       index.js
    |   |       Notification.vue
    |   |       Notifications.vue
    |   |
    |   +---SidebarPlugin
    |   |       index.js
    |   |       SideBar.vue
    |   |       SidebarItem.vue
    |   |
    |   +---Tables
    |   |       GlobalSalesTable.vue
    |   |
    |   +---Timeline
    |   |       TimeLine.vue
    |   |       TimeLineItem.vue
    |   |
    |   +---Wizard
    |   |       throttle.js
    |   |       Wizard.vue
    |   |       WizardTab.vue
    |   |
    |   \---WorldMap
    |           AsyncWorldMap.vue
    |           WorldMap.vue
    |           world_map.js
    |
    +---middleware
    |       auth.js
    |       guest.js
    |
    +---pages
    |   |   .DS_Store
    |   |   FixedPlugin.vue
    |   |   index.js
    |   |
    |   \---Dashboard
    |       |   .DS_Store
    |       |   Calendar.vue
    |       |   Charts.vue
    |       |   Dashboard.vue
    |       |   Widgets.vue
    |       |
    |       +---Components
    |       |       Buttons.vue
    |       |       GridSystem.vue
    |       |       Icons.vue
    |       |       Notifications.vue
    |       |       Panels.vue
    |       |       SweetAlert.vue
    |       |       Typography.vue
    |       |
    |       +---Forms
    |       |   |   ExtendedForms.vue
    |       |   |   RegularForms.vue
    |       |   |   ValidationForms.vue
    |       |   |   Wizard.vue
    |       |   |
    |       |   +---ValidationForms
    |       |   |       LoginForm.vue
    |       |   |       RangeValidationForm.vue
    |       |   |       RegisterForm.vue
    |       |   |       TypeValidationForm.vue
    |       |   |
    |       |   \---Wizard
    |       |           FirstStep.vue
    |       |           SecondStep.vue
    |       |           ThirdStep.vue
    |       |
    |       +---Layout
    |       |   |   Content.vue
    |       |   |   ContentFooter.vue
    |       |   |   DashboardLayout.vue
    |       |   |   TopNavbar.vue
    |       |   |
    |       |   \---Extra
    |       |           MobileMenu.vue
    |       |           UserMenu.vue
    |       |
    |       +---Maps
    |       |       API_KEY.js
    |       |       FullScreenMap.vue
    |       |       GoogleMaps.vue
    |       |       VectorMaps.vue
    |       |       WorldMap.vue
    |       |       world_map.js
    |       |
    |       +---Pages
    |       |   |   AuthLayout.vue
    |       |   |   Lock.vue
    |       |   |   Login.vue
    |       |   |   Pricing.vue
    |       |   |   Register.vue
    |       |   |   RtlSupport.vue
    |       |   |   TimeLinePage.vue
    |       |   |   UserProfile.vue
    |       |   |
    |       |   \---UserProfile
    |       |           EditProfileForm.vue
    |       |           UserCard.vue
    |       |
    |       \---Tables
    |               ExtendedTables.vue
    |               PaginatedTables.vue
    |               RegularTables.vue
    |               users.js
    |
    +---routes
    |       router.js
    |       routes.js
    |
    \---store
        |   index.js
        |
        \---modules
                auth.js
```