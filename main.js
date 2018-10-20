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
        items: [
            {name:"Weatcher", id:0},
            {name:"Wither", id:1},
            {name:"Fire", id:2},
        ],
        idCounter: 3,
        name: "",
        checkbox: "",
        description: "",
        label: "",
        color: "",
    },
    methods: {
        add: function() {
            this.page = 'form';  
            this.mode = 'add';
            this.message="form";
        },
        list: function() {
            this.page= 'list';  
            this.message = "list";
        },
        addItem: function(){
        console.log("ok");
        this.idCounter++;
         this.page="list";
         this.mode="add"
        this.items.push({
          name: this.name,
          checkbox: this.checkbox,
          description: this.description,
          label: this.label,
          color: this.color,
          id: this.idConuter,
        })        
        },
        editItem:function(){
          this.page="list";
         this.mode="add";
        },
        selectItem: function(itemId){
          this.page="form";
          this.mode="edit";
          console.log(itemId);

        }
},

})
