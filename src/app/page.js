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
import WorkIcon from '@mui/icons-material/Work';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {useState} from "react";
import {KeyboardArrowRight} from "@mui/icons-material";
import Terminal from "@/app/terminal";
import {useRouter} from "next/navigation";
import {useMediaQuery} from "@mui/material";

function PhotoCard({matchesWidth}) {
  return <Stack useFlexGap direction='column' sx={{my: 'auto', width: matchesWidth ? 1 : 0.30, height: matchesWidth ? 0.5 : 1, flex: '0 0 auto', py: 1}} spacing={2}>
    <AspectRatio flex ratio="16/9" objectFit="cover" sx={{width: 1, height: 1, borderRadius: 5, flexBasis: 200}}>
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
    <Snackbar open={snackbar.show} onClose={() => setSnackbar({show: false, ...snackbar})} autoHideDuration={3000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} startDecorator={<ContentCopyIcon />} color={snackbar.color} variant='soft'>
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

function Links(props) {
  const theme = useTheme()
  const widthMatches = useMediaQuery(theme.breakpoints.down('md'))
  const router = useRouter()

  const links = [
    <Link key='exp' title='Experience' startDecorator={<WorkIcon />} />,
    <Link key='proj' title='Projects' startDecorator={<AssignmentIcon />} onClick={() => router.push('/projects')} />,
    <Link key='blog' title='Blog' startDecorator={<BookIcon />} disabled={true}/>,
    <Link key='pgp' title='PGP Key' startDecorator={<KeyIcon />} onClick={() => window.location.href = '/assets/nathanael-gutierrez.asc'}/>
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

  return widthMatches ? <List size='lg' variant='outlined' color='neutral' sx={{borderRadius: 10, '--List-gap': '5px', width: 1, mt: 2}}>
        {addDividers(links)}
      </List> :
      <Stack {...props} sx={{py: 2, mx: 'auto', width: 1}} direction='row' spacing={5} justifyContent='space-between'
             alignItems='start'>
        <List size='lg' variant='outlined' color='neutral' sx={{borderRadius: 10, '--List-gap': '5px'}}>
          {addDividers(links.slice(0, links.length / 2 ))}
        </List>
        <List size='lg' variant='outlined' color='neutral' sx={{borderRadius: 10, '--List-gap': '5px'}}>
          {addDividers(links.slice(links.length / 2))}
        </List>
      </Stack>

}

function Content() {
  return <Stack sx={{height: 1, flex: '1', px: {lg: 7, md: 4, xs: 0}, pt: 2, width: 1, minWidth: 0}}>
    <Links flex='0' />
    <Terminal flex='1'/>
    <Socials flex='0' />
  </Stack>
}


export default function Home() {
  const theme = useTheme()
  const matchesWidth = useMediaQuery(theme.breakpoints.down('md'))

  const sx = matchesWidth ? {overflowY: 'scroll'} : {}

  return <Box sx={{display: 'flex', width: {md: '100svw', xs: 'unset'}, height: {md: '100svh', xs: 'unset'}, userSelect: 'none', minHeight: '400px'}}>
    <Stack direction={matchesWidth ? 'column' : 'row'} justifyContent='space-between' sx={{mx: 'auto', border: '2px solid var(--joy-palette-primary-900)', background: 'var(--joy-palette-primary-50)', borderRadius: 20, width: {lg: 0.75, xs: 0.90}, height: {md: 0.80, xs: 1}, px: 2, maxHeight: {md: '600px', xs: 'unset'}, my: matchesWidth ? 2 : 'auto', ...sx}}>
      <PhotoCard matchesWidth={matchesWidth}/>
      <Content/>
    </Stack>
  </Box>
}
