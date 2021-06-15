# Category management 

Out of the box you will have an example of category management (for the cases in which you are developing a blog or a shop). To access this example, click the "**Examples/Category Management**" link in the left sidebar or add **/category** to the URL.
You can add and edit categories here, but you can only delete them if they are not attached to any items.

The store used for category functionality is found in `src\store\categories-module.vue`

You can find the compoments for category functionality in `src\pages\Dashboard\Examples\CategoryManagement` folder.

```
<md-table
    :value="usersTable"
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
        <md-table-cell md-label="Description" md-sort-by="description">{{item.description}}</md-table-cell>
        <md-table-cell md-label="Created At" md-sort-by="created_at">{{item.created_at}}</md-table-cell>
        <md-table-cell md-label="Actions">
        <md-button class="md-icon-button md-raised md-round md-info" @click="goToEdit(item.id)"
                    style="margin: .2rem;">
            <md-icon>edit</md-icon>
        </md-button>
        <md-button class="md-icon-button md-raised md-round md-danger" @click="destroy(item.id)"
                    style="margin: .2rem;">
            <md-icon>delete</md-icon>
        </md-button>
        </md-table-cell>
    </md-table-row>
</md-table>

```