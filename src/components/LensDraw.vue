<script setup lang="ts">
import * as THREE from 'three'

import {ref, onMounted, watchEffect} from 'vue'

const props = defineProps<{
    leftRadius: number, // radius of curvature of the front and back surfaces
    rightRadius: number,
    thickness: number, // thickness of the lens
    refractiveIndex: number,
}>()

const getFocalPoint = (refIndex: number, thickness: number, r1: number, r2: number) => {
    const r1OrInfinity = r1 > -0.1 && r1 < 0.1 ? Infinity : r1
    const r2OrInfinity = r2 > -0.1 && r2 < 0.1 ? -1 * Infinity : r2
    return 1 / ((refIndex - 1) * ( 1/r1OrInfinity - 1/r2OrInfinity + (((refIndex - 1) * thickness) / (refIndex * r1OrInfinity * r2OrInfinity))))
}

const lensContainer = ref<HTMLCanvasElement | null>(null)
let renderer: THREE.WebGLRenderer

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);

const CENTER_POINT = new THREE.Vector2(0, 0)
const LENS_HEIGHT = 30
let focalPoint = ref(NaN)

const renderScene = (props: Readonly<{
    leftRadius: number;
    rightRadius: number;
    thickness: number;
    refractiveIndex: number;
}>) => {
    const { thickness, leftRadius, rightRadius, refractiveIndex } = props

    const calcThickness = thickness / 2
    const calcRightRadius = rightRadius / -10
    const calcLeftRadius = leftRadius / -10

    // Lens thickness
    const lineUpPoints = [];
    lineUpPoints.push(new THREE.Vector2(-1 * calcThickness, LENS_HEIGHT/2));
    lineUpPoints.push(new THREE.Vector2(calcThickness, LENS_HEIGHT/2));
    const lineUpGeometry = new THREE.BufferGeometry().setFromPoints(lineUpPoints);

    const lineDownPoints = [
        new THREE.Vector2(lineUpPoints[0].x, lineUpPoints[0].y * -1),
        new THREE.Vector2(lineUpPoints[1].x, lineUpPoints[1].y * -1)
    ];
    const lineDownGeometry = new THREE.BufferGeometry().setFromPoints(lineDownPoints);

    // Create the lens right-side
    const curveRightPath = [
        new THREE.Vector2(calcThickness, LENS_HEIGHT/2 * -1),
        new THREE.Vector2(calcRightRadius + calcThickness, CENTER_POINT.y),
        new THREE.Vector2(calcThickness, LENS_HEIGHT/2),
    ];
    const curveRightPoints = new THREE.SplineCurve(curveRightPath).getPoints(500);
    const curveRightGeometry = new THREE.BufferGeometry().setFromPoints(curveRightPoints);

    const curveLeftPath = [
        new THREE.Vector2(curveRightPath[0].x * -1, curveRightPath[0].y),
        new THREE.Vector2(calcLeftRadius - calcThickness, curveRightPath[1].y),
        new THREE.Vector2(curveRightPath[2].x * -1, curveRightPath[2].y),
    ];
    const curveLeftPoints = new THREE.SplineCurve(curveLeftPath).getPoints(500);
    const curveLeftGeometry = new THREE.BufferGeometry().setFromPoints(curveLeftPoints);


    // Baseline
    const baseLinePoints = [];
    baseLinePoints.push(new THREE.Vector2(-80, CENTER_POINT.y));
    baseLinePoints.push(new THREE.Vector2(80, CENTER_POINT.y));
    const baseLineGeometry = new THREE.BufferGeometry().setFromPoints(baseLinePoints);

    // Light-Source
    focalPoint.value = getFocalPoint(refractiveIndex, thickness, leftRadius, rightRadius)
    console.log({ focalPoint })
    const lightLinePoints = [];
    lightLinePoints.push(new THREE.Vector2(-80, LENS_HEIGHT/4));
    lightLinePoints.push(new THREE.Vector2((curveLeftPath[1].x + curveRightPath[1].x) / 2, LENS_HEIGHT/4));
    if (focalPoint.value > 0) {
        lightLinePoints.push(new THREE.Vector2(focalPoint.value * 2, LENS_HEIGHT/4 * -1));
    } else {
        lightLinePoints.push(new THREE.Vector2(focalPoint.value * -2, LENS_HEIGHT/2 + LENS_HEIGHT/4));
    }
    
    const lightLineGeometry = new THREE.BufferGeometry().setFromPoints(lightLinePoints);



    // Create the final object to add to the scene
    const redColor = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const greenColor = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const whiteColor = new THREE.LineBasicMaterial({ color: 0xffffff });

    const curveLeft = new THREE.Line(curveLeftGeometry, redColor);
    const curveRight = new THREE.Line(curveRightGeometry, redColor);
    const lineUp = new THREE.Line(lineUpGeometry, redColor);
    const lineDown = new THREE.Line(lineDownGeometry, redColor);
    const baseLine = new THREE.Line(baseLineGeometry, greenColor);
    const lightLine = new THREE.Line(lightLineGeometry, whiteColor);

    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    scene.add(curveLeft);
    scene.add(curveRight);
    scene.add(lineUp);
    scene.add(lineDown);
    scene.add(baseLine);
    scene.add(lightLine);

    renderer.render(scene, camera);
}

onMounted(() => {
    renderer = new THREE.WebGLRenderer({
        canvas: lensContainer.value as HTMLCanvasElement
    });
    renderer.setSize(window.innerWidth * 0.75, window.innerHeight);
    renderScene({...props})
})

watchEffect(() => {
    console.log({ ...props })
    if (!renderer) return
    
    scene.clear()
    renderScene({...props})
})
</script>

<template>
    <div class="h-24 flex p-4">
        <div class="text-xs w-1/4">
            <p>left-radius: {{ props.leftRadius > -0.1 && props.leftRadius < 0.1 ? '∞' : props.leftRadius }} cm</p>
            <p>right-radius: {{ props.rightRadius > -0.1 && props.rightRadius < 0.1 ? '-∞' : props.rightRadius }} cm</p>
            <p>lens-thickness: {{ props.thickness }} cm</p>
            <p>ref. index: {{ props.refractiveIndex }}</p>
        </div>
        <div class="w-3/4"><p class="border w-fit m-2 p-2"><strong>focal point: {{ focalPoint === Infinity ? '∞' : focalPoint.toFixed(2) }} cm</strong></p></div>
    </div>
    <canvas ref="lensContainer" />
</template>