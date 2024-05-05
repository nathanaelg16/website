'use client'

import Image from "next/image";
import myImage from "../../public/assets/pic.png"
import {
  AspectRatio,
  Box,
  IconButton,
  List, ListDivider,
  ListItem, ListItemButton, ListItemContent, ListItemDecorator,
  Snackbar,
  Stack,
  Typography
} from "@mui/joy";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import DescriptionIcon from '@mui/icons-material/Description';
import BookIcon from '@mui/icons-material/Book';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkIcon from '@mui/icons-material/Work';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {useState} from "react";
import {KeyboardArrowRight} from "@mui/icons-material";
import Terminal from "@/app/terminal";
import {useRouter} from "next/navigation";

function PhotoCard() {
  return <Stack useFlexGap direction='column' sx={{my: 'auto', width: 0.30, height: '100%', flex: '0 0 auto', py: 1}} spacing={2}>
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
  const [showSnackbar, setShowSnackbar] = useState(false)

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('nathanaelg16@gmail.com')
    setShowSnackbar(true)
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
    <Snackbar open={showSnackbar} onClose={() => setShowSnackbar(false)} autoHideDuration={3000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} startDecorator={<ContentCopyIcon />} color='success' variant='soft'>
      Email copied to clipboard!
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
  const router = useRouter()

  return <Stack {...props} sx={{py: 2}} direction='row' spacing={5} justifyContent='space-between' alignItems='start'>
    <List size='lg' variant='outlined' color='neutral' sx={{borderRadius: 10, '--List-gap': '5px'}}>
      <Link title='Experience' startDecorator={<WorkIcon />} />
      <ListDivider/>
      <Link title='Projects' startDecorator={<AssignmentIcon />} onClick={() => router.push('/projects')} />
      <ListDivider/>
      <Link title='Blog' startDecorator={<BookIcon />} disabled={true}/>
    </List>
    <List size='lg' variant='outlined' color='neutral' sx={{borderRadius: 10, '--List-gap': '5px'}}>
      <Link title='Publications' startDecorator={<DescriptionIcon />} />
      <ListDivider/>
      <Link title='PGP Key' startDecorator={<KeyIcon />} onClick={() => window.location.href = '/assets/nathanael-gutierrez.asc'}/>
    </List>
  </Stack>
}

function Content() {
  return <Stack sx={{height: 1, flex: '1', px: 7, pt: 2, pr: 4, width: 'inherit', minWidth: 0}}>
    <Links flex='0' />
    <Terminal flex='1'/>
    <Socials flex='0' />
  </Stack>
}


export default function Home() {
  return <Box sx={{display: 'flex', width: '100svw', height: '100svh', userSelect: 'none'}}>
    <Stack direction='row' justifyContent='space-between' sx={{mx: 'auto', border: '2px solid var(--joy-palette-primary-900)', background: 'var(--joy-palette-primary-50)', borderRadius: 20, width: 0.75, height: 0.80, my: 10, px: 2, maxHeight: '600px'}}>
      <PhotoCard/>
      <Content/>
    </Stack>
  </Box>
}
