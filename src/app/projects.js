'use client'

import {AspectRatio, Box, Grid, IconButton, Stack, Typography} from "@mui/joy";
import Image from "next/image";
import readerLogo from "../../public/assets/reader.png";
import brecksLogo from "../../public/assets/BRECKS.png";
import physicsInventoryLogo from "../../public/assets/Physics-Inventory.png"
import nispaLogo from "../../public/assets/nispa.png"
import iacsLogo from "../../public/assets/iacs.png"
import kolibriLogo from "../../public/assets/kolibri.png"
import {Open_Sans} from "next/font/google";
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import {
    Anthropic,
    Bash,
    Django,
    FastAPI,
    Fortran, Go,
    Java,
    JavaFX,
    JavaScript,
    Jupyter,
    Kotlin,
    Matplotlib,
    MongoDB,
    MPI4Py,
    MySQL,
    NextJS,
    NumPy,
    OpenAI,
    Pandas,
    Python,
    PyTorch,
    React as ReactTool,
    S3,
    SciPy,
    Spring,
    SQLite, TypeScript,
    VueJS, Wails
} from "@/app/tools";
import Divider from "@/app/divider";

const OpenSans = Open_Sans({weight: ['300', '500', '700'], subsets: ['latin']})

function Project({name, logo, description, tools, links = {url: null, github: null}, ratio = '16/9'}) {
    return <Grid container spacing={2}>
        <Grid xs={12} md={4} lg={3} sx={{display: 'flex'}}>
            <AspectRatio flex ratio={ratio} objectFit='contain' variant='outlined' sx={{mx: 'auto', my: 'auto', borderRadius: 'md', height: 1}} maxHeight={150}>
                <Image alt={name} src={logo} placeholder='blur' width={100} height={100}/>
            </AspectRatio>
        </Grid>
        <Grid xs>
            <Stack justifyContent='space-between' sx={{height: 1}} spacing={2}>
                <Stack direction='row' spacing={1} useFlexGap justifyContent='flex-start' alignItems='center'>
                    <Typography className={OpenSans.className} level='title-lg'>{name}</Typography>
                    {links.url && <IconButton onClick={() => window.location.href = links.url}><LanguageIcon /></IconButton>}
                    {links.github && typeof links.github === 'string' && <IconButton onClick={() => window.location.href = links.github}><CodeIcon /></IconButton>}
                    {links.github && Array.isArray(links.github) && links.github.map((url, index) => <IconButton key={index} onClick={() => window.location.href = url}><CodeIcon /></IconButton>)}
                </Stack>
                <Stack direction='row' spacing={1} flexWrap='wrap' justifyContent='flex-start' alignItems='center' useFlexGap>
                    {tools}
                </Stack>
                <Typography className={OpenSans.className}>{description}</Typography>
            </Stack>
        </Grid>
    </Grid>
}

