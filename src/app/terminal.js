import {useCallback, useRef, useState} from "react";
import {Box, Input, List, ListItem, Stack, Typography} from "@mui/joy";
import {Fira_Code} from "next/font/google";
import styles from './terminal.module.css'

const FiraCode = Fira_Code({subsets: ['latin'], weight: ['300', '500', '700']})
const {List : ImmutableList} = require('immutable')

class Node {
    constructor(name, type, content, hidden = false) {
        this.name = name
        this.type = type
        this.content = content
        this.hidden = hidden
    }
}

const Link = ({title, url}) => <ListItem>{title} <a href={url}>[Link]</a></ListItem>

const IngredientsList = ({children}) => {
    return <List className={`${FiraCode.className} ${styles.list}`} component="ul" marker='disc'>
        {children}
    </List>
}

const Ingredient = ({quantity, description}) => {
    return <ListItem><Typography className={`${FiraCode.className}`} sx={{color: 'white'}}><Typography fontWeight='700'>{quantity}</Typography>{quantity ? ' ' : ''}{description}</Typography></ListItem>
}

const fileSystem = [new Node('files', 'dir', [
    new Node('resume.pdf', 'file', <iframe src='/assets/resume.pdf' style={{width: '100%', height: '100%'}}></iframe>),
    new Node('reading-list.txt', 'file', <>
        <p># Currently Reading</p>
        <List className={`${FiraCode.className} ${styles.list}`} component="ol" marker="decimal">
            <Link title='Drown by Junot Diaz' url='https://a.co/d/04hzq1M'/>
            <Link title='The Prince and the Pauper by Mark Twain (Mandarin edition)' url='https://a.co/d/grYhpua'/>
        </List>
        <br/>
        <p># Want to Read</p>
        <List className={`${FiraCode.className} ${styles.list}`} component="ol" marker="decimal">
            <Link title='The Brief Wondrous Life of Oscar Wao by Junot Diaz' url='https://a.co/d/2lmliwv'/>
            <Link title='The Sparrow by Mary Doria Russell' url='https://a.co/d/2uEkxDl'/>
            <Link title='Everyone Who Is Gone Is Here by Jonathan Blitzer' url='https://a.co/d/eQCoo7U'/>
        </List>
        <br/>
        <p># Previously Read</p>
        <List className={`${FiraCode.className} ${styles.list}`} component="ol" marker="decimal">
            <Link title='Cultish: The Language of Fanaticism by Amanda Montell' url='https://a.co/d/6juJkWG'/>
            <Link title='Mad Honey by Jodi Picoult' url='https://a.co/d/6FxKcp7'/>
        </List>
    </>)
]), new Node('recipes', 'dir', [
    new Node('Pico-de-Avocado.txt', 'file', <>
        <p># Pico de Avocado</p>
        <p>## Adapted from <a href='https://www.tasteofhome.com/recipes/pico-de-gallo/'>Pico de Gallo [Taste of Home]</a></p>
        <br/>
        <p>### Ingredients</p>
        <IngredientsList>
            <Ingredient quantity='6' description='plum tomatoes, chopped'/>
            <Ingredient quantity='1' description='medium onion, chopped'/>
            <Ingredient quantity='1/2 cup' description='fresh cilantro, chopped'/>
            <Ingredient quantity='1 to 2' description='jalape&#241;o pepper(s), seeded and finely chopped'/>
            <Ingredient quantity='3 tbsp' description='lime juice (about 1 - 1.5 lime)'/>
            <Ingredient quantity='1 tbsp' description='cilantro stems, finely chopped'/>
            <Ingredient quantity='1' description='garlic clove, minced'/>
            <Ingredient quantity='1' description='large avocado, diced'/>
            <Ingredient quantity='3/4 tsp' description='salt'/>
        </IngredientsList>
        <br/>
        <p>### Directions</p>
        <List className={`${FiraCode.className} ${styles.list}`} component="ol" marker="decimal">
            <ListItem>In a medium bowl, combine all ingredients. Cover and refrigerate for 1-2 hours before serving.</ListItem>
        </List>
    </>),
    new Node('Greek-Quinoa-Salad.txt', 'file', <>
        <p># Greek Quinoa Salad</p>
        <p>## Source: <a href='https://www.foodnetwork.com/recipes/bobby-flay/greek-quinoa-salad-recipe-2109742'>[Food Network]</a></p>
        <br/>
        <p>### Ingredients</p>
        <IngredientsList>
            <Ingredient quantity='3 tbsp' description='freshly squeezed lemon juice'/>
            <Ingredient quantity='1 tbsp' description='red wine vinegar'/>
            <Ingredient quantity='1/4 tsp' description='dried oregano'/>
            <Ingredient quantity='1 clove' description='garlic, finely chopped and smashed to a paste'/>
            <Ingredient quantity='1/4 cup' description='extra virgin olive oil'/>
            <Ingredient quantity='1 cup' description='quinoa'/>
            <Ingredient quantity='2 cups' description='red and yellow grape tomatoes, halved'/>
            <Ingredient quantity='1 cup' description='pitted kalamata olives'/>
            <Ingredient quantity='2' description='green onions (green and pale green part), thinly sliced'/>
            <Ingredient quantity='2' description='pickled cherry peppers, diced'/>
            <Ingredient quantity='1' description='small red onion, halved and thinly sliced'/>
            <Ingredient quantity='1/2' description='English cucumber, cut into small dice'/>
            <Ingredient description='Kosher salt and ground black pepper, to taste'/>
            <Ingredient description='Feta, for sprinkling'/>
        </IngredientsList>
        <br/>
        <p>### Directions</p>
        <List className={`${FiraCode.className} ${styles.list}`} component="ol" marker="decimal">
            <ListItem>Whisk together the lemon juice, vinegar, oregano, garlic and some salt and pepper in a small bowl. Slowly whisk in the oil until emulsified. Let sit at room temperature while you prepare the salad to allow the flavors to meld.</ListItem>
            <ListItem>Rinse the quinoa in a strainer until the water runs clear. Combine the quinoa, 2 cups water, 1 tsp salt and 1/4 tsp pepper in a small saucepan, bring to a boil and cook until the water is absorbed and the quinoa is tender, about 15 minutes.</ListItem>
            <ListItem>Transfer to a bowl, fluff with a fork and let sit for 5 minutes to cool slightly. Add the tomatoes, olives, green onions, cherry peppers, red onions, cucumbers and dressing and toss to coat. Cover and refrigerate for at least 1 hour and up to 8 hours before serving. The longer it sits the better the flavor.</ListItem>
            <ListItem> Just before serving, transfer to a platter and sprinkle feta on top.</ListItem>
        </List>
    </>)
]), new Node('.secrets', 'dir', [], true), new Node('bookmarks.txt', 'file', <>
    <p># Bookmarks</p>
    <p>## Last updated: May 01, 2024</p>
    <br/>
    <p>### Favorite YouTube Videos</p>
    <List className={`${FiraCode.className} ${styles.list}`} component="ol" marker="decimal">
        <Link title="you can't watch this without smiling" url='/assets/video.mp4'/>
        <Link title="when you can't afford a choir but have a VILLAGE" url='https://www.youtube.com/watch?v=xTzmxNgPnS8'/>
    </List>
    <p>### Developer Resources</p>
    <List className={`${FiraCode.className} ${styles.list}`} component="ol" marker="decimal">
        <Link title='Absolute Minimum Every SWE Should Know About Unicode and Character Sets' url='https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/'/>
        <Link title='Awesome Public Datasets' url='https://github.com/awesomedata/awesome-public-datasets'/>
        <Link title='Free Programming Books' url='https://github.com/EbookFoundation/free-programming-books'/>
    </List>
</>)]

