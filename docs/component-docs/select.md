# Select

To use the custom select you don't need to import component, you can easily use it like this:

<script>
  module.exports = {
    data () {
      return {
        movie: 'godfather',
        selectedMovies: [],
      }
    }
  }
</script>

## Simple Select

::: demo
```html
<template>
  <md-field>
    <label for="movie">Movie</label>
    <md-select v-model="movie" name="movie" id="movie">
      <md-option value="fight-club">Fight Club</md-option>
      <md-option value="godfather">Godfather</md-option>
      <md-option value="godfather-ii">Godfather II</md-option>
      <md-option value="godfather-iii">Godfather III</md-option>
      <md-option value="godfellas">Godfellas</md-option>
      <md-option value="pulp-fiction">Pulp Fiction</md-option>
      <md-option value="scarface">Scarface</md-option>
    </md-select>
  </md-field>
</template>

<script>
  export default {
    data () {
      return {
        movie: 'godfather'
      }
    }
  }
</script>

```
:::

## Multiple Select

::: demo
```html
<template>
  <md-field>
    <label for="movies">Movies</label>
    <md-select v-model="selectedMovies" name="movies" id="movies" multiple>
      <md-option value="fight-club">Fight Club</md-option>
      <md-option value="godfather">Godfather</md-option>
      <md-option value="godfather-ii">Godfather II</md-option>
      <md-option value="godfather-iii">Godfather III</md-option>
      <md-option value="godfellas">Godfellas</md-option>
      <md-option value="pulp-fiction">Pulp Fiction</md-option>
      <md-option value="scarface">Scarface</md-option>
    </md-select>
  </md-field>
</template>

<script>
  export default {
    data () {
      return {
        selectedMovies: []
      }
    }
  }
</script>

```
:::

> Note: For more details about the all inputs that you can use please see the **Select** section from [vuematerial.io](https://vuematerial.io/components/select)
