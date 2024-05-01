import {useCallback, useRef, useState} from "react";
import {Box, Input, Stack, Typography} from "@mui/joy";
import {Fira_Code} from "next/font/google";

const FiraCode = Fira_Code({subsets: ['latin'], weight: ['300', '500', '700']})

class Node {
    constructor(name, type, content) {
        this.name = name
        this.type = type
        this.content = content
    }
}

const fileSystem = [new Node('recipes', 'dir', [

]), new Node('.secrets', 'dir', [])]

export default function Terminal() {
    const [command, setCommand] = useState('')
    const [response, setResponse] = useState('')
    const path = useRef([])

    const focus = useCallback(() => {
        const inputField = document.getElementById('terminalInput')
        if (inputField !== null) inputField.focus()
    }, [])

    const processCommand = () => {
        switch (command) {
            case "echo $SHELL":
                setResponse("/usr/bin/zsh")
                break
            case "ls":
                setResponse(<Typography className={FiraCode.className} color='primary'>{""}</Typography>)
                break
            default:
                setResponse(`${command}: command not found`)
        }

        setCommand('')
    }

    return <Stack sx={{height: 1, background: 'var(--joy-palette-primary-900)', border: '2px solid black', '&:focus-within:focus:active': {outline: 'none'}, borderRadius: 10}}>
        <Input spellCheck={false} value={command} onKeyDown={(e) => {
            if (e.key === 'Enter') processCommand()
        }} onChange={(e) => setCommand(e.target.value)} id='terminalInput' autoFocus className={FiraCode.className} sx={{color: 'white', background: 'transparent', border: 'none', '&::before': {display: 'none'}, '&:focus-within': {outline: 'none'}}}
               startDecorator={<Typography onClick={focus} className={FiraCode.className} sx={{color: 'white'}}>root@nathanaelg.com:~#</Typography>} />
        <Box className={FiraCode.className} onClick={focus} sx={{color: 'white', background: 'var(--joy-palette-primary-900)', border: 'none', height: 1, borderTop: '1px solid white', borderRadius: 0, overflowY: 'scroll', px: 1.5, py: 1}}>
            {response}
        </Box>
    </Stack>
}
