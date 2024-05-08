'use client'

import {Chip} from "@mui/joy";
import {Titillium_Web} from "next/font/google";

const TitilliumWeb = Titillium_Web({weight: '600', subsets: ['latin']})

const Tool = ({name, color, textColor = 'white'}) => <Chip className={TitilliumWeb.className} variant='solid' sx={{background: color, color: textColor}}>{name}</Chip>

// JAVA
const JavaTool = ({name}) => <Tool name={name} color='#DC343B'/>
export const Java = () => <JavaTool name='Java'/>
export const Spring = () => <JavaTool name='Spring'/>
export const JavaFX = () => <JavaTool name='JavaFX'/>

// KOTLIN
const KotlinTool = ({name}) => <Tool name={name} color='#E23D28'/>
export const Kotlin = () => <KotlinTool name='Kotlin' />


// JAVASCRIPT
const JavaScriptTool = ({name}) => <Tool name={name} color='#0070BB'/>
export const JavaScript = () => <JavaScriptTool name='JS' />
export const React = () => <JavaScriptTool name='React' />
export const NextJS = () => <JavaScriptTool name='Next.js' />


// PYTHON
const PythonTool = ({name}) => <Tool name={name} color='#FFBF00' textColor='black' />
export const Python = () => <PythonTool name='Python'/>
export const MPI4Py = () => <PythonTool name='MPI4Py'/>


// DATA SCIENCE
const DataScienceTool = ({name}) => <Tool name={name} color='#ED9121' textColor='black' />
export const NumPy = () => <DataScienceTool name='NumPy'/>
export const SciPy = () => <DataScienceTool name='SciPy'/>
export const Matplotlib = () => <DataScienceTool name='Matplotlib'/>
export const Pandas = () => <DataScienceTool name='Pandas'/>
export const PyTorch = () => <DataScienceTool name='PyTorch' />


// DATABASES
const DatabaseTool = ({name}) =>  <Tool name={name} color='#177245'/>
export const MongoDB = () => <DatabaseTool name='MongoDB'/>
export const MySQL = () => <DatabaseTool name='MySQL'/>


// MISC
export const S3 = () => <Tool name='S3' color='#8A2BE2' />
export const Bash = () => <Tool name='Bash' color='#555555' />
export const Fortran = () => <Tool name='Fortran' color='#536878' />
export const Jupyter = () => <Tool name='Jupyter' color='#6082B6'/>
