<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>category</md-icon>
          </div>
          <h4 class="title">Edit Item</h4>
        </md-card-header>

        <form @submit.prevent="update">
          <md-card-content>
            <div class="text-right">
              <md-button @click="goBack" class="md-primary md-dense">
                Back to List
              </md-button>
            </div>

            <div class="md-layout spacing">
              <label class="md-layout-item md-size-25 md-form-label">
                Profile Photo
              </label>
              <div class="md-layout-item">
                <div class="file-input">
                  <div v-if="image">
                    <div class="image-container">
                      <img :src="image" />
                    </div>
                  </div>
                  <div class="image-container" v-else>
                    <img :src="default_image" />
                  </div>
                  <div class="button-container">
                    <md-button
                      class="md-danger md-round"
                      @click="removeImage"
                      v-if="image"
                    >
                      <i class="fa fa-times" />
                      Remove
                    </md-button>
                    <md-button class="md-success md-fileinput">
                      <template v-if="!image">Select image</template>
                      <template v-else>Change</template>
                      <input type="file" @change="onFileChange" />
                    </md-button>
                  </div>
                </div>
                <md-field class="md-invalid">
                  <validation-error :errors="apiValidationErrors.attachment" />
                </md-field>
              </div>
            </div>

            <div class="md-layout spacing">
              <label class="md-layout-item md-size-25 md-form-label">
                Name
              </label>
              <div class="md-layout-item">
                <md-field class="md-invalid">
                  <md-input v-model="item.name" />
                  <validation-error :errors="apiValidationErrors.name" />
                </md-field>
              </div>
            </div>

            <div class="md-layout spacing">
              <label class="md-layout-item md-size-25 md-form-label">
                Description
              </label>
              <div class="md-layout-item">
                <ckeditor
                  :editor="editor"
                  v-model="item.description"
                  :config="editorConfig"
                ></ckeditor>
                <validation-error :errors="apiValidationErrors.description" />
              </div>
            </div>

            <div class="md-layout spacing">
              <label class="md-layout-item md-size-25 md-form-label">
                Category
              </label>
              <div class="md-layout-item">
                <md-field class="md-invalid">
                  <label>Select ...</label>
                  <md-select v-model="item.category.id" name="categories">
                    <md-option
                      v-for="category in available_categories"
                      :key="category.id"
                      :value="category.id"
                    >
                      {{ category.name }}
                    </md-option>
                  </md-select>
                </md-field>
              </div>
            </div>

            <div class="md-layout spacing">
              <label class="md-layout-item md-size-25 md-form-label">
                Tags
              </label>
              <div class="md-layout-item">
                <md-field>
                  <label>Select ...</label>
                  <md-select
                    v-model="tags"
                    @md-selected="updateTags"
                    name="tags"
                    multiple
                  >
                    <md-option
                      v-for="tag in available_tags"
                      :key="'tag_' + tag.id"
                      :value="tag.id"
                    >
                      {{ tag.name }}
                    </md-option>
                  </md-select>
                </md-field>
              </div>
            </div>

            <div class="md-layout spacing">
              <label class="md-layout-item md-size-25 md-form-label">
                Status
              </label>
              <div class="md-layout-item">
                <md-radio v-model="item.status" value="published"
                  >Published</md-radio
                >
                <md-radio v-model="item.status" value="draft">Draft</md-radio>
                <md-radio v-model="item.status" value="archive"
                  >Archive</md-radio
                >
              </div>
            </div>

            <div class="md-layout spacing">
              <label class="md-layout-item md-size-25 md-form-label">
                Show on homepage?
              </label>
              <div class="md-layout-item">
                <md-switch v-model="item.is_on_homepage" />
              </div>
            </div>

            <div class="md-layout">
              <label class="md-layout-item md-size-25 md-form-label">
                Date
              </label>
              <div class="md-layout-item">
                <md-datepicker
                  v-model="item.date_at"
                  :md-model-type="String"
                  :class="{ 'md-invalid': !!apiValidationErrors.date_at }"
                >
                  <label>Select date ...</label>
                  <validation-error :errors="apiValidationErrors.date_at" />
                </md-datepicker>
              </div>
            </div>
          </md-card-content>

          <md-card-actions md-alignment="right">
            <md-button type="submit" class="md-success">Update Item</md-button>
          </md-card-actions>
        </form>
      </md-card>
    </div>
  </div>