export default function Projects() {
    return <Box className={`content`} sx={{mx: 'auto', height: 1, px: 2, pt: 5, width: {lg: 0.75, xs: 0.90}, background: '#ffffff'}}>
        <Typography sx={{color: 'black'}} textAlign='center' level='h2'>Projects</Typography>
        <Stack sx={{p: {xs: 0, md: 2, lg: 5}}} spacing={2}>
            <Project name='Reader' logo={readerLogo} ratio='1' links={{url: 'https://reader.nathanaelg.com'}} tools={[<Python key='py'/>, <FastAPI key='fa'/>, <NextJS key='nx'/>, <ReactTool key='rc' />, <OpenAI key='oa'/>, <Anthropic key='an'/>, <S3 key='s3'/>]} description='Reader is a full stack web application that converts web articles into narrated audio. It uses Playwright and Trafilatura for article extraction, Claude Haiku for titling, OpenAI models for speech synthesis and cover image generation, and S3 for delivery. The pipeline is engineered around the model calls, with chunked parallel synthesis within TTS character limits, image generation run concurrently with narration, and content-hash deduplication of resubmitted articles.' />
            <Divider />
            <Project name='Kolibri' logo={kolibriLogo} ratio='1' links={{url: 'https://learningequality.org/kolibri/', github: 'https://github.com/learningequality/kolibri'}} tools={[<Python key='py'/>, <Django key='dj'/>, <JavaScript key='js' />, <VueJS key='vu' />, <SQLite key='sq' />]} description='I am a contributor to Kolibri, an open-source, offline-first platform for teaching and learning with technology without requiring the Internet. The project uses a Vue.js front-end with a Django backend.' />
            <Divider />
            <Project name='BRECKS' logo={brecksLogo} links={{url: 'https://brecks.app', github: ['https://github.com/nathanaelg16/BRECKS_Client', 'https://github.com/nathanaelg16/BRECKS_API']}} tools={[<Java key='jv'/>, <Spring key='sp'/>, <JavaScript key='js' />, <ReactTool key='rc' />, <NextJS key='nx'/>, <MongoDB key='mg'/>, <MySQL key='my'/>, <S3 key='s3'/>]} description='BRECKS is a full stack web application created to help construction firms manage their daily operations at their job sites. Using BRECKS, firms can track the man-hours spent at their job sites each day, what materials were needed, which visitors were on site, and when the projects were on hold or completed. The BRECKS project uses Next.js + React for the front-end, a Java-based RESTful API service using the Spring framework, both relational and NoSQL databases, and S3-compatible document storage.'/>
            <Divider />
            <Project name='Physics Inventory' links={{github: 'https://github.com/nathanaelg16/physics-inventory'}} logo={physicsInventoryLogo} ratio='1' tools={[<Go key='go'/>, <Wails key='ws'/>, <TypeScript key='ts' />, <ReactTool key='rc' />, <MySQL key='my'/>]} description="The Physics Inventory app is a desktop application for tracking equipment and resources within Andrews University's Physics Department. Originally built in 2016 using Java and JavaFX, the application has been modernized with React, TypeScript, Go, and the Wails framework to provide a better user experience while maintaining the same core functionality. The system allows physics professors and teaching assistants to manage equipment inventory, track item locations, schedule maintenance, and coordinate laboratory activities across multiple courses." />
            <Divider />
            <Project name='Simulations of Type Iax Supernovae Undergoing Subsonic Burning' links={{url: 'https://iopscience.iop.org/article/10.3847/1538-4357/acf658'}} logo={iacsLogo} ratio='16/9' tools={[<Python key='py'/>, <MPI4Py key='mp'/>, <Pandas key='pd'/>, <NumPy key='np' />, <SciPy key='sp'/>, <Matplotlib key='plt'/>, <Jupyter key='jp' />, <Bash key='sh'/>, <Fortran key='ft' />]} description='In an Astronomical study of simulations of Type Iax supernovae undergoing subsonic burning, I developed, parallelized, and improved a number of programs used to analyze the results of the simulations. Using a round-robin-esque parallelization algorithm, I was able to achieve a 92.5% improvement in the runtime over the original analysis scripts. The improved scripts allowed the team to analyze terabytes of simulation data much faster than before. The results of the study were published in The Astrophysical Journal.' />
            <Divider />
            <Project name='Neuro-Inspired Stability-Plasticity Adaptation for Continual Learning' logo={nispaLogo} ratio='4/3' tools={[<Python key='py'/>, <PyTorch key='pt' />, <Pandas key='pd'/>, <NumPy key='np' />, <Jupyter key='jp' />]} description='The NISPA architecture is a neural network designed for task-incremental learning. The network randomly selects a number of neurons to be preserved (or plasticized), and rewires the network so that only non-plastic neurons are affected by subsequent training. I worked on an approach to improve the network by implementing a selection algorithm that identifies low importance neurons, restores plasticity to them, and rewires them, thereby expanding the capacity of the network between incremental learning phases.' />
        </Stack>
    </Box>
}
