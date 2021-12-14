import React, { useEffect } from 'react'
import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Model: React.VFC = () => {
  const createModel = () => {
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#canvas') as HTMLCanvasElement,
      alpha: true,
    })
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 16 / 10, 1, 1000000)
    const light = new THREE.AmbientLight(0xffffff, 1.75)
    const controls = new OrbitControls(camera, renderer.domElement)

    camera.position.set(0, 0, 15000)
    controls.enableDamping = true
    controls.dampingFactor = 0.2
    scene.add(light)

    const dracoLoader = new DRACOLoader()
    const gltfLoader = new GLTFLoader()

    dracoLoader.setDecoderConfig({ type: 'js' })
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

    gltfLoader.setDRACOLoader(dracoLoader)
    gltfLoader.load(
      'senkoka_draco.glb',
      (gltf) => {
        const model = gltf.scene

        model.scale.set(130, 180, 150)
        model.rotation.set(0, -100, 0)
        model.position.set(-300, -4000, 0)

        scene.add(model)
      },
      // 読込状況
      (xhr) => {
        const progress = Math.ceil((xhr.loaded / xhr.total) * 100)

        if (progress < 100) {
          console.log(`nitic-map: Loading... ${progress}%`)
        }
      },
      // 読込失敗
      (error) => {
        console.error(`nitic-map: ${error}`)
      }
    )

    const tick = () => {
      renderer.render(scene, camera)
      requestAnimationFrame(tick)
    }

    const onResize = () => {
      const width = document.getElementById('map-display')
        ?.clientWidth as number
      const height = document.getElementById('map-display')
        ?.clientHeight as number

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
