---
title: "Using mpi4py to perform computations in parallel"
date: 2021-07-03T00:06:00-04:00
draft: true
---

## Introduction

In the past I've done computational astrophysics research which involved analyzing terabytes of data produced by our simulation 
code. Running our analysis scripts on one processor core proved to be very time-consuming and inefficient, therefore it was essential 
we find a way to parallelize our scripts and distribute the work across multiple cores. For this task we used [MPI4PY](https://github.com/mpi4py/mpi4py/), a library that provides a Python API for the [MPI (Message Passing Interface) standard](https://www.mpi-forum.org/).

Many of you may find yourselves needing to parallelize your code but don't know where to start. As such, I've compiled this guide to 
help you get started using MPI4PY.  

## Getting started with MPI4PY

For the purposes of this tutorial, let us create a new Python script. I'm calling mine `mpi4py_tutorial.py`. 

### Installation
First we need to make sure the MPI4PY library is installed on our machine. We can use our favorite package manager for Python to accomplish this.

**Using pip**
```
pip install mpi4py
```
**Using conda**
```
conda install -c anaconda mpi4py
```

### Initializing MPI

Next, we should import our library and initialize MPI in our script. Place the following code at the top of your script.

```
from mpi4py import MPI

comm = MPI.Comm()
rank = comm.rank
size = comm.size
```
