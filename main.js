  var menu = new Vue({
    el: '#menu',
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
      ]
    }
  })

  var menu = new Vue({
    el: '#app',
    data: {
        page:'list',
        mode: 'add',
        items: {
          "Weatcher" : {name:"Weatcher"},
          "Wither" : {name:"Wither"},
          "Fire" : {name:"Fire"},
       },
        formName: "",
        formCheckbox: "",
        formDescription: "",
        formLabel: "",
        formColor: "",
    },
    methods: {
        add: function() {
            this.page = 'form';  
            this.mode = 'add';
            this.message="form";
            this.formName = '';
            this.formCheckbox = '';
            this.formDescription = '';
            this.formLabel = '';
            this.formColor = '';
        },
        list: function() {
            this.page= 'list';  
            this.message = "list";
        },
        addItem: function(){
        console.log("ok");
         this.page="list";
         this.mode="add";
         this.items[this.formName] = {
          name: this.formName,
          checkbox: this.formCheckbox,
          description: this.formDescription,
          label: this.formLabel,
          color: this.formColor,
         };

        },
        editItem:function(){
          this.page="list";
         this.mode="add";
         this.items[this.formName] = {
          checkbox: this.formCheckbox,
          description: this.formDescription,
          label: this.formLabel,
          color: this.formColor,
         };
        },
        selectItem: function(itemName){
          this.page="form";
          this.mode="edit";
          var item = this.items[itemName];
          console.log(item);
          console.log(item.color);
          this.formName = item.name;
          this.formCheckbox = item.checkbox;
          this.formDescription = item.description;
          this.formLabel = item.label;
          this.formColor = item.color;
        },
        deleteItem: function(itemName){
          this.page="list";
          delete this.items[itemName];
        }
},


})
