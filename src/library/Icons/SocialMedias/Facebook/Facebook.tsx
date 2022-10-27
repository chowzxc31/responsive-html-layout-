import "./Facebook.scss";
import classNames from "classnames";

interface IFacebook {
  width?: number | string;
  className?: string;
}

const Facebook: React.FC<IFacebook> = ({ width, className }) => {
  const svgclassnames = classNames("fb-svg", className);

  return (
    <svg
      className={svgclassnames}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 40 40"
    >
      <path
        className="st0"
        d="M0.1,6.2v27.4c0,3.4,2.8,6.2,6.2,6.2h13.3v-14h-3.3c-0.5,0-1-0.4-1-1v-4.5c0-0.5,0.4-1,1-1h3.3V14
	c0,0,0-6.8,6.6-6.8h4.7c0.5,0,1,0.4,1,1V12c0,0.5-0.4,1-1,1h-3.4c0,0-1.5,0.1-1.5,2.1s0,4.5,0,4.5h5.2c0.6,0,1.1,0.5,1,1.1l-0.6,4.4
	c-0.1,0.5-0.5,0.8-1,0.8h-4.7v14h8c3.4,0,6.2-2.8,6.2-6.2V6.2C40,2.8,37.2,0,33.8,0H6.3C2.9,0,0.1,2.8,0.1,6.2z"
      />
      <g className="st1">
        <path
          className="st2"
          d="M20,10.6c-5.4,0-9.8,4.4-9.8,9.8s4.4,9.8,9.8,9.8s9.8-4.4,9.8-9.8S25.4,10.6,20,10.6z M20,26.1
		c-3.2,0-5.7-2.6-5.7-5.7s2.6-5.7,5.7-5.7s5.7,2.6,5.7,5.7S23.2,26.1,20,26.1z"
        />
        <circle className="st2" cx="30.9" cy="10.6" r="2.2" />
        <path
          className="st2"
          d="M28.6,0H11.4C5.1,0,0,5.1,0,11.4v17.2C0,34.9,5.1,40,11.4,40h17.2C34.9,40,40,34.9,40,28.6V11.4
		C40,5.1,34.9,0,28.6,0z M36.1,27.8c0,4.1-3.3,7.4-7.4,7.4H11.4c-4.1,0-7.4-3.3-7.4-7.4V11.7c0-4.1,3.3-7.4,7.4-7.4h17.4
		c4.1,0,7.4,3.3,7.4,7.4v16.1H36.1z"
        />
      </g>
      <path
        className="st3"
        d="M20,0C9,0,0,9,0,20s9,20,20,20s20-9,20-20S31,0,20,0z M28.8,15.6c0,0,0.3,5.5-3.2,9.3s-9,6.5-16.3,2.6
	c0,0,4.9,0.1,6.3-2.2c0,0-3.5-0.1-4.1-3.1c0,0,1.4,0.4,1.9-0.1c0,0-3.5-0.9-3.6-4.6c0,0,1.3,0.9,2.1,0.5c0,0-3-1.7-1.5-6.2
	c0,0,3.1,4.6,9.3,4.7c0,0-0.4-2.9,1.1-4.3c1.4-1.4,4.6-2.2,6.7,0.4c0,0,1.9-0.2,2.8-1.3c0,0-0.2,1.3-1.6,2.4c0,0,1.6,0.1,2.1-0.6
	C30.7,13.2,30.4,14.8,28.8,15.6z"
      />
      <path
        className="st3"
        d="M37.9,8.2C36.5,6.8,34,6.6,34,6.6s-13.9-1.4-27.6,0c0,0-3.1,0.1-4.4,1.8c-0.9,1.1-1.6,2.4-1.7,5.3
	C-0.2,21-0.1,29.8,2,31.7s4.4,2.1,17.9,2.1s16-0.2,17.9-2.1c1.9-1.9,2.1-7,2.1-12.6C39.9,13.5,39.9,10.4,37.9,8.2z M16,25.9V14
	l10.4,6L16,25.9z"
      />
      <path
        className="st3"
        d="M20,0C9,0,0,9,0,20s9,20,20,20s20-9,20-20S31,0,20,0z M30.1,17.1c-4.1-0.3-5.4-2.3-5.4-2.3s0,4.9,0,7
	s0.7,5-2.3,7.9c-3,2.8-7.3,2.5-10.8,0s-3.3-8.5-0.7-11.3s7.4-2.3,7.4-2.3v4.3c-3.3-0.8-5,1.1-5,3.3s0.9,3.8,3.8,3.8
	c1.6,0,2.4-0.9,2.8-1.8c0.3-0.6,0.4-1.3,0.4-2V8.1h4.5c1.4,5,6.2,5,6.2,5L30.1,17.1z"
      />
    </svg>
  );
};

Facebook.defaultProps = {
  width: 100,
};

export default Facebook;
