import React from "react"
import * as THREE from "three"

class Scene extends React.Component {
  componentDidMount() {
        let scene = new THREE.Scene()
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    camera.position.z = 5
    let animate = function () {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()
  }
  render() {
    return (
      <div> Future three js scene </div>
    )
  }
}

export default Scene
