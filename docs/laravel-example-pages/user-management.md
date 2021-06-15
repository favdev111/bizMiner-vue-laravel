# User management

The theme comes with an out of the box user management option. To access this option ,click the "**Examples/User Management**" link in the left sidebar or add **/user** to the URL.
The first thing you will see is a list of existing users. You can add new ones by clicking the "**Add user**" button (above the table on the right). On the Add user page, you will find a form which allows you to fill out the user`s name, email, role and password.

The store used for role functionality is found in `src\store\user-module.vue`

You can find the compoments for role functionality in `src\pages\Dashboard\Examples\UserManagement` folder.

Once you add more users, the list will grow and for every user you will have edit and delete options (access these options by clicking the three dotted menu that appears at the end of every row).

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
        <md-table-cell md-label="Avatar">
        <md-avatar>
            <img :src="item.profile_image" alt="avatar">
        </md-avatar>
        </md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{item.name}}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{item.email}}</md-table-cell>
        <md-table-cell md-label="Role" md-sort-by="roles.name">{{item.roles[0].name}}</md-table-cell>
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