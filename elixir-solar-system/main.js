// Import Libraries
import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { TetrahedronGeometry } from 'three'

// Import Textures
import sunTexture from './textures/sun-texture.jpg'
import mercuryTexture from './textures/mercury-texture.jpg'
import venusTexture from './textures/venus-texture.jpg'
import earthTexture from './textures/earth-texture.jpg'
import moonTexture from './textures/moon-texture.jpg'
import marsTexture from './textures/mars-texture.jpg'
import jupiterTexture from './textures/jupiter-texture.jpg'
import saturnTexture from './textures/saturn-texture.jpg'
import saturnRingTexture from './textures/saturn-ring-texture.png'
import uranusTexture from './textures/uranus-texture.jpg'
import neptuneTexture from './textures/neptune-texture.jpg'
import plutoTexture from './textures/pluto-texture.jpg'

// Global

// Camera settings
let currentobject;
const direction = new THREE.Vector3()
let camOffset = 3000;

// Planet offsets
const mercuryOffset = 1060
const vernusOffset = 1108
const earhtOffset = 1150
const moonOffset = 40
const marsOffset = 1225
const jupiterOffset = 1780
const saturnOffset = 2437
const uranusOffset = 3880
const neptuneOffset = 5500
const plutoOffset = 6922

// Planet rotation speeds
let mercuryObjectRotation = -0.001
let venusObjectRotation = 0.001
let earthObjectRotation = -0.001
let moonObjectRotation = -0.003
let marsObjectRotation = -0.003
let jupiterObjectRotation = -0.0007
let saturnObjectRotation = -0.0003
let uranusObjectRotation = -0.0001
let neptuneObjectRotation = -0.0005
let plutoObjectRotation = -0.0003

// Controls

const uiControls = document.querySelector('.controls')

const planetControls = uiControls.querySelectorAll('.locate')

let perviousPlanet = -1;

let factContent = document.querySelector('.fact-content')

// Create a texture loader 
const textureLoader = new THREE.TextureLoader()

// Scene
const scene = new THREE.Scene()

// Perspective Camera
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 10000)

// Renderer
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#app')})

// Renderer Pixel Ratio
renderer.setPixelRatio(window.devicePixelRatio)

// Renderer Size
renderer.setSize(window.innerWidth, window.innerHeight)

// Camera position
// Along the Z-axis
camera.position.setZ(3000)
camera.position.setY(180)
camera.position.setX(10)

// Render the scene
renderer.render(scene, camera)

// Add the mesh to the scene
scene.add()

// Add Light Source

const pointLight = new THREE.PointLight(0xffffff,1,0,2)
pointLight.position.set(0,0,0)

const ambientLight = new THREE.AmbientLight(0xffffff)

// Grid Helper
const gridHelper = new THREE.GridHelper(2000,500)

// Add light source to the scene
scene.add(pointLight,)

// Orbit Controls
const controls = new OrbitControls(camera , renderer.domElement)

// Stars
function addStars(){
  // Define the shape you want to generate each time
  const starGeometry = new THREE.SphereGeometry(0.01)
  
  // Standard material
  const material = new THREE.MeshBasicMaterial({color: 0xffffff})

  // Create the star object
  const star = new THREE.Mesh(starGeometry, material)

  // Randomly generate star co-ordinates
  const [x,y,z] = Array(3).fill().map( () => THREE.MathUtils.randFloatSpread(100))

  // Assign randomly generated co-ordinates
  star.position.set(x, y, z)

  // Add the star
  scene.add(star)

}

Array(1000).fill().forEach(addStars)

// Background
const spacetexture = new THREE.TextureLoader().load('./textures/milky-way-texture.jpg')

scene.background = spacetexture

// End of the Background

// Create The Solar System

// Create The Sun

// Define the Geometry of the sun
const sunGeometry = new THREE.SphereGeometry(1000,100,100)

