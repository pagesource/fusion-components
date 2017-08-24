import Layout from './components/Layout'
import Link from 'next/link'
import Button from '../fusion/Button';
import Avatar from '../fusion/Avatar';
import Alert from '../fusion/Alert';
import Banner from '../fusion/Banner';

import { ThemeProvider, withTheme } from 'theming'
import theme from '../fusion/themes'

import Heading from '../fusion/Heading';
import Row from '../fusion/Row';
import Logo from '../fusion/Logo';
import Progress from '../fusion/Progress';
import Loader from '../fusion/Loader';
import ProgressBar from '../fusion/ProgressBar';
import PanelFooter from '../fusion/PanelFooter';
import PanelHeader from '../fusion/PanelHeader';
import Tooltip from '../fusion/Tooltip';
import Bounce from '../fusion/Bounce';
import Truncate from '../fusion/Truncate';
import Ripples from '../fusion/Ripples';
import Blockquote from '../fusion/Blockquote';
import BackgroundImage from '../fusion/BackgroundImage';
import Typing from '../fusion/Typing';
import Rating from '../fusion/Rating';
import CountdownTimer from '../fusion/CountdownTimer';

const KitchenSink = (props) => (
  <Layout>
    <ThemeProvider theme={theme}>
     <div>

     <h2>Celebrate New Year In</h2>
     <div>
        <CountdownTimer startTime="Jan 1, 2018 15:37:25"/>
     </div>

     <h2>Rating</h2>
     <div>
        <Rating value='3' onClick=""></Rating>
     </div>
     <Row />
     <hr />

    <h2>Typing</h2>
     <div>
        <Typing color="blue" text="The text to be displayed in typing style...!!"></Typing>
     </div>
     <Row />
     <hr />

    <h2>Blockquote</h2>
     <div>
        <Blockquote>Blockquote tag specifies a section that is quoted from another source.</Blockquote>
     </div>
     <Row />
     <hr />

     <h2>Ripples Animation</h2>
     <div>
        <Ripples></Ripples>
     </div>
     <Row />
     <hr />

     <h2>Truncate</h2>
        <Truncate>SomelongdataSomelongdataSomeataSomelongdataSomelongdataSomelongdataSomelongdata</Truncate>
     <Row />
     <hr />

     <h2>Bounce Text Animation</h2>
        <Bounce src="" text="Sapient razorfish" width="60px"/>
     <Row />
     <hr />

     <h2>Bounce Image Animation</h2>
        <Bounce src="http://www.ipuntotv.com/IMAGES/Pelota.png" text=" " width="60px"/>
     <Row />
     <hr />

    <h2>Tooltip </h2>
        <Tooltip />
     <Row />
     <hr />

     <h2>Progress Bar</h2>
        <ProgressBar />
     <Row />
     <hr />

      <h2>Circular Loader</h2>
        <Loader />
     <Row />
     <hr />

     <h2>Circular Progress</h2>
        <Progress />
     <Row />
     <hr />

     <h2>Logo</h2>
        <Logo src="https://emotion.sh/a76dfa0d18a0536af9e917cdb8f873b9.png" alt="fusion logo" />
     <Row />
     <hr />

    <h2>Heading</h2>
      <Heading></Heading>
     <Row />
     <hr />

     <h2>Button </h2>
     <Button>Button</Button>
     <Row />
     <hr />

     <h3>Avatar</h3>
     <Avatar src="http://www.spaceandmotion.com/Images/albert-einstein-theory-general-relativity.jpg" ></Avatar>
       <hr />

     <h2>Alert </h2>
     <Alert>There was a problem rendering this box</Alert>
     <Row />
     <hr />

    <h2>BackgroundImage</h2>
     <div>
        <BackgroundImage picUrl="https://emotion.sh/a76dfa0d18a0536af9e917cdb8f873b9.png" width="400px"></BackgroundImage>
     </div>
     <Row />
     <hr />

     <h2>Banner </h2>
     <Banner src ="http://lorempixel.com/560/150/sports" />
     <Row />
     <hr />
     </div>
     </ThemeProvider>
  </Layout>
)

export default KitchenSink
