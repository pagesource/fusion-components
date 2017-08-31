import Layout from "./components/Layout";

import Link from "next/link";
import Button from "../fusion/Button";
import Avatar from "../fusion/Avatar";
import Alert from "../fusion/Alert";
import Banner from "../fusion/Banner";
import Panel from "../fusion/Panel";
import Panel2 from "../fusion/Panel2";

import { ThemeProvider, withTheme } from "theming";
import theme from "../fusion/themes";

import Heading from "../fusion/Heading";
import Row from "../fusion/Row";
import Logo from "../fusion/Logo";
import ProgressCircle from "../fusion/ProgressCircle";
import Loader from "../fusion/Loader";
import ProgressBar from "../fusion/ProgressBar";
import PanelFooter from "../fusion/PanelFooter";
import PanelHeader from "../fusion/PanelHeader";
import Tooltip from "../fusion/Tooltip";
import Bounce from "../fusion/Bounce";
import Truncate from "../fusion/Truncate";
import Ripples from "../fusion/Ripples";
import Blockquote from "../fusion/Blockquote";
import BackgroundImage from "../fusion/BackgroundImage";
import Typing from "../fusion/Typing";
import Rating from "../fusion/Rating";
import CountdownTimer from "../fusion/CountdownTimer";
import Dialog from "../fusion/Dialog";
import Dropdown from "../fusion/Dropdown";
import Navbar from "../fusion/Navbar";
import CardGrid from "../fusion/CardGrid";
import Stepper from "../fusion/Stepper";
import ControlStepper from "../fusion/StepperControl";
import Pagination from "../fusion/Pagination";
import Doughnut from "../fusion/Doughnut";
import PieChart from "../fusion/PieChart";
import BarChart from "../fusion/HorizontalBarChart";
import ToggleButton from "../fusion/ToggleButton";
import StatusMessage from "../fusion/StatusMessage";

const KitchenSink = props =>
  <Layout>
    <ThemeProvider theme={theme}>
      <div>
      <div>
        <StatusMessage time={5000} message={"This is a <StatusMessage/> component. This will fade out in 5 secs"}/>
      </div>

      <h2>Toggle Button</h2>
      <div>
      <ToggleButton />
      </div>
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
          <ControlStepper />
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
          <CountdownTimer endTime="Jan 1, 2018 15:37:25" />
        </div>

        <h2>Rating</h2>
        <div>
          <Rating value="3" onClick="" />
        </div>
        <Row />
        <hr />

        <h2>Panel</h2>
        <div>
          <Panel>this is text inside panel</Panel>
        </div>
        <Row />
        <hr />

        <h2>Panel 2</h2>
        <div>
          <Panel2>this is text inside panel 2</Panel2>
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
          <Blockquote>
            Blockquote tag specifies a section that is quoted from another
            source.
          </Blockquote>
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
        <Bounce src="" text="Sapient razorfish" width="60px" />
        <Row />
        <hr />

        <h2>Bounce Image Animation</h2>
        <Bounce
          src="http://www.ipuntotv.com/IMAGES/Pelota.png"
          text=" "
          width="60px"
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
        <Avatar src="http://www.spaceandmotion.com/Images/albert-einstein-theory-general-relativity.jpg" />
        <hr />

        <h2>Alert </h2>
        <Alert>There was a problem rendering this box</Alert>
        <Row />
        <hr />

        <h2>BackgroundImage</h2>
        <div>
          <BackgroundImage
            picUrl="https://emotion.sh/a76dfa0d18a0536af9e917cdb8f873b9.png"
            width="400px"
          />
        </div>
        <Row />
        <hr />

        <h2>Banner </h2>
        <Banner src="http://lorempixel.com/560/150/sports" />
        <Row />
        <hr />
      </div>
    </ThemeProvider>;
  </Layout>;

export default KitchenSink;
