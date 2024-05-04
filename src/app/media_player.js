import {CircularProgress, IconButton, Snackbar, Stack, Typography} from "@mui/joy";
import styles from './media_player.module.css'
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

export default function MediaPlayer({open, onClose, song}) {
    const [paused, setPause] = useState(false)

    return <Snackbar size='lg' open={open} color='primary' variant='soft' anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} startDecorator={
        <CircularProgress size='lg' determinate value={0}>
            <IconButton variant='plain' onClick={() => setPause(!paused)}>
                {paused ? <PlayArrowIcon/> : <PauseIcon/>}
            </IconButton>
        </CircularProgress>
    } endDecorator={<IconButton variant='plain' onClick={onClose}><CloseIcon/></IconButton>}>
        <Stack direction='row' width={1}>
            <Typography sx={{mx: 'auto'}} textAlign='center' fontWeight='600'>{song}</Typography>
        </Stack>
    </Snackbar>
}
