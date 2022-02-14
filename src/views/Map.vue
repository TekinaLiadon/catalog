<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <button type="button" class="btn btn-primary d-flex" @click="edit = true">
          Редактировать
        </button>
      </div>
    </div>
    <div class="row-cols-md-1 justify-content-md-center">
      <div class="col">
        <div id='editor' v-html="compiledMarkdown"></div>
      </div>
      <div class="col" v-if="edit">
        <textarea :value="input" @input="update"></textarea>
        <button type="button" class="btn btn-primary d-flex" @click="safeText(input)">
          Сохранить
        </button>
        <button type="button" class="btn btn-primary d-flex" @click="deleteText">
          Значение по умолчанию
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { marked } from 'marked'
export default {
  name: "Map",
  data() {
    return {
      input: localStorage.getItem('textMark') || '# hello',
      edit: false,
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300),
    safeText (textMark){
      localStorage.setItem('textMark', textMark)
    },
    deleteText (){
      localStorage.removeItem('textMark')
      this.input = '# hello'
    }
  }
}
</script>

<style  scoped>
#editor {
  margin: 0;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  padding-bottom: 1em;
}

textarea,
#editor {
  display: flex;
  width: 99%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  border: none;
  resize: none;
  outline: none;
}

textarea {
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>