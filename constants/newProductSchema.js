import mongoose from "mongoose";

const product=
{
    id:"",
    img:{url:"",detailurl:["","",""]},
    title:{shorttitle:"",longtitle:""},
    category:"",
    price:{mrp:0,cost:0,discount:0},
    quantity:1,
    details:{ 
             highlight:["","",""],
             descriptions:[{img:"",text:""},{img:"",text:""}],
             specification:{insidebox:"",
                            general:[{title:"",text:""},{title:"",text:""},{title:"",text:""}]
                            },
             moreinfo:{
                        genericname:"",
                        countryorgin:"",
                        manifactures:["",""],
                        importer:["",""],
                        packer:["",""]
                      }           
            },
    feedback:{
              ratting:0,
              reviews:[{question:"",answer:""},{question:"",answer:""}]
             }                    
};

const productSchema=  new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    img:{
        type:Object,
        required:true,
    },
    title:{
        type:Object,
        required:true
    },
    price:{
        type:Object,
        required:true
    },
    quantity:Number,
    details:{
        type:Object,
        required:true
    },
    feedback:{
        type:Object,
        required:true
    }

});

const Product = mongoose.model("Product", productSchema);
export default Product;