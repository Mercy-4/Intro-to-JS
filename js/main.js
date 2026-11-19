import surface_area, {volume_sphere, area_circle, greet as salamu} from "./hesabu.js";
import greet, {sum} from "./example.js";
import * as calc from "./hesabu" //importing all functions from a module and renaming it
let area = area_circle(7)

console.log(`Area oc circle is ${area} and volume of sphere is ${volume_sphere(5)}`)

greet()
salamu()

calc.greet()
sum(9, 19)