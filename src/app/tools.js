'use client'

import {Chip} from "@mui/joy";
import {Titillium_Web} from "next/font/google";

const TitilliumWeb = Titillium_Web({weight: '600', subsets: ['latin']})

const Tool = ({name, color, textColor = 'white', url = '#'}) => <Chip className={TitilliumWeb.className} variant='solid' slotProps={{action: {sx: {background: color, '&:hover': {background: '#8B8589'}}}, label: {sx: {color: textColor, '&:hover': {color: 'white'}}}}} onClick={() => window.location.href = url}>{name}</Chip>

// JAVA
const JavaTool = ({name, url = '#'}) => <Tool name={name} color='#DC343B' url={url}/>
export const Java = () => <JavaTool name='Java' url='https://www.java.com/en/download/help/whatis_java.html'/>
export const Spring = () => <JavaTool name='Spring' url='https://spring.io/'/>
export const JavaFX = () => <JavaTool name='JavaFX' url='https://openjfx.io/'/>

// KOTLIN
const KotlinTool = ({name, url = '#'}) => <Tool name={name} color='#E23D28' url={url}/>
export const Kotlin = () => <KotlinTool name='Kotlin' url='https://kotlinlang.org/' />


// JAVASCRIPT
const JavaScriptTool = ({name, url = '#'}) => <Tool name={name} color='#0070BB' url={url}/>
export const JavaScript = () => <JavaScriptTool name='JS' url='https://developer.mozilla.org/en-US/docs/Web/javascript'/>
export const React = () => <JavaScriptTool name='React' url='https://react.dev/'/>
export const NextJS = () => <JavaScriptTool name='Next.js' url='https://nextjs.org/' />


// PYTHON
const PythonTool = ({name, url = '#'}) => <Tool name={name} color='#FFBF00' textColor='black' url={url}/>
export const Python = () => <PythonTool name='Python' url='https://www.python.org/'/>
export const MPI4Py = () => <PythonTool name='MPI4Py' url='https://mpi4py.readthedocs.io/en/stable/index.html'/>


// DATA SCIENCE
const DataScienceTool = ({name, url = '#'}) => <Tool name={name} color='#ED9121' textColor='black' url={url} />
export const NumPy = () => <DataScienceTool name='NumPy' url='https://numpy.org/'/>
export const SciPy = () => <DataScienceTool name='SciPy' url='https://scipy.org/'/>
export const Matplotlib = () => <DataScienceTool name='Matplotlib' url='https://matplotlib.org/'/>
export const Pandas = () => <DataScienceTool name='Pandas' url='https://pandas.pydata.org/'/>
export const PyTorch = () => <DataScienceTool name='PyTorch' url='https://pytorch.org/'/>


// DATABASES
const DatabaseTool = ({name, url}) =>  <Tool name={name} color='#177245' url={url}/>
export const MongoDB = () => <DatabaseTool name='MongoDB' url='https://mongodb.com/'/>
export const MySQL = () => <DatabaseTool name='MySQL' url='https://www.mysql.com/'/>


// MISC
export const S3 = () => <Tool name='S3' color='#8A2BE2' url='https://www.digitalocean.com/products/spaces'/>
export const Bash = () => <Tool name='Bash' color='#555555' url='https://www.gnu.org/software/bash/'/>
export const Fortran = () => <Tool name='Fortran' color='#536878' url='https://wg5-fortran.org/'/>
export const Jupyter = () => <Tool name='Jupyter' color='#6082B6' url='https://jupyter.org/'/>
