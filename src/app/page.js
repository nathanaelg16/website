import Image from "next/image";
import myImage from "./pic.png"
import {AspectRatio, Box, Card, Typography} from "@mui/joy";

export default function Home() {
  return <>
    <Box sx={{display: 'flex', width: 1, py: 20}}>
      <Card orientation='horizontal' sx={{mx: 'auto', width: 0.4}}>
        <AspectRatio ratio="1" objectFit="cover">
          <Image alt='Nathanael Gutierrez' src={myImage} placeholder="blur" />
        </AspectRatio>
        <Typography level='h2'>Nathanael Gutierrez</Typography>
      </Card>
    </Box>
  </>
}
