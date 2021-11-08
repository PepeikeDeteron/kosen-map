import React, { useEffect } from 'react'
import * as THREE from 'three'

const Model: React.VFC = () => {
  const createModel = () => {
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#canvas') as HTMLCanvasElement,
    })
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera()

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
      const width: any = document?.getElementById('map-display')?.clientWidth
      const height: any = document?.getElementById('map-display')?.clientHeight

      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(width, height)
      renderer.render(scene, camera)

      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    onResize()
    window.addEventListener('resize', onResize, false)

    camera.position.set(0, 0, +1000)
    scene.add(box)
    tick()
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
