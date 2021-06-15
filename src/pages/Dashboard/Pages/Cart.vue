<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-100">
            <div class="md-toolbar-section-start your-order">
              <div class="md-layout page-wrapper">
                  <div class="md-layout-item privacy-policy md-size-100">
                      <h1 class="md-display-3">Your Order</h1>
                  </div>
              </div>
            </div>
      </div>
    </div>

    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <md-card class="shopping-cart">
          <md-card-header class="md-card-header-icon shopping-cart-title">
            <h4 class="md-title">Shopping Cart</h4>
            <md-icon>shopping_cart</md-icon>
          </md-card-header>
          <md-card-content>
            <md-table v-model="shoppingCartTable" class="table-shopping">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Product" class="tabel-product">
                  <div class="img-container">
                    <img :src="item.image" alt="products" />
                  </div>
                </md-table-cell>
                <md-table-cell md-label="" class="td-name product">
                  <!-- <a href="#jacket">{{ item.product }}</a> -->
                  {{ item.product }}
                  <br />
                  <small class="item-category">{{ item.category }}</small>
                </md-table-cell>
                <md-table-cell md-label="Price" class="price">
                  <small>$</small>{{ item.price }}
                </md-table-cell>
                <!-- <md-table-cell md-label="Qty" class="td-number">
                  {{ item.qty }}
                  <div class="md-group">
                    <md-button
                      class="md-round md-info md-just-icon"
                      @click.native="increaseQuantity(item)"
                      ><md-icon>add</md-icon></md-button
                    >
                    <md-button
                      class="md-round md-info md-just-icon"
                      @click.native="decreaseQuantity(item)"
                      ><md-icon>remove</md-icon></md-button
                    >
                  </div>
                </md-table-cell> -->
                <!-- <md-table-cell md-label="Amount" class="td-number">
                  <small>$</small>{{ item.amount }}
                </md-table-cell> -->
                <md-table-cell class="delete">
                  <i class="md-icon md-icon-font md-theme-default">delete_forever</i>
                </md-table-cell>
              </md-table-row>
            </md-table>
            <div class="md-layout-item md-size-100">
              <div class="table table-stats">
                <div class="td-price">
                  <div class="td-total text-right">
                    <span class="total-label md-display-1 total">Total</span> ${{ shoppingTotal }}
                  </div>
                </div>
              </div>
              <div class="md-toolbar-row">
                <div class="md-toolbar-section-start">
                  <div class="save-for-later">
                    <md-field>
                      <label>Save Cart</label>
                      <md-input v-model="saveCartEmail" type="text"></md-input>
                      <md-icon class="save-for-later-icon">save</md-icon>
                    </md-field>
                  </div>
                </div>
                <div class="md-toolbar-section-end">
                  <div class="text-right">
                    <md-button class="md-info md-round">
                      Checkout
                      <md-icon>keyboard_arrow_right</md-icon>
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      saveCartEmail: 'danny@bizminer.com',
      shoppingCartTable: [
        {
          image: process.env.VUE_APP_BASE_URL + '/img/image_placeholder.jpg',
          product: 'Industry Market Profile',
          category:
            '[238220] Plumbing, Heating, and Air-Conditioning \n Contractors Area: Birmingham, AL Metro Area \n Release Date: Nov-2020 \n Data applied from: 695 establishments',
          price: 549,
          qty: 1,
          amount: 549,
        },
        {
          image: process.env.VUE_APP_BASE_URL + '/img/image_placeholder.jpg',
          product: 'Industry Market Profile',
          category:
            '[238220] Plumbing, Heating, and Air-Conditioning \n Contractors Area: Birmingham, AL Metro Area \n Release Date: Nov-2020 \n Data applied from: 695 establishments',
          price: 550,
          qty: 2,
          amount: 550,
        },
      ],
    };
  },
  computed: {
    shoppingTotal() {
      return this.shoppingCartTable.reduce((accumulator, current) => {
        return accumulator + current.amount;
      }, 0);
    },
  },
  methods: {
    getClass: function(item, id) {
      let classes = '';
      switch (item) {
        case 'person': {
          classes = 'md-info';
          break;
        }
        case 'edit': {
          classes = 'md-success';
          break;
        }
        case 'close': {
          classes = 'md-danger';
          break;
        }
      }
      switch (id) {
        case 1:
        case 5: {
          break;
        }
        case 2:
        case 4: {
          classes = `${classes} md-round`;
          break;
        }
        case 3: {
          classes = `${classes} md-simple`;
          break;
        }
      }
      return classes;
    },
    getAlignClasses: ({ id }) => ({
      'text-right': id,
    }),
    increaseQuantity(item) {
      item.qty++;
      this.computeAmount(item);
    },
    decreaseQuantity(item) {
      if (item.qty > 1) {
        item.qty--;
        this.computeAmount(item);
      }
    },
    computeAmount(item) {
      item.amount = item.qty * item.price;
    },
  },
};
</script>

<style lang="scss">

  .privacy-policy {
    h1 {
      font-weight: 500 !important;
      font-size: 34px !important;
      color: rgba(0, 0, 0, 0.87) !important;
    }
  }

  .table-shopping  {
      .md-table-head-label {
        display: flex;
        justify-content: flex-end;
        padding: 0;
      }

    .md-table-head-label {
      color: #0E3D6E;
      width: 100%;
      font-weight: 500;
      font-size: 18px;
    }

    .md-table-row {
      border-bottom: 1px solid #A9A9A9 !important;
    }

    tr {
      td {
        padding-left: 15px !important;
      }
      .price {
          .md-table-cell-container {
            text-align: end !important;
          }
      }
      td:nth-child(1){
        max-width: 80px !important;
      }
      th:nth-child(1) {
        .md-table-head-label {
          justify-content: start !important;
          display: flex;
          padding-left: 15px !important;
        }
      }
    }

    tr {
      td.delete {
        .md-table-cell-container {
          i {
          color: #C65050!important;
          }
        }
      }
    }

    .td-number {
      display: flex !important;
      justify-content: flex-end !important;
    }

    .your-order {
      h1 {
        color: rgba(0, 0, 0, 0.87) !important;
        letter-spacing: 0.25px;
        font-weight: 500;
        margin-bottom: 66px;
      }
    }
  }
  .shopping-cart {
    margin-top: 0 !important;
    .md-card-content {
      padding-right: 0;
      padding-left: 0;
    }

    .shopping-cart-title {
        display: flex;
        margin: 8px 0 63px 25px;
      h4 {
        font-weight: 500;
        color: #5E6366;
        font-size: 20px;
      }
      i {
        margin-right: initial;
        margin-right: 18px;
      }
    }

    .table-shopping {
      .product {
        font-size: 16px !important;
        padding: 10px 0 18px 0px !important;
      }
    }
  }

  .td-total {
    align-items: center;
    margin-bottom: 210px;

    .total {
      color: #0E3D6E;
    }
  }

</style>
