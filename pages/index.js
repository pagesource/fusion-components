import Layout from './components/Layout'
import Link from 'next/link'
import Button from '../fusion/Button';
import Avatar from '../fusion/Avatar';
import Alert from '../fusion/Alert';
import Banner from '../fusion/Banner';

import { ThemeProvider, withTheme } from 'theming'
import theme from '../fusion/themes'



const KitchenSink = (props) => (
  <Layout>
    <ThemeProvider theme={theme}>
     <div>
     <h2>Button </h2>
     <Button>I'm a button</Button> 
     <hr/>
     <h3>Avatar</h3>
     <Avatar src="http://www.spaceandmotion.com/Images/albert-einstein-theory-general-relativity.jpg" ></Avatar>
     
       <h2>Alert </h2>
     <Alert>There was a problem rendering this box</Alert> 
     <hr/>


            <h2>Banner </h2>
     <Banner src ="http://lorempixel.com/560/150/sports" />
     <hr/>
     </div>
     </ThemeProvider>
  </Layout>
)

export default KitchenSink