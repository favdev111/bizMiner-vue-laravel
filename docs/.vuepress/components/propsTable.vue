<template>
  <div>
    <table v-if="hasProps">
      <thead>
      <tr>
        <th>Prop Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(value, key) in parsedData.props" :key="key">
        <td v-if="key">
          {{key}}
        </td>
        <td>
          {{getType(value)}}
        </td>
        <td>
          {{getDefault(value)}}
        </td>
        <td>
          {{value.description}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "props-table",
    props: {
      componentName: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        parsedData: {}
      };
    },
    computed: {
      hasProps() {
        return (
          this.parsedData.props && Object.keys(this.parsedData.props).length > 0
        );
      }
    },
    methods: {
      getType(prop) {
        let propType = prop.type ? prop.type : prop;
        if (typeof propType === "object") {
          return propType.map(t => t.name).join(" | ");
        }
        return propType.name || "N/A";
      },
      getDefault(prop) {
        if(!prop.default){
          return 'N/A';
        }
        if(typeof prop.default === 'function') {
          return prop.default();
        }
        return prop.default;
      }
    },
    mounted() {
      try {
        let rawComponent =
          this.$docs.find(c => c.name === this.componentName) || {};
        if (rawComponent) {
          this.parsedData = rawComponent || {};
        }
      } catch (e) {
        console.warn(e);
      }
    }
  };
</script>

<style>
</style>
