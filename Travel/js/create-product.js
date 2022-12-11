

const form = new Vue({
    el: '.form',
    data: {
      errors: {
        name: '',
        price: '',
        description: '',
      },
      name: '',
      price: '',
      description: '',
    },
    methods:{
      checkForm: function (e) {
        this.validate();
        if (this.name && this.price && this.description) {
            alert("OK")
          return true;
        }
      },
      
      validate(){
        
        if(!this.name) {
            this.errors.name = 'Product name is required'
        }
        if(this.name) {
            this.errors.name = null
        }

        if(!this.price) {
            this.errors.price = 'Product price is required'
        }

        if(this.price) {
            this.errors.price = null
        }

        if(!this.description) {
            this.errors.description = 'Product description is required'
        }

        if(this.description) {
            this.errors.description = null
        }
      },
    }
   })
   
   
