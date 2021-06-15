<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" @click="$refs.imgUpload.click()" />
      <div class="edit-user-avatar" @click="$refs.imgUpload.click()">
        <md-icon> edit </md-icon>
      </div>
      <input style="display: none" type="file" ref="imgUpload" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">{{ myTitle }}</h6>
      <h4 class="card-title">Alec Thompson</h4>

      <div class="md-layout">
        <div class="md-layout-item md-small-size-100 md-size-100">
          <div class="section-title">My Company</div>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>Company Name</label>
            <md-input v-model="companyName" type="text"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>Street Adress</label>
            <md-input v-model="address" type="text"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>City</label>
            <md-input v-model="city" type="text"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>State/Province</label>
            <md-select v-model="stateProvince" name="states">
              <md-option v-for="state in states" :key="state" :value="state">
                {{ state }}
              </md-option>
            </md-select>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>Zip/Postal Code</label>
            <md-input v-model="code" type="number"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
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
          </md-field>
        </div>
      </div>
      <!-- <p class="card-description">
        Don't be scared of the truth because we need to restart the human
        foundation in truth And I love you like Kanye loves Kanye I love Rick
        Owens’ bed design but the back is...
      </p> -->
      <!-- <md-button class="md-round" :class="getColorButton(buttonColor)"
        >Follow</md-button
      > -->
    </md-card-content>
  </md-card>
</template>
<script>
import { countryList, localStates } from "@/assets/common/location";

export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: "https://i.pravatar.cc/300",
    },
    buttonColor: {
      type: String,
      default: "",
    },
    myTitle: String,
  },
  data() {
    return {
      companyName: null,
      address: null,
      city: null,
      stateProvince: null,
      country: null,
      code: null,
      states: localStates,
      countries: countryList,
    };
  },
  methods: {
    getColorButton: function (buttonColor) {
      return "md-" + buttonColor + "";
    },
  },
};
</script>
<style></style>
