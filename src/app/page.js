'use client'

import Image from "next/image";
import myImage from "../../public/assets/pic.png"
import {
  AspectRatio,
  Box,
  IconButton, Input,
  List, ListDivider,
  ListItem, ListItemButton, ListItemContent, ListItemDecorator,
  Snackbar,
  Stack, Textarea,
  Typography
} from "@mui/joy";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import HomeIcon from '@mui/icons-material/Home';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import DescriptionIcon from '@mui/icons-material/Description';
import BookIcon from '@mui/icons-material/Book';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkIcon from '@mui/icons-material/Work';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {useCallback, useRef, useState} from "react";
import {KeyboardArrowRight} from "@mui/icons-material";
import {Fira_Code} from "next/font/google";

const FiraCode = Fira_Code({subsets: ['latin'], weight: ['300', '500', '700']})

function PhotoCard() {
  return <Stack useFlexGap direction='column' sx={{my: 'auto', width: 0.30, height: '100%', flex: '0 1 auto', py: 1}} spacing={2}>
    <AspectRatio flex ratio="16/9" objectFit="cover" sx={{width: 1, height: 1, borderRadius: 5, flexBasis: 200}}>
      <Image alt='Nathanael Gutierrez' src={myImage} placeholder="blur" />
    </AspectRatio>
    <Box sx={{borderRadius: 10, background: 'var(--joy-palette-primary-900)', px: 1, py: 0.5}}>
      <Typography sx={{color: 'white'}} textAlign='center' level='h4'>Nathanael Gutierrez</Typography>
      <Typography sx={{color: 'white'}} textAlign='center' level='title-md'>Software Engineer</Typography>
    </Box>
  </Stack>
}

function Socials() {
  const [showSnackbar, setShowSnackbar] = useState(false)

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('nathanaelg16@gmail.com')
    setShowSnackbar(true)
  }

  return <>
    <Stack sx={{mx: 'auto', mt: 'auto', mb: 2}} direction='row' spacing={2} useFlexGap justifyContent='start'>
      <IconButton onClick={() => window.location.href = "https://github.com/nathanaelg16"} size='lg' sx={{'--IconButton-size': '4rem', '&:hover': {background: 'transparent'}, '&:active': {background: 'transparent'}}}>
        <GitHubIcon />
      </IconButton>
      <IconButton onClick={copyEmailToClipboard} size='lg' sx={{'--IconButton-size': '4rem', '&:hover': {background: 'transparent'}, '&:active': {background: 'transparent'}}}>
        <EmailIcon />
      </IconButton>
    </Stack>
    <Snackbar open={showSnackbar} onClose={() => setShowSnackbar(false)} autoHideDuration={3000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} startDecorator={<ContentCopyIcon />} color='success' variant='soft'>
      Email copied to clipboard!
    </Snackbar>
  </>
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

function Links() {
  return <Stack sx={{py: 2}} direction='row' spacing={5} justifyContent='space-between' alignItems='start'>
    <List size='lg' variant='outlined' color='neutral' sx={{borderRadius: 10, '--List-gap': '5px'}}>
      <Link title='Experience' startDecorator={<WorkIcon />} />
      <ListDivider/>
      <Link title='Projects' startDecorator={<AssignmentIcon />} />
      <ListDivider/>
      <Link title='Publications' startDecorator={<DescriptionIcon />} />
    </List>
    <List size='lg' variant='outlined' color='neutral' sx={{borderRadius: 10, '--List-gap': '5px'}}>
      <Link title='Blog' startDecorator={<BookIcon />} disabled={true}/>
      <ListDivider/>
      <Link title='PGP Key' startDecorator={<KeyIcon />} onClick={() => window.location.href = '/assets/nathanael-gutierrez.asc'}/>
    </List>
  </Stack>
}

function Terminal() {
  const [command, setCommand] = useState('')
  const [response, setResponse] = useState('')

  const focus = useCallback(() => {
    const inputField = document.getElementById('terminalInput')
    if (inputField !== null) inputField.focus()
  }, [])

  const processCommand = () => {
    setResponse(`${command}: command not found`)
    setCommand('')
  }

  return <Stack sx={{height: 1, background: 'var(--joy-palette-primary-900)', border: '2px solid black', '&:focus-within:focus:active': {outline: 'none'}, borderRadius: 10}}>
    <Input spellCheck={false} value={command} onKeyDown={(e) => {
      if (e.key === 'Enter') processCommand()
    }} onChange={(e) => setCommand(e.target.value)} id='terminalInput' autoFocus className={FiraCode.className} sx={{color: 'white', background: 'transparent', border: 'none', '&::before': {display: 'none'}, '&:focus-within': {outline: 'none'}}}
           startDecorator={<Typography onClick={focus} className={FiraCode.className} sx={{color: 'white'}}>root@nathanaelg.com:~#</Typography>} />
    <Textarea spellCheck={false} className={FiraCode.className} value={response} onFocus={focus} sx={{color: 'white', background: 'var(--joy-palette-primary-900)', border: 'none', height: 1, '&::before': {display: 'none'}, '&:focus-within': {outline: 'none'}, borderTop: '1px solid white', borderRadius: 0}} />
  </Stack>
}

function Content() {
  return <Stack sx={{height: 1, flex: '1', px: 7, pt: 2, pr: 4}}>
    <Links />
    <Terminal />
    <Socials />
  </Stack>
}


export default function Home() {
  return <Box sx={{display: 'flex', width: '100svw', height: '100svh', userSelect: 'none'}}>
    <Stack direction='row' justifyContent='space-between' sx={{mx: 'auto', border: '2px solid var(--joy-palette-primary-900)', background: 'var(--joy-palette-primary-50)', borderRadius: 20, width: 0.75, height: 0.60, my: 10, px: 2}}>
      <PhotoCard />
      <Content />
    </Stack>
  </Box>
}