export default function Terminal(props) {
    const [hidden, setHidden] = useState(false)
    const [command, setCommand] = useState('')
    const [response, setResponse] = useState('')
    const [path, setPath] = useState(ImmutableList())
    const aliases = useRef({})
    const variables = useRef({
        '$SHELL': '/usr/bin/zsh'
    })

    const focus = useCallback(() => {
        const inputField = document.getElementById('terminalInput')
        if (inputField !== null) inputField.focus()
    }, [])

    const getPathNodes = (includeHidden = false) => {
        let nodes = fileSystem
        if (path.size > 0) {
            for (let i = 0; i < path.size; i++) {
                nodes = nodes.filter((node) => node.name === path.get(i))
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

    const listNodes = (nodes) => {
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

    const echo = (commands) => {
        if (commands.length === 1) setResponse('')
        else setResponse(commands.slice(1).join(' '))
        return false
    }

    const ls = (commands) => {
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
            } else unrecognizedOption = cmd

            if (listHidden || unrecognizedOption) break
        }

        if (unrecognizedOption) return `invalid option ${unrecognizedOption}`
        else setResponse(listNodes(getPathNodes(listHidden)))

        return false
    }

    const cat = (commands) => {
        if (commands.length === 1) return 'no arguments provided'

        const nodes = getPathNodes(true)
        const result = nodes.filter((node) => node.name === commands[1])

        if (result.length === 0) return 'no such file'
        else if (result[0].type === 'dir') return `\`${commands[1]}\` is a directory`
        else setResponse(result[0].content)

        return false
    }

    const alias = (commands) => {
        if (commands.length !== 2 || !commands[1].includes('=')) return 'bad assignment'

        const aliased = commands[1].split('=')

        if (aliased.length !== 2 || aliased[0] === '' || aliased[1] === '') return 'bad assignment'

        aliases.current[aliased[0]] = aliased[1]
        setResponse('')

        return false
    }

    const exportCmd = (commands) => {
        if (commands.length !== 2 || !commands[1].includes('=')) return 'bad assignment'

        const exported = commands[1].split('=')

        if (exported.length !== 2 || exported[0] === '' || exported[1] === '') return 'bad assignment'

        variables.current[`$${exported[0]}`] = exported[1]
        setResponse('')

        return false
    }

    const cd = (commands) => {
        if (commands.length > 2) return `invalid arguments \`${commands.slice(2).join(' ')}\``

        if (commands.length === 1 || commands[1] === '~') setPath(new ImmutableList())
        else if (commands[1] === '..') setPath(path.pop())
        else {
            const node = getPathNodes(true).find((node) => node.name === commands[1])
            if (!node) return `invalid directory \`${commands[1]}\``
            if (node.type === 'file') return `\`${commands[1]}\` is a file`

            setPath(path.push(node.name))
        }

        setResponse('')
        return false
    }

    const exit = () => {
        setResponse('Goodbye!')
        setTimeout(() => setHidden(true), 2000)
    }

    const processCommand = (command) => {
        let commands = command.trim().split(' ')
        commands = commands.map((cmd) => {
            if (cmd.startsWith('$')) {
                if (cmd in variables.current) return variables.current[cmd]
                else return ''
            } else return cmd
        })

        let error = false

        switch (commands[0]) {
            case "echo":
                error = echo(commands)
                break
            case "ls":
                error = ls(commands)
                break
            case 'whoami':
                setResponse('root')
                break
            case 'hostname':
                setResponse('nathanaelg.com')
                break;
            case 'cat':
                error = cat(commands)
                break
            case '':
            case ' ':
                setResponse(' ')
                break
            case 'alias':
                error = alias(commands)
                break
            case 'export':
                error = exportCmd(commands)
                break
            case 'cd':
                error = cd(commands)
                break
            case 'exit':
                exit()
                break
            default:
                if (commands[0] in aliases.current) {
                    commands[0] = aliases.current[commands[0]]
                    processCommand(commands.join(' '))
                } else setResponse(`${commands[0]}: command not found`)
        }

        if (error) setResponse(`${commands[0]}: ${error}`)

        setCommand('')
    }

    const processAutocomplete = () => {
        if (command.trim() === '') return
        const commands = command.trim().split(' ')
        const query = commands[commands.length - 1]
        const matches = getPathNodes(true).find((node) => node.name.startsWith(query))
        if (matches) {
            commands[commands.length - 1] = matches.name
            setCommand(commands.join(' '))
        }
    }

    return <Stack {...props} className={`${styles.terminal} ${hidden ? styles.hidden : ''}`} sx={{background: 'var(--joy-palette-primary-900)', border: '2px solid black', '&:focus-within:focus:active': {outline: 'none'}, borderRadius: 10, overflowWrap: 'break-word', overflowY: 'hidden'}}>
        <Input spellCheck={false} value={command} onKeyDown={(e) => {
            if (e.key === 'Enter') processCommand(command)
            else if (e.key === 'Tab') {
                processAutocomplete()
                e.preventDefault()
            }
        }} onChange={(e) => setCommand(e.target.value)} id='terminalInput' autoFocus className={FiraCode.className} sx={{color: 'white', background: 'transparent', border: 'none', '&::before': {display: 'none'}, '&:focus-within': {outline: 'none'}}}
               startDecorator={<Typography onClick={focus} className={FiraCode.className} sx={{color: 'white'}}>root@nathanaelg.com:~{path.size === 0 ? '' : '/'}{path.join('/')}#</Typography>} />
        <Box className={`${FiraCode.className} ${styles.response}`} onClick={focus} sx={{px: 1.5, py: 1}}>
            {response}
        </Box>
    </Stack>
}
