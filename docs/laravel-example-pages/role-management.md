# Role management

The Pro theme allows you to add user roles. By default, the theme comes with **Admin**, **Creator** and **Member** roles. To access the role management example click the "**Examples/Role Management**" link in the left sidebar or add **/role** to the URL. Here you can add/edit new roles.
To add a new role, click the "**Add role**" button. To edit an existing role, click the dotted menu (available on every table row) and then click "**Edit**". In both cases, you will be directed to a form which allows you to modify the name and description of a role.

The store used for role functionality is found in `src\store\role-module.vue`

You can find the compoments for role functionality in `src\pages\Dashboard\Examples\RoleManagement` folder.

### List page

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

### Add/edit role
```
<div class="md-layout">
    <label class="md-layout-item md-size-25 md-form-label">
        Name
    </label>
    <div class="md-layout-item">
        <md-field class="md-invalid">
        <md-input v-model="role.name"/>
        <validation-error :errors="apiValidationErrors.name"/>
        </md-field>
    </div>
</div>
```