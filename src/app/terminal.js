import {useCallback, useRef, useState} from "react";
import {Box, Input, Stack, Typography} from "@mui/joy";
import {Fira_Code} from "next/font/google";

const FiraCode = Fira_Code({subsets: ['latin'], weight: ['300', '500', '700']})

class Node {
    constructor(name, type, content, hidden = false) {
        this.name = name
        this.type = type
        this.content = content
        this.hidden = hidden
    }
}

const fileSystem = [new Node('music', 'dir', []), new Node('recipes', 'dir', [

]), new Node('.secrets', 'dir', [], true), new Node('bookmarks.txt', 'file', <>
    <p># Bookmarks</p>
    <p>## Last updated: May 01, 2024</p>
    <br/><br/>
    <p>### Interesting Wikipedia Articles</p>
    <p style={{overflowWrap: 'break-word', overflowX: 'scroll'}}>1. Asherah (<a href='https://en.wikipedia.org/wiki/Asherah'>https://en.wikipedia.org/wiki/Asherah</a>)</p>AntidisestablishmentarianismAntidisestablishmentarianismAntidisestablishmentarianismAntidisestablishmentarianismAntidisestablishmentarianismarianismAntidisestablishmentarianism<br/>
</>)]

export default function Terminal(props) {
    const [command, setCommand] = useState('')
    const [response, setResponse] = useState('')
    const path = useRef([])

    const focus = useCallback(() => {
        const inputField = document.getElementById('terminalInput')
        if (inputField !== null) inputField.focus()
    }, [])

    const getPathNodes = (includeHidden = false) => {
        let nodes = fileSystem
        if (path.current.length > 0) {
            for (let i = 0; i < path.current.length; i++) {
                nodes = nodes.filter((node) => node.name === path.current[i])
                    .flatMap((node) => node.content)
            }
        }

        if (!includeHidden) nodes = nodes.filter((node) => !node.hidden)

        nodes.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name)
            else {
                if (a.type === 'dir') return -1;
                else return 1;
            }
        })

        return nodes;
    }

    const ls = (nodes) => {
        return <Stack direction='row' justifyContent='start' alignItems='center' useFlexGap spacing={4} flexWrap='wrap'>
            {nodes.map((node) => {
                const sx = {}, props = {}

                switch (node.type) {
                    case 'dir':
                        props.color = 'primary'
                        break;
                    case 'file':
                        sx.color = 'white'
                        break;
                    default:
                        break;
                }

                return <Typography key={node.name} className={FiraCode.className} sx={{...sx}} {...props}>{node.name}</Typography>
            })}
        </Stack>
    }

    const processCommand = () => {
        let commands = command.split(' ')
        switch (commands[0]) {
            case "echo":
                const response = []
                commands.slice(1).forEach((cmd) => {
                    if (cmd.startsWith('$')) {
                        switch (cmd) {
                            case '$SHELL':
                                response.push('/usr/bin/zsh')
                                break
                            default:
                                response.push('')
                        }
                    } else response.push(cmd)
                })
                setResponse(response.join(' '))
                break
            case "ls":
                let listHidden = false
                let unrecognizedOption = false

                for (const cmd of commands.slice(1)) {
                    if (cmd.startsWith('-')) {
                        switch (cmd) {
                            case '-lA':
                            case '-A':
                            case '-la':
                            case '-a':
                                listHidden = true
                                break
                            default:
                                unrecognizedOption = cmd
                        }
                    }

                    if (listHidden || unrecognizedOption) break
                }

                if (unrecognizedOption) setResponse(`${commands[0]}: invalid option ${unrecognizedOption}`)
                else setResponse(ls(getPathNodes(listHidden)))
                break;
            case 'whoami':
                setResponse('root')
                break
            case 'hostname':
                setResponse('nathanaelg.com')
                break;
            case 'cat':
                let error = false
                if (commands.length === 1) {
                    setResponse(`${commands[0]}: no arguments provided`)
                    break
                }

                const nodes = getPathNodes(true)
                const result = nodes.filter((node) => node.name === commands[1])

                if (result.length === 0) error = 'no such file'
                else if (result[0].type === 'dir') error = `\`${commands[1]}\` is a directory`

                if (error) setResponse(`${commands[0]}: ${error}`)
                else setResponse(result[0].content)
                break
            case '':
            case ' ':
                setResponse(' ')
                break
            default:
                setResponse(`${commands[0]}: command not found`)
        }

        setCommand('')
    }

    return <Stack {...props} sx={{background: 'var(--joy-palette-primary-900)', border: '2px solid black', '&:focus-within:focus:active': {outline: 'none'}, borderRadius: 10, overflowY: 'scroll', overflowWrap: 'break-word', overflowX: 'hidden'}}>
        <Input spellCheck={false} value={command} onKeyDown={(e) => {
            if (e.key === 'Enter') processCommand()
        }} onChange={(e) => setCommand(e.target.value)} id='terminalInput' autoFocus className={FiraCode.className} sx={{color: 'white', background: 'transparent', border: 'none', '&::before': {display: 'none'}, '&:focus-within': {outline: 'none'}}}
               startDecorator={<Typography onClick={focus} className={FiraCode.className} sx={{color: 'white'}}>root@nathanaelg.com:~#</Typography>} />
        <Box className={FiraCode.className} onClick={focus} sx={{color: 'white', background: 'var(--joy-palette-primary-900)', border: 'none', height: 1, borderTop: '1px solid white', borderRadius: 0, px: 1.5, py: 1, overflowWrap: 'break-word', overflowX: 'scroll'}}>
            {response}
        </Box>
    </Stack>
}
