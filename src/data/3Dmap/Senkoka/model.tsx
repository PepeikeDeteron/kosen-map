import React, { useEffect } from 'react'
import * as THREE from 'three'

const Model: React.VFC = () => {
  const createModel = () => {
    const width: any = document?.getElementById('map-display')?.clientWidth
    const height: any = document?.getElementById('map-display')?.clientHeight

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#draw-canvas') as HTMLCanvasElement,
    })
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 100000)

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400)
    const material = new THREE.MeshNormalMaterial()
    const box = new THREE.Mesh(geometry, material)

    const tick = () => {
      box.rotation.y += 0.01
      renderer.render(scene, camera)

      requestAnimationFrame(tick)
    }

    const onResize = () => {
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(width, height)

      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    window.addEventListener('draw-canvas', onResize)
    camera.position.set(0, 0, +1000)
    scene.add(box)
    tick()
    onResize()
  }

  useEffect(() => {
    createModel()
  }, [])

  return (
    <body>
      <canvas id="draw-canvas" />
    </body>
  )
}

export default React.memo(Model)
