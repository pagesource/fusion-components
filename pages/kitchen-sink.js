import React from 'react';
import { ThemeProvider } from 'theming';
import {
  Alert,
  Avatar,
  BackgroundImage,
  Banner,
  BarChart,
  BlockQuote,
  Bounce,
  Button,
  CardGrid,
  CountDownTimer,
  Dialog,
  Doughnut,
  Dropdown,
  Heading,
  Loader,
  Logo,
  Navbar,
  Pagination,
  Panel,
  Panel2,
  PieChart,
  ProgressBar,
  ProgressCircle,
  Rating,
  Ripples,
  Row,
  SelectRating,
  StatusMessage,
  Stepper,
  StepperControl,
  Tabs,
  theme,
  ToggleButton,
  Tooltip,
  Truncate,
  Typing,
  YTEmbed,
  Carousel,
} from '../';
import Layout from './components/Layout';

const KitchenSink = () => (
  <Layout>
    <ThemeProvider theme={theme}>
      <div>
        <h2>Embed Youtube, Pass video id, width and height</h2>
        <YTEmbed id="PCMXQonN0gM" width={560} height={320} />
        <h2>Toggle Button</h2>
        <ToggleButton />
        <Row />
        <hr />
        <h2>Status Message</h2>
        <StatusMessage time={5000} message="This is a status message" />
        <Row />
        <hr />
        <h2>Horizontal bar Chart</h2>
        <div>
          <BarChart />
        </div>
        <Row />
        <hr />
        <h2>Pie Chart</h2>
        <div>
          <PieChart />
        </div>
        <Row />
        <hr />
        <h2>Doughnut</h2>
        <div>
          <Doughnut />
        </div>
        <Row />
        <hr />
        <h2>Pagination</h2>
        <div>
          <Pagination />
        </div>
        <Row />
        <hr />
        <h2>Controlled Stepper</h2>
        <div>
          <StepperControl />
        </div>
        <Row />
        <hr />
        <h2>Stepper component</h2>
        <div>
          <Stepper />
        </div>
        <Row />
        <hr />

        <h2>Navbar</h2>
        <div>
          <Navbar />
        </div>
        <Row />
        <hr />

        <h2>Dropdown</h2>
        <div>
          <Dropdown />
        </div>
        <Row />
        <hr />

        <h2>Fusion dialog box</h2>
        <div>
          <Dialog />
        </div>
        <Row />
        <hr />

        <h2>Card</h2>
        <div>
          <CardGrid />
        </div>
        <Row />
        <hr />

        <h2>Celebrate New Year In</h2>
        <div>
          <CountDownTimer endTime="Jan 1, 2019 15:37:25" />
        </div>

        <h2>Show Rating</h2>
        <div>
          <Rating value={3} />
        </div>
        <Row />
        <hr />

        <h2>Select Rating</h2>
        <SelectRating value={0} />
        <Row />
        <hr />
        <h2>Panel</h2>
        <div>
          <Panel>
            <span>this is text inside panel</span>
          </Panel>
        </div>
        <Row />
        <hr />

        <h2>Panel 2</h2>
        <div>
          <Panel2>
            <span>this is text inside panel 2</span>
          </Panel2>
        </div>
        <Row />
        <hr />

        <h2>Typing</h2>
        <div>
          <Typing text="The text to be displayed in typing style...!!" />
        </div>
        <Row />
        <hr />

        <h2>Blockquote</h2>
        <div>
          <BlockQuote>
            <span>
              Blockquote tag specifies a section that is quoted from another
              source.
            </span>
          </BlockQuote>
        </div>
        <Row />
        <hr />

        <h2>Ripples Animation</h2>
        <div>
          <Ripples />
        </div>
        <Row />
        <hr />

        <h2>Truncate</h2>
        <Truncate>
          SomelongdataSomelongdataSomeataSomelongdataSomelongdataSomelongdataSomelongdata
        </Truncate>
        <Row />
        <hr />

        <h2>Bounce Text Animation</h2>

        <Bounce src="" text="Lorumtr Ipsumgypum" width={60} />

        <Row />
        <hr />

        <h2>Bounce Image Animation</h2>
        <Bounce
          src="http://www.ipuntotv.com/IMAGES/Pelota.png"
          text=" "
          width={60}
        />
        <Row />
        <hr />

        <h2>Tooltip </h2>
        <Tooltip />
        <Row />
        <hr />

        <h2>Progress Bar</h2>
        <ProgressBar value={40} />
        <Row />
        <hr />

        <h2>Circular Loader</h2>
        <Loader />
        <Row />
        <hr />

        <h2> Progress Circle</h2>
        <ProgressCircle value={25} />
        <Row />
        <hr />

        <h2>Logo</h2>
        <Logo
          src="https://emotion.sh/a76dfa0d18a0536af9e917cdb8f873b9.png"
          alt="fusion logo"
        />
        <Row />
        <hr />

        <h2>Heading</h2>
        <Heading />
        <Row />
        <hr />

        <h2>Button </h2>
        <Button>Button</Button>
        <Row />
        <hr />

        <h3>Avatar</h3>
        <Avatar
          src="http://www.spaceandmotion.com/Images/albert-einstein-theory-general-relativity.jpg"
          alt="Avatar Image"
        />
        <hr />

        <h2>Alert </h2>
        <Alert>
          <span>There was a problem rendering this box</span>
        </Alert>
        <Row />
        <hr />

        <h2>BackgroundImage</h2>
        <div>
          <BackgroundImage width={400} />
        </div>
        <Row />
        <hr />

        <h2>Banner </h2>
        <Banner src="http://lorempixel.com/560/150/sports" alt="Banner" />
        <Row />
        <hr />

        <h2>Tabs</h2>
        <Tabs />
        <Row />
        <hr />

        <h2>Carousel</h2>
        <Carousel
          leftNavigation={() => {}}
          rightNavigation={() => {}}
          carouselData={[
            {
              url: 'http://via.placeholder.com/350x150',
              selected: true,
              title: '1',
            },
            {
              url: 'http://via.placeholder.com/450x150',
              selected: false,
              title: '2',
            },
          ]}
        />
        <Row />
        <hr />
      </div>
    </ThemeProvider>
  </Layout>
);

export default KitchenSink;