// Define the material of the sun
const sunMaterial = new THREE.MeshBasicMaterial({
  map: textureLoader.load(sunTexture)
})

// Join the material and the geometry into a mesh
const sun = new THREE.Mesh(sunGeometry,sunMaterial)

// Add the sun to the scene
scene.add(sun)

// Create the planets

// Mercury
// *Venus
// Earth
// Mars
// Asteroid belt
// Jupiter
// Saturn
// *Uranus
// Neptune
// Pluto

// *Venus and Uranus are the only planets that spin clockwise

// Create Mercury

// Create an object for mercury to revolve around
const mercuryObject = new THREE.Object3D()

// Define the Geometry Mercury
const mercuryGeometry = new THREE.SphereGeometry(4,50,50)

// Define the material of Mercury
const mercuryMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(mercuryTexture)
})

// Join the material and the geometry into a mesh
const mercury = new THREE.Mesh(mercuryGeometry,mercuryMaterial)

// Add Mercury to the Mercury Object
mercuryObject.add(mercury)

// Add the Mercury Object to the scene
scene.add(mercuryObject)

// Position Mercury
mercury.position.setZ(mercuryOffset)

// Create Venus

// Create an object for Venus to revolve around
const venusObject = new THREE.Object3D()

// Define the Geometry Venus
const venusGeometry = new THREE.SphereGeometry(9,30,30)

// Define the material of Venus
const venusMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(venusTexture)
})

// Join the material and the geometry into a mesh
const venus = new THREE.Mesh(venusGeometry,venusMaterial)

// Add Venus to the Venus Object
venusObject.add(venus)

// Add the Venus Object to the scene
scene.add(venusObject)

// Position Venus
venus.position.setZ(vernusOffset)

// Create Earth

// Create an object for Earth to revolve around
const earthObject = new THREE.Object3D()

// Define the Geometry Earth
const earthGeometry = new THREE.SphereGeometry(9,30,30)

// Define the material of Earth
const earthMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(earthTexture)
})

// Join the material and the geometry into a mesh
const earth = new THREE.Mesh(earthGeometry,earthMaterial)

// Add Earth to the Venus Object
earthObject.add(earth)

// Add the Earth Object to the scene
scene.add(earthObject)

// Position The Earth
earth.position.setZ(earhtOffset)

// Create The Earth's Moon

// Set the moon to revolve around the moon object
const moonObject = new THREE.Object3D()

// Define the Geometry Earth
const moonGeometry = new THREE.SphereGeometry(2.43,30,30)

// Define the material of Earth
const moonMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(moonTexture)
})

// Join the material and the geometry into a mesh
const moon = new THREE.Mesh(moonGeometry,moonMaterial)

// Add moon to the moon Object
moonObject.add(moon)

// Add the moon object to the earth object
earthObject.add(moonObject)

// Position The Moon
moon.position.setX(moonOffset)
moonObject.position.setZ(earhtOffset)

// Create Mars

// Create an object for Mars to revolve around
const marsObject = new THREE.Object3D()

// Define the Geometry Mars
const marsGeometry = new THREE.SphereGeometry(5,30,30)

// Define the material of Mars
const marsMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(marsTexture)
})

// Join the material and the geometry into a mesh
const mars = new THREE.Mesh(marsGeometry,marsMaterial)

// Add Mars to the Mars Object
marsObject.add(mars)

// Add the Mars Object to the scene
scene.add(marsObject)

// Position Mars
mars.position.setZ(marsOffset)


// Create Jupiter

// Create an object for Jupiter to revolve around
const jupiterObject = new THREE.Object3D()

// Define the Geometry Jupiter
const jupiterGeometry = new THREE.SphereGeometry(90,30,30)

// Define the material of Jupiter
const jupiterMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(jupiterTexture)
})

// Join the material and the geometry into a mesh
const jupiter = new THREE.Mesh(jupiterGeometry,jupiterMaterial)

// Add Jupiter to the Jupiter Object
jupiterObject.add(jupiter)

