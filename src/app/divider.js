import {Box} from "@mui/joy";

export default function Divider()  {
    return <Box sx={{borderBottom: '2px solid', borderImageSource: 'linear-gradient(to right, #00000000, 33%, #000000FF, 80%, #00000000)', borderImageSlice: 1, borderWidth: '2px'}} />
}
