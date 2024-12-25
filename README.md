# React Native useRef Callback Error After Unmount

This repository demonstrates a common error in React Native applications related to the `useRef` hook.  When a component using `useRef` is unmounted before an asynchronous operation within its callback completes, it can lead to errors. This example showcases the problem and its solution.

## Problem

The `unmountedRefBug.js` file illustrates a scenario where a `setTimeout` function within a `useRef` callback attempts to update state or interact with a component that has already been unmounted.  This frequently leads to warnings or crashes, particularly when navigating between screens rapidly.

## Solution

The `unmountedRefSolution.js` file demonstrates a robust solution using the `useEffect` hook and the `cleanup` function.  This approach ensures that any asynchronous operations associated with the `useRef` hook are properly cleaned up when the component unmounts, preventing errors.