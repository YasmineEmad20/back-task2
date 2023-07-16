const data5 = require ("./data5")
const yargs=require('yargs')
//Add  
yargs.command ({
     command : "add" ,
     describe : "to add an item",
     builder : {
        fname : {
           describe : "this is the first name in add command ",
           demandOption: true,
           type : "string",
        },
        lname : {
          describe : "this is the last name in add command ",
          demandOption: true,
          type : "string",
        }
     },
     handler :(x) => {
  data5.addperson( x.fname , x.lname , x.age , x.city, x.id)
     }
  })
 yargs.parse()

//Delete
 yargs.command ({
  command : "delete" ,
  describe : "to deleted an item",
  handler :(x) => {
   data5.deletedData (x.id)
  }
})
console.log(yargs.argv)

//Read
yargs.command ({
    command : "read",
    describe : "Read data" ,
    builder : {
         id : {
             describe : "this is id desc in read command ",
             demandOption : true ,
             type : "string"
         }
    },
    handler : (x) => {
      data5.readData(x.id)
    }
  })
  console.log(yargs.argv)

//List
  yargs.command ({
   command : "list",
    describe : "list data",
     handler : ()=> {
       data5.listData()
     }
  })
  console.log(yargs.argv)