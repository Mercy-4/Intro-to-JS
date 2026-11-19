export default function greet(name = 'Guest'){
    console.log(`Hello ${name}`)
}

const add = (a, b)=> a + b
export {add as sum} //list all the functions you want to export