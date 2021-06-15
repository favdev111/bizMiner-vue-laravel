<template>
<div>
    <nav aria-label="breadcrumb" role="navigation">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link :to="{ name: 'Home' }">
                Home
                </router-link>
            </li>
            <li class="breadcrumb-item">
                <router-link :to="{ name: 'Privacy' }">
                Ways to Communicate
                </router-link>
            </li>
        </ol>
    </nav>
    <div class="md-layout page-wrapper">
        <div class="md-layout-item privacy-policy md-size-100">
            <h1 class="md-display-3">Privacy Policy</h1>
        </div>
    </div>
     <div class="md-layout-item md-medium-size-100 md-size-100">
        <md-card class="welcome-card-wrap">
            <div class="md-layout md-gutter privacy-policy-text">
                <div class="md-layout-item md-size-100">
                    <h5 class="">
                        BizMiner is committed to protecting your privacy. We will keep all the
                        personal information that you share with us confidential.
                    </h5>
                    <br>
                    <p>If you do not try to access secure pages on our site, we do not request personal information from you.</p>
                    <br>
                    <p>If you register at our site, we require your email address so that we can send you access instructions to secure pages, as well as announcements of future free reports and new product releases. We may also ask for other information for internal purposes. We will not sell or distribute any personal information you give us.</p>
                    <br>
                    <p>If you place an order at BizMiner, we ask for your name, billing address, e-mail address, credit card number, card security code, and expiration date. You may choose to provide your telephone number (optional). We collect the information in order to:</p>
                    <br>
                    <ul>
                        <li>Give you access to secure pages on our site</li>
                        <li>Verify your identity for payment authorization</li>
                        <li>Notify you of login data to access your purchases</li>
                        <li>Contact you regarding your order status or in the case of a problem with your order</li>
                        <li>end you helpful information from BizMiner, such as announcements of new releases and free reports</li>
                    </ul>
                    <br>
                    <p>Your personal information will be shared with your credit card company and our merchant bank only to the extent that it is required to process your payment. Otherwise, we will not sell or distribute personal information you may give us. If you choose to input data from your busness into your online profile, that information is maintained on a secure page accessible only with your username and password. It is never accessed, reviewed or otherwise utilized by BizMiner for any purpose.</p>
                    <br>
                    <p>If the personal information we've gathered from you changes (such as your name, e-mail address, street address, or telephone number) or you no longer desire to be registered with us, we will correct, update, or remove any personal data on request. To request a change or removal of your personal information, send e-mail to Bizminer support. Our site contains links to other sites on the Internet. BizMiner is not responsible for the privacy practices or the content of any of these linked sites., and encourage you to review their privacy practices if you link to them.</p>
                </div>
            </div>
        </md-card>
    </div>
</div>
</template>

<script>
export default {
  name: "Privacy",

  setup() {},
};
</script>

<style lang="scss">

.page-wrapper {

  .privacy-policy {

        h1 {
            font-size: 18px;
            color: #3c4858;
            letter-spacing: 0.25px;
            font-weight: 300;
            margin: 0;
        }
    }
}

.privacy-policy-text {
    padding: 20px 15px 100px 15px;
    
    p, ul li{
        font-size: 14px;
        line-height: 28px;
        font-family: Roboto,Helvetica,Arial,sans-serif;
        margin: 0;
    }

    ul {
        margin: 0;
    }

     h5 {
            font-size: 18px;
            font-weight: 500;
            color: #3c4858;
            line-height: 28px;
        }
}
</style>
