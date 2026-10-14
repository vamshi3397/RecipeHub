import { Stack } from "@mui/material"
import { Content } from "../Content"
import { Header } from "../Header"

export const Home = () => {

    return (<>
     <p>Popular Cuisines</p>
      <Stack sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        overflow: 'scroll'
      }}>
        <Header />
        <Content />
      </Stack>
    </>)
}