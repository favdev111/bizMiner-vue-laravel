<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <nav aria-label="breadcrumb" role="navigation">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Home' }"> Home </router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              My Account
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <form @submit.prevent="saveAll">
      <div class="md-layout">
        <div class="md-layout-item md-medium-size-100 md-size-66">
          <md-card>
            <md-card-header class="md-card-header-icon">
              <div class="card-icon">
                <md-icon>perm_identity</md-icon>
              </div>
              <h4 class="title">My Account</h4>
            </md-card-header>
            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <div class="section-title">Account Information</div>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.emailAddress.$error }">
                    <label>Account Email</label>
                    <md-input
                      v-model="$v.emailAddress.$model"
                      type="text"
                    ></md-input>
                    <span class="md-error" v-if="!$v.emailAddress.required">
                      This field is required.
                    </span>
                    <span class="md-error" v-if="!$v.emailAddress.email">
                      You must input email.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>New Password (Leave blank to keep current)</label>
                    <md-input v-model="password" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.firstname.$error }">
                    <label>Account First Name</label>
                    <md-input
                      v-model="$v.firstname.$model"
                      type="text"
                    ></md-input>
                    <span class="md-error" v-if="!$v.firstname.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.lastname.$error }">
                    <label>Account Last Name</label>
                    <md-input
                      v-model="$v.lastname.$model"
                      type="text"
                    ></md-input>
                    <span class="md-error" v-if="!$v.lastname.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>

                <div class="md-layout-item md-small-size-100 md-size-100">
                  <div class="section-title">Billing Information</div>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field
                    :class="{ 'md-invalid': $v.billingemailAddress.$error }"
                  >
                    <label>Billing Email</label>
                    <md-input
                      v-model="$v.billingemailAddress.$model"
                      type="email"
                    ></md-input>
                    <span
                      class="md-error"
                      v-if="!$v.billingemailAddress.required"
                    >
                      This field is required.
                    </span>
                    <span class="md-error" v-if="!$v.billingemailAddress.email">
                      You must input email.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field
                    :class="{ 'md-invalid': $v.billingFirstname.$error }"
                  >
                    <label>Billing First Name</label>
                    <md-input
                      v-model="$v.billingFirstname.$model"
                      type="text"
                    ></md-input>
                    <span class="md-error" v-if="!$v.billingFirstname.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field
                    :class="{ 'md-invalid': $v.billingLastname.$error }"
                  >
                    <label>Billing Last Name</label>
                    <md-input
                      v-model="$v.billingLastname.$model"
                      type="text"
                    ></md-input>
                    <span class="md-error" v-if="!$v.billingLastname.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <div class="section-title">Other Information</div>
                </div>

                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.phoneNumber.$error }">
                    <label>Phone Number</label>
                    <md-input
                      v-model="$v.phoneNumber.$model"
                      type="text"
                    ></md-input>
                    <span class="md-error" v-if="!$v.phoneNumber.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.address.$error }">
                    <label>Street Adress</label>
                    <md-input
                      v-model="$v.address.$model"
                      type="text"
                    ></md-input>
                    <span class="md-error" v-if="!$v.address.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.city.$error }">
                    <label>City</label>
                    <md-input v-model="$v.city.$model" type="text"></md-input>
                    <span class="md-error" v-if="!$v.city.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.stateProvince.$error }">
                    <label>State/Province</label>
                    <md-select v-model="$v.stateProvince.$model" name="states">
                      <md-option
                        v-for="state in states"
                        :key="state"
                        :value="state"
                      >
                        {{ state }}
                      </md-option>
                    </md-select>
                    <span class="md-error" v-if="!$v.stateProvince.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.code.$error }">
                    <label>Zip/Postal Code</label>
                    <md-input v-model="$v.code.$model" type="number"></md-input>
                    <span class="md-error" v-if="!$v.code.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.country.$error }">
                    <label>Country</label>
                    <!-- <md-input v-model="country" type="text"></md-input> -->
                    <md-select v-model="$v.country.$model" name="country">
                      <md-option
                        v-for="country in countries"
                        :key="country.code"
                        :value="country.code"
                      >
                        {{ country.name }}
                      </md-option>
                    </md-select>
                    <span class="md-error" v-if="!$v.country.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>

                <div class="md-layout-item md-small-size-100 md-size-100">
                  <div class="section-title">Preferences</div>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.defaultScreen.$error }">
                    <label>Default Screen</label>
                    <!-- <md-input v-model="country" type="text"></md-input> -->
                    <md-select
                      v-model="$v.defaultScreen.$model"
                      name="defaultScreen"
                    >
                      <md-option
                        v-for="defaultScreen in defaultScreens"
                        :key="defaultScreen"
                        :value="defaultScreen"
                      >
                        {{ defaultScreen }}
                      </md-option>
                    </md-select>
                    <span class="md-error" v-if="!$v.defaultScreen.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.dateFormat.$error }">
                    <label>Date Format</label>
                    <md-select v-model="$v.dateFormat.$model" name="dateFormat">
                      <md-option
                        v-for="dateFormat in dateFormats"
                        :key="dateFormat"
                        :value="dateFormat"
                      >
                        {{ dateFormat }}
                      </md-option>
                    </md-select>
                    <span class="md-error" v-if="!$v.dateFormat.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.timeFormat.$error }">
                    <label>Time Format</label>
                    <md-select v-model="$v.timeFormat.$model" name="timeFormat">
                      <md-option
                        v-for="timeFormat in timeFormats"
                        :key="timeFormat"
                        :value="timeFormat"
                      >
                        {{ timeFormat }}
                      </md-option>
                    </md-select>
                    <span class="md-error" v-if="!$v.timeFormat.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.timeZone.$error }">
                    <label>Time Zone</label>
                    <md-select v-model="$v.timeZone.$model" name="timeFormat">
                      <md-option
                        v-for="timeZone in timeZones"
                        :key="timeZone.name"
                        :value="timeZone.name"
                      >
                        {{ timeZone.Description }}/{{timeZone.GMT}}
                      </md-option>
                    </md-select>
                    <span class="md-error" v-if="!$v.timeZone.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.industry.$error }">
                    <label>My Industry</label>
                    <md-select v-model="$v.industry.$model" name="timeFormat">
                      <md-option
                        v-for="industry in industries"
                        :key="industry.label"
                        :value="industry.label"
                      >
                        {{ industry.label }}
                      </md-option>
                    </md-select>
                    <span class="md-error" v-if="!$v.industry.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field :class="{ 'md-invalid': $v.myTitle.$error }">
                    <label>My Title</label>
                    <md-select v-model="$v.myTitle.$model">
                      <md-option
                        v-for="myTitle in myTitles"
                        :key="myTitle.label"
                        :value="myTitle.label"
                      >
                        {{ myTitle.label }}
                      </md-option>
                    </md-select>
                    <span class="md-error" v-if="!$v.myTitle.required">
                      This field is required.
                    </span>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-right">
                  <md-button type="submit" class="md-raised md-info mt-4">
                    Save Changes
                  </md-button>
                </div>
              </div>
            </md-card-content>
          </md-card>
        </div>
        <div class="md-layout-item md-medium-size-100 md-size-33">
          <md-card class="md-card-profile">
            <div class="md-card-avatar">
              <img
                class="img"
                :src="cardUserImage"
                @click="$refs.imgUpload.click()"
              />
              <div class="edit-user-avatar" @click="$refs.imgUpload.click()">
                <md-icon> edit </md-icon>
              </div>
              <input style="display: none" type="file" ref="imgUpload" />
            </div>

            <md-card-content>
              <h6 class="category text-gray">{{ this.myTitle }}</h6>
              <h4 class="card-title">Alec Thompson</h4>

              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <div class="section-title">My Company</div>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Company Name</label>
                    <md-input
                      v-model="companyName"
                      type="text"
                    ></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Company Address</label>
                    <md-input
                      v-model="companyAddress"
                      type="text"
                    ></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Company City</label>
                    <md-input
                      v-model="companyCity"
                      type="text"
                    ></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Company State</label>
                    <md-select
                      v-model="companyState"
                      name="companyState"
                    >
                      <md-option
                        v-for="state in states"
                        :key="state"
                        :value="state"
                      >
                        {{ state }}
                      </md-option>
                    </md-select>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Company Zip/Postal</label>
                    <md-input
                      v-model="companyZip"
                      type="number"
                    ></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Company Country</label>
                    <md-select
                      v-model="companyCountry"
                      name="companyCountry"
                    >
                      <md-option
                        v-for="country in countries"
                        :key="country.code"
                        :value="country.code"
                      >
                        {{ country.name }}
                      </md-option>
                    </md-select>
                  </md-field>
                </div>
              </div>
            </md-card-content>
          </md-card>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  countryList,
  localStates,
  localTimeZones,
} from "@/assets/common/location";
import { required, email } from "vuelidate/lib/validators";
import sha256 from "crypto-js/sha256";
export default {
  components: {},
  props: {
    cardUserImage: {
      type: String,
      default: "https://i.pravatar.cc/300",
    },
    buttonColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      password: null,
      disabled: null,
      emailAddress: null,
      lastname: null,
      firstname: null,
      billingFirstname: null,
      billingLastname: null,
      billingemailAddress: null,
      phoneNumber: null,
      address: null,
      city: null,
      stateProvince: null,
      country: null,
      code: null,
      defaultScreen: null,
      dateFormat: null,
      timeFormat: null,
      timeZone: null,
      defaultScreens: [
        "Search",
        "New Profile",
        "New Report",
        "My Profiles",
        "My Reports",
        "My Data",
        "Subscription Activity",
      ],
      dateFormats: ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY/MM/DD"],
      timeFormats: ["12h AM/PM", "24h"],
      industry: null,
      myTitle: null,
      countries: countryList,
      states: localStates,
      timeZones: localTimeZones,
      industries: null,
      companyName: null,
      companyAddress: null,
      companyCity: null,
      companyState: null,
      companyZip: null,
      companyCountry: null,
      myTitles: null,
    };
  },
  validations: {
    emailAddress: {
      required,
      email,
    },
    firstname: {
      required,
    },
    lastname: {
      required,
    },
    billingFirstname: {
      required,
    },
    billingLastname: {
      required,
    },
    billingemailAddress: {
      required,
      email,
    },
    phoneNumber: {
      required,
    },
    address: {
      required,
    },
    city: {
      required,
    },
    stateProvince: {
      required,
    },
    country: {
      required,
    },
    code: {
      required,
    },
    defaultScreen: {
      required,
    },
    dateFormat: {
      required,
    },
    timeFormat: {
      required,
    },
    timeZone: {
      required,
    },
    defaultScreens: {
      required,
    },
    dateFormats: {
      required,
    },
    timeFormats: {
      required,
    },
    industry: {
      required,
    },
    myTitle: {
      required,
    },
  },
  methods: {
    async saveAll() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const profileInfo = {
          accountFirst: this.firstname,
          accountLast: this.lastname,
          accountEmail: this.emailAddress,
          billingFirst: this.billingFirstname,
          billingLast: this.billingLastname,
          billingEmail: this.billingemailAddress,
          companyName: this.companyName,
          phoneNumber: this.phoneNumber,
          streetAddr: this.address,
          city: this.city,
          state: this.stateProvince,
          zip: this.code,
          country: this.country,
          prefDefaultScreen: this.defaultScreen,
          prefDateFormat: this.dateFormat,
          prefTimeFormat: this.timeFormat,
          prefTimezone: this.timeZone,
          prefIndustry: this.industry,
          prefTitle: this.myTitle,
          companyName: this.companyName,
          companyAddress: this.companyAddress,
          companyCity: this.companyCity,
          companyState: this.companyState,
          companyZip: this.companyZip,
          companyCountry: this.companyCountry,
        };
        if (this.password) {
          profileInfo.password = sha256(this.password).toString();
        }
        this.$store.dispatch("profile/save", profileInfo);
      }
    },
    getClass: function (headerColor) {
      return "md-card-header-" + headerColor + "";
    },
    childToParent: function (inputType) {
      this.$emit("changeParent", this[inputType]);
    },
    getAuth() {
      try {
        this.$store.dispatch("authenticateUser").then((res) => {
          if (res) {
            this.firstname = res.firstName;
            this.lastname = res.lastName;
            this.billingFirstname = res.firstNameBilling;
            this.billingLastname = res.lastNameBilling;
            this.emailAddress = res.email;
            this.billingemailAddress = res.emailBilling;
            this.phoneNumber = res.phoneNumber;
            this.address = res.streetAddr;
            this.city = res.city;
            this.stateProvince = res.state;
            this.code = res.zip;
            this.country = res.country;
            this.defaultScreen = res.preferences.defaultScreen ? res.preferences.defaultScreen : 'Search';
            this.dateFormat = res.preferences.dateFormat ? res.preferences.dateFormat: 'MM/DD/YYYY';
            this.timeFormat = res.preferences.timeFormat ? res.preferences.timeFormat: '12h AM/PM';
            this.timeZone = res.preferences.timezone ? res.preferences.timezone: 'EST';
            this.industry = res.preferences.industry;
            this.myTitle = res.preferences.title;
            this.companyName = res.companyName;
            this.companyAddress = res.companyAddress;
            this.companyCity = res.companyCity;
            this.companyState = res.companyState;
            this.companyZip = res.companyZip;
            this.companyCountry = res.companyCountry;
          }
        });
      } catch (e) {
        this.$store.dispatch("alerts/error", "We can't get data for this user");
      }
    },
    getGeneralInfo() {
      try {
        this.$store.dispatch("profile/getGenInfo").then((res) => {
          this.industries = res.job_functions;
          this.myTitles = res.title_codes;
        });
      } catch (e) {}
    },
  },
  mounted() {
    this.getAuth();
  },
  created() {
    this.getGeneralInfo();
  },
};
</script>
<style lang="scss">
.text-right {
  display: flex;
}
</style>
