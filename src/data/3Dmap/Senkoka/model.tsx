import React, { useEffect } from 'react'
import * as THREE from 'three'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Model: React.VFC = () => {
  const createModel = () => {
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#canvas') as HTMLCanvasElement,
      alpha: true,
    })
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 16 / 10, 1, 100000)
    const light = new THREE.AmbientLight(0x666666, 2.5)
    const orbitControls = new OrbitControls(camera, renderer.domElement)

    const geometry = new THREE.SphereGeometry(1)
    const material = new THREE.MeshNormalMaterial()
    const mesh = new THREE.Mesh(geometry, material)

    camera.position.set(0, 0, 15000)
    orbitControls.enableDamping = true
    orbitControls.dampingFactor = 0.2
    scene.add(mesh)
    scene.add(light)

    const mtlLoader = new MTLLoader()
    const objLoader = new OBJLoader()

    mtlLoader.setPath('senkoka/')
    mtlLoader.load('senkoka.mtl', (material) => {
      material.preload()

      objLoader.setMaterials(material)
      objLoader.setPath('senkoka/')
      objLoader.load(
        'senkoka.obj',
        // 読込処理
        (object) => {
          const objects: THREE.Group[] = []

          object.scale.set(120, 170, 150)
          object.rotation.set(-50, -100, 0)
          object.position.set(-300, -3000, 0)

          scene.add(object)
          objects.push(object)
        },
        // 読込状況
        (xhr) => {
          console.log(
            `Three.js: ${Math.ceil((xhr.loaded / xhr.total) * 100)} % loaded`
          )
        },
        // 読込失敗
        (error) => {
          console.error(`Three.js: ${error}`)
        }
      )
    })

    const tick = () => {
      mesh.rotation.y += 0.01
      renderer.render(scene, camera)

      requestAnimationFrame(tick)
    }

    const onResize = () => {
      const width: any = document?.getElementById('map-display')?.clientWidth
      const height: any = document?.getElementById('map-display')?.clientHeight

      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(width, height)
      renderer.render(scene, camera)

      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    tick()
    onResize()
    window.addEventListener('resize', onResize, false)
  }

  useEffect(() => {
    createModel()
  }, [])

  return (
    <>
      <canvas id="canvas" />
    </>
  )
}

export default React.memo(Model)
