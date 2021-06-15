# Item management

Item management is the most advanced example included in the Pro theme, because every item has a picture, belongs to a category and has multiple tags. To access this example click the "**Examples/Item Management**" link in the left sidebar or add **/item** to the URL.
Here you can manage the items. A list of items will appear once you start adding them (to access the add page click "**Add item**").
On the add page, besides the Name and Description fields (which are present in most of the CRUD examples) you can see a category dropdown, which contains the categories you added, a file input and a tag multi select. If you did not add any categories or tags, please go to the corresponding sections (category management, tag management) and add some.  

The store used for roles functionality is found in `src\store\items-module.vue`

You can find the compoments for items functionality in `src\pages\Dashboard\Examples\ItemManagement` folder.

### List Items
```
<md-table
    :value="table"
    :md-sort.sync="sortation.field"
    :md-sort-order.sync="sortation.order"
    :md-sort-fn="customSort"
    class="paginated-table table-striped table-hover"
    >
    <md-table-toolbar>

        <md-field>
        <label>Per page</label>
        <md-select v-model="pagination.perPage" name="pages">
            <md-option
            v-for="item in pagination.perPageOptions"
            :key="item"
            :label="item"
            :value="item"
            >
            {{ item }}
            </md-option>
        </md-select>
        </md-field>

        <md-field>
        <md-input
            v-model="query"
            type="search"
            class="mb-3"
            clearable
            style="width: 200px"
            placeholder="Search ..."
        >
        </md-input>
        </md-field>

    </md-table-toolbar>

    <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name" md-sort-by="name">{{item.name}}</md-table-cell>
        <md-table-cell md-label="Category" md-sort-by="category.name">{{item.category.name}}</md-table-cell>
        <md-table-cell md-label="Picture">
            <md-avatar>
            <img :src="item.image" alt="avatar">
            </md-avatar>
        </md-table-cell>
        <md-table-cell md-label="Tags" md-sort-by="tags.name">
        <span v-for="(tag, index) in item.tags" :key="'tag' + index" class="badge badge-default" :style="{backgroundColor: tag.color, margin: '.1rem'}">
            {{tag.name}}
        </span>
        </md-table-cell>
        <md-table-cell md-label="Created At" md-sort-by="created_at">{{item.created_at}}</md-table-cell>
        <md-table-cell md-label="Actions">
        <md-button class="md-icon-button md-raised md-round md-info" @click="goToEdit(item.id)" style="margin: .2rem;">
            <md-icon>edit</md-icon>
        </md-button>
        <md-button class="md-icon-button md-raised md-round md-danger" @click="destroy(item.id)" style="margin: .2rem;">
            <md-icon>delete</md-icon>
        </md-button>
        </md-table-cell>
    </md-table-row>
</md-table>
```

### Add/Edit Item
```
<md-card-content>

    <div class="text-right">
    <md-button @click="goBack" class="md-primary md-dense">
        Back to List
    </md-button>
    </div>

    <div class="md-layout">
    <label class="md-layout-item md-size-25 md-form-label">
        Profile Photo
    </label>
    <div class="md-layout-item">
        <div class="file-input">
        <div v-if="image">
            <div class="image-container">
            <img :src="image"/>
            </div>
        </div>
        <div class="image-container" v-else>
            <img :src="default_image"/>
        </div>
        <div class="button-container">
            <md-button class="md-danger md-round" @click="removeImage" v-if="image">
            <i class="fa fa-times"/>
            Remove
            </md-button>
            <md-button class="md-success md-fileinput">
            <template v-if="!image">Select image</template>
            <template v-else>Change</template>
            <input type="file" @change="onFileChange"/>
            </md-button>
        </div>
        </div>
    </div>
    </div>

    <div class="md-layout">
    <label class="md-layout-item md-size-25 md-form-label">
        Name
    </label>
    <div class="md-layout-item">
        <md-field class="md-invalid">
        <md-input v-model="item.name"/>
        <validation-error :errors="apiValidationErrors.name"/>
        </md-field>
    </div>
    </div>

    <div class="md-layout">
    <label class="md-layout-item md-size-25 md-form-label">
        Description
    </label>
    <div class="md-layout-item">
        <md-field class="md-invalid">
        <md-textarea v-model="item.description"/>
        <validation-error :errors="apiValidationErrors.excerpt"/>
        </md-field>
    </div>
    </div>

    <div class="md-layout">
    <label class="md-layout-item md-size-25 md-form-label">
        Category
    </label>
    <div class="md-layout-item">
        <md-field>
        <label>Select ...</label>
        <md-select v-model="item.category.id" name="categories">
            <md-option v-for="category in available_categories"
                        :key="category.id"
                        :value="category.id"
            >
            {{ category.name }}
            </md-option>
        </md-select>
        </md-field>
    </div>
    </div>

    <div class="md-layout">
    <label class="md-layout-item md-size-25 md-form-label">
        Tags
    </label>
    <div class="md-layout-item">
        <md-field>
        <label>Select ...</label>
        <md-select v-model="tags" @md-selected="updateTags" name="tags" multiple>
            <md-option v-for="tag in available_tags"
                        :key="'tag_' + tag.id"
                        :value="tag.id"
            >
            {{ tag.name }}
            </md-option>
        </md-select>
        </md-field>
    </div>
    </div>

    <div class="md-layout">
    <label class="md-layout-item md-size-25 md-form-label">
        Status
    </label>
    <div class="md-layout-item">
        <md-field>
        <md-radio v-model="item.status" value="published">Published</md-radio>
        <md-radio v-model="item.status" value="draft">Draft</md-radio>
        <md-radio v-model="item.status" value="archive">Archive</md-radio>
        </md-field>
    </div>
    </div>

    <div class="md-layout">
    <label class="md-layout-item md-size-25 md-form-label">
        Show on homepage?
    </label>
    <div class="md-layout-item">
        <md-field>
        <md-switch v-model="item.is_on_homepage"/>
        </md-field>
    </div>
    </div>

    <div class="md-layout">
    <label class="md-layout-item md-size-25 md-form-label">
        Date
    </label>
    <div class="md-layout-item">
        <md-datepicker v-model="date_at" :class="{'md-invalid': !!apiValidationErrors.date_at}">
        <label>Select date ...</label>
        <validation-error :errors="apiValidationErrors.date_at"/>
        </md-datepicker>
    </div>
    </div>

</md-card-content>
```