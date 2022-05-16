const fs=require('fs')
//add
const addStudent=(name,id,comment,degree,total)=>{
    const students=loadstudents() 
    total=0
    const duplicateName=students.find((student)=>{
        return student.id=== id
    })
    degree.forEach((mark)=>{
        return total+=mark
    })
    if(!duplicateName){
        students.push({
            name,
            id,
            comment, 
            degree,
            total
        })
        saveStudents(students)
        console.log('Saved successfully')
    }
    else{
        console.log('error duplicate name')
    }
}


const loadstudents = () =>{
    try{
        const data=fs.readFileSync('students.json').toString()
         //object
    return JSON.parse(data)
    }
    catch(e){
        return[]
    }
}

const saveStudents=(students) =>{
    const saveData = JSON.stringify(students)
    fs.writeFileSync('students.json',saveData)
}

//DELET
const removeStudent=(id)=>{
    const students =loadstudents()
    const studentsToKeep=students.filter((obj)=>{
        return obj.id !== id
    })
    if(students.length !==studentsToKeep.length){
        saveStudents(studentsToKeep)
        console.log('removed')
    }
    else{
        console.log('not found')
    }
}

const readStudent = (id)=>{
    const students = loadstudents();
    const student = students.find((studentID)=>{
        return studentID.id == id
    })
    if(student){
        console.log(student.id,student.name,student.total)
    }
    else{
        console.log("No task found")
    }
    }

const listStudent = ()=>{
    const students = loadstudents()
    students.forEach((el)=>{
        console.log(el.name)
    })
}

module.exports = {
    addStudent,
    removeStudent,
    readStudent,
    listStudent
}