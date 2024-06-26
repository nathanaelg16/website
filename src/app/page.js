'use client'

import Image from "next/image";
import myImage from "../../public/assets/pic.png"
import {
  AspectRatio,
  Box,
  IconButton,
  List,
  ListDivider,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Skeleton,
  Snackbar,
  Stack,
  Typography,
  useTheme
} from "@mui/joy";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import BookIcon from '@mui/icons-material/Book';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {useEffect, useRef, useState} from "react";
import {KeyboardArrowRight} from "@mui/icons-material";
import Terminal from "@/app/terminal";
import {useMediaQuery} from "@mui/material";
import Projects from "@/app/projects";

function PhotoCard() {
  return <Stack useFlexGap direction='column' sx={{my: 'auto', width: {xs: 1, md: 0.30}, height: {xs: 'unset', md: 1}, flex: '1', py: 1}} spacing={2}>
    <AspectRatio flex ratio="16/9" objectFit="cover" sx={{borderRadius: 5, flexBasis: 200}}>
      <Image alt='Nathanael Gutierrez' src={myImage} placeholder="blur" />
    </AspectRatio>
    <Box sx={{borderRadius: 10, background: 'var(--joy-palette-primary-900)', px: 1, py: 0.5}}>
      <Typography sx={{color: 'white'}} textAlign='center' level='h4'>Nathanael Gutierrez</Typography>
      <Typography sx={{color: 'white'}} textAlign='center' level='title-md'>Software Engineer</Typography>
    </Box>
  </Stack>
}

function Socials(props) {
  const [snackbar, setSnackbar] = useState({show: false, color: 'success', content: ''})

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('nathanaelg16@gmail.com')
        .then(() => setSnackbar({show: true, color: 'success', content: 'Email copied to clipboard!'}))
        .catch(() => setSnackbar({show: true, color: 'danger', content: 'Unable to copy email to clipboard!'}))
  }

  return <Box {...props} sx={{mx: 'auto', mt: 'auto', mb: 2}}>
    <Stack direction='row' spacing={2} useFlexGap justifyContent='start'>
      <IconButton onClick={() => window.location.href = "https://github.com/nathanaelg16"} size='lg' sx={{'--IconButton-size': '4rem', '&:hover': {background: 'transparent'}, '&:active': {background: 'transparent'}}}>
        <GitHubIcon />
      </IconButton>
      <IconButton onClick={copyEmailToClipboard} size='lg' sx={{'--IconButton-size': '4rem', '&:hover': {background: 'transparent'}, '&:active': {background: 'transparent'}}}>
        <EmailIcon />
      </IconButton>
    </Stack>
    <Snackbar open={snackbar.show} onClose={() => setSnackbar({...snackbar, show: false})} autoHideDuration={3000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} startDecorator={<ContentCopyIcon />} color={snackbar.color} variant='soft'>
      {snackbar.content}
    </Snackbar>
  </Box>
}

function Link({title, startDecorator, endDecorator, onClick, disabled = false}) {
  return <ListItem sx={{cursor: disabled ? 'not-allowed' : 'auto'}}>
    <ListItemButton disabled={disabled} color='primary' onClick={disabled ? () => {} : onClick}>
      <ListItemDecorator>{startDecorator}</ListItemDecorator>
      <ListItemContent>{title}</ListItemContent>
      {endDecorator ? endDecorator : <KeyboardArrowRight />}
    </ListItemButton>
  </ListItem>
}

function Links({flex, refs}) {
  const theme = useTheme()
  const widthMatches = useMediaQuery(theme.breakpoints.down('md'))

  const links = [
    <Link key='proj' title='Projects' startDecorator={<AssignmentIcon />} onClick={() => refs.projects.current.scrollIntoView({behavior: 'smooth'})} />,
    <Link key='pgp' title='PGP Key' startDecorator={<KeyIcon />} onClick={() => window.location.href = '/assets/nathanael-gutierrez.asc'}/>,
    <Link key='blog' title='Blog' startDecorator={<BookIcon />} disabled={true}/>,
  ]

  const addDividers = (links) => {
    const result = []
    for (let i = 0; i < links.length - 1; i++) {
      result.push(links[i])
      result.push(<ListDivider key={`${links[i].key}-div`} />)
    }

    result.push(links[links.length - 1])

    return result
  }

  return  <Stack flex={flex} sx={{py: 2, mx: 'auto', width: 1}} direction='row' spacing={5} justifyContent='space-between'
             alignItems='start'>
        {widthMatches || links.length <= 3 ? <List size='lg' variant='outlined' color='neutral' sx={{borderRadius: 10, '--List-gap': '5px'}}>
          {addDividers(links)}
        </List> : <>
          <List size='lg' variant='outlined' color='neutral' sx={{borderRadius: 10, '--List-gap': '5px'}}>
            {addDividers(links.slice(0, links.length / 2 ))}
          </List>
          <List size='lg' variant='outlined' color='neutral' sx={{borderRadius: 10, '--List-gap': '5px'}}>
            {addDividers(links.slice(links.length / 2))}
          </List>
        </>}
      </Stack>
}

function Content({refs}) {
  return <Stack sx={{height: 1, flex: '1', px: {lg: 7, md: 4, xs: 0}, pt: 2, width: 1, minWidth: 0}}>
    <Links refs={refs} flex='0' />
    <Terminal flex='1'/>
    <Socials flex='0' />
  </Stack>
}

function Main({refs}) {
  return <Stack direction={{xs: 'column', md: 'row'}} justifyContent='space-between' sx={{mx: 'auto', border: '2px solid var(--joy-palette-primary-900)', background: 'var(--joy-palette-primary-50)', borderRadius: 20, width: {lg: 0.75, xs: 0.90}, height: {md: 0.80, xs: 1}, px: 2, maxHeight: {md: '600px', xs: 'unset'}, my: {xs: 2, md: 'auto'}}}>
    <PhotoCard />
    <Content refs={refs}/>
  </Stack>
}

export default function Home() {
  const projectsRef = useRef()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [setLoading]);

  return <Box>
    <Skeleton loading={loading}>
      <Box id='mainBox' sx={{display: 'flex', width: {md: '100svw', xs: 'unset'}, height: {xs: 'auto', md: '100svh'}, userSelect: 'none', minHeight: {xs: '100%', md: '420px'}, background: 'var(--joy-palette-warning-50)', pb: {xs: 3, lg: 'unset'}}}>
        <Main refs={{projects: projectsRef}} />
      </Box>
      <Box ref={projectsRef} sx={{background: '#b4c0e0', py: {xs: 5, md: 10}}}>
        <Projects />
      </Box>
    </Skeleton>
  </Box>
}
