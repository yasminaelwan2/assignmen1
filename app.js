const yargs = require('yargs')
const students = require('./students')
//add
yargs.command({
    command:'add',
    describe:'Add students',
    builder:{
        name:{
            describe:'this is  name description in add command',
            type: 'string',
            demandOption:true
        },
        id:{
            describe:'this is  id description in add command',
            type: 'number',
            demandOption:true
        },
        comment:{
            describe:'this is  comment description in add command',
            type: 'string',
            demandOption:false
        },
        degree:{
            type:'array',
            demandOption:true
        },
        total:{
            type:'number',
        }
    },
    handler:()=>{
        students.addStudent(yargs.argv.name,yargs.argv.id,yargs.argv.comment,yargs.argv.degree,yargs.argv.total)
        
    }
})

yargs.command({
    command:'delet',
    describe:'delet ids',
    builder:{
        id:{
            describe:'this is  id description in add command',
            type: 'number',
            demandOption:true
        },
    },
    handler:()=>{
        students.removeStudent(yargs.argv.id)
    }
})

//read
yargs.command({
    command:'read',
    describe:'read namestudent',
    builder:{
        id:{
            describe:'id student',
            type:'number',
            demandOption:true
        },
    },
    handler:()=>{
        students.readStudent(yargs.argv.id, yargs.argv.name, yargs.argv.total)
    }
})

//list
yargs.command({
    command:'list',
    describe:'list  name of students',
    handler:()=>{
        students.listStudent(yargs.argv.id ,yargs.argv.name)
    }
})

yargs.parse()