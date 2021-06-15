<template>
  <form @submit.prevent="saveAll">
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
              <md-input v-model="$v.emailAddress.$model" type="text"></md-input>
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
              <md-input v-model="$v.firstname.$model" type="text"></md-input>
              <span class="md-error" v-if="!$v.firstname.required">
                This field is required.
              </span>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field :class="{ 'md-invalid': $v.lastname.$error }">
              <label>Account Last Name</label>
              <md-input v-model="$v.lastname.$model" type="text"></md-input>
              <span class="md-error" v-if="!$v.lastname.required">
                This field is required.
              </span>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-100">
            <div class="section-title">Billing Information</div>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field :class="{ 'md-invalid': $v.billingemailAddress.$error }">
              <label>Billing Email</label>
              <md-input
                v-model="$v.billingemailAddress.$model"
                type="email"
              ></md-input>
              <span class="md-error" v-if="!$v.billingemailAddress.required">
                This field is required.
              </span>
              <span class="md-error" v-if="!$v.billingemailAddress.email">
                You must input email.
              </span>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field :class="{ 'md-invalid': $v.billingFirstname.$error }">
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
            <md-field :class="{ 'md-invalid': $v.billingLastname.$error }">
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
              <md-input v-model="$v.phoneNumber.$model" type="text"></md-input>
              <span class="md-error" v-if="!$v.phoneNumber.required">
                This field is required.
              </span>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field :class="{ 'md-invalid': $v.address.$error }">
              <label>Street Adress</label>
              <md-input v-model="$v.address.$model" type="text"></md-input>
              <span class="md-error" v-if="!$v.address.required">
                This field is required.
              </span>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field :class="{ 'md-invalid': $v.city.$error }">
              <label>City</label>
              <md-input v-model="city" type="text"></md-input>
              <span class="md-error" v-if="!$v.city.required">
                This field is required.
              </span>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field :class="{ 'md-invalid': $v.stateProvince.$error }">
              <label>State/Province</label>
              <md-select v-model="stateProvince" name="states">
                <md-option v-for="state in states" :key="state" :value="state">
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
              <md-input v-model="code" type="number"></md-input>
              <span class="md-error" v-if="!$v.code.required">
                This field is required.
              </span>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field :class="{ 'md-invalid': $v.country.$error }">
              <label>Country</label>
              <!-- <md-input v-model="country" type="text"></md-input> -->
              <md-select v-model="country" name="country">
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
              <md-select v-model="defaultScreen" name="defaultScreen">
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
              <md-select v-model="dateFormat" name="dateFormat">
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
              <md-select v-model="timeFormat" name="timeFormat">
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
              <md-select v-model="timeZone" name="timeFormat">
                <md-option
                  v-for="timeZone in timeZones"
                  :key="timeZone.name"
                  :value="timeZone.name"
                >
                  {{ timeZone.name }}
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
              <md-select v-model="industry" name="timeFormat">
                <md-option
                  v-for="industry in industries"
                  :key="industry"
                  :value="industry"
                >
                  {{ industry }}
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
              <md-input
                v-model="myTitle"
                type="title"
                @keyup="childToParent('myTitle')"
              ></md-input>
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
  </form>
</template>
<script>
import {
  countryList,
  localStates,
  localTimeZones,
} from '@/assets/common/location';
import { required, email } from 'vuelidate/lib/validators';
import sha256 from 'crypto-js/sha256';
export default {
  name: 'edit-profile-form',
  props: {
    headerColor: {
      type: String,
      default: '',
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
      defaultScreens: ['Profile Search'],
      dateFormats: ['DD/MM/YYYY'],
      timeFormats: ['12h AM/PM'],
      industry: null,
      myTitle: null,
      countries: countryList,
      states: localStates,
      timeZones: localTimeZones,
      industries: ['Accounting'],
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
          companyName: 'test',
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
        };
        if (this.password) {
          profileInfo.password = sha256(this.password).toString();
        }
        this.$store.dispatch('profile/save', profileInfo);
      }
    },
    getClass: function(headerColor) {
      return 'md-card-header-' + headerColor + '';
    },
    childToParent: function(inputType) {
      this.$emit('changeParent', this[inputType]);
    },
    getAuth() {
      try {
        this.$store.dispatch("authenticateUser").then((res) => {
          if(res){
            this.firstname = res.firstName ?? null;
            this.lastname = res.lastName ?? null;
            this.billingFirstname = res.firstNameBilling ?? null;
            this.billingLastname = res.lastNameBilling ?? null;
            this.emailAddress = res.email ?? null;
            this.billingemailAddress = res.emailBilling ?? null;
            this.phoneNumber = res.phoneNumber ?? null;
            this.address = res.streetAddr ?? null;
            this.city = res.city ?? null;
            this.stateProvince = res.state ?? null;
            this.code = res.zip ?? null;
            this.country = res.country ?? null;
            this.defaultScreen = res.preferences.defaultScreen ?? ["Profile Search"];
            this.dateFormat = res.preferences.dateFormats ?? ["DD/MM/YYYY"];
            this.timeFormat = res.preferences.timeFormat ?? ["12h AM/PM"];
            this.timeZone = res.preferences.timezone ?? null;
            this.industry = res.preferences.industry ?? ["Accounting"]
            this.myTitle = res.preferences.title ?? null;
          }
        });
      } catch (e) {
        this.$store.dispatch("alerts/error", "Oops, something went wrong");
      }
    }
  },
  async mounted(){
    await this.getAuth();
  }
};
</script>
<style></style>
