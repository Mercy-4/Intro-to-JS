//function to calculate the volume of a sphere
export function volume_sphere(r){
    let res = 4/3 * 22/7 * r**3
    return res
}
//function to calculate surface area of a sphere
export default function surface_area(r){
    return 4 * 22/7 * r**2
}

//area of a circle using arrow functions
export const area_circle = (r)=> 22/7 * r**2

export function greet(){
    console.log("Hello")
}