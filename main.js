const storageKey = 'items';
var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: 'Новости' },
      { text: 'Свободные страницы' },
      { text: 'Афиша' },
      { text: 'Гости и эксперты' },
      { text: 'Красота и здоровье' },
      { text: 'Спецтемы' },
      { text: 'Опросы' },
      { text: 'Спавочники' },
      { text: 'Вакансии' },
      { text: 'Конкурсы' },
      { text: 'Пользователи' },
      { text: 'Фишки' },
      { text: 'Меню сайта' },
      { text: 'Актуальная информация' },
      { text: 'Настройки' }
    ],
    page: 'list',
    mode: 'add',
    items: {
      "First": {
        name: "First",
        checkbox: true,
        description: 'First description',
        label: 'First label',
        color: '#000111',
      },
      "Second": {
        name: "Second",
        checkbox: false,
        description: 'Second description',
        label: 'Second label',
        color: '#333000',
      },
    },
    formName: "",
    formCheckbox: "",
    formDescription: "",
    formLabel: "",
    formColor: "",
  },
  methods: {
    add: function () {
      this.page = 'form';
      this.mode = 'add';
      this.message = "form";
      this.formName = '';
      this.formCheckbox = '';
      this.formDescription = '';
      this.formLabel = '';
      this.formColor = '';
    },
    list: function () {
      this.page = 'list';
      this.message = "list";
    },
    addItem: function () {
      this.page = "list";
      this.items[this.formName] = {
        name: this.formName,
        checkbox: this.formCheckbox,
        description: this.formDescription,
        label: this.formLabel,
        color: this.formColor,
      };
      this.save();

    },
    editItem: function () {
      this.page = "list";
      this.items[this.formName] = {
        name: this.formName,
        checkbox: this.formCheckbox,
        description: this.formDescription,
        label: this.formLabel,
        color: this.formColor,
      };
      this.save();

    },
    
    selectItem: function (itemName) {
      this.page = "form";
      this.mode = "edit";
      var item = this.items[itemName];
      console.log(item);
      console.log(item.color);
      this.formName = item.name;
      this.formCheckbox = item.checkbox;
      this.formDescription = item.description;
      this.formLabel = item.label;
      this.formColor = item.color;
    },
    deleteItem: function (itemName) {
      delete this.items[itemName];
      this.page= 'list';
      this.$forceUpdate();
      this.items = this.items;
      this.save();
    },
    openMenu: function(){
      document.getElementsByClassName('menu-mob').style.display = "inline-block";
    },
    save: function(){
      var itemsJSON=JSON.stringify(this.items);
      console.log(itemsJSON);
      localStorage.setItem(storageKey, itemsJSON)
    },
    load:function(){
      var storageItems = localStorage.getItem(storageKey);
      if (storageItems!=null && storageItems!=""){
        this.items= JSON.parse(storageItems);
      }
  }
  },
});
app.load();
