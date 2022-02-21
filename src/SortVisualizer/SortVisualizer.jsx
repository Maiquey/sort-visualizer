import React from "react";
import * as sortingAlgorithms from '../SortingAlgorithms/SortingAlgorithms.js'
import './SortVisualizer.css';

export default class SortVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array: [],
            speed: 2
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        //2 or 20 for width
        //380 or 70 for bars
        for (let i = 0; i < 380; i++){
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    mergeSort(){
        const animations = sortingAlgorithms.mergeSort(this.state.array);
        const newAnimations = [];
        for (const animation of animations){
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
        }
        for (let i = 0; i < newAnimations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = (i % 3 !== 2);
            if (isColorChange){
                const [bar1Index, bar2Index] = newAnimations[i];
                const bar1Style = arrayBars[bar1Index].style;
                const bar2Style = arrayBars[bar2Index].style;
                const color = i % 3 === 0 ? 'red' : 'blueviolet';
                setTimeout(() => {
                    bar1Style.backgroundColor = color;
                    bar2Style.backgroundColor = color;
                }, i * this.state.speed);
            }
            else{
                setTimeout(() => {
                    const [bar1Index, newHeight] = newAnimations[i];
                    const bar1Style = arrayBars[bar1Index].style;
                    bar1Style.height = `${newHeight}px`;
                }, i * this.state.speed);
            }
        }
    }

    quickSort(){
        const sourceAnimations = sortingAlgorithms.quickSort(this.state.array);
        const animations = [];
        for (const animation of sourceAnimations){
            if (animation.type === 'comp'){
                animations.push(animation);
                const [index1, index2] = animation.values;
                animations.push({
                    type: 'clear',
                    values: [index1, index2]
                });
            }
            else{
                animations.push(animation);
            }
        }
        console.log(animations);
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = (animations[i].type !== 'swap');
            if (isColorChange){
                const [bar1Index, bar2Index] = animations[i].values;
                const bar1Style = arrayBars[bar1Index].style;
                const bar2Style = arrayBars[bar2Index].style;
                const color = (animations[i].type === 'comp') ? 'red' : 'blueviolet';
                const color2 = (animations[i].type === 'check') ? 'aquamarine' : color;
                setTimeout(() => {
                    bar1Style.backgroundColor = color2;
                    bar2Style.backgroundColor = color2;
                }, i * this.state.speed);
            }
            else{
                setTimeout(() => {
                    const [bar1Index, bar2Index] = animations[i].values;
                    const bar1Style = arrayBars[bar1Index].style;
                    const bar2Style = arrayBars[bar2Index].style;
                    const tempHeight = bar1Style.height;
                    bar1Style.height = bar2Style.height;
                    bar2Style.height = tempHeight;
                }, i * this.state.speed);
            }
        }
    }

    heapSort(){
        const sourceAnimations = sortingAlgorithms.heapSort(this.state.array);
        const animations = [];
        for (const animation of sourceAnimations){
            if (animation.type === 'comp'){
                animations.push(animation);
                const [index1, index2] = animation.values;
                animations.push({
                    type: 'clear',
                    values: [index1, index2]
                });
            }
            else{
                animations.push(animation);
            }
        }
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = (animations[i].type !== 'swap');
            if (isColorChange){
                const [bar1Index, bar2Index] = animations[i].values;
                const bar1Style = arrayBars[bar1Index].style;
                const bar2Style = arrayBars[bar2Index].style;
                const color = (animations[i].type === 'comp') ? 'red' : 'blueviolet';
                const color2 = (animations[i].type === 'check') ? 'aquamarine' : color;
                setTimeout(() => {
                    bar1Style.backgroundColor = color2;
                    bar2Style.backgroundColor = color2;
                }, i * this.state.speed);
            }
            else{
                setTimeout(() => {
                    const [bar1Index, bar2Index] = animations[i].values;
                    const bar1Style = arrayBars[bar1Index].style;
                    const bar2Style = arrayBars[bar2Index].style;
                    const tempHeight = bar1Style.height;
                    bar1Style.height = bar2Style.height;
                    bar2Style.height = tempHeight;
                }, i * this.state.speed);
            }
        }
    }

    bubbleSort(){
        const sourceAnimations = sortingAlgorithms.bubbleSort(this.state.array);
        const animations = [];
        for (const animation of sourceAnimations){
            if (animation.type === 'comp'){
                animations.push(animation);
                const [index1, index2] = animation.values;
                animations.push({
                    type: 'clear',
                    values: [index1, index2]
                });
            }
            else{
                animations.push(animation);
            }
        }
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = (animations[i].type !== 'swap');
            if (isColorChange){
                const [bar1Index, bar2Index] = animations[i].values;
                const bar1Style = arrayBars[bar1Index].style;
                const bar2Style = arrayBars[bar2Index].style;
                const color = (animations[i].type === 'comp') ? 'red' : 'blueviolet';
                const color2 = (animations[i].type === 'check') ? 'aquamarine' : color;
                setTimeout(() => {
                    bar1Style.backgroundColor = color2;
                    bar2Style.backgroundColor = color2;
                }, i * 0.1);
            }
            else{
                setTimeout(() => {
                    const [bar1Index, bar2Index] = animations[i].values;
                    const bar1Style = arrayBars[bar1Index].style;
                    const bar2Style = arrayBars[bar2Index].style;
                    const tempHeight = bar1Style.height;
                    bar1Style.height = bar2Style.height;
                    bar2Style.height = tempHeight;
                }, i * 0.1);
            }
        }
    }

    selectionSort(){
        const sourceAnimations = sortingAlgorithms.selectionSort(this.state.array);
        const animations = [];
        for (const animation of sourceAnimations){
            if (animation.type === 'comp'){
                animations.push(animation);
                const [index1, index2] = animation.values;
                animations.push({
                    type: 'clear',
                    values: [index1, index2]
                });
            }
            else{
                animations.push(animation);
            }
        }
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = (animations[i].type !== 'swap');
            if (isColorChange){
                const [bar1Index, bar2Index] = animations[i].values;
                const bar1Style = arrayBars[bar1Index].style;
                const bar2Style = arrayBars[bar2Index].style;
                const color = (animations[i].type === 'comp') ? 'red' : 'blueviolet';
                const color2 = (animations[i].type === 'check') ? 'aquamarine' : color;
                setTimeout(() => {
                    bar1Style.backgroundColor = color2;
                    bar2Style.backgroundColor = color2;
                }, i * 0.1);
            }
            else{
                setTimeout(() => {
                    const [bar1Index, bar2Index] = animations[i].values;
                    const bar1Style = arrayBars[bar1Index].style;
                    const bar2Style = arrayBars[bar2Index].style;
                    const tempHeight = bar1Style.height;
                    bar1Style.height = bar2Style.height;
                    bar2Style.height = tempHeight;
                }, i * 0.1);
            }
        }

    }

    testSortingAlgorithms(){
        for (let i = 0; i < 100; i++){
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let j = 0; j < length; j++){
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a-b);
            const sortedArray = sortingAlgorithms.quickSort(this.state.array);
            // console.log(javaScriptSortedArray);
            // console.log(sortedArray);
            console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
        }
    }

    render(){
        const {array} = this.state;

        return(

            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                    className="array-bar"
                    key={idx}
                    style={{height: `${value}px`}}>
                    </div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.selectionSort()}>Selection Sort</button>
                <button onClick={() => this.testSortingAlgorithms()}>Test Algorithms</button>
            </div>
        );
    }
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}