// Add the Jupiter Object to the scene
scene.add(jupiterObject)

// Position Jupiter
jupiter.position.setZ(jupiterOffset)

// Create Saturn

// Create an object for Saturn to revolve around
const saturnObject = new THREE.Object3D()

// Define the Geometry Saturn
const saturnGeometry = new THREE.SphereGeometry(83,30,30)

// Define the material of Saturn
const saturnMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(saturnTexture)
})

// Join the material and the geometry into a mesh
const saturn = new THREE.Mesh(saturnGeometry,saturnMaterial)

// Add Saturn to the Saturn Object
saturnObject.add(saturn)

// Add the Saturn Object to the scene
scene.add(saturnObject)

// Position Saturn
saturn.position.setZ(saturnOffset)

// Create Uranus

// Create an object for Uranus to revolve around
const uranusObject = new THREE.Object3D()

// Define the Geometry Uranus
const uranusGeometry = new THREE.SphereGeometry(36,30,30)

// Define the material of Uranus
const uranusMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(uranusTexture)
})

// Join the material and the geometry into a mesh
const uranus = new THREE.Mesh(uranusGeometry,uranusMaterial)

// Add Uranus to the Uranus Object
uranusObject.add(uranus)

// Add the Uranus Object to the scene
scene.add(uranusObject)

// Position Uranus
uranus.position.setZ(uranusOffset)

// Create Neptune

// Create an object for Neptune to revolve around
const neptuneObject = new THREE.Object3D()

// Define the Geometry Neptune
const neptuneGeometry = new THREE.SphereGeometry(36,30,30)

// Define the material of Neptune
const neptuneMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(neptuneTexture)
})

// Join the material and the geometry into a mesh
const neptune = new THREE.Mesh(neptuneGeometry,neptuneMaterial)

// Add Neptune to the Neptune Object
neptuneObject.add(neptune)

// Add the Neptune Object to the scene
scene.add(neptuneObject)

// Position Neptune
neptune.position.setZ(neptuneOffset)

// Create Pluto

// Create an object for Pluto to revolve around
const plutoObject = new THREE.Object3D()

// Define the Geometry Pluto
const plutoGeometry = new THREE.SphereGeometry(1.7,30,30)

// Define the material of Pluto
const plutoMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load(plutoTexture)
})

// Join the material and the geometry into a mesh
const pluto = new THREE.Mesh(plutoGeometry,plutoMaterial)

// Add Pluto to the Pluto Object
plutoObject.add(pluto)

// Add the Pluto Object to the scene
scene.add(plutoObject)

// Position Pluto
pluto.position.setZ(plutoOffset)

function movecamera(){

  const currentposition = document.body.getBoundingClientRect().top

  camera.position.x = currentposition * -0.2
  camera.position.y = currentposition * -0.2
  camera.position.z = currentposition * -0.2
}

// Set the current object
currentobject = sun

document.body.onscroll = movecamera

function resetPrevious(index){
  switch(index){
    case 0: 
            console.log('Resetting mercury')
            mercuryObjectRotation = -0.001
            break
    case 1:
            venusObjectRotation = 0.001
            break
    case 2: 
            earthObjectRotation = -0.001
            break
    case 3:
            marsObjectRotation = -0.003
            break
    case 4:
            jupiterObjectRotation = -0.0007
            break
    case 5:           
            saturnObjectRotation = -0.0003
            break
    case 6: 
            uranusObjectRotation = -0.0001
            break
    case 7:
            neptuneObjectRotation = -0.0005
            break
    case 8:
            plutoObjectRotation = -0.0003
            break
    default:break
  }
}

function displayFact(fact){
  factContent.innerHTML = fact
  const factFile= document.querySelector('.fact-file').classList.remove('hidden')
}

function locatesun()  {
  // Set the camera
  camera.position.setZ(3000)
  camera.position.setY(90)
  // Display fact
  displayFact("The sun alone contributes 99% of our solar system's mass!")
  return currentobject = sun
}

