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
                <router-link :to="{ name: 'ContactUs' }">
                Contact us
                </router-link>
            </li>
        </ol>
    </nav>
    <div class="md-layout page-wrapper">
        <div class="md-layout-item privacy-policy md-size-100">
            <h1 class="md-display-3">Ways to Communicate</h1>
        </div>
    </div>
    <div class="md-layout-item md-medium-size-100 md-size-100">
        <md-card class="welcome-card-wrap">
            <div class="contact-form d-flex md-alignment-y-center">
            <div class="md-layout md-gutter form">
                <h5 class="md-display-1">
                    Contact us by phone, mail, or email. We will not distribute or sell your information.
                </h5>
                    <div class="md-layout-item md-size-70">
                        <div class="md-layout d-flex">
                            <div class="md-layout-item">
                                <md-field class='input'>
                                    <md-input class="form-imput" placeholder='First Name'></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item">
                                <md-field class='input'>
                                    <md-input class="form-imput" placeholder='Last Name'></md-input>
                                </md-field>
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item">
                                <md-field class='input'>
                                    <md-input id="email" class="form-imput" type="email" placeholder='E-Mail Address'></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item">
                                <md-field class='input form-imput'>
                                    <md-input id="phone" class="form-imput" type="text" placeholder='Phone number'></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-size-100">
                                <md-field class="text-area">
                                    <md-textarea  class="message" v-model="autogrow" md-autogrow placeholder='Message'></md-textarea>
                                </md-field>
                            </div>
                            <div class="md-layout md-size-100 checkbox-box">
                                <div class="md-layout-item form-checkbox md-size-75">
                                    <md-checkbox v-model="withSetValue" true-value="true" false-value="false"></md-checkbox>
                                    <div class="title">Add me to the Bizminer mailing list</div>
                                </div>
                                <div class="md-layout-item md-size-25">
                                    <md-button class="submit">Submit</md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md-layout-item md-size-30">
                        <h2><strong>(717) 909-6000</strong></h2>
                    </div>
                </div>
            </div>
        </md-card>
    </div>
    <div class="md-layout page-wrapper">
        <div class="md-layout contact-us-addres">
            <div class="md-layout-item md-size-50 addres-body">
                <div class="card-icon-right card-help-icon">
                    <md-icon>location_on</md-icon>
                </div>
                <h1 class="md-title">Address:</h1>
                <p>505 Thornall St, Suite 203 <br>
                    Edison, NJ 08837
                </p>
            </div>
            <div class="md-layout-item md-size-50 addres-body">
                <div class="card-icon-right card-help-icon">
                    <md-icon>watch_later</md-icon>
                </div>
                <h1 class="md-title">Office Hours:</h1>
                <p>Monday to Friday <br>
                    8:30-5 Eastern Time
                </p>
            </div>
        </div>
    </div>
</div>
</template>


<script>
export default {
    name: 'ContactUs',
    data: () => ({
         withSetValue: null,
         autogrow: ''
    })
}
</script>

<style lang="scss">

    .contact-form {
        width: 100%;
        .form {
            h5 {
                font-size: 18px;
               font-weight: 500;
                color: #3c4858;
                width: 100%;
                color: #3c4858;
                display: flex;
                justify-content: center;
                margin: 45px 0 !important;
            }
            h2 {
                font-size: 28px;
                color: #3b7ef1;
                margin-bottom: 20px;
                line-height: 40px;
                margin: 0;
            }
        }

        .input {
            caret-color: black;   
            padding: 3px 12px 3px 12px;
            background-color: #fff;
            border-radius: 2px;
            border: 1px solid #d5dae2;
            height: 40px;
            margin: 0 0 30px 0;
            box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%);
            
            .form-imput {
                font-weight: 300;
            }
        } 

        .text-area {
            margin: 0px -3px 30px 0px;
            height: 76px;
            width: 100%;
            background-color: #fff;
            border-radius: 2px;
            border: 1px solid #d5dae2;
            padding: 20px;
            box-shadow: inset 0 0px 0px rgb(0 0 0 / 8%);
            .message {
                font-weight: 300;
            }
        }

        .submit {
            background-color: #3b7ef1 !important;
            color: #fff !important;
            padding: 0 30px;
            float: right;
            display: inline-block;
            margin-top: 14px;
            font-size: 12px;
            font-weight: 400;
            text-transform: uppercase;
            cursor: pointer;

            &:hover {
                box-shadow: 0 14px 26px -12px rgb(59 126 241 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(59 126 241 / 20%);
                background-color: #2d75f0 !important;
            }
        }

        .checkbox-box {
            justify-content: flex-end;
             .form-checkbox {
                display: flex;
                align-items: center;
                margin-bottom: 25px !important;
                .title {
                    font-size: 14px;
                    margin-bottom: 0;
                }
            }
        }
        .md-field:after {
            height: 0px;
        }
        .md-field:before {
            height: 0px;
        }
    }

    .header-filter::before {
        background: white;
    }

    .contact-us-addres {
        margin-top: 40px;
        .addres-body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            h1 {
                font-size: 20px !important;
                color: #3c4858;
                letter-spacing: 0.25px;
                font-weight: 300;
                margin-bottom: 0;
            }
        }
    }
 
</style>