</template>

<script>
import { ValidationError } from "@/components";
import formMixin from "@/mixins/form-mixin";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";

export default {
  components: { ValidationError, ckeditor: CKEditor.component },

  mixins: [formMixin],

  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "bulletedList",
          "numberedList",
          "blockQuote",
          "Outdent",
          "Indent",
          "TextColor",
          "BGColor",
        ],
      },
      item: {
        type: "items",
        name: null,
        description: null,
        excerpt: null,
        status: "published",
        category: {
          id: null,
          type: "categories",
        },
        tags: [],
        is_on_homepage: false,
        date_at: null,
        relationshipNames: ["category", "tags"],
      },

      available_categories: [],
      available_tags: [],

      image: "",
      default_image: process.env.VUE_APP_BASE_URL + "/img/placeholder.jpg",

      tags: [],
    };
  },

  created() {
    this.get();
    this.getCategories();
    this.getTags();
  },

  methods: {
    async get() {
      try {
        const id = this.$route.params.id;
        await this.$store.dispatch("items/get", id);
        this.item = this.$store.getters["items/item"];

        this.item.tags.forEach((tag) => {
          this.tags.push(tag.id);
        });
      } catch (e) {
        await this.$store.dispatch(
          "alerts/error",
          "Oops, something went wrong!"
        );
      }
    },

    async update() {
      if (this.$isDemo == 1 && ["1", "2"].includes(this.$route.params.id)) {
        await this.$store.dispatch(
          "alerts/error",
          "You are not allowed to change data of default items."
        );
        return;
      }
      try {
        this.resetApiValidation();
        if (this.file) {
          await this.$store.dispatch("items/upload", {
            item: this.item,
            image: this.file,
          });
          this.item.image = await this.$store.getters["items/url"];
        }
        await this.$store.dispatch("items/update", this.item);
        await this.$store.dispatch(
          "alerts/success",
          "Item updated successfully."
        );
        this.goBack();
      } catch (e) {
        if (e.response.data.errors[0]) {
          await this.$store.dispatch(
            "alerts/error",
            e.response.data.errors[0].title
          );
          this.setApiValidation(e.response.data.errors);
        } else {
          await this.$store.dispatch(
            "alerts/error",
            "Oops, something went wrong!"
          );
          this.setApiValidation(e.response.data.errors);
        }
      }
    },

    updateTags() {
      this.item.tags = [];
      this.tags.forEach((tag) => {
        this.item.tags.push({
          id: tag,
          type: "tags",
        });
      });
    },

    getCategories() {
      this.$store.dispatch("categories/list").then(() => {
        this.available_categories = this.$store.getters["categories/dropdown"];
      });
    },

    getTags() {
      this.$store.dispatch("tags/list").then(() => {
        this.available_tags = this.$store.getters["tags/dropdown"];
      });
    },

    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },

    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
        this.file = file;
      };
      reader.readAsDataURL(file);
    },

    removeImage() {
      this.image = null;
    },

    goBack() {
      this.$router.push({ name: "List Items" });
    },
  },
};
</script>

<style lang="scss" scoped>
.spacing {
  padding-bottom: 1rem;
}

.md-inline-checkboxes {
  display: inline-flex;

  .md-checkbox {
    margin-top: 15px !important;
  }
}

.md-checkbox,
.md-radio {
  margin-top: 15px;
  margin-bottom: 0.5rem;
}

.md-checkbox,
.md-radio {
  display: flex;
}

.md-radio .md-radio-container {
  margin-left: 5px;
  position: relative;
  left: -3px;
}

.md-form-label + .md-layout-item .md-checkbox:not(:first-child),
.md-form-label + .md-layout-item + .md-layout-item .md-radio:not(:first-child),
.md-form-label + .md-layout-item .md-radio {
  margin-top: 0;
}

.md-field.md-has-textarea:not(.md-autogrow) .md-textarea {
  padding-left: 0;
  padding-top: 10px;
  min-height: 150px;
}

.md-field:after,
.md-field:before {
  bottom: 10px !important;
}
</style>