function locatemercury()  {
  // First Reset the previous planet
  resetPrevious(perviousPlanet)
  // Assign this planet an index
  let mercuryIndex = 0
  // Set this planet's index as the previous index
  perviousPlanet = mercuryIndex
  // Stop the planet from rotating around the sun
  mercuryObjectRotation = 0
  // Focus the camera
  camOffset = mercuryOffset
  // Display the fact
  displayFact("Mercury orbits the sun faster than any other planet. One year in Mercury is only about 88 days on Earth!")
  return currentobject = mercury
}

function locatevenus()  {
  // First Reset the previous planet
  resetPrevious(perviousPlanet)
  // Assign this planet an index
  let venusIndex = 1
  // Set this planet's index as the previous index
  perviousPlanet = venusIndex
  // Stop the planet from rotating around the sun
  venusObjectRotation = 0
  // Focus the camera
  camOffset = vernusOffset
  // Display the fact
  displayFact("Venus is hotter than Mercury despite being further away from the Sun")
  
  return currentobject = venus
}

function locateearth()  {
  // First Reset the previous planet
  resetPrevious(perviousPlanet)
  // Assign this planet an index
  let earthIndex = 2
  // Set this planet's index as the previous index
  perviousPlanet = earthIndex
  // Stop the planet from rotating around the sun
  earthObjectRotation = 0
  // Focus the camera
  camOffset = earhtOffset
  // Display the fact
  displayFact("Earth is the third planet from the Sun and the only astronomical object known to harbor life.")
  return currentobject = earth
}

function locatemars()  {
  // First Reset the previous planet
  resetPrevious(perviousPlanet)
  // Assign this planet an index
  let marsIndex = 3
  // Set this planet's index as the previous index
  perviousPlanet = marsIndex
  // Stop the planet from rotating around the sun
  marsObjectRotation = 0
  // Focus the camera
  camOffset = marsOffset
  // Display the fact
  displayFact("One year on Mars would take about 687 days on Earth!")
  return currentobject = mars
}

function locatejupiter()  {
   // First Reset the previous planet
  resetPrevious(perviousPlanet)
  // Assign this planet an index
  let jupiterIndex = 4
  // Set this planet's index as the previous index
  perviousPlanet = jupiterIndex
  // Stop the planet from rotating around the sun
  jupiterObjectRotation = 0
  // Focus the camera
  camOffset = jupiterOffset
  // Display the fact
  displayFact("Jupiter is 2.5 times more massive than all of the other planets in the Solar System combined!")
  return currentobject = jupiter
}

function locatesaturn()  {
  // First Reset the previous planet
  resetPrevious(perviousPlanet)
  // Assign this planet an index
  let saturnIndex = 5
  // Set this planet's index as the previous index
  perviousPlanet = saturnIndex
  // Stop the planet from rotating around the sun
  saturnObjectRotation = 0
  // Focus the camera
  camOffset = saturnOffset
  // Display the fact
  displayFact("You cannot stand on Saturn. It is made mostly of gases, mainly helium. Therefore Saturn could float in water!")
  return currentobject = saturn
}

function locateuranus()  {
  // First Reset the previous planet
  resetPrevious(perviousPlanet)
  // Assign this planet an index
  let uranusIndex = 6
  // Set this planet's index as the previous index
  perviousPlanet = uranusIndex
  // Stop the planet from rotating around the sun
  uranusObjectRotation = 0
  // Focus the camera
  camOffset = uranusOffset
  // Display the fact
  displayFact("One year on Uranus lasts about 84 years on Earth!")
  return currentobject = uranus
}

function locateneptune()  {
  // First Reset the previous planet
  resetPrevious(perviousPlanet)
  // Assign this planet an index
  let neptuneIndex = 7
  // Set this planet's index as the previous index
  perviousPlanet = neptuneIndex
  // Stop the planet from rotating around the sun
  neptuneObjectRotation = 0
  // Focus the camera
  camOffset = neptuneOffset
  // Display the fact
  displayFact("One year on Neptune lasts about 165 years on Earth!")
  return currentobject = neptune
}

