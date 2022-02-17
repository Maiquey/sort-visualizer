import React from "react";
import * as sortingAlgorithms from '../SortingAlgorithms/SortingAlgorithms.js'
import './SortVisualizer.css';

export default class SortVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
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
            const isColorChange = i % 3 !== 2;
            if (isColorChange){
                const [bar1Index, bar2Index] = newAnimations[i];
                const bar1Style = arrayBars[bar1Index].style;
                const bar2Style = arrayBars[bar2Index].style;
                const color = i % 3 === 0 ? 'red' : 'blueviolet';
                setTimeout(() => {
                    bar1Style.backgroundColor = color;
                    bar2Style.backgroundColor = color;
                }, i * 5);
            }
            else{
                setTimeout(() => {
                    const [bar1Index, newHeight] = newAnimations[i];
                    const bar1Style = arrayBars[bar1Index].style;
                    bar1Style.height = `${newHeight}px`;
                }, i * 5);
            }
        }



        // for (let i = 0; i < animations.length; i++){
        //     const {comparison, swap} = animations[i];
        //     setTimeout(() => {
        //         const arrayBars = document.getElementsByClassName('array-bar');
        //         arrayBars[comparison[1]].style.backgroundColor = 'red';
        //         arrayBars[comparison[0]].style.backgroundColor = 'red';
        //         setTimeout(() => {
        //             arrayBars[comparison[1]].style.backgroundColor = 'blueviolet';
        //             arrayBars[comparison[0]].style.backgroundColor = 'blueviolet';
        //         }, (i + 1) * 10);
        //     }, i * 10);
        // }
    }

    quickSort(){}

    heapSort(){}

    bubbleSort(){}

    selectionSort(){}

    testSortingAlgorithms(){
        for (let i = 0; i < 100; i++){
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let j = 0; j < length; j++){
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a-b);
            const sortedArray = sortingAlgorithms.mergeSort(this.state.array);

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