<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-100"
      >
        <div class="navbar md-toolbar md-transparent md-elevation-4">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <h1 class="md-title">
                My Inputs
              </h1>
            </div>
            <div class="md-toolbar-section-end"></div>
          </div>
        </div>
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <div class="links" style="max-width:nullpx;">
              <div class="client-name-box">
                Client Name:
                <input
                  autocomplete="off"
                  spellcheck="false"
                  value=""
                  class=""
                  placeholder="Name"
                />
                <md-button class="md-raised md-info md-round mr-5"
                  >Save<md-icon class="ml-5">save_alt</md-icon></md-button
                >
              </div>
            </div>
          </div>
          <div class="md-toolbar-section-end">
            <div class="links client-button-box" style="max-width:nullpx;">
              <md-button class="md-raised md-info md-round mt-4 mr-5"
                >Import CSV<md-icon>publish</md-icon></md-button
              >
              <md-button class="md-raised md-info md-round mt-4"
                >Add Year<md-icon>add_to_queue</md-icon></md-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-33 md-xsmall-size-33 md-size-33"
      >
        <md-card class="input-card">
          <md-card-content>
            <collapse
              :collapse="['2017']"
              icon="keyboard_arrow_down"
              color-collapse="info"
            >
              <template slot="md-collapse-pane-1">
                <!-- <h3 slot="category" class="category text-left">
                  Starter
                </h3> -->
                <div slot="description" class="card-description">
                  <div class="input-section-label">
                    Income Statement
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Business Revenue*</label>
                      <md-input type="text" value="1,752,441"></md-input>
                    </md-field>
                    <md-field>
                      <label>Gross Margin</label>
                      <md-input type="text" value="729,190"></md-input>
                    </md-field>
                    <md-field>
                      <label>Officers Compensation</label>
                      <md-input type="text" value="98,334"></md-input>
                    </md-field>
                    <md-field>
                      <label>Pre-tax Net Profit</label>
                      <md-input type="text" value="144.430"></md-input>
                    </md-field>
                    <md-field>
                      <label>Depreciation-Other Non-Cash Expenses</label>
                      <md-input type="text" value="24,189"></md-input>
                    </md-field>
                    <md-field>
                      <label>Operating Expenses</label>
                      <md-input type="text" value="582,379"></md-input>
                    </md-field>
                    <md-field>
                      <label>Interest Expense</label>
                      <md-input type="text" value="6,902"></md-input>
                    </md-field>
                  </div>
                  <div class="input-section-label">
                    Balance Sheet
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Accounts Receivable</label>
                      <md-input type="text" value="96,277"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Current Assets</label>
                      <md-input type="text" value="216,496"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Assets</label>
                      <md-input type="text" value="343,598"></md-input>
                    </md-field>
                    <md-field>
                      <label>Accounts Payable</label>
                      <md-input type="text" value="55,898"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Current Liabilities</label>
                      <md-input type="text" value="118,480"></md-input>
                    </md-field>
                    <md-field>
                      <label>Long Term Liabilities</label>
                      <md-input type="text" value="76,001"></md-input>
                    </md-field>
                  </div>
                  <div class="input-section-label">
                    Employment Data
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Employment</label>
                      <md-input type="text" value="9"></md-input>
                    </md-field>
                    <md-field>
                      <label>Average Annual Wage</label>
                      <md-input type="text" value="44,100"></md-input>
                    </md-field>
                  </div>
                </div>
                <div slot="footer">
                  <div class="md-layout">
                    <div
                      class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
                    >
                      <md-button class="md-danger md-block">Delete</md-button>
                    </div>
                    <div
                      class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
                    >
                      <md-button class="md-info md-block">Save</md-button>
                    </div>
                  </div>
                </div>
              </template>
            </collapse>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-xsmall-size-33 md-size-33"
      >
        <md-card class="input-card">
          <md-card-content>
            <collapse
              :collapse="['2018']"
              icon="keyboard_arrow_down"
              color-collapse="info"
            >
              <template slot="md-collapse-pane-1">
                <!-- <h3 slot="category" class="category text-left">
                  Starter
                </h3> -->
                <div slot="description" class="card-description">
                  <div class="input-section-label">
                    Income Statement
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Business Revenue*</label>
                      <md-input type="text" value="1,752,441"></md-input>
                    </md-field>
                    <md-field>
                      <label>Gross Margin</label>
                      <md-input type="text" value="729,190"></md-input>
                    </md-field>
                    <md-field>
                      <label>Officers Compensation</label>
                      <md-input type="text" value="98,334"></md-input>
                    </md-field>
                    <md-field>
                      <label>Pre-tax Net Profit</label>
                      <md-input type="text" value="144.430"></md-input>
                    </md-field>
                    <md-field>
                      <label>Depreciation-Other Non-Cash Expenses</label>
                      <md-input type="text" value="24,189"></md-input>
                    </md-field>
                    <md-field>
                      <label>Operating Expenses</label>
                      <md-input type="text" value="582,379"></md-input>
                    </md-field>
                    <md-field>
                      <label>Interest Expense</label>
                      <md-input type="text" value="6,902"></md-input>
                    </md-field>
                  </div>
                  <div class="input-section-label">
                    Balance Sheet
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Accounts Receivable</label>
                      <md-input type="text" value="96,277"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Current Assets</label>
                      <md-input type="text" value="216,496"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Assets</label>
                      <md-input type="text" value="343,598"></md-input>
                    </md-field>
                    <md-field>
                      <label>Accounts Payable</label>
                      <md-input type="text" value="55,898"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Current Liabilities</label>
                      <md-input type="text" value="118,480"></md-input>
                    </md-field>
                    <md-field>
                      <label>Long Term Liabilities</label>
                      <md-input type="text" value="76,001"></md-input>
                    </md-field>
                  </div>
                  <div class="input-section-label">
                    Employment Data
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Employment</label>
                      <md-input type="text" value="9"></md-input>
                    </md-field>
                    <md-field>
                      <label>Average Annual Wage</label>
                      <md-input type="text" value="44,100"></md-input>
                    </md-field>
                  </div>
                </div>
                <div slot="footer">
                  <div class="md-layout">
                    <div
                      class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
                    >
                      <md-button class="md-danger md-block">Delete</md-button>
                    </div>
                    <div
                      class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
                    >
                      <md-button class="md-info md-block">Save</md-button>
                    </div>
                  </div>
                </div>
              </template>
            </collapse>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-xsmall-size-33 md-size-33"
      >
        <md-card class="input-card">
          <md-card-content>
            <collapse
              :collapse="['2019']"
              icon="keyboard_arrow_down"
              color-collapse="info"
            >
              <template slot="md-collapse-pane-1">
                <!-- <h3 slot="category" class="category text-left">
                  Starter
                </h3> -->
                <div slot="description" class="card-description">
                  <div class="input-section-label">
                    Income Statement
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Business Revenue*</label>
                      <md-input type="text" value="1,752,441"></md-input>
                    </md-field>
                    <md-field>
                      <label>Gross Margin</label>
                      <md-input type="text" value="729,190"></md-input>
                    </md-field>
                    <md-field>
                      <label>Officers Compensation</label>
                      <md-input type="text" value="98,334"></md-input>
                    </md-field>
                    <md-field>
                      <label>Pre-tax Net Profit</label>
                      <md-input type="text" value="144.430"></md-input>
                    </md-field>
                    <md-field>
                      <label>Depreciation-Other Non-Cash Expenses</label>
                      <md-input type="text" value="24,189"></md-input>
                    </md-field>
                    <md-field>
                      <label>Operating Expenses</label>
                      <md-input type="text" value="582,379"></md-input>
                    </md-field>
                    <md-field>
                      <label>Interest Expense</label>
                      <md-input type="text" value="6,902"></md-input>
                    </md-field>
                  </div>
                  <div class="input-section-label">
                    Balance Sheet
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Accounts Receivable</label>
                      <md-input type="text" value="96,277"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Current Assets</label>
                      <md-input type="text" value="216,496"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Assets</label>
                      <md-input type="text" value="343,598"></md-input>
                    </md-field>
                    <md-field>
                      <label>Accounts Payable</label>
                      <md-input type="text" value="55,898"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Current Liabilities</label>
                      <md-input type="text" value="118,480"></md-input>
                    </md-field>
                    <md-field>
                      <label>Long Term Liabilities</label>
                      <md-input type="text" value="76,001"></md-input>
                    </md-field>
                  </div>
                  <div class="input-section-label">
                    Employment Data
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Employment</label>
                      <md-input type="text" value="9"></md-input>
                    </md-field>
                    <md-field>
                      <label>Average Annual Wage</label>
                      <md-input type="text" value="44,100"></md-input>
                    </md-field>
                  </div>
                </div>
                <div slot="footer">
                  <div class="md-layout">
                    <div
                      class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
                    >
                      <md-button class="md-danger md-block">Delete</md-button>
                    </div>
                    <div
                      class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
                    >
                      <md-button class="md-info md-block">Save</md-button>
                    </div>
                  </div>
                </div>
              </template>
            </collapse>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-xsmall-size-33 md-size-33"
      >
        <md-card class="input-card">
          <md-card-content>
            <collapse
              :collapse="['2020']"
              icon="keyboard_arrow_down"
              color-collapse="info"
            >
              <template slot="md-collapse-pane-1">
                <!-- <h3 slot="category" class="category text-left">
                  Starter
                </h3> -->
                <div slot="description" class="card-description">
                  <div class="input-section-label">
                    Income Statement
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Business Revenue*</label>
                      <md-input type="text" value="1,752,441"></md-input>
                    </md-field>
                    <md-field>
                      <label>Gross Margin</label>
                      <md-input type="text" value="729,190"></md-input>
                    </md-field>
                    <md-field>
                      <label>Officers Compensation</label>
                      <md-input type="text" value="98,334"></md-input>
                    </md-field>
                    <md-field>
                      <label>Pre-tax Net Profit</label>
                      <md-input type="text" value="144.430"></md-input>
                    </md-field>
                    <md-field>
                      <label>Depreciation-Other Non-Cash Expenses</label>
                      <md-input type="text" value="24,189"></md-input>
                    </md-field>
                    <md-field>
                      <label>Operating Expenses</label>
                      <md-input type="text" value="582,379"></md-input>
                    </md-field>
                    <md-field>
                      <label>Interest Expense</label>
                      <md-input type="text" value="6,902"></md-input>
                    </md-field>
                  </div>
                  <div class="input-section-label">
                    Balance Sheet
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Accounts Receivable</label>
                      <md-input type="text" value="96,277"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Current Assets</label>
                      <md-input type="text" value="216,496"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Assets</label>
                      <md-input type="text" value="343,598"></md-input>
                    </md-field>
                    <md-field>
                      <label>Accounts Payable</label>
                      <md-input type="text" value="55,898"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Current Liabilities</label>
                      <md-input type="text" value="118,480"></md-input>
                    </md-field>
                    <md-field>
                      <label>Long Term Liabilities</label>
                      <md-input type="text" value="76,001"></md-input>
                    </md-field>
                  </div>
                  <div class="input-section-label">
                    Employment Data
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Employment</label>
                      <md-input type="text" value="9"></md-input>
                    </md-field>
                    <md-field>
                      <label>Average Annual Wage</label>
                      <md-input type="text" value="44,100"></md-input>
                    </md-field>
                  </div>
                </div>
                <div slot="footer">
                  <div class="md-layout">
                    <div
                      class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
                    >
                      <md-button class="md-danger md-block">Delete</md-button>
                    </div>
                    <div
                      class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
                    >
                      <md-button class="md-info md-block">Save</md-button>
                    </div>
                  </div>
                </div>
              </template>
            </collapse>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-xsmall-size-33 md-size-33"
      >
        <md-card class="input-card">
          <md-card-content>
            <collapse
              :collapse="['2021']"
              icon="keyboard_arrow_down"
              color-collapse="info"
            >
              <template slot="md-collapse-pane-1">
                <!-- <h3 slot="category" class="category text-left">
                  Starter
                </h3> -->
                <div slot="description" class="card-description">
                  <div class="input-section-label">
                    Income Statement
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Business Revenue*</label>
                      <md-input type="text" value="1,752,441"></md-input>
                    </md-field>
                    <md-field>
                      <label>Gross Margin</label>
                      <md-input type="text" value="729,190"></md-input>
                    </md-field>
                    <md-field>
                      <label>Officers Compensation</label>
                      <md-input type="text" value="98,334"></md-input>
                    </md-field>
                    <md-field>
                      <label>Pre-tax Net Profit</label>
                      <md-input type="text" value="144.430"></md-input>
                    </md-field>
                    <md-field>
                      <label>Depreciation-Other Non-Cash Expenses</label>
                      <md-input type="text" value="24,189"></md-input>
                    </md-field>
                    <md-field>
                      <label>Operating Expenses</label>
                      <md-input type="text" value="582,379"></md-input>
                    </md-field>
                    <md-field>
                      <label>Interest Expense</label>
                      <md-input type="text" value="6,902"></md-input>
                    </md-field>
                  </div>
                  <div class="input-section-label">
                    Balance Sheet
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Accounts Receivable</label>
                      <md-input type="text" value="96,277"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Current Assets</label>
                      <md-input type="text" value="216,496"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Assets</label>
                      <md-input type="text" value="343,598"></md-input>
                    </md-field>
                    <md-field>
                      <label>Accounts Payable</label>
                      <md-input type="text" value="55,898"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Current Liabilities</label>
                      <md-input type="text" value="118,480"></md-input>
                    </md-field>
                    <md-field>
                      <label>Long Term Liabilities</label>
                      <md-input type="text" value="76,001"></md-input>
                    </md-field>
                  </div>
                  <div class="input-section-label">
                    Employment Data
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Employment</label>
                      <md-input type="text" value="9"></md-input>
                    </md-field>
                    <md-field>
                      <label>Average Annual Wage</label>
                      <md-input type="text" value="44,100"></md-input>
                    </md-field>
                  </div>
                </div>
                <div slot="footer">
                  <div class="md-layout">
                    <div
                      class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
                    >
                      <md-button class="md-danger md-block">Delete</md-button>
                    </div>
                    <div
                      class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
                    >
                      <md-button class="md-info md-block">Save</md-button>
                    </div>
                  </div>
                </div>
              </template>
            </collapse>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-xsmall-size-33 md-size-33"
      >
        <md-card class="input-card">
          <md-card-content>
            <collapse
              :collapse="['2022']"
              icon="keyboard_arrow_down"
              color-collapse="info"
            >
              <template slot="md-collapse-pane-1">
                <!-- <h3 slot="category" class="category text-left">
                  Starter
                </h3> -->
                <div slot="description" class="card-description">
                  <div class="input-section-label">
                    Income Statement
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Business Revenue*</label>
                      <md-input type="text" value="1,752,441"></md-input>
                    </md-field>
                    <md-field>
                      <label>Gross Margin</label>
                      <md-input type="text" value="729,190"></md-input>
                    </md-field>
                    <md-field>
                      <label>Officers Compensation</label>
                      <md-input type="text" value="98,334"></md-input>
                    </md-field>
                    <md-field>
                      <label>Pre-tax Net Profit</label>
                      <md-input type="text" value="144.430"></md-input>
                    </md-field>
                    <md-field>
                      <label>Depreciation-Other Non-Cash Expenses</label>
                      <md-input type="text" value="24,189"></md-input>
                    </md-field>
                    <md-field>
                      <label>Operating Expenses</label>
                      <md-input type="text" value="582,379"></md-input>
                    </md-field>
                    <md-field>
                      <label>Interest Expense</label>
                      <md-input type="text" value="6,902"></md-input>
                    </md-field>
                  </div>
                  <div class="input-section-label">
                    Balance Sheet
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Accounts Receivable</label>
                      <md-input type="text" value="96,277"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Current Assets</label>
                      <md-input type="text" value="216,496"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Assets</label>
                      <md-input type="text" value="343,598"></md-input>
                    </md-field>
                    <md-field>
                      <label>Accounts Payable</label>
                      <md-input type="text" value="55,898"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Current Liabilities</label>
                      <md-input type="text" value="118,480"></md-input>
                    </md-field>
                    <md-field>
                      <label>Long Term Liabilities</label>
                      <md-input type="text" value="76,001"></md-input>
                    </md-field>
                  </div>
                  <div class="input-section-label">
                    Employment Data
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Employment</label>
                      <md-input type="text" value="9"></md-input>
                    </md-field>
                    <md-field>
                      <label>Average Annual Wage</label>
                      <md-input type="text" value="44,100"></md-input>
                    </md-field>
                  </div>
                </div>
                <div slot="footer">
                  <div class="md-layout">
                    <div
                      class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
                    >
                      <md-button class="md-danger md-block">Delete</md-button>
                    </div>
                    <div
                      class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
                    >
                      <md-button class="md-info md-block">Save</md-button>
                    </div>
                  </div>
                </div>
              </template>
            </collapse>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-xsmall-size-33 md-size-33"
      >
        <md-card class="input-card">
          <md-card-content>
            <collapse
              :collapse="['2023']"
              icon="keyboard_arrow_down"
              color-collapse="info"
            >
              <template slot="md-collapse-pane-1">
                <!-- <h3 slot="category" class="category text-left">
                  Starter
                </h3> -->
                <div slot="description" class="card-description">
                  <div class="input-section-label">
                    Income Statement
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Business Revenue*</label>
                      <md-input type="text" value="1,752,441"></md-input>
                    </md-field>
                    <md-field>
                      <label>Gross Margin</label>
                      <md-input type="text" value="729,190"></md-input>
                    </md-field>
                    <md-field>
                      <label>Officers Compensation</label>
                      <md-input type="text" value="98,334"></md-input>
                    </md-field>
                    <md-field>
                      <label>Pre-tax Net Profit</label>
                      <md-input type="text" value="144.430"></md-input>
                    </md-field>
                    <md-field>
                      <label>Depreciation-Other Non-Cash Expenses</label>
                      <md-input type="text" value="24,189"></md-input>
                    </md-field>
                    <md-field>
                      <label>Operating Expenses</label>
                      <md-input type="text" value="582,379"></md-input>
                    </md-field>
                    <md-field>
                      <label>Interest Expense</label>
                      <md-input type="text" value="6,902"></md-input>
                    </md-field>
                  </div>
                  <div class="input-section-label">
                    Balance Sheet
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Accounts Receivable</label>
                      <md-input type="text" value="96,277"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Current Assets</label>
                      <md-input type="text" value="216,496"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Assets</label>
                      <md-input type="text" value="343,598"></md-input>
                    </md-field>
                    <md-field>
                      <label>Accounts Payable</label>
                      <md-input type="text" value="55,898"></md-input>
                    </md-field>
                    <md-field>
                      <label>Total Current Liabilities</label>
                      <md-input type="text" value="118,480"></md-input>
                    </md-field>
                    <md-field>
                      <label>Long Term Liabilities</label>
                      <md-input type="text" value="76,001"></md-input>
                    </md-field>
                  </div>
                  <div class="input-section-label">
                    Employment Data
                  </div>
                  <div class="field-wrap">
                    <md-field>
                      <label>Employment</label>
                      <md-input type="text" value="9"></md-input>
                    </md-field>
                    <md-field>
                      <label>Average Annual Wage</label>
                      <md-input type="text" value="44,100"></md-input>
                    </md-field>
                  </div>
                </div>
                <div slot="footer">
                  <div class="md-layout">
                    <div
                      class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
                    >
                      <md-button class="md-danger md-block">Delete</md-button>
                    </div>
                    <div
                      class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
                    >
                      <md-button class="md-info md-block">Save</md-button>
                    </div>
                  </div>
                </div>
              </template>
            </collapse>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { Collapse } from '@/components';

export default {
  components: {
    Collapse,
  },
  data() {
    return {
      boolean: false,
    };
  },
  methods: {},
};
</script>
<style lang="scss"></style>