function locatepluto()  {
  // First Reset the previous planet
  resetPrevious(perviousPlanet)
  // Assign this planet an index
  let plutoIndex = 8
  // Set this planet's index as the previous index
  perviousPlanet = plutoIndex
  // Stop the planet from rotating around the sun
  plutoObjectRotation = 0
  // Focus the camera
  camOffset = plutoOffset
  // Display the fact
  displayFact("Venetia Burney, just 11 years old at the time, suggested the name Pluto in 1930.")
  return currentobject = pluto
}


const findsun = document.querySelector('.locate-sun').addEventListener('click',locatesun)

const findmercury = document.querySelector('.locate-mercury').addEventListener('click',locatemercury)

const findvenus = document.querySelector('.locate-venus').addEventListener('click',locatevenus)

const findearth = document.querySelector('.locate-earth').addEventListener('click', locateearth)

const findmars = document.querySelector('.locate-mars').addEventListener('click', locatemars)

const findjupiter = document.querySelector('.locate-jupiter').addEventListener('click', locatejupiter)

const findsaturn = document.querySelector('.locate-saturn').addEventListener('click', locatesaturn)

const finduranus = document.querySelector('.locate-uranus').addEventListener('click', locateuranus)

const findneptune = document.querySelector('.locate-neptune').addEventListener('click', locateneptune)

const findpluto = document.querySelector('.locate-pluto').addEventListener('click', locatepluto)

// Recursive render loop
function animate(){
  // Render whenever the screen refreshes
  requestAnimationFrame(animate)

  // Rotate the Sun along its y-axis
  sun.rotation.y += 0.001;

  // Rotate mercury around the sun
  mercuryObject.rotateY(mercuryObjectRotation)

  // Rotate mercury around its y-axis
  mercury.rotateY(0.01)

  // Rotate Venus around the sun
  venusObject.rotateY(venusObjectRotation)

  // Rotate Venus around its y-axis
  venus.rotateY(0.01)

  // Rotate Earth around the sun
  earthObject.rotateY(earthObjectRotation)

  // Rotate the Earth around its y-axis
  earth.rotateY(0.01)

  // Rotate the Moon around the earth
  moonObject.rotateY(moonObjectRotation)

  // Rotate the Moon around its y-axis
  moon.rotateY(0.003)

  // Rotate Mars around the sun
  marsObject.rotateY(marsObjectRotation)

  // Rotate Mars around its y-axis
  mars.rotateY(0.03)

  // Rotate Jupiter around the sun
  jupiterObject.rotateY(jupiterObjectRotation)

  // Rotate Jupiter around its y-axis
  jupiter.rotateY(0.002)

  // Rotate Saturn around the sun
  saturnObject.rotateY(saturnObjectRotation)

  // Rotate Saturn around its y-axis
  saturn.rotateY(0.002)

  // Rotate the Uranus around the sun
  uranusObject.rotateY(uranusObjectRotation)

  // Rotate Urans around its y-axis
  uranus.rotateY(0.002)

  // Rotate the Neptune around the sun
  neptuneObject.rotateY(neptuneObjectRotation)

  // Rotate Neptune around its y-axis
  neptune.rotateY(0.002)

  // Rotate Pluto around the sun 
  plutoObject.rotateY(plutoObjectRotation)

  // Rotate Pluto around its y-axis
  pluto.rotateY(0.002)

  //Focus the camera
  currentobject.getWorldPosition(controls.target)
 
  // Update controls
  controls.update()

  // direction.subVectors( camera.position, controls.target );
  // direction.normalize().multiplyScalar( camOffset );
  // camera.position.copy( direction.add( controls.target ) );

  // Recursively Render
  renderer.render(scene, camera)
}

animate